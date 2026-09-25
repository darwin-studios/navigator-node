import assert from 'node:assert/strict';
import test from 'node:test';

import { DarwinClient } from '../generated/esm/index.mjs';

test('exposes and calls the eleven canonical MCP-parity operations', async () => {
  const calls = [];
  const actionResponse = (type) => ({
    type,
    actionId: 'action_123',
    targetAiId: 'ai_123',
    capabilityId: 'cap_123',
    capabilityRevision: 1,
    revision: 1,
    lifecycle: type === 'end' ? 'ended' : 'active',
    outcome: type === 'end' ? 'completed' : null,
    status: type === 'end' ? 'completed' : 'running',
    result: {},
    actionRequired: null,
    availableActions: type === 'end' ? ['status'] : ['status', 'update', 'end'],
  });
  const client = new DarwinClient({
    apiKey: 'darwin_test',
    maxRetries: 0,
    fetch: async (input, init) => {
      calls.push({
        url: String(input),
        method: init?.method,
        apiKey: new Headers(init?.headers).get('x-api-key'),
        body: init?.body ? JSON.parse(String(init.body)) : undefined,
      });
      const url = String(input);
      let body;
      if (url.endsWith('/search')) body = { results: [], nextCursor: null };
      else if (url.endsWith('/account/searches')) body = { searches: [], retentionDays: 90, nextCursor: null };
      else if (url.includes('/account')) {
        body = {
          account: {
            name: 'Test User',
            avatarUrl: null,
            timeZone: { id: 'UTC', source: 'default', confirmed: false, confirmedAt: null, pending: null },
            createdAt: '2026-09-24T00:00:00.000Z',
            updatedAt: '2026-09-24T00:00:00.000Z',
          },
          ais: [],
          activeAi: null,
        };
      } else if (url.endsWith('/actions') && init?.method === 'GET') {
        body = { type: 'list', status: 'completed', actions: [], nextCursor: null };
      } else if (url.endsWith('/authenticate')) {
        body = {
          targetAiId: 'ai_123',
          actionId: null,
          state: 'connected',
          connectionId: 'connection_123',
        };
      } else if (url.endsWith('/pay')) body = actionResponse('pay');
      else if (url.endsWith('/approve')) body = actionResponse('approve');
      else if (url.endsWith('/end')) body = actionResponse('end');
      else if (url.endsWith('/actions')) body = actionResponse('start');
      else if (init?.method === 'PATCH') body = actionResponse('update');
      else body = actionResponse('status');
      return new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': 'application/json' } });
    },
  });

  for (const method of [
    'search',
    'getAccount',
    'listSearchHistory',
    'startAction',
    'getAction',
    'listActions',
    'continueAction',
    'authenticateSession',
    'payAction',
    'approveAction',
    'endAction',
  ]) {
    assert.equal(typeof client[method], 'function');
  }
  assert.equal('host' in client, false);
  assert.equal('account' in client, false);

  await client.search({ query: 'emergency plumber' });
  await client.getAccount();
  await client.listSearchHistory();
  await client.startAction({ capabilityId: 'cap_123', capabilityRevision: 1, requestId: 'start-1' });
  await client.getAction({ actionId: 'action_123' });
  const actions = await client.listActions();
  await client.continueAction({
    actionId: 'action_123',
    body: { message: 'Continue', requestId: 'continue-1' },
  });
  await client.authenticateSession({
    aiId: 'ai_123',
    methodId: 'oauth_github',
    source: { kind: 'one_time' },
    saveToDarwinVault: false,
    requestId: 'authenticate-1',
  });
  await client.payAction({
    actionId: 'action_123',
    interactionId: 'interaction_pay_01J9Y8M4Z7B9R6K2X3C5V1N0PQ',
    expectedRevision: 1,
    route: 'darwin_pay',
    source: { kind: 'one_time' },
    save: false,
    requestId: 'pay-1',
  });
  await client.approveAction({
    actionId: 'action_123',
    approvalId: 'approval_123',
    decision: 'approve',
    expectedRevision: '2026-09-17T16:00:00.000Z',
    reviewedPayloadDigest: `sha256:${'a'.repeat(64)}`,
    requestId: 'approve-1',
  });
  await client.endAction({ actionId: 'action_123', expectedRevision: 1, intent: 'finish', requestId: 'end-1' });

  assert.equal(actions.type, 'list');
  assert.deepEqual(actions.actions, []);

  assert.deepEqual(
    calls.map(({ url, method }) => [url, method]),
    [
      ['https://api.darwin.so/api/v2/search', 'POST'],
      ['https://api.darwin.so/api/v2/account', 'GET'],
      ['https://api.darwin.so/api/v2/account/searches', 'GET'],
      ['https://api.darwin.so/api/v2/actions', 'POST'],
      ['https://api.darwin.so/api/v2/actions/action_123', 'GET'],
      ['https://api.darwin.so/api/v2/actions', 'GET'],
      ['https://api.darwin.so/api/v2/actions/action_123', 'PATCH'],
      ['https://api.darwin.so/api/v2/ais/ai_123/authenticate', 'POST'],
      ['https://api.darwin.so/api/v2/actions/action_123/pay', 'POST'],
      ['https://api.darwin.so/api/v2/actions/action_123/approve', 'POST'],
      ['https://api.darwin.so/api/v2/actions/action_123/end', 'POST'],
    ],
  );
  assert.equal(calls[0].apiKey, null, 'public Search must not require an API key');
  assert(calls.slice(1).every(({ apiKey }) => apiKey === 'darwin_test'));
});
