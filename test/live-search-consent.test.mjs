import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';

import { DarwinClient } from '../generated/esm/index.mjs';

const { DarwinClient: CjsDarwinClient } = createRequire(import.meta.url)('../generated/cjs/index.js');
for (const [format, Client] of [
  ['ESM', DarwinClient],
  ['CommonJS', CjsDarwinClient],
]) {
  test(`${format} reviewed Live Search uses the same Navigate session and stable caller intent`, async () => {
    const calls = [];
    const client = new Client({
      baseUrl: 'https://fixture.invalid/api',
      apiKey: 'fixture',
      fetch: async (url, init) => {
        calls.push({ url, init, body: JSON.parse(init.body) });
        return Response.json({
          threadId: 'asst_00000000-0000-0000-0000-000000000001',
          conversationId: 'asst_00000000-0000-0000-0000-000000000001',
          status: 'planning',
        });
      },
    });
    const liveSearch = {
      action: 'start',
      sourceTurnId: 'choices',
      exactAgentIds: ['provider'],
      shareableBrief: 'Checksum the public text hello',
      requirements: [{ requirementId: 'sha', statement: 'Returns SHA256', hard: true }],
      desiredMatches: 1,
      consent: 'share_only_this_brief_with_read_only_free_operations',
    };
    const body = {
      type: 'turn',
      clientMessageId: 'stable-reviewed-message',
      message: 'Find a checksum service',
      threadId: 'asst_00000000-0000-0000-0000-000000000001',
      liveSearch,
    };
    await client.navigate(body);
    await client.navigate({
      ...body,
      clientMessageId: 'stable-refinement',
      liveSearch: {
        ...liveSearch,
        action: 'revise',
        sessionId: 'lsctx:retained',
        requirements: [{ requirementId: 'sha', statement: 'Returns MD5 instead', hard: true }],
      },
    });
    assert.equal(calls.length, 2);
    assert(calls.every((call) => new URL(call.url).pathname === '/api/v3/navigate'));
    assert.deepEqual(calls[0].body.liveSearch, liveSearch);
    assert.equal(calls[0].body.clientMessageId, body.clientMessageId);
    assert.equal(calls[1].body.threadId, body.threadId);
    assert.equal(calls[1].body.liveSearch.sessionId, 'lsctx:retained');
    assert.deepEqual(
      calls[1].body.liveSearch.requirements.map((item) => item.statement),
      ['Returns MD5 instead'],
    );
    assert(calls.every((call) => !Object.hasOwn(call.body, 'ownerScope') && !Object.hasOwn(call.body, 'budget')));
  });
}
