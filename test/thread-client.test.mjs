import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createServer } from 'node:http';
import test from 'node:test';

import { DarwinClient, DarwinTimeoutError } from '../generated/esm/index.mjs';

async function fixture(run, respond = () => ({ body: {} })) {
  const calls = [];
  const server = createServer(async (req, res) => {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const bytes = Buffer.concat(chunks).toString();
    const call = {
      path: req.url,
      method: req.method,
      headers: req.headers,
      body: bytes ? JSON.parse(bytes) : undefined,
    };
    calls.push(call);
    const result = await respond(call, calls.length);
    if (res.destroyed) return;
    res.writeHead(result.status ?? 200, { 'Content-Type': 'application/json', ...result.headers });
    res.end(JSON.stringify(result.body));
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const baseUrl = `http://127.0.0.1:${server.address().port}/api`;
  try {
    await run(baseUrl, calls);
  } finally {
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
  }
}

test('explicit thread actions use minimal turns and unified reads keep credentials in headers', async () => {
  await fixture(async (baseUrl, calls) => {
    const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
    for (const [method, message] of [
      ['liveSearch', 'Check current availability'],
      ['route', 'Find a travel agent'],
      ['execute', 'Coordinate this task'],
    ]) {
      await client[method]({ message, clientMessageId: `sdk-${method}` });
    }
    await client.readThread({ threadId: 'asst_fixture', before: 'older', 'X-Assist-Token': 'fixture-private-token' });
    assert.deepEqual(
      calls.map((call) => [call.method, call.path]),
      [
        ['POST', '/api/v3/live-search'],
        ['POST', '/api/v3/route'],
        ['POST', '/api/v3/execute'],
        ['GET', '/api/v3/threads/asst_fixture?before=older'],
      ],
    );
    for (const call of calls.slice(0, 3)) {
      assert.deepEqual(Object.keys(call.body).sort(), ['clientMessageId', 'message']);
      assert.equal(call.headers['x-api-key'], 'fixture-key');
    }
    assert.equal(calls[3].headers['x-assist-token'], 'fixture-private-token');
    assert.equal(calls[3].body, undefined);
  });
});

test('Navigate supports guest turns, private recovery and mode-changing follow-ups', async () => {
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, maxRetries: 0 });
      const first = { type: 'turn', clientMessageId: 'sdk-first', mode: 'chat', message: 'Explain agent discovery.' };
      const accepted = await client.navigate(first);
      const headers = { 'X-Assist-Token': accepted.conversationToken };
      await client.getNavigateRequest({ conversationId: accepted.conversationId, before: 'aturn_older', ...headers });
      const followup = {
        ...first,
        conversationId: accepted.conversationId,
        clientMessageId: 'sdk-next',
        mode: 'search',
        message: 'Find spreadsheet agents.',
      };
      await client.navigate({ ...followup, ...headers });
      assert.deepEqual(
        calls.map((call) => [call.method, call.path]),
        [
          ['POST', '/api/v3/navigate'],
          ['GET', '/api/v3/navigate/conversations/asst_fixture?before=aturn_older'],
          ['POST', '/api/v3/navigate'],
        ],
      );
      assert.deepEqual(calls[0].body, first);
      assert.deepEqual(calls[2].body, followup);
      assert.equal(calls[0].headers.authorization, undefined);
      assert.equal(calls[0].headers['x-api-key'], undefined);
      assert.equal(calls[1].headers['x-assist-token'], 'fixture-private-token');
      assert.equal(calls[2].headers['x-assist-token'], 'fixture-private-token');
    },
    () => ({
      body: {
        conversationId: 'asst_fixture',
        conversationToken: 'fixture-private-token',
        status: 'planning',
        goal: 'Explain agent discovery.',
        messages: [],
        revisions: [],
        previousRuns: [],
        latestRevisionId: null,
        createdAt: '2026-10-27T00:00:00Z',
        updatedAt: '2026-10-27T00:00:00Z',
        conversation: { turns: [], nextBefore: null, eventCursor: '0' },
      },
    }),
  );
});

