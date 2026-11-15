import assert from 'node:assert/strict';
import { getEventListeners, once } from 'node:events';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import test from 'node:test';

import { makeRequest as makeEsmRequest } from '../generated/esm/core/fetcher/makeRequest.mjs';

const { makeRequest: makeCjsRequest } = createRequire(import.meta.url)('../generated/cjs/core/fetcher/makeRequest.js');

for (const [format, makeRequest] of [
  ['ESM', makeEsmRequest],
  ['CommonJS', makeCjsRequest],
]) {
  test(`${format} rejects an already aborted request without dispatch`, async () => {
    const abort = new AbortController();
    abort.abort();
    let dispatched = false;
    await assert.rejects(
      makeRequest(
        async () => {
          dispatched = true;
          return new Response('{}');
        },
        'https://example.test',
        'GET',
        {},
        undefined,
        60000,
        abort.signal,
      ),
      { name: 'AbortError' },
    );
    assert.equal(dispatched, false);
  });

  test(`${format} deadline aborts a real HTTP request and caller abort reaches the response body`, async () => {
    const server = createServer((req, res) => {
      if (req.url === '/waiting') return;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write('{'); // Keep the body open after headers have arrived.
    });
    server.listen(0, '127.0.0.1');
    await once(server, 'listening');
    const url = `http://127.0.0.1:${server.address().port}`;
    try {
      await assert.rejects(makeRequest(fetch, `${url}/waiting`, 'GET', {}, undefined, 30), { name: 'AbortError' });
      const abort = new AbortController();
      const response = await makeRequest(fetch, `${url}/body`, 'GET', {}, undefined, 1000, abort.signal);
      const reading = response.text();
      const rejected = assert.rejects(reading, { name: 'AbortError' });
      abort.abort();
      await rejected;
    } finally {
      server.closeAllConnections();
      await new Promise((resolve) => server.close(resolve));
    }
  });

  test(`${format} validates deadlines without silently overflowing timers`, async () => {
    let dispatched = 0;
    const fetch = async () => {
      dispatched++;
      return new Response('{}');
    };
    for (const timeout of [-1, NaN, 2 ** 31]) {
      await assert.rejects(makeRequest(fetch, 'https://example.test', 'GET', {}, undefined, timeout), RangeError);
    }
    assert.equal(dispatched, 0);
    for (const timeout of [undefined, Infinity]) {
      assert.equal((await makeRequest(fetch, 'https://example.test', 'GET', {}, undefined, timeout)).status, 200);
    }
  });

  for (const outcome of ['success', 'network failure', 'abort']) {
    test(`${format} clears deadline and abort listeners after ${outcome}`, async (context) => {
      const timers = new Set();
      const originalSet = globalThis.setTimeout;
      const originalClear = globalThis.clearTimeout;
      context.mock.method(globalThis, 'setTimeout', (...args) => {
        const timer = originalSet(...args);
        timers.add(timer);
        return timer;
      });
      context.mock.method(globalThis, 'clearTimeout', (timer) => {
        timers.delete(timer);
        originalClear(timer);
      });
      const abort = new AbortController();
      const error = new Error('fixture failure');
      const fetch = async (_url, init) => {
        if (outcome === 'network failure') throw error;
        if (outcome === 'abort') {
          const result = new Promise((_resolve, reject) => {
            init.signal.addEventListener('abort', () => reject(error), { once: true });
          });
          abort.abort();
          return result;
        }
        return new Response('{}');
      };
      try {
        const result = makeRequest(fetch, 'https://example.test', 'GET', {}, undefined, 60000, abort.signal);
        if (outcome === 'success') assert.equal((await result).status, 200);
        else await assert.rejects(result, (actual) => actual === error);
        assert.equal(timers.size, 0, 'no deadline timer may survive the request');
        assert.equal(
          getEventListeners(abort.signal, 'abort').length,
          0,
          'caller signal must not retain completed reads',
        );
      } finally {
        // Clean failed-regression fixtures without masking the assertions above.
        for (const timer of timers) originalClear(timer);
        context.mock.restoreAll();
      }
    });
  }
}
