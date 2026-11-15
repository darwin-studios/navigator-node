import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import test from 'node:test';

import { Darwin, DarwinClient } from '../generated/esm/index.mjs';

const { DarwinClient: CjsDarwinClient } = createRequire(import.meta.url)('../generated/cjs/index.js');

for (const [format, Client] of [
  ['ESM', DarwinClient],
  ['CommonJS', CjsDarwinClient],
]) {
  test(`${format} unverified accepted reply retains the effective request header key without a fabricated receipt`, async () => {
    let calls = 0;
    const client = new Client({
      baseUrl: 'https://example.test/api',
      apiKey: 'fixture',
      fetch: async (_url, init) => {
        calls++;
        assert.equal(new Headers(init.headers).get('Idempotency-Key'), 'effective-key');
        return Response.json({ type: 'request' }, { status: 202 });
      },
    });
    await assert.rejects(
      client.createOrContinueAct(
        {
          'Idempotency-Key': 'declared-key',
          body: {
            targets: [{ agentId: 'agent_fixture' }],
            message: 'Original intent',
          },
        },
        { headers: { 'Idempotency-Key': 'effective-key' } },
      ),
      (error) => {
        assert.equal(error.code, 'ACT_OUTCOME_UNVERIFIED');
        assert.equal(error.retryable, false);
        assert.equal(error.idempotencyKey, 'effective-key');
        assert.equal(error.receipt, undefined);
        return true;
      },
    );
    assert.equal(calls, 1);
  });
  for (const outcome of ['server error', 'lost reply', 'malformed accepted reply', 'invalid receipt']) {
    test(`${format} Act ${outcome} never triggers an automatic replacement POST`, async () => {
      const calls = [];
      const client = new Client({
        baseUrl: 'https://example.test/api',
        apiKey: 'fixture',
        maxRetries: 2,
        fetch: async (url, init) => {
          calls.push({ url, init });
          if (outcome === 'lost reply') throw new TypeError('reply lost after submission');
          if (outcome === 'malformed accepted reply') return new Response('{', { status: 202 });
          if (outcome === 'invalid receipt') return Response.json({ type: 'request' }, { status: 202 });
          return Response.json({ code: 'UNKNOWN_AFTER_ACCEPTANCE' }, { status: 503 });
        },
      });
      await assert.rejects(
        client.createOrContinueAct(
          {
            body: {
              targets: [{ agentId: 'agent_fixture' }],
              message: 'Original intent',
            },
          },
          { maxRetries: 2 },
        ),
      );
      assert.equal(calls.length, 1);
      assert.equal(calls[0].init.method, 'POST');
    });
  }
  test(`${format} owner input continuation keeps exact request and arguments with one POST under uncertainty`, async () => {
    const body = {
      threadId: 'original-thread',
      message: {
        type: 'input_response',
        requestId: 'pending-input',
        arguments: { text: 'Original text', confirm: true },
      },
    };
    const calls = [];
    const client = new Client({
      baseUrl: 'https://offline.example.test/api',
      apiKey: 'fixture',
      maxRetries: 3,
      fetch: async (url, init) => {
        calls.push({ url, init, body: JSON.parse(init.body) });
        throw new TypeError('reply lost after submission');
      },
    });
    await assert.rejects(
      client.createOrContinueAct({ 'Idempotency-Key': 'same-owner-response', body }, { maxRetries: 3 }),
    );
    assert.equal(calls.length, 1);
    assert.equal(calls[0].init.method, 'POST');
    assert.equal(new URL(calls[0].url).pathname, '/api/v3/act');
    assert.equal(new Headers(calls[0].init.headers).get('Idempotency-Key'), 'same-owner-response');
    assert.deepEqual(calls[0].body, body);
  });
  test(`${format} ordinary request reads retain configured retry behavior`, async () => {
    let calls = 0;
    const client = new Client({
      baseUrl: 'https://example.test/api',
      apiKey: 'fixture',
      maxRetries: 1,
      fetch: async (_url, init) => {
        assert.equal(init.method, 'GET');
        calls++;
        return Response.json(calls === 1 ? { code: 'temporary' } : { actRequestId: 'original' }, {
          status: calls === 1 ? 503 : 200,
        });
      },
    });
    assert.equal((await client.getActRequest({ actRequestId: 'original' })).actRequestId, 'original');
    assert.equal(calls, 2);
  });
}