test('conversational Search uses v3 while legacy Search stays on v2', async () => {
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      const response = await client.createSearch({ query: 'Find a tax agent', maxResults: 3 });
      assert.equal(response.response.noMatchReason, 'No eligible agent.');
      assert.equal(calls[0].path, '/api/v3/search');
      assert.deepEqual(calls[0].body, { query: 'Find a tax agent', maxResults: 3 });
    },
    () => ({
      body: {
        searchId: 'srch_11111111-1111-4111-8111-111111111111',
        responseId: 'sresp_22222222-2222-4222-8222-222222222222',
        previousResponseId: null,
        contractVersion: 'search-v3.0',
        status: 'no_match',
        response: { agents: [], plan: null, question: null, noMatchReason: 'No eligible agent.' },
      },
    }),
  );
});

test('account API-key creation preserves the owner key type, name and Act authentication scopes', async () => {
  await fixture(async (baseUrl, calls) => {
    const client = new DarwinClient({ baseUrl, maxRetries: 0 });
    const body = {
      kind: 'user',
      name: 'My account integration',
      scopes: ['directory:read', 'agent:read', 'agent:write', 'connections:read', 'connections:write'],
    };
    await client.createApiKey(body);
    assert.equal(calls[0].path, '/api/v2/account/api-keys');
    assert.deepEqual(calls[0].body, body);
    assert.equal(Object.hasOwn(calls[0].body, 'applicationId'), false);
  });
});

test('v3 SDK carries a connection prompt through Search history and starts Act from searchId', async () => {
  const searchId = 'srch_11111111-1111-4111-8111-111111111111';
  const responseId = 'sresp_22222222-2222-4222-8222-222222222222';
  const answer = {
    searchId,
    responseId,
    previousResponseId: null,
    contractVersion: 'search-v3.0',
    status: 'completed',
    response: {
      agents: [
        {
          agentId: 'agent_1',
          agentSlug: 'tax-agent',
          operationId: 'cap_1',
          operationRevision: 2,
          rank: 1,
          selected: true,
          name: 'Tax agent',
          description: 'Prepares taxes',
          readiness: 'ready',
          canStartThread: true,
          reasons: ['Indexed capability: Tax agent'],
          uncertainties: [],
          providerCheck: 'not_attempted',
          connectionPrompt: 'Use cap_1 via MCP after verifying its route.',
        },
      ],
      plan: null,
      question: null,
      noMatchReason: null,
    },
  };
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      const found = await client.createSearch({ query: 'Find a tax agent' });
      assert.match(found.response.agents[0].connectionPrompt, /cap_1/);
      const history = await client.getSearch({ searchId });
      assert.equal(history.responses[0].responseId, responseId);
      const started = await client.createOrContinueAct({ body: { searchId, message: 'Please contact this agent.' } });
      assert.equal(started.type, 'request');
      assert.equal(started.threads[0].threadId, 'thread_1');
      assert.deepEqual(
        calls.map((call) => [call.method, call.path]),
        [
          ['POST', '/api/v3/search'],
          ['GET', `/api/v3/search/${searchId}`],
          ['POST', '/api/v3/act'],
        ],
      );
      assert.deepEqual(calls[2].body, { searchId, message: 'Please contact this agent.' });
    },
    (call) => ({
      body:
        call.path === '/api/v3/search'
          ? answer
          : call.path.startsWith('/api/v3/search/')
            ? { searchId, responses: [answer], nextCursor: null }
            : {
                type: 'request',
                actRequestId: 'actreq_1',
                searchId,
                actingAgentId: 'buyer_1',
                status: 'completed',
                createdAt: '2026-10-07T00:00:00Z',
                threads: [{ agentId: 'agent_1', operationId: 'cap_1', threadId: 'thread_1', messageId: 'msg_1' }],
              },
    }),
  );
});

