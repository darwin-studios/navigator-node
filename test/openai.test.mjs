import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import test from 'node:test';

import { DarwinClient } from '../generated/esm/index.mjs';
import {
  ActOpenAICompatibilityError,
  actOpenAIFunctionTools,
  executeActOpenAICall,
  prepareActOpenAIMessage,
  preserveActOpenAIModelItem,
} from '../generated/esm/openai/index.mjs';

const snapshot = {
  thread: 'thread',
  messages: [],
  actions: [],
  requests: [],
  cursor: 'thread:0',
  hasMore: false,
  archived: false,
  needsAttention: false,
};
const accepted = {
  thread: 'thread',
  message: 'message',
  status: 'accepted',
  cursor: 'thread:1',
  idempotencyKey: 'send',
};
const cases = [
  [
    'start_thread',
    { targetAgent: 'target', messageType: 'message', messageContent: 'Hello', idempotencyKey: 'start' },
    { ...accepted, idempotencyKey: 'start' },
    'POST',
    '/act/threads',
  ],
  [
    'send_message',
    { thread: 'thread', messageType: 'message', messageContent: 'Hello', idempotencyKey: 'send' },
    accepted,
    'POST',
    '/act/threads/thread/messages',
  ],
  ['get_thread', { thread: 'thread', cursor: 'thread:0', wait: true }, snapshot, 'GET', '/act/threads/thread'],
  ['list_threads', {}, { threads: [], cursor: null }, 'GET', '/act/threads'],
  ['archive_thread', { thread: 'thread' }, { thread: 'thread', archived: true }, 'POST', '/act/threads/thread/archive'],
  [
    'authenticate',
    { request: 'request', idempotencyKey: 'auth' },
    {
      authentication: 'attempt',
      status: 'awaiting_consent',
      expiresAt: '2026-09-29T00:00:00Z',
      idempotencyKey: 'auth',
    },
    'POST',
    '/act/authentications',
  ],
  [
    'pay',
    { request: 'invoice', idempotencyKey: 'pay' },
    {
      payment: 'payment',
      status: 'pending',
      expiresAt: '2026-09-29T00:00:00Z',
      url: 'https://pay.example.test/checkout',
      idempotencyKey: 'pay',
    },
    'POST',
    '/act/payments',
  ],
];
const item = (name, input) => ({
  type: 'function_call',
  name,
  call_id: `call-${name}`,
  arguments: JSON.stringify(['authenticate', 'pay'].includes(name) ? input : { agent: 'acting', ...input }),
});

test('published ESM and CommonJS entry points expose identical seven-tool definitions', () => {
  const cjs = createRequire(import.meta.url)('../generated/cjs/openai/index.js');
  assert.deepEqual(cjs.actOpenAIFunctionTools(), actOpenAIFunctionTools());
  assert.equal(actOpenAIFunctionTools().length, 7);
  for (const tool of actOpenAIFunctionTools()) {
    assert.deepEqual(tool.allowed_callers, ['direct']);
    assert.equal(tool.output_schema.type, 'object');
    assert.equal('$schema' in tool.output_schema, false);
  }
});

test('published helpers preserve modern message and opaque model-history metadata', () => {
  const message = {
    type: 'message',
    id: 'msg_1',
    role: 'assistant',
    status: 'completed',
    phase: 'commentary',
    content: [{ type: 'output_text', text: 'Working on it.', annotations: [] }],
  };
  assert.deepEqual(prepareActOpenAIMessage(message), {
    event: { type: 'message', parts: [{ type: 'text', text: 'Working on it.' }] },
    modelItem: message,
  });
  const reasoning = {
    type: 'reasoning',
    id: 'rs_1',
    summary: [{ type: 'summary_text', text: 'Checked constraints.' }],
    status: 'completed',
  };
  assert.deepEqual(preserveActOpenAIModelItem(reasoning), reasoning);
  assert.throws(() => preserveActOpenAIModelItem({ type: 'web_search_call' }), /INVALID_MODEL_ITEM/);
});

test('standard calls dispatch all seven operations through SDK HTTP and preserve native outputs', async () => {
  const received = [];
  let response;
  let status = 200;
  const server = createServer(async (req, res) => {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    received.push({ path: req.url, method: req.method, headers: req.headers, body: Buffer.concat(chunks).toString() });
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  }).listen(0, '127.0.0.1');
  await once(server, 'listening');
  try {
    const client = new DarwinClient({
      baseUrl: `http://127.0.0.1:${server.address().port}`,
      apiKey: 'fixture-key',
      maxRetries: 0,
    });
    const context = { agent: 'acting', authorize: () => true }; // Fixture policy, not a production consent policy.
    for (const [name, input, output, method, path] of cases) {
      response = output;
      const wrapped = await executeActOpenAICall(client, item(name, input), context);
      assert.equal(wrapped.call_id, `call-${name}`);
      assert.equal(wrapped.type, 'function_call_output');
      assert.deepEqual(JSON.parse(wrapped.output), output);
      assert.equal(received.at(-1).method, method);
      assert.equal(received.at(-1).path.split('?')[0], `/v2${path}`);
      assert.equal(received.at(-1).headers['x-api-key'], 'fixture-key');
    }
    assert.equal(new URL(received[2].path, 'http://local').searchParams.get('wait'), 'true');
    assert.equal(JSON.parse(received[1].body).messageContent, 'Hello');
    response = { threads: [], cursor: null };
    const correlated = await executeActOpenAICall(
      client,
      {
        ...item('list_threads', {}),
        async: true,
        caller: { type: 'program', caller_id: 'prog_call_1' },
        namespace: 'darwin.act',
      },
      context,
    );
    assert.deepEqual(correlated, {
      type: 'function_call_output',
      call_id: 'call-list_threads',
      output: '{"threads":[],"cursor":null}',
      name: 'list_threads',
      caller: { type: 'program', caller_id: 'prog_call_1' },
      namespace: 'darwin.act',
    });
    const count = received.length;
    await assert.rejects(
      executeActOpenAICall(client, item('pay', cases.find(([name]) => name === 'pay')[1]), {
        ...context,
        authorize: () => false,
      }),
      (error) =>
        error instanceof ActOpenAICompatibilityError &&
        error.code === 'ACT_CALL_NOT_AUTHORIZED' &&
        error.message === 'ACT_CALL_NOT_AUTHORIZED',
    );
    await assert.rejects(
      executeActOpenAICall(client, item('list_threads', { agent: 'other' }), context),
      /ACTING_AI_MISMATCH/,
    );
    assert.equal(received.length, count);
    response = { threads: [], cursor: null };
    await executeActOpenAICall(client, item('list_threads', {}), {
      ...context,
      authorize: (call) => {
        call.input.agent = 'other';
        return true;
      },
    });
    assert.equal(new URL(received.at(-1).path, 'http://local').searchParams.get('agent'), 'acting');
    status = 403;
    response = { code: 'FORBIDDEN' };
    await assert.rejects(
      executeActOpenAICall(client, item('list_threads', {}), context),
      (error) => error.statusCode === 403,
    );
    status = 200;
    response = { threads: [], cursor: null, secret: 'never-return' };
    await assert.rejects(executeActOpenAICall(client, item('list_threads', {}), context), /INVALID_RESULT/);
  } finally {
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
  }
});
