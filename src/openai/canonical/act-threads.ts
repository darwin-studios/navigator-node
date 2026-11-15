import { z } from 'zod';

/** Canonical Act thread schema version, shared across REST, MCP and SDKs. */
export const ACT_THREAD_CONTRACT_VERSION = 'act-threads-v1' as const;
const id = z
  .string()
  .min(1)
  .max(200)
  .regex(/^[A-Za-z0-9][A-Za-z0-9_.:-]*$/);
const revision = z.number().int().nonnegative().max(Number.MAX_SAFE_INTEGER);
const digest = z.string().regex(/^[a-f0-9]{64}$/);
const jsonObject = z.record(z.string().max(200), z.json());

/** Closed source-intake limits, separate from provider media and execution. */
export const MAX_OWNER_FILE_INPUT_BYTES = 262_144;
export const OWNER_FILE_PROCESSING_MEDIA_TYPES = [
  'text/plain',
  'text/csv',
  'text/tab-separated-values',
  'text/html',
  'application/json',
  'image/png',
  'audio/wav',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
] as const;
export const ownerFileInputCapabilitySchema = z
  .object({
    maxFiles: z.literal(4),
    maxTotalBytes: z.literal(MAX_OWNER_FILE_INPUT_BYTES),
    mediaTypes: z
      .array(z.enum(OWNER_FILE_PROCESSING_MEDIA_TYPES))
      .min(1)
      .max(OWNER_FILE_PROCESSING_MEDIA_TYPES.length)
      .refine((values) => new Set(values).size === values.length),
  })
  .strict();

export const threadContentPartSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('text'), text: z.string().min(1).max(32_000) }).strict(),
  ...(['image', 'audio', 'video', 'file'] as const).map((type) =>
    z.object({ type: z.literal(type), assetId: id }).strict(),
  ),
]);
const parts = z.array(threadContentPartSchema).max(20);
/** Only a new owner-authored message may carry a bounded input attestation. */
export const threadMessagePartSchema = z.discriminatedUnion('type', [
  ...threadContentPartSchema.options,
  z
    .object({
      type: z.literal('owner_file'),
      inputRef: z
        .string()
        .max(8192)
        .regex(/^ofi_[A-Za-z0-9_-]+$/),
    })
    .strict(),
]);
const messageParts = z.array(threadMessagePartSchema).max(20);
/** A method identifier is not permission to collect credentials. Only a reviewed
 * server handler can fulfill it; unknown methods remain explicitly unsupported. */
export const authenticationTypeSchema = z
  .string()
  .min(1)
  .max(100)
  .regex(/^[a-z][a-z0-9_]*(?:\.[a-z][a-z0-9_]*)*$/);
export const threadAuthenticationRequestSchema = z
  .object({
    authenticationRequestId: id,
    actionId: id,
    targetAiId: id,
    authType: authenticationTypeSchema,
    resource: z
      .string()
      .url()
      .max(2_000)
      .refine((value) => {
        const url = new URL(value);
        return url.protocol === 'https:' && !url.username && !url.password && !url.search && !url.hash;
      }),
    scopes: z.array(z.string().min(1).max(200)).max(50),
    accountId: id.optional(),
  })
  .strict();
export const paymentRailSchema = z.enum([
  'card',
  'bank',
  'hosted_checkout',
  'darwin_wallet',
  'mpp',
  'x402',
  'ucp',
  'acp',
]);
export const acceptedPaymentRailsSchema = z
  .array(paymentRailSchema)
  .min(1)
  .max(paymentRailSchema.options.length)
  .refine((methods) => new Set(methods).size === methods.length, 'Accepted payment methods must be unique');
export const paymentRequestSchema = z
  .object({
    paymentRequestId: id,
    actionId: id,
    amountMinor: z.string().regex(/^[1-9][0-9]{0,17}$/),
    currency: z.string().regex(/^[A-Z]{3}$/),
    payeeId: id,
    payeeName: z.string().min(1).max(200),
    expiresAt: z.iso.datetime(),
    acceptedMethods: acceptedPaymentRailsSchema,
  })
  .strict();