test('all seven public thread methods serialize the real HTTP contract without legacy Action methods', async () => {
  await fixture(async (baseUrl, calls) => {
    const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
    for (const old of [
      'startAction',
      'getAction',
      'continueAction',
      'approveAction',
      'endAction',
      'getAuthenticationStatus',
    ])
      assert.equal(old in client, false);
    await client.startThread({
      targetAgent: 'target',
      messageType: 'message',
      messageContent: 'Venue details?',
      idempotencyKey: 'start-1',
    });
    await client.sendMessage({
      thread: 'thread-1',
      body: { messageType: 'message', messageContent: 'Which dates?', idempotencyKey: 'message-1' },
    });
    await client.getThread({ thread: 'thread-1', agent: 'acting', cursor: 'thread-1:0', wait: true });
    await client.listThreads({ agent: 'acting', targetAgent: 'target', archived: false, needsAttention: true });
    await client.archiveThread({ thread: 'thread-1', agent: 'acting' });
    await client.authenticate({ request: 'auth-request-1', idempotencyKey: 'auth-1' });
    await client.pay({
      request: 'invoice-1',
      idempotencyKey: 'pay-1',
    });
    assert.equal('archiveThread' in client, true);
    assert.deepEqual(calls[0].body, {
      targetAgent: 'target',
      messageType: 'message',
      messageContent: 'Venue details?',
      idempotencyKey: 'start-1',
    });
    assert.deepEqual(calls[5].body, { request: 'auth-request-1', idempotencyKey: 'auth-1' });
    assert.deepEqual(calls[6].body, { request: 'invoice-1', idempotencyKey: 'pay-1' });
    assert.deepEqual(
      calls.map(({ method, path }) => [method, path.split('?')[0]]),
      [
        ['POST', '/api/v2/act/threads'],
        ['POST', '/api/v2/act/threads/thread-1/messages'],
        ['GET', '/api/v2/act/threads/thread-1'],
        ['GET', '/api/v2/act/threads'],
        ['POST', '/api/v2/act/threads/thread-1/archive'],
        ['POST', '/api/v2/act/authentications'],
        ['POST', '/api/v2/act/payments'],
      ],
    );
    assert.deepEqual(calls[1].body, {
      messageType: 'message',
      messageContent: 'Which dates?',
      idempotencyKey: 'message-1',
    });
    assert.equal(new URL(calls[2].path, baseUrl).searchParams.get('wait'), 'true');
    assert.equal(new URL(calls[2].path, baseUrl).searchParams.get('cursor'), 'thread-1:0');
    assert.equal(new URL(calls[3].path, baseUrl).searchParams.get('archived'), 'false');
    assert.deepEqual(calls[4].body, { agent: 'acting' });
    assert(calls.every(({ headers }) => headers['x-api-key'] === 'fixture-key'));
  });
});

test('unsigned Search and supplied API key or OAuth require no placeholder credentials', async () => {
  await fixture(async (baseUrl, calls) => {
    await new DarwinClient({ baseUrl }).search({
      query: 'venue',
      category: 'events',
      objective: 'seat 200 guests outdoors',
      numResults: 5,
    });
    await new DarwinClient({ baseUrl, apiKey: 'fixture-key' }).search({ query: 'venue' });
    await new DarwinClient({ baseUrl, headers: { Authorization: 'Bearer fixture-oauth' } }).getThread({
      agent: 'acting',
      thread: 'thread-1',
    });
    assert.equal(calls[0].headers['x-api-key'], undefined);
    assert.equal(calls[0].headers.authorization, undefined);
    assert.deepEqual(calls[0].body, {
      query: 'venue',
      category: 'events',
      objective: 'seat 200 guests outdoors',
      numResults: 5,
    });
    assert.equal(calls[1].headers['x-api-key'], 'fixture-key');
    assert.equal(calls[2].headers.authorization, 'Bearer fixture-oauth');
    assert(calls.every(({ path, body }) => !JSON.stringify({ path, body }).includes('fixture-')));
  });
});

