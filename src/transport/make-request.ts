/** Darwin transport customization. Compiled by scripts/build-transport.mjs.
 * Keep abort propagation through response-body consumption, without attaching
 * one persistent listener to the caller's signal on every bounded read. */
let cacheNoStoreSupported: boolean | undefined;

export function isCacheNoStoreSupported(): boolean {
  if (cacheNoStoreSupported !== undefined) return cacheNoStoreSupported;
  try {
    new Request('http://localhost', { cache: 'no-store' });
    cacheNoStoreSupported = true;
  } catch {
    cacheNoStoreSupported = false;
  }
  return cacheNoStoreSupported;
}

export function resetCacheNoStoreSupported(): void {
  cacheNoStoreSupported = undefined;
}

export async function makeRequest(
  fetchFn: (url: string, init: RequestInit) => Promise<Response>,
  url: string,
  method: string,
  headers: Headers | Record<string, string>,
  requestBody: BodyInit | undefined,
  timeoutMs?: number,
  abortSignal?: AbortSignal,
  withCredentials?: boolean,
  duplex?: 'half',
  disableCache?: boolean,
): Promise<Response> {
  const deadline = new AbortController();
  // Native composition uses weak dependencies, not persistent caller listeners.
  // Node >=20.3 and modern browsers support it; package engines declare this.
  const signal = abortSignal ? AbortSignal.any([abortSignal, deadline.signal]) : deadline.signal;
  signal.throwIfAborted();
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    if (timeoutMs !== undefined && timeoutMs !== Infinity) {
      if (!Number.isFinite(timeoutMs) || timeoutMs < 0 || timeoutMs > 2 ** 31 - 1) {
        throw new RangeError('Request timeout must be a nonnegative finite duration or Infinity.');
      }
      // AbortError retains the generated client's typed timeout classification.
      timer = setTimeout(() => deadline.abort(new DOMException('Request timed out', 'AbortError')), timeoutMs);
    }
    const init: RequestInit & { duplex?: 'half' } = {
      method,
      headers,
      body: requestBody,
      signal,
      credentials: withCredentials ? 'include' : undefined,
      duplex,
      ...(disableCache && isCacheNoStoreSupported() ? { cache: 'no-store' as const } : {}),
    };
    return await fetchFn(url, init);
  } finally {
    if (timer !== undefined) clearTimeout(timer);
  }
}