const confirmation = { requestId: id, requestDigest: digest, requestRevision: revision };
export const threadEventPayloadSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('message'), parts: messageParts.min(1) }).strict(),
  z
    .object({
      type: z.literal('action_request'),
      operationId: id,
      arguments: jsonObject,
      accountId: id.optional(),
      // Runtime-only replacement after first-account verification, not a new operation.
      actionId: id.optional(),
    })
    .strict(),
  z.object({ type: z.literal('action_confirmation'), ...confirmation }).strict(),
  z
    .object({
      type: z.literal('input_request'),
      actionId: id,
      inputSchema: jsonObject,
      inputSchemaResources: z.record(z.string().max(2_000), jsonObject).optional(),
      expiresAt: z.iso.datetime(),
    })
    .strict(),
  z.object({ type: z.literal('input_response'), ...confirmation, arguments: jsonObject }).strict(),
  // Clock evidence never supplies the missing information or authorizes a
  // continuation. The existing accepted operation is observed after expiry.
  z.object({ type: z.literal('input_expired'), requestId: id, actionId: id }).strict(),
  z
    .object({
      type: z.literal('approval_request'),
      actionId: id,
      reason: z.string().min(1).max(2_000),
      expiresAt: z.iso.datetime(),
    })
    .strict(),
  z.object({ type: z.literal('approval_confirmation'), ...confirmation, decision: z.enum(['allow', 'deny']) }).strict(),
  // Runtime clock evidence only, never a peer-supplied confirmation or denial.
  z.object({ type: z.literal('approval_expired'), requestId: id, actionId: id }).strict(),
  z.object({ type: z.literal('payment_expired'), paymentRequestId: id, actionId: id }).strict(),
  z.object({ type: z.literal('authentication_request'), ...threadAuthenticationRequestSchema.shape }).strict(),
  // Read compatibility for durable histories written before request-driven auth.
  z
    .object({
      type: z.literal('authentication_required'),
      actionId: id,
      targetAiId: id,
      accountId: id.optional(),
      scopes: z.array(z.string().max(200)).max(50),
      /** Public clock evidence only. Provider origin and opaque return state stay private. */
      expiresAt: z.iso.datetime().optional(),
    })
    .strict(),
  z.object({ type: z.literal('authentication_confirmation'), requestId: id, actionId: id, accountId: id }).strict(),
  z.object({ type: z.literal('payment_request'), ...paymentRequestSchema.shape }).strict(),
  z.object({ type: z.literal('payment_confirmation'), paymentRequestId: id, receiptId: id, actionId: id }).strict(),
  z
    .object({
      type: z.literal('payment_status'),
      paymentRequestId: id,
      actionId: id,
      status: z.enum([
        'pending',
        'failed',
        'voided',
        'partially_refunded',
        'reversal_pending',
        'reversal_failed',
        'disputed',
        'refunded',
      ]),
      refundAmountMinor: z
        .string()
        .regex(/^(0|[1-9][0-9]{0,17})$/)
        .optional(),
      pendingRefundAmountMinor: z
        .string()
        .regex(/^[1-9][0-9]{0,17}$/)
        .optional(),
      failedRefundAmountMinor: z
        .string()
        .regex(/^[1-9][0-9]{0,17}$/)
        .optional(),
      disputeAmountMinor: z
        .string()
        .regex(/^[1-9][0-9]{0,17}$/)
        .optional(),
      disputeStatus: z
        .enum([
          'warning_needs_response',
          'warning_under_review',
          'warning_closed',
          'needs_response',
          'under_review',
          'won',
          'lost',
        ])
        .optional(),
    })
    .strict(),
  z.object({ type: z.literal('result'), actionId: id, parts, data: z.json().optional() }).strict(),
  z.object({ type: z.literal('completion_request'), actionId: id }).strict(),
  z.object({ type: z.literal('completion_confirmation'), ...confirmation }).strict(),
  z.object({ type: z.literal('cancellation_request'), actionId: id }).strict(),
  // Darwin-only proof that the operation never crossed the dispatch boundary.
  // This is not a claim that a provider canceled previously dispatched work.
  z.object({ type: z.literal('action_withdrawn'), actionId: id }).strict(),
  z.object({ type: z.literal('cancellation_confirmation'), actionId: id, providerReceiptId: id }).strict(),
  z
    .object({
      type: z.literal('delivery_status'),
      messageId: id,
      status: z.enum(['accepted', 'delivered', 'failed', 'unknown']),
    })
    .strict(),
  z
    .object({
      type: z.literal('status'),
      actionId: id,
      status: z.enum(['queued', 'running', 'waiting', 'reconciling']),
    })
    .strict(),
  z.object({ type: z.literal('error'), actionId: id.optional(), code: id, retryable: z.boolean() }).strict(),
]);