test('account-authorized Act omits the legacy acting AI parameter', async () => {
  await fixture(async (baseUrl, calls) => {
    const client = new DarwinClient({ baseUrl, headers: { Authorization: 'Bearer fixture-oauth' } });
    await client.startThread({
      targetAgent: 'target',
      messageType: 'message',
      messageContent: 'Hello',
      idempotencyKey: 'account-start',
    });
    await client.getThread({ thread: 'thread-1' });
    assert.equal(calls[0].body.agent, undefined);
    assert.equal(new URL(calls[1].path, baseUrl).searchParams.has('agent'), false);
    assert(calls.every(({ headers }) => headers.authorization === 'Bearer fixture-oauth'));
  });
});

test('Account vault methods preserve cursors and metadata without moving management into Act', async () => {
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      const first = await client.listTargetAccounts({
        aiId: 'acting',
        targetAiId: 'target',
        limit: 1,
        includeUnavailable: false,
      });
      assert.deepEqual(first, { accounts: [], nextCursor: 'grant-1' });
      assert.equal(new URL(calls[0].path, baseUrl).searchParams.get('includeUnavailable'), 'false');
      const page = await client.listTargetAccounts({
        aiId: 'acting',
        targetAiId: 'target',
        includeUnavailable: true,
        limit: 1,
        afterCursor: first.nextCursor,
      });
      assert.equal(page.accounts[0].retention, 'temporary');
      assert.equal(page.accounts[0].status, 'authentication_required');
      assert.equal(page.accounts[0].retentionConsentedAt, '2026-09-01T00:00:00Z');
      assert.equal(page.accounts[0].canRefresh, false);
      await client.setTargetAccountDefault({ aiId: 'acting', targetAiId: 'target', connectionId: 'account-1' });
      await client.revokeTargetAccount({ aiId: 'acting', targetAiId: 'target', connectionId: 'account-1' });
      const query = new URL(calls[1].path, baseUrl).searchParams;
      assert.equal(query.get('includeUnavailable'), 'true');
      assert.equal(query.get('afterCursor'), 'grant-1');
      assert.equal(query.get('limit'), '1');
      assert.deepEqual(
        calls.map(({ method, path }) => [method, path.split('?')[0]]),
        [
          ['GET', '/api/v2/account/ais/acting/connections/targets/target'],
          ['GET', '/api/v2/account/ais/acting/connections/targets/target'],
          ['POST', '/api/v2/account/ais/acting/connections/targets/target/account-1/default'],
          ['DELETE', '/api/v2/account/ais/acting/connections/targets/target/account-1'],
        ],
      );
      assert(calls.every(({ headers }) => headers['x-api-key'] === 'fixture-key'));
      assert.deepEqual(calls[2].body ?? {}, {});
    },
    (_call, count) => ({
      body:
        count === 1
          ? { accounts: [], nextCursor: 'grant-1' }
          : count === 2
            ? {
                accounts: [
                  {
                    accountId: 'account-1',
                    grantId: 'grant-2',
                    targetAiId: 'target',
                    label: 'Test account',
                    scopes: ['read'],
                    retention: 'temporary',
                    status: 'authentication_required',
                    retentionConsentedAt: '2026-09-01T00:00:00Z',
                    isDefault: true,
                    expiresAt: null,
                    credentialExpiresAt: null,
                    canRefresh: false,
                  },
                ],
                nextCursor: null,
              }
            : count === 3
              ? { accountId: 'account-1', targetAiId: 'target', isDefault: true }
              : { accountId: 'account-1', targetAiId: 'target', revoked: true },
    }),
  );
});

test('auth credential management exposes safe metadata and an explicit revoke only', async () => {
  const credential = {
    credentialId: 'credential-1',
    provider: 'target-api',
    label: 'Work account',
    status: 'ACTIVE',
    expiresAt: null,
    createdAt: '2026-01-01T00:00:00Z',
    revision: '2026-01-01T00:00:00Z',
  };
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      assert.deepEqual(await client.listAuthCredentials({ aiId: 'acting' }), { credentials: [credential] });
      assert.deepEqual(await client.revokeAuthCredential({ aiId: 'acting', credentialId: 'credential-1' }), {
        disconnected: true,
        revocationPending: false,
      });
      assert.deepEqual(
        calls.map(({ method, path, body }) => [method, path, body]),
        [
          ['GET', '/api/v2/account/ais/acting/connections/auth-credentials', undefined],
          ['DELETE', '/api/v2/account/ais/acting/connections/auth-credentials/credential-1', undefined],
        ],
      );
      assert(calls.every(({ headers }) => headers['x-api-key'] === 'fixture-key'));
      assert.doesNotMatch(JSON.stringify(calls), /token|secret|password|authorization/i);
    },
    (_call, count) => ({
      body: count === 1 ? { credentials: [credential] } : { disconnected: true, revocationPending: false },
    }),
  );
});

