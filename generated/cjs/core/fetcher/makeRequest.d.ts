// Generated from apps/navigator/api/sdk/src/transport/make-request.ts. Do not edit.
export declare function isCacheNoStoreSupported(): boolean;
export declare function resetCacheNoStoreSupported(): void;
export declare function makeRequest(
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
): Promise<Response>;