export const startThreadSchema = z
  .object({
    actingAiId: id,
    targetAiId: id,
    operationId: id.optional(),
    idempotencyKey: id,
  })
  .strict();
export const sendThreadMessageSchema = z
  .object({
    actingAiId: id,
    threadId: id,
    clientMessageId: id,
    expectedRevision: revision,
    event: threadEventPayloadSchema,
  })
  .strict();
export const getThreadSchema = z
  .object({
    actingAiId: id,
    threadId: id,
    afterCursor: id.optional(),
    limit: z.number().int().min(1).max(100).default(50),
    waitMs: z.number().int().min(0).max(30_000).default(0),
  })
  .strict();
export const listThreadsSchema = z
  .object({
    actingAiId: id,
    targetAiId: id.optional(),
    attention: z.boolean().optional(),
    archived: z.boolean().optional(),
    cursor: id.optional(),
    limit: z.number().int().min(1).max(100).default(50),
  })
  .strict();
export const archiveThreadSchema = z.object({ actingAiId: id, threadId: id, expectedRevision: revision }).strict();
export const authenticateThreadSchema = z.discriminatedUnion('mode', [
  z
    .object({
      mode: z.literal('start'),
      actingAiId: id,
      authenticationRequestId: id,
      accountId: id.optional(),
      idempotencyKey: id,
    })
    .strict(),
  z.object({ mode: z.literal('status'), actingAiId: id, authenticationId: id }).strict(),
]);
export const payThreadSchema = z
  .object({
    actingAiId: id,
    paymentRequestId: id,
    method: paymentRailSchema,
    paymentMethodId: id.optional(),
    idempotencyKey: id,
  })
  .strict();

// One definition for REST parsing, MCP inputs, and generated OpenAPI/SDKs.
export const ACT_THREAD_OPERATIONS = {
  start_thread: {
    method: 'POST',
    path: '/v2/act/threads',
    scope: 'agent:write',
    schema: startThreadSchema,
    description: 'Start a private thread with one verified executable AI. Returns capabilities without executing them.',
  },
  send_message: {
    method: 'POST',
    path: '/v2/act/threads/{threadId}/messages',
    scope: 'agent:write',
    schema: sendThreadMessageSchema,
    description:
      'Durably accept a typed thread event. Acceptance is not delivery or completion. Confirmations must reference the exact request digest and revision.',
  },
  get_thread: {
    method: 'GET',
    path: '/v2/act/threads/{threadId}',
    scope: 'agent:read',
    schema: getThreadSchema,
    description:
      'Read ordered thread events and operation states. Use afterCursor and waitMs (up to 30000) for incremental updates.',
  },
  list_threads: {
    method: 'GET',
    path: '/v2/act/threads',
    scope: 'agent:read',
    schema: listThreadsSchema,
    description: 'List this acting AI’s threads, optionally filtered by target, attention, and archive state.',
  },
  archive_thread: {
    method: 'POST',
    path: '/v2/act/threads/{threadId}/archive',
    scope: 'agent:write',
    schema: archiveThreadSchema,
    description:
      'Hide the thread on your side without cancelling work. New messages reactivate it; outstanding obligations remain in attention.',
  },
  authenticate: {
    method: 'POST',
    path: '/v2/act/authenticate',
    scope: 'connections:write',
    schema: authenticateThreadSchema,
    description:
      'Respond to an authentication_request by ID, or inspect its attempt. Darwin resolves the target and auth type. Never supply passwords or tokens in tool arguments.',
  },
  pay: {
    method: 'POST',
    path: '/v2/act/pay',
    scope: 'agent:write',
    schema: payThreadSchema,
    description:
      'Pay an immutable payment request using an accepted available method. Pending checkout is not paid; confirmation requires verified settlement.',
  },
} as const;

export type ActThreadOperation = keyof typeof ACT_THREAD_OPERATIONS;