test('account vault revocation sends OAuth and exact If-Match without an acting AI', async () => {
  const revokedMethod = {
    paymentMethodId: 'method-1',
    label: 'Saved card',
    method: 'card',
    status: 'revoked',
    isDefault: false,
    revision: 5,
    expiresAt: '2027-01-01T00:00:00Z',
  };
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, headers: { Authorization: 'Bearer fixture-oauth' }, maxRetries: 0 });
      assert.deepEqual(
        await client.revokeAccountAuthCredential({
          credentialId: 'credential-1',
          'If-Match': '"2026-01-01T00:00:00.000Z"',
        }),
        { disconnected: true, revocationPending: true },
      );
      assert.deepEqual(
        await client.revokeAccountPaymentMethod({ methodId: 'method-1', 'If-Match': '"4"' }),
        revokedMethod,
      );
      assert.deepEqual(
        calls.map(({ method, path, body, headers }) => [method, path, body, headers['if-match']]),
        [
          ['DELETE', '/api/v2/account/auth-credentials/credential-1', undefined, '"2026-01-01T00:00:00.000Z"'],
          ['DELETE', '/api/v2/account/payment-methods/method-1', undefined, '"4"'],
        ],
      );
      assert(calls.every(({ headers }) => headers.authorization === 'Bearer fixture-oauth'));
      assert(calls.every(({ headers }) => headers['x-api-key'] === undefined));
    },
    (_call, count) => ({
      body: count === 1 ? { disconnected: true, revocationPending: true } : revokedMethod,
    }),
  );
});

test('saved payment methods use the selected AI Account read without executing pay', async () => {
  const methods = [
    {
      paymentMethodId: 'method-1',
      label: 'Test method',
      method: 'card',
      status: 'active',
      isDefault: true,
      revision: 1,
      expiresAt: '2027-01-01T00:00:00Z',
    },
  ];
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      const first = await client.listPaymentMethods({ aiId: 'acting', limit: 1 });
      assert.deepEqual(first, { methods: [], nextCursor: 'method-0' });
      assert.deepEqual(await client.listPaymentMethods({ aiId: 'acting', limit: 1, afterCursor: first.nextCursor }), {
        methods,
        nextCursor: null,
      });
      assert.equal(calls.length, 2);
      assert.equal(calls[0].method, 'GET');
      assert.equal(calls[0].path, '/api/v2/account/ais/acting/payment-methods?limit=1');
      assert.equal(calls[1].path, '/api/v2/account/ais/acting/payment-methods?limit=1&afterCursor=method-0');
      assert.equal(calls[0].body, undefined);
    },
    (_call, count) => ({ body: count === 1 ? { methods: [], nextCursor: 'method-0' } : { methods, nextCursor: null } }),
  );
});

test('capacity rejection preserves error and retry timing without a success value', async () => {
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      await assert.rejects(client.getThread({ agent: 'acting', thread: 'thread-1' }), (error) => {
        assert.equal(error.statusCode, 429);
        assert.equal(error.body.error, 'act_reader_capacity_exceeded');
        assert.equal(error.body.retryAfterSeconds, 45);
        return true;
      });
      assert.equal(calls.length, 1);
    },
    () => ({
      status: 429,
      headers: { 'Retry-After': '45' },
      body: { error: 'act_reader_capacity_exceeded', message: 'Wait.', retryAfterSeconds: 45 },
    }),
  );
});