for (const mediaType of [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/calendar',
]) {
  test(`artifact ticket transport preserves ${mediaType}, a null filename and integrity metadata`, async () => {
    const artifact = {
      url: 'https://storage.example.test/opaque',
      expiresAt: '2026-11-02T00:05:00.000Z',
      disposition: 'attachment',
      mediaType,
      fileName: null,
      sizeBytes: 811,
      sha256: 'a'.repeat(64),
    };
    await fixture(
      async (baseUrl, calls) => {
        const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
        assert.deepEqual(await client.getResultArtifactDownloadUrl({ thread: 'original', ticket: 'opaque' }), artifact);
        assert.equal(calls.length, 1);
        assert.equal(calls[0].method, 'POST'); // Mint a fresh owner-authorized download URL; no Act submission.
      },
      () => ({ body: artifact }),
    );
  });
}

test('thread reads distinguish pending, uncertain and terminal actions while retaining partial file metadata', async () => {
  for (const status of ['queued', 'running', 'reconciling', 'failed', 'cancelled', 'succeeded']) {
    const page = {
      thread: 'original',
      cursor: 'original:1',
      hasMore: false,
      archived: false,
      needsAttention: false,
      actions: [
        { action: 'action', capability: 'operation', request: 'request', status, cancellationRequested: false },
      ],
      messages: [
        {
          type: 'result',
          message: 'result',
          from: 'agent',
          status: status === 'succeeded' ? 'delivered' : 'unknown',
          content: [],
          createdAt: '2026-11-02T00:00:00.000Z',
          data: {
            artifacts: [{ mediaType: 'application/pdf', fileName: null, sizeBytes: 811, sha256: 'a'.repeat(64) }],
          },
        },
      ],
      requests: [],
      errors:
        status === 'failed'
          ? [{ event: 'failure', code: 'EXECUTION_FAILED', retryable: false, createdAt: '2026-11-02T00:00:00.000Z' }]
          : [],
    };
    await fixture(
      async (baseUrl, calls) => {
        const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key' });
        assert.deepEqual(await client.getActThread({ threadId: 'original' }), page);
        assert.equal(calls.length, 1);
        assert.equal(calls[0].method, 'GET');
      },
      () => ({ body: page }),
    );
  }
});

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

test('Act accepts HTTP202 as a handoff receipt without inventing a provider result', async () => {
  const receipt = {
    type: 'request',
    actRequestId: 'actreq_fixture',
    searchId: null,
    status: 'completed',
    createdAt: '2026-11-02T00:00:00.000Z',
    threads: [{ agentId: 'agent_fixture', threadId: 'thread_fixture' }],
  };
  await fixture(
    async (baseUrl, calls) => {
      const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 0 });
      const value = await client.createOrContinueAct({
        body: { targets: [{ agentId: 'agent_fixture' }], message: 'Run this operation' },
      });
      assert.deepEqual(value, receipt);
      assert.equal(value.threads[0].state, undefined);
      assert.equal(calls.length, 1);
    },
    () => ({ status: 202, headers: { Location: '/api/v3/act/requests/actreq_fixture' }, body: receipt }),
  );
});

for (const code of ['ACT_ADMISSION_BLOCKED', 'ACT_HANDOFF_UNCONFIRMED']) {
  test(`Act ${code} is a preserved HTTP409 failure with no automatic POST retry`, async () => {
    const failure = {
      code,
      stage: code === 'ACT_ADMISSION_BLOCKED' ? 'admission' : 'handoff',
      retryable: false,
      message: 'Read the existing request.',
      receipt: {
        type: 'request',
        actRequestId: 'actreq_fixture',
        searchId: null,
        status: 'failed',
        createdAt: '2026-11-02T00:00:00.000Z',
        threads: [{ agentId: 'agent_fixture', errorCode: 'EXECUTION_METADATA_PENDING' }],
      },
      blockers: [
        {
          agentId: 'agent_fixture',
          code: 'EXECUTION_METADATA_PENDING',
          nextAction: { type: 'reconcile_request', method: 'GET', path: '/api/v3/act/requests/actreq_fixture' },
        },
      ],
    };
    await fixture(
      async (baseUrl, calls) => {
        const client = new DarwinClient({ baseUrl, apiKey: 'fixture-key', maxRetries: 2 });
        await assert.rejects(
          client.createOrContinueAct({
            body: { targets: [{ agentId: 'agent_fixture' }], message: 'Run this operation' },
          }),
          (error) => {
            assert.ok(error instanceof Darwin.act.ConflictError);
            assert.equal(error.statusCode, 409);
            assert.deepEqual(error.body, failure);
            return true;
          },
        );
        assert.equal(calls.length, 1);
        assert.equal(calls[0].method, 'POST');
      },
      () => ({ status: 409, body: failure }),
    );
  });
}