/** Shared by the staged MCP registration and generated reference/catalog. */
export function actThreadToolMetadata(name: ActThreadOperation) {
  const readOnly = name === 'get_thread' || name === 'list_threads';
  return {
    title: name.charAt(0).toUpperCase() + name.slice(1).replaceAll('_', ' '),
    annotations: {
      readOnlyHint: readOnly,
      destructiveHint: name === 'send_message' || name === 'pay',
      idempotentHint: name !== 'authenticate',
      openWorldHint: !readOnly && name !== 'archive_thread',
    },
  };
}

/** Convenience REST read for authenticate(mode=status), not an eighth MCP tool. */
export const ACT_THREAD_AUTHENTICATION_STATUS_PATH = '/v2/act/authenticate/{authenticationId}' as const;

export type ThreadEventPayload = z.infer<typeof threadEventPayloadSchema>;
export type ThreadContentPart = z.infer<typeof threadContentPartSchema>;
export type PaymentRail = z.infer<typeof paymentRailSchema>;
export type ThreadSender = 'acting_ai' | 'target_ai' | 'runtime' | 'payment_broker' | 'authentication_broker';
/** Canonical event authority shared by persistence and every public response parser. */
export const THREAD_EVENT_SENDER_TYPES = {
  acting_ai: [
    'message',
    'action_request',
    'action_confirmation',
    'input_response',
    'approval_confirmation',
    'completion_confirmation',
    'cancellation_request',
  ],
  target_ai: [
    'message',
    'approval_request',
    'authentication_required',
    'authentication_request',
    'payment_request',
    'result',
    'completion_request',
    'cancellation_confirmation',
    'status',
    'error',
  ],
  runtime: [
    'message',
    'payment_expired',
    'approval_expired',
    'input_request',
    'input_expired',
    'action_withdrawn',
    'delivery_status',
    'action_request',
    'approval_request',
    'authentication_required',
    'authentication_request',
    'payment_request',
    'result',
    'completion_request',
    'cancellation_confirmation',
    'status',
    'error',
  ],
  payment_broker: ['payment_confirmation', 'payment_status'],
  authentication_broker: ['authentication_confirmation'],
} as const satisfies Record<ThreadSender, readonly ThreadEventPayload['type'][]>;
export type ThreadEvent = {
  id: string;
  threadId: string;
  sender: ThreadSender;
  senderAiId: string | null;
  revision: number;
  createdAt: string;
  /** Initial durable state. Later delivery_status events update delivery without rewriting this event. */
  delivery: 'accepted' | 'delivered' | 'failed' | 'unknown';
  /** Assigned by Darwin over the immutable event; confirmations reference this, never a provider-supplied digest. */
  requestDigest: string;
  payload: ThreadEventPayload;
};

/** Authorized JSON projection shared by the first-party Web transport and API. */
export type ActThreadSnapshot = {
  threadId: string;
  goalId: string;
  actingAiId: string;
  targetAiId: string;
  revision: number;
  archived: boolean;
  attention: boolean;
  cursor: string;
  capabilities: ExecutableThreadCapability[];
  operations: Record<
    string,
    {
      id: string;
      operationId: string;
      requestId: string;
      status:
        | 'awaiting_confirmation'
        | 'queued'
        | 'running'
        | 'waiting'
        | 'reconciling'
        | 'succeeded'
        | 'failed'
        | 'cancelled'
        | 'withdrawn';
      cancellationRequested: boolean;
      accepted?: boolean;
    }
  >;
  requests: Record<
    string,
    {
      id: string;
      kind: ThreadEventPayload['type'];
      actionId: string;
      revision: number;
      digest: string;
      expiresAt?: string;
      resolvedBy?: string;
      inputResolution?: 'answered' | 'expired' | 'cancelled';
    }
  >;
  deliveries: Record<string, ThreadEvent['delivery']>;
  createdAt: string;
};
export type ActThreadPage = ActThreadSnapshot & { events: ThreadEvent[]; hasMore: boolean };
export type ActThreadSummary = Omit<ActThreadSnapshot, 'capabilities' | 'operations' | 'requests' | 'deliveries'>;
export type ExecutableThreadCapability = {
  operationId: string;
  revision: number;
  title: string;
  inputSchema: Record<string, unknown>;
  outputSchema?: Record<string, unknown>;
  effect: 'read_only' | 'external_effect';
  requiresAuthentication: boolean;
  /** Owner-library source intake advertised only by the authenticated server. */
  ownerFileInputs?: { maxFiles: number; maxTotalBytes: number; mediaTypes: string[] };
};