test('saved method default and revoke serialize revision-checked Account writes without charging', async () => {
  const saved = {
    paymentMethodId: 'method-1',
    label: 'Test method',
    method: 'card',
    status: 'active',
    isDefault: true,
    revision: 4,
    expiresAt: '2027-01-01T00:00:00Z',
  };
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      const selected = await client.setPaymentMethodDefault({
        aiId: 'acting',
        methodId: 'method-1',
        expectedRevision: 3,
      });
      assert.deepEqual(selected, saved);
      const revoked = await client.revokePaymentMethod({
        aiId: 'acting',
        methodId: 'method-1',
        expectedRevision: selected.revision,
      });
      assert.equal(revoked.status, 'revoked');
      assert.equal(revoked.isDefault, false);
      assert.equal(revoked.revision, 5);
      assert.deepEqual(
        calls.map(({ method, path, body }) => [method, path, body]),
        [
          ['POST', '/api/v2/account/ais/acting/payment-methods/method-1/default', { expectedRevision: 3 }],
          ['DELETE', '/api/v2/account/ais/acting/payment-methods/method-1', { expectedRevision: 4 }],
        ],
      );
      assert(calls.every(({ headers }) => headers['x-api-key'] === 'fixture-key'));
    },
    (_call, count) => ({ body: count === 1 ? saved : { ...saved, status: 'revoked', isDefault: false, revision: 5 } }),
  );
});

test('payment method conflicts remain errors and do not guess a revision or retry a mutation', async () => {
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      await assert.rejects(
        client.revokePaymentMethod({ aiId: 'acting', methodId: 'method-1', expectedRevision: 3 }),
        (error) => {
          assert.equal(error.statusCode, 409);
          assert.equal(error.body.code, 'PAYMENT_METHOD_REVISION_CONFLICT');
          return true;
        },
      );
      assert.equal(calls.length, 1);
      assert.deepEqual(calls[0].body, { expectedRevision: 3 });
    },
    () => ({ status: 409, body: { code: 'PAYMENT_METHOD_REVISION_CONFLICT' } }),
  );
});

test('explicit send retry preserves the public idempotency key and exact confirmation', async () => {
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      const input = {
        thread: 'thread-1',
        body: {
          messageType: 'action_confirmation',
          messageContent: { request: 'proposal-1' },
          idempotencyKey: 'same-message',
        },
      };
      await assert.rejects(client.sendMessage(input));
      const accepted = await client.sendMessage(input);
      assert.equal(accepted.status, 'accepted');
      assert.deepEqual(calls[0].body, calls[1].body);
      assert.equal(calls[1].body.messageContent.request, 'proposal-1');
    },
    (_call, count) =>
      count === 1
        ? { status: 503, body: { error: 'unavailable' } }
        : {
            status: 202,
            body: {
              thread: 'thread-1',
              message: 'event-1',
              status: 'accepted',
              cursor: 'thread-1:5',
              idempotencyKey: 'same-message',
            },
          },
  );
});

test('aborting a waiting reader sends no cancellation operation', async () => {
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      const abort = new AbortController();
      const pending = client.getThread(
        { agent: 'acting', thread: 'thread-1', wait: true },
        { abortSignal: abort.signal, timeoutInSeconds: 1 },
      );
      const rejected = assert.rejects(pending);
      for (let i = 0; i < 100 && !calls.length; i++) await new Promise((resolve) => setTimeout(resolve, 5));
      abort.abort();
      await rejected;
      assert.equal(calls.length, 1);
      assert.equal(calls[0].method, 'GET');
    },
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      return { body: {} };
    },
  );
});

test('a bounded-read transport timeout is typed and never creates replacement work', async () => {
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      await assert.rejects(
        client.getThread({ agent: 'acting', thread: 'thread-1', wait: true }, { timeoutInSeconds: 0.03 }),
        DarwinTimeoutError,
      );
      assert.equal(calls.length, 1);
      assert.equal(calls[0].method, 'GET');
    },
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      return { body: {} };
    },
  );
});

