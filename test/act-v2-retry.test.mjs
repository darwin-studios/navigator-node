import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';

import { DarwinClient as EsmClient } from '../generated/esm/index.mjs';

const CjsClient = createRequire(import.meta.url)('../generated/cjs/index.js').DarwinClient;

const writes = {
  startThread: { targetAgent: 'target_fixture', messageType: 'message', messageContent: 'Original inquiry' },
  sendMessage: { thread: 'thread_fixture', body: { messageType: 'message', messageContent: 'Original continuation' } },
  archiveThread: { thread: 'thread_fixture' },
  authenticate: { request: 'authentication_fixture' },
  pay: { request: 'payment_fixture' },
};
for (const [format, Client] of [
  ['ESM', EsmClient],
  ['CJS', CjsClient],
]) {
  for (const [method, original] of Object.entries(writes)) {
    for (const identity of ['omitted', 'body key', 'header and retry override']) {
      test(`${format} ${method} 500 with ${identity} has one HTTP attempt`, async () => {
        const calls = [];
        const keyInBody = identity === 'body key' && method !== 'archiveThread';
        const request = structuredClone(original);
        if (keyInBody) (method === 'sendMessage' ? request.body : request).idempotencyKey = 'original-key';
        const headerKey =
          identity === 'header and retry override' || (identity === 'body key' && method === 'archiveThread');
        const options = {
          maxRetries: 5,
          headers: { 'X-Fixture': 'kept', ...(headerKey ? { 'Idempotency-Key': 'original-key' } : {}) },
        };
        const before = structuredClone({ request, options });
        const client = new Client({
          baseUrl: 'https://offline.example.test/api',
          apiKey: 'fixture',
          maxRetries: 2,
          fetch: async (url, init) => {
            const wire = url instanceof Request ? url : new Request(url, init);
            calls.push({ method: wire.method, body: JSON.parse(await wire.text()), headers: wire.headers });
            return Response.json({ code: 'UNKNOWN_AFTER_ACCEPTANCE' }, { status: 500 });
          },
        });
        await assert.rejects(client[method](request, options));
        assert.equal(calls.length, 1, 'accepted or uncertain writes cannot become replacement HTTP calls');
        assert.equal(calls[0].method, 'POST');
        assert.equal(calls[0].headers.get('X-Fixture'), 'kept');
        assert.equal(calls[0].headers.get('Idempotency-Key'), headerKey ? 'original-key' : null);
        const expectedBody = { ...(method === 'sendMessage' ? request.body : request) };
        delete expectedBody.thread; // Canonical path parameter, never request authority.
        assert.deepEqual(calls[0].body, expectedBody);
        assert.deepEqual({ request, options }, before, 'caller key and retry options remain unchanged');
      });
    }
  }
  test(`${format} V2 thread GET retains its configured transient retry`, async () => {
    let calls = 0;
    const snapshot = {
      thread: 'thread_fixture',
      messages: [],
      actions: [],
      requests: [],
      errors: [],
      cursor: 'thread_fixture:0',
      hasMore: false,
      archived: false,
      needsAttention: false,
    };
    const client = new Client({
      baseUrl: 'https://offline.example.test/api',
      maxRetries: 1,
      fetch: async (_url, init) => {
        assert.equal(init.method, 'GET');
        calls++;
        return Response.json(calls === 1 ? { code: 'TRANSIENT' } : snapshot, { status: calls === 1 ? 503 : 200 });
      },
    });
    assert.deepEqual(await client.getThread({ thread: 'thread_fixture' }), snapshot);
    assert.equal(calls, 2);
  });
}
