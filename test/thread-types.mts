import { DarwinClient, type Darwin } from '../generated/esm/index.mjs';

const client = new DarwinClient(); // Unsigned Search needs no placeholder key.
void client.route({ message: 'Find an agent', clientMessageId: 'route-1' });
void client.route({ message: 'Find an agent', clientMessageId: 'route-legacy-mode', mode: 'route' });
void client.liveSearch({ message: 'Check availability', clientMessageId: 'live-1' });
void client.execute({ message: 'Coordinate the work', clientMessageId: 'execute-1' });
void client.execute({ message: 'Coordinate the work', clientMessageId: 'execute-legacy-mode', mode: 'execute' });
void client.readThread({ threadId: 'asst_thread', 'X-Assist-Token': 'private-token' });
void client.createThread({ clientRequestId: '00000000-0000-4000-8000-000000000001', title: 'Research' });
const legacyNavigatorList: Darwin.ThreadList = { threads: [], nextBefore: null };
void legacyNavigatorList;
void client.postThreadMessage({ threadId: 'asst_thread', clientMessageId: 'main-message', message: 'Find papers' });
void client.interactWithThreadOperation({
  threadId: 'asst_thread',
  operationId: 'operation',
  clientMessageId: 'local-message',
  message: { type: 'text', text: 'Change dates' },
});
// Existing typed Search clients must keep their flat request shape.
const compatibleSearch: Darwin.AdaptiveSearchRequest = { query: 'travel agent' };
void client.createSearch(compatibleSearch);
void client.search({
  query: 'event venue with outdoor space',
  category: 'events',
  objective: 'seat 200 guests outdoors',
  numResults: 5,
});
// @ts-expect-error Search no longer accepts structured filters.
void client.search({ query: 'event venue', filters: { requiresExecutableRoute: true } });
// @ts-expect-error Search uses numResults, not the retired limit field.
void client.search({ query: 'event venue', limit: 5 });
void new DarwinClient({ headers: { Authorization: 'Bearer fixture-oauth' } });
void client.getThread({ agent: 'acting', thread: 'thread', wait: true, cursor: 'thread:0' });
void client.getActThread({ threadId: 'legacy-act-thread' });
const legacyMainMessage: Darwin.ThreadMessageRequest = {
  threadId: 'asst_thread',
  clientMessageId: 'legacy-message',
  message: 'Find papers',
};
void client.postThreadMessage(legacyMainMessage);
void client.sendMessage({
  thread: 'thread',
  body: { messageType: 'action_confirmation', messageContent: { request: 'request' } },
});
void client.startThread({ targetAgent: 'target', messageType: 'message', messageContent: 'Original inquiry' });
void client.authenticate({ request: 'authentication', idempotencyKey: 'auth-1' });
void client.pay({ request: 'payment', idempotencyKey: 'pay-1' });
// @ts-expect-error Start takes the generated union directly, not a legacy body wrapper.
void client.startThread({ body: { targetAgent: 'target', messageType: 'message', messageContent: 'Inquiry' } });
// @ts-expect-error Authentication takes the returned request, not credentials or a body wrapper.
void client.authenticate({ body: { request: 'authentication' } });
// @ts-expect-error Payment method details are not accepted by this request-bound contract.
void client.pay({ request: 'payment', method: 'card' });

// @ts-expect-error A prose message cannot substitute for exact operation confirmation.
const invalidConfirmation: Darwin.SendMessageBody = { messageType: 'action_confirmation', messageContent: 'yes' };
// @ts-expect-error Legacy Action methods must not reappear on the primary client.
void client.startAction({});
// @ts-expect-error Thread is mandatory even with an authenticated client.
void client.getThread({});

function paymentOutcome(payment: Darwin.PayResponse): string {
  if (payment.status === 'settled') return payment.receipt ?? payment.status;
  if (payment.status === 'pending') {
    // @ts-expect-error Checkout initiation is not a verified settlement receipt.
    return payment.receipt;
  }
  return payment.status;
}
void paymentOutcome;
void invalidConfirmation;

void client.listTargetAccounts({ aiId: 'acting', targetAiId: 'target', includeUnavailable: true, limit: 25 });
void client.listPaymentMethods({ aiId: 'acting' });
void client.setPaymentMethodDefault({ aiId: 'acting', methodId: 'method', expectedRevision: 1 });
void client.revokePaymentMethod({ aiId: 'acting', methodId: 'method', expectedRevision: 2 });
// @ts-expect-error Default selection requires the revision actually reviewed.
void client.setPaymentMethodDefault({ aiId: 'acting', methodId: 'method' });
// @ts-expect-error Revocation requires a body even though its HTTP method is DELETE.
void client.revokePaymentMethod({ aiId: 'acting', methodId: 'method' });
// @ts-expect-error Payment method management never accepts raw provider credentials.
void client.revokePaymentMethod({ aiId: 'acting', methodId: 'method', expectedRevision: 1, instrumentRef: 'secret' });
// @ts-expect-error A saved-method read cannot accept payment authorization or credentials.
void client.listPaymentMethods({ aiId: 'acting', cardNumber: 'not-accepted' });
void client.setTargetAccountDefault({ aiId: 'acting', targetAiId: 'target', connectionId: 'account' });
void client.revokeTargetAccount({ aiId: 'acting', targetAiId: 'target', connectionId: 'account' });
// @ts-expect-error Account queries do not accept credentials.
void client.listTargetAccounts({ aiId: 'acting', targetAiId: 'target', accessToken: 'not-accepted' });
// @ts-expect-error The target AI remains mandatory.
void client.listTargetAccounts({ aiId: 'acting' });

void client.sendMessage({
  thread: 'thread',
  body: {
    messageType: 'message',
    messageContent: 'Process my selected file',
    attachments: [{ type: 'owner_file', input: 'ofi_original_bytes_ref' }],
  },
});
void client.sendMessage({
  thread: 'thread',
  body: {
    messageType: 'message',
    messageContent: 'Process',
    // @ts-expect-error A file locator cannot replace the bounded owner attestation.
    attachments: [{ type: 'owner_file', fileId: 'raw-library-id' }],
  },
});

// Owner input uses the pending public request; native context and task identity stay server-side.
void client.createOrContinueAct({
  body: {
    threadId: 'thread',
    message: {
      type: 'input_response',
      requestId: 'pending-input',
      arguments: { text: 'Original text', confirm: true },
    },
  },
});
void client.createOrContinueAct({
  // @ts-expect-error Input responses require the exact pending request reference.
  body: { threadId: 'thread', message: { type: 'input_response', arguments: { confirm: true } } },
});
void client.createOrContinueAct({
  // @ts-expect-error Structured input cannot be a prose confirmation.
  body: { threadId: 'thread', message: { type: 'input_response', requestId: 'pending-input', arguments: 'yes' } },
});

// Run accepts direct multi-target work and coordinated turns at the same route.
void client.run({ body: { targets: [{ agentId: 'research' }, { agentId: 'analysis' }], message: 'Review the brief' } });
void client.run({
  body: {
    type: 'turn',
    clientMessageId: 'task-001',
    message: 'Coordinate the research',
    sessionId: 'asst_00000000-0000-4000-8000-000000000001',
  },
});
void client.build({
  body: { action: 'prepare_release', draftId: 'draft_1', revision: 1 },
  'Idempotency-Key': 'release-001',
});
void client.manage({ body: { action: 'list_agents' }, 'Idempotency-Key': 'list-001' });