test('pending checkout and settled receipt remain distinct states on retry', async () => {
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      const input = {
        agent: 'acting',
        request: 'invoice-1',
        method: 'hosted_checkout',
        idempotencyKey: 'same-payment',
      };
      const pending = await client.pay(input);
      assert.equal(pending.status, 'pending');
      assert.equal('receipt' in pending, false);
      const settled = await client.pay(input);
      assert.equal(settled.status, 'settled');
      assert.equal(settled.receipt, 'receipt-1');
      assert.deepEqual(calls[0].body, calls[1].body);
    },
    (_call, count) => ({
      body:
        count === 1
          ? {
              payment: 'payment-1',
              status: 'pending',
              url: 'https://pay.example.test/checkout',
              idempotencyKey: 'same-payment',
            }
          : {
              payment: 'payment-1',
              status: 'settled',
              receipt: 'receipt-1',
              idempotencyKey: 'same-payment',
            },
    }),
  );
});

test('history pagination retains safe messages and resume cursor', async () => {
  const snapshot = {
    thread: 'thread-1',
    archived: false,
    needsAttention: false,
    actions: [],
    requests: [],
  };
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      const first = await client.getThread({ agent: 'acting', thread: 'thread-1', limit: 1 });
      assert.equal(first.hasMore, true);
      const second = await client.getThread({ agent: 'acting', thread: 'thread-1', cursor: first.cursor });
      assert.equal(second.hasMore, false);
      assert.equal(second.messages[0].from, 'agent');
      assert.deepEqual(
        [...first.messages, ...second.messages].map((message) => message.message),
        ['message-1', 'message-2'],
      );
      assert.deepEqual(first.messages[0].content, [{ type: 'text', text: 'Outdoor space details' }]);
      assert.equal(new URL(calls[1].path, baseUrl).searchParams.get('cursor'), 'thread-1:1');
    },
    (_call, count) => ({
      body: {
        ...snapshot,
        cursor: `thread-1:${count}`,
        hasMore: count === 1,
        messages: [
          {
            message: `message-${count}`,
            from: 'agent',
            type: 'message',
            content: [{ type: 'text', text: 'Outdoor space details' }],
            status: 'delivered',
            createdAt: '2026-09-28T00:00:00Z',
          },
        ],
      },
    }),
  );
});

test('canonical main requests and operation-local messages use separate endpoints and stable IDs', async () => {
  await fixture(async (baseUrl, calls) => {
    const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
    await client.createThread({ clientRequestId: '00000000-0000-4000-8000-000000000001', title: 'Research' });
    await client.postThreadMessage({
      threadId: 'asst_parent',
      clientMessageId: 'main-1',
      message: 'Find papers',
      target: { agentId: 'research' },
    });
    await client.interactWithThreadOperation({
      threadId: 'asst_parent',
      operationId: 'op-1',
      clientMessageId: 'local-1',
      message: { type: 'text', text: 'Change the dates' },
    });
    assert.deepEqual(
      calls.map((call) => [call.method, call.path]),
      [
        ['POST', '/api/v3/threads'],
        ['POST', '/api/v3/threads/asst_parent/messages'],
        ['POST', '/api/v3/threads/asst_parent/operations/op-1/messages'],
      ],
    );
    assert.equal(calls[1].body.clientMessageId, 'main-1');
    assert.equal(calls[2].body.clientMessageId, 'local-1');
    assert.equal(calls[2].body.threadId, undefined);
    assert.equal(calls[2].body.message.type, 'text');
  });
});

test('ordinary generated send preserves an already owner-attested file reference exactly', async () => {
  await fixture(async (baseUrl, calls) => {
    const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
    const body = {
      messageType: 'message',
      messageContent: 'Process this actual CSV',
      attachments: [{ type: 'owner_file', input: 'ofi_original_bytes_ref' }],
      idempotencyKey: 'owner-file-message',
    };
    await client.sendMessage({ thread: 'thread-1', body });
    assert.equal(calls.length, 1);
    assert.equal(calls[0].path, '/api/v2/act/threads/thread-1/messages');
    assert.deepEqual(calls[0].body, body);
  });
});
