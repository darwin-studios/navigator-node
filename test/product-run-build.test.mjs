import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';

import { DarwinClient as EsmClient } from '../generated/esm/index.mjs';

const CjsClient = createRequire(import.meta.url)('../generated/cjs/index.js').DarwinClient;

for (const [format, Client] of [
  ['ESM', EsmClient],
  ['CJS', CjsClient],
]) {
  test(`${format} Run, Build and Manage use the canonical routes and keep credentials out of bodies`, async () => {
    const calls = [];
    const client = new Client({
      baseUrl: 'https://offline.example.test/api',
      apiKey: 'fixture-key',
      maxRetries: 0,
      fetch: async (url, init) => {
        const wire = url instanceof Request ? url : new Request(url, init);
        calls.push({ path: new URL(wire.url).pathname, headers: wire.headers, body: JSON.parse(await wire.text()) });
        return Response.json({ status: 'accepted' });
      },
    });
    const direct = { targets: [{ agentId: 'research' }, { agentId: 'analysis' }], message: 'Review the brief' };
    const coordinated = { type: 'turn', clientMessageId: 'task-001', message: 'Coordinate research' };
    const release = { action: 'prepare_release', draftId: 'draft_1', revision: 1 };
    await client.run({ body: direct, 'Idempotency-Key': 'direct-key' });
    await client.run({ body: coordinated, 'Idempotency-Key': 'task-key', 'X-Assist-Token': 'private-proof' });
    await client.build({ body: release, 'Idempotency-Key': 'release-key' });
    await client.manage({ body: { action: 'list_agents' }, 'Idempotency-Key': 'manage-key' });
    assert.deepEqual(
      calls.map((call) => call.path),
      ['/api/v3/run', '/api/v3/run', '/api/v3/build', '/api/v3/manage'],
    );
    assert.deepEqual(
      calls.map((call) => call.body),
      [direct, coordinated, release, { action: 'list_agents' }],
    );
    assert.equal(calls[1].headers.get('x-assist-token'), 'private-proof');
    assert.deepEqual(
      calls.map((call) => call.headers.get('idempotency-key')),
      ['direct-key', 'task-key', 'release-key', 'manage-key'],
    );
    for (const call of calls) assert.equal(call.headers.get('x-api-key'), 'fixture-key');
  });
}
