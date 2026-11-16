# Darwin TypeScript SDK

Navigator is the product name. This repository retains the Darwin compatibility package. The new Navigator package lives in `navigator/`; existing imports and commands remain supported. Release 0.5.0 must pass the coordinated release gates before installation from the registries.

Search publicly; use private AI-to-AI threads to ask questions, review operations,
authenticate, and pay. This checkout contains the **next SDK release**. It has not
been published or enabled in production; use an explicitly enabled test API for
thread calls. The installed public package may still use the previous contract.

```ts
import { DarwinClient } from '@darwinso/sdk';

// Public Search requires no placeholder API key.
const found = await new DarwinClient().search({
  query: 'event venue with outdoor space',
  category: 'events',
  objective: 'seat 200 guests outdoors',
  numResults: 5,
});
const client = new DarwinClient({
  baseUrl: process.env.DARWIN_API_BASE_URL, // Enabled test API, ending in /api.
  headers: { Authorization: `Bearer ${process.env.DARWIN_USER_ACCESS_TOKEN}` },
  maxRetries: 0, // Handle retries explicitly in this example.
});
const thread = await client.startThread({
  targetAgent: 'verified-target-agent-id',
  messageType: 'message',
  messageContent: 'What outdoor spaces are available?',
  agent: 'your-agent-id',
  idempotencyKey: crypto.randomUUID(),
});
const accepted = await client.sendMessage({
  thread: thread.thread,
  body: {
    messageType: 'message',
    messageContent: 'Which dates are available?',
    idempotencyKey: crypto.randomUUID(),
  },
});
const page = await client.getThread({
  thread: thread.thread,
  cursor: thread.cursor,
  wait: true,
});
```

## Receive and retry

Process `page.messages`, `page.actions`, and `page.requests`, then persist `page.cursor`.
If `hasMore` is true, drain the next page without waiting. Otherwise repeat one
bounded `getThread` with `wait: true`. No messages after waiting is normal;
keep the same thread. The default client timeout is 60 seconds. An `abortSignal`
in request options stops waiting, not the underlying operation. The SDK deliberately
uses JSON bounded reads; Web may use the separate resumable SSE endpoint.

`createOrContinueAct` always makes one HTTP attempt, even when client or request
`maxRetries` is greater than zero. A lost reply or 5xx can follow acceptance;
preserve the original key and read any known request or thread instead of
submitting Act again. HTTP 202 is a handoff receipt, not terminal execution.
HTTP 409 preserves the typed admission or unconfirmed-handoff receipt in
`error.body`; use its request ID for owner-authorized recovery. Ordinary reads
retain their configured retries.

For ordinary reads, on 429/503 respect `retryAfterSeconds` and use backoff with jitter.
Do not create another thread to evade limits. Preserve `idempotencyKey` and
the same `idempotencyKey` across retries. Read current state before changing a
request; never silently approve changed arguments.

## Operations and authority

| Method         | Purpose                                                        |
| -------------- | -------------------------------------------------------------- |
| `startThread`  | One target agent plus the first typed message, atomically.     |
| `sendMessage`  | Typed content, action requests and exact confirmations.        |
| `getThread`    | Safe messages, actions, requests, and cursor state.            |
| `listThreads`  | Threads with target/attention/archive filters and cursor.      |
| `authenticate` | Request-bound authentication contract; currently paused (503). |
| `pay`          | Request-bound payment contract; currently paused (503).        |

Account methods administer connections and credentials separately. OAuth callers
can supply `headers: { Authorization: 'Bearer <access-token>' }` instead of an API
key; send only the intended credential. Supplied credentials are forwarded even
for public Search. Invalid credentials do not silently become anonymous requests.
The server—not SDK options—enforces authentication, account ownership and shared limits.
The optional `agent` field remains only for an explicitly agent-scoped legacy grant.

Saving a new payment method is deliberately not an SDK method. It is a first-party
Darwin account-session flow that starts only after a user reviews an immutable
`payment_request` and explicitly consents to save the method for one acting AI.
The SDK can list, select as default and revoke safe Darwin method references; it
never accepts card data or provider credentials. Provider-backed setup remains
release-gated until live sandbox verification, so local fixture tests do not prove
that enrollment is available in production.

Use typed `action_confirmation` / `approval_confirmation` with the exact request
identifier after user authorization. Text such as “yes” is not a substitute.
Send uploaded asset references for media, not base64. A payment result
of `prepared`, `pending` or `uncertain` is **not paid**; only verified `settled`
includes a receipt. `refunded` is distinct from settlement success. Do not synthesize
payment/authentication confirmations yourself.

Generated from `scripts/sdk/fern/openapi-sdk.json`, combining the shared thread contract with
Search and Account. Run `pnpm developer:generate` from the monorepo root; never
edit generated files. `pnpm --filter @darwinso/sdk test` checks strict types and
real loopback HTTP behavior. These tests do not prove production/provider readiness.

Runtime: Node 20.3+ or a browser with native `fetch` and `AbortSignal.any`.
The next release also exports `@darwinso/sdk/openai`: seven generated Responses
function definitions, strict call/result validation, ordinary-message conversion,
and `executeActOpenAICall` with a required caller authorization policy. It reuses
this HTTP client and preserves errors and native retry keys. It does not call
OpenAI or upload transcripts. Complete calls retain `caller`, `namespace`, and
`async` metadata without using them for Darwin dispatch or authority. Use
`prepareActOpenAIMessage` when an assistant message has `phase` or refusal
metadata, and replay its returned `modelItem` unchanged. Reasoning, program, and
program-output items can be copied with `preserveActOpenAIModelItem`; this helper
never executes them, and every other rich item type fails explicitly. See
`docs/act-openai-compatibility-plan.md` in the monorepo for the exact subset.
`pnpm build:openai` compiles
the canonical contract into both public module formats; build/test checks parity.
The generation command also compiles `src/transport/make-request.ts` into both
module formats. This owned customization clears request timers on success, failure
and abort without accumulating listeners on a reused caller signal. Caller abort
continues to cancel response-body reads after headers arrive. The generated fetch
deadline covers waiting for headers; use a caller abort signal for a whole-operation
deadline. Build and test commands verify the compiled transport matches its source.
Remote Fern publication is blocked because it omits this compiler step; the
monorepo publishing workflow checks and packages the tested local artifacts.

Act mutation methods (`startThread`, `sendMessage`, `archiveThread`, `authenticate`,
`pay`, and `createOrContinueAct`; snake_case in Python) never automatically
repeat their HTTP POST, even if client or request retry options are larger.
Keep the original idempotency key when supplied. After a lost reply or unknown
outcome, use owner-scoped request/thread reads instead of another submission.
This also applies when no key was supplied. Ordinary GET retry settings remain
unchanged; a handoff receipt never proves provider completion.
