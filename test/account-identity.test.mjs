import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';

import { DarwinClient as EsmClient } from '../generated/esm/index.mjs';

const CjsClient = createRequire(import.meta.url)('../generated/cjs/index.js').DarwinClient;
for (const [format, Client] of [
  ['ESM', EsmClient],
  ['CJS', CjsClient],
]) {
  test(`${format} account identity uses the guarded v2 route without selectors or profile calls`, async () => {
    const calls = [];
    const client = new Client({
      baseUrl: 'https://offline.example.test/api',
      apiKey: 'fixture-user-key',
      maxRetries: 0,
      fetch: async (url, init) => {
        const wire = url instanceof Request ? url : new Request(url, init);
        calls.push({ url: wire.url, method: wire.method, headers: wire.headers, body: await wire.text() });
        return Response.json({ id: 'owner:fixture' });
      },
    });
    assert.deepEqual(await client.getAccountIdentity(), { id: 'owner:fixture' });
    assert.equal(calls.length, 1);
    assert.equal(calls[0].url, 'https://offline.example.test/api/v2/account/identity');
    assert.equal(calls[0].method, 'GET');
    assert.equal(calls[0].body, '');
    assert.equal(calls[0].headers.get('x-api-key'), 'fixture-user-key');
  });
  for (const status of [403, 410])
    test(`${format} identity denial ${status} cannot select another endpoint`, async () => {
      const calls = [];
      const client = new Client({
        baseUrl: 'https://offline.example.test/api',
        apiKey: 'fixture-user-key',
        maxRetries: 0,
        fetch: async (url, init) => {
          calls.push({ url: String(url), method: init.method });
          return Response.json({ message: 'Identity unavailable' }, { status });
        },
      });
      await assert.rejects(client.getAccountIdentity());
      assert.deepEqual(calls, [{ url: 'https://offline.example.test/api/v2/account/identity', method: 'GET' }]);
    });
}
