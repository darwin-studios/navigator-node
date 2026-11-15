import { z } from 'zod';

import { ACT_THREAD_RESPONSES, threadEventSchema } from './act-thread-responses.js';
import {
  acceptedPaymentRailsSchema,
  authenticationTypeSchema,
  threadContentPartSchema,
  threadMessagePartSchema,
} from './act-threads.js';
import { composerDeliverySchema, composerPresentationSchema } from './composer.js';

type ParsedThreadEvent = z.output<typeof threadEventSchema>;

const id = z
  .string()
  .min(1)
  .max(200)
  .regex(/^[A-Za-z0-9][A-Za-z0-9_.:-]*$/);
const cursor = z
  .string()
  .min(3)
  .max(200)
  .regex(/^.+:(0|[1-9][0-9]*)$/);

const simpleMutationResponseObjectSchema = z
  .object({
    thread: id,
    message: id,
    status: z.literal('accepted'),
    cursor,
    idempotencyKey: id,
  })
  .strict();

function validateMutationCursor(value: { thread: string; cursor: string }, context: z.RefinementCtx): void {
  if (!value.cursor.startsWith(`${value.thread}:`))
    context.addIssue({ code: 'custom', path: ['cursor'], message: 'Cursor must belong to the returned thread.' });
}

export const simpleThreadMutationResponseSchema =
  simpleMutationResponseObjectSchema.superRefine(validateMutationCursor);

const simpleThreadMessageBase = {
  message: id,
  from: z.enum(['you', 'agent', 'darwin']),
  content: z.array(threadContentPartSchema).max(20),
  status: z.enum(['accepted', 'delivered', 'failed', 'unknown']),
  createdAt: z.iso.datetime(),
};
const reviewArguments = z.record(z.string().min(1).max(200), z.json());

export const simpleThreadMessageSchema = z.discriminatedUnion('type', [
  z
    .object({ ...simpleThreadMessageBase, type: z.literal('input_response'), request: id, arguments: reviewArguments })
    .strict(),
  z
    .object({
      ...simpleThreadMessageBase,
      type: z.literal('message'),
      content: z.array(threadMessagePartSchema).max(20),
    })
    .strict(),
  z
    .object({
      ...simpleThreadMessageBase,
      type: z.literal('result'),
      data: z.json().optional().describe('Structured JSON returned by the action.'),
    })
    .strict(),
]);

export const simpleThreadActionSchema = z
  .object({
    action: id,
    capability: id,
    request: id,
    status: z.enum([
      'awaiting_confirmation',
      'queued',
      'running',
      'waiting',
      'reconciling',
      'succeeded',
      'failed',
      'cancelled',
      'withdrawn',
    ]),
    cancellationRequested: z.boolean(),
    accepted: z.boolean().optional(),
  })
  .strict();

export const simpleThreadErrorSchema = z
  .object({
    event: id,
    code: id,
    retryable: z.boolean(),
    action: id.optional(),
    createdAt: z.iso.datetime(),
  })
  .strict();

const requestStatus = z.enum([
  'pending',
  'resolved',
  'expired',
  'cancelled',
  'settled',
  'failed',
  'voided',
  'partially_refunded',
  'reversal_pending',
  'reversal_failed',
  'disputed',
  'refunded',
]);

const requestBase = {
  request: id,
  action: id,
  status: requestStatus,
};
const actionReview = {
  capability: id,
  arguments: reviewArguments,
  account: id.optional(),
};

/** Safe immutable terms required before a caller confirms, authenticates, or
 * pays. Every branch is strict and keyed by the durable request event type. */
export const simpleThreadRequestSchema = z.discriminatedUnion('type', [
  z
    .object({
      ...requestBase,
      type: z.literal('input_request'),
      capability: id,
      inputSchema: z.record(z.string(), z.json()),
      inputSchemaResources: z.record(z.string(), z.record(z.string(), z.json())).optional(),
      expiresAt: z.iso.datetime(),
    })
    .strict(),
  z.object({ ...requestBase, type: z.literal('action_request'), ...actionReview }).strict(),
  z
    .object({
      ...requestBase,
      type: z.literal('approval_request'),
      reason: z.string().min(1).max(2_000),
      expiresAt: z.iso.datetime(),
      ...actionReview,
    })
    .strict(),
  z
    .object({
      ...requestBase,
      type: z.literal('authentication_request'),
      targetAgent: id,
      authenticationType: authenticationTypeSchema,
      resource: z.url().max(2_000),
      scopes: z.array(z.string().min(1).max(200)).max(50),
      account: id.optional(),
    })
    .strict(),
  z
    .object({
      ...requestBase,
      type: z.literal('authentication_required'),
      targetAgent: id,
      scopes: z.array(z.string().min(1).max(200)).max(50),
      account: id.optional(),
      expiresAt: z.iso.datetime().optional(),
    })
    .strict(),
  z
    .object({
      ...requestBase,
      type: z.literal('payment_request'),
      amountMinor: z.string().regex(/^[1-9][0-9]{0,17}$/),
      currency: z.string().regex(/^[A-Z]{3}$/),
      payee: z.object({ agent: id, name: z.string().min(1).max(200) }).strict(),
      acceptedMethods: acceptedPaymentRailsSchema,
      expiresAt: z.iso.datetime(),
    })
    .strict(),
  z.object({ ...requestBase, type: z.literal('completion_request'), result: id }).strict(),
]);

export const simpleGetThreadResponseSchema = z
  .object({
    delivery: composerDeliverySchema.optional(),
    composer: composerPresentationSchema.optional(),
    thread: id,
    messages: z.array(simpleThreadMessageSchema).max(100),
    // Optional while API, MCP, and SDK deployments roll forward independently.
    errors: z
      .array(simpleThreadErrorSchema)
      .max(100)
      .optional()
      .describe('Error events in this page. Retryable does not authorize replaying an accepted effect or payment.'),
    // The strict snapshot carries current state for the whole thread, while
    // only the event page is capped at 100. Do not reject an otherwise valid
    // long-running thread because its state maps have grown past one page.
    actions: z.array(simpleThreadActionSchema),
    requests: z.array(simpleThreadRequestSchema),
    cursor,
    hasMore: z.boolean(),
    archived: z.boolean(),
    needsAttention: z.boolean(),
  })
  .strict()
  .superRefine(validateMutationCursor);

export const simpleThreadSummarySchema = z
  .object({
    thread: id,
    targetAgent: id,
    archived: z.boolean(),
    needsAttention: z.boolean(),
    createdAt: z.iso.datetime(),
  })
  .strict();

export const simpleListThreadsResponseSchema = z
  .object({
    threads: z.array(simpleThreadSummarySchema).max(100),
    cursor: id.nullable(),
  })
  .strict();

export const simpleArchiveThreadResponseSchema = z.object({ thread: id, archived: z.boolean() }).strict();

const authenticationResponseBase = {
  authentication: id,
  expiresAt: z.iso.datetime(),
  // Present for an idempotent authentication start. A status read has no
  // mutation key to return and deliberately omits it.
  idempotencyKey: id.optional(),
};
export const simpleAuthenticationResponseSchema = z.discriminatedUnion('status', [
  z
    .object({
      ...authenticationResponseBase,
      status: z.literal('awaiting_consent'),
      url: z.url().max(2048).optional(),
    })
    .strict(),
  z
    .object({
      ...authenticationResponseBase,
      status: z.enum(['authorizing', 'exchanging', 'expired', 'denied', 'failed']),
    })
    .strict(),
  z
    .object({
      ...authenticationResponseBase,
      status: z.literal('connected'),
      account: id,
    })
    .strict(),
]);

const paymentResponseBase = {
  payment: id,
  expiresAt: z.iso.datetime(),
  idempotencyKey: id,
};
export const simplePaymentResponseSchema = z.discriminatedUnion('status', [
  z
    .object({
      request: id,
      status: z.literal('selection_required'),
      expiresAt: z.iso.datetime(),
      url: z.url().max(2048),
      idempotencyKey: id,
    })
    .strict(),
  z
    .object({
      ...paymentResponseBase,
      status: z.enum(['prepared', 'dispatching', 'uncertain', 'pending']),
      url: z.url().max(2048),
    })
    .strict(),
  z
    .object({
      ...paymentResponseBase,
      status: z.enum(['settled', 'partially_refunded', 'reversal_pending', 'reversal_failed', 'disputed', 'refunded']),
      receipt: id,
    })
    .strict(),
  z
    .object({
      ...paymentResponseBase,
      status: z.enum(['failed', 'voided']),
    })
    .strict(),
]);

/** A read has no idempotency key. A pending handoff cannot look settled, and
 * a provider-confirmed receipt cannot appear on an unconfirmed state. */
export const simplePaymentStatusResponseSchema = z.discriminatedUnion('status', [
  z
    .object({
      payment: id,
      status: z.enum(['prepared', 'dispatching', 'uncertain', 'pending']),
      expiresAt: z.iso.datetime(),
      url: z.url().max(2048).optional(),
    })
    .strict(),
  z
    .object({
      payment: id,
      status: z.enum(['settled', 'partially_refunded', 'reversal_pending', 'reversal_failed', 'disputed', 'refunded']),
      expiresAt: z.iso.datetime(),
      receipt: id,
    })
    .strict(),
  z.object({ payment: id, status: z.enum(['failed', 'voided']), expiresAt: z.iso.datetime() }).strict(),
]);

export const SIMPLE_ACT_RESPONSES = {
  start_thread: simpleThreadMutationResponseSchema,
  send_message: simpleThreadMutationResponseSchema,
  get_thread: simpleGetThreadResponseSchema,
  list_threads: simpleListThreadsResponseSchema,
  archive_thread: simpleArchiveThreadResponseSchema,
  authenticate: simpleAuthenticationResponseSchema,
  pay: simplePaymentResponseSchema,
} as const;

export function projectSimpleStartThreadResponse(snapshot: unknown, acceptedMessage: unknown, idempotencyKey: string) {
  const thread = ACT_THREAD_RESPONSES.start_thread.parse(snapshot);
  return projectSimpleSendMessageResponse(thread.threadId, acceptedMessage, idempotencyKey);
}

export function projectSimpleSendMessageResponse(threadId: string, acceptedMessage: unknown, idempotencyKey: string) {
  const thread = id.parse(threadId);
  const accepted = ACT_THREAD_RESPONSES.send_message.parse(acceptedMessage);
  return simpleThreadMutationResponseSchema.parse({
    thread,
    message: accepted.eventId,
    status: accepted.delivery,
    cursor: accepted.cursor,
    idempotencyKey,
  });
}

function publicSender(sender: 'acting_ai' | 'target_ai' | 'runtime'): 'you' | 'agent' | 'darwin' {
  return sender === 'acting_ai' ? 'you' : sender === 'target_ai' ? 'agent' : 'darwin';
}

function publicRequestStatus(request: {
  resolvedBy?: string;
  inputResolution?: 'answered' | 'expired' | 'cancelled';
  paymentResolution?: 'expired' | 'cancelled' | 'settled';
  paymentStatus?: z.infer<typeof requestStatus>;
}): z.infer<typeof requestStatus> {
  return (
    request.paymentStatus ??
    request.paymentResolution ??
    (request.inputResolution === 'answered' ? 'resolved' : request.inputResolution) ??
    (request.resolvedBy ? 'resolved' : 'pending')
  );
}

function isPrivateArgumentKey(key: string): boolean {
  const normalized = key.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return (
    ['authorization', 'cookie', 'cvv', 'cvc', 'passcode', 'cardnumber', 'instrumentref', 'merchantaccountid'].includes(
      normalized,
    ) ||
    ['token', 'secret', 'password', 'credential', 'apikey', 'privatekey', 'providerkey', 'providerref'].some((suffix) =>
      normalized.endsWith(suffix),
    )
  );
}

function safeReviewArguments(value: unknown): z.infer<typeof reviewArguments> {
  const parsed = reviewArguments.parse(value);
  const pending: unknown[] = [parsed];
  while (pending.length) {
    const current = pending.pop();
    if (Array.isArray(current)) pending.push(...current);
    else if (current && typeof current === 'object') {
      for (const [key, child] of Object.entries(current)) {
        if (isPrivateArgumentKey(key)) throw new Error('unsafe_public_act_review_arguments');
        pending.push(child);
      }
    }
  }
  return parsed;
}

function reviewEventKey(event: ParsedThreadEvent): string {
  return event.payload.type === 'payment_request' ? event.payload.paymentRequestId : event.id;
}

export function projectSimpleGetThreadResponse(value: unknown, rawReviewEvents: unknown = []) {
  const page = ACT_THREAD_RESPONSES.get_thread.parse(value);
  const reviewEvents = z.array(threadEventSchema).max(1_000).parse(rawReviewEvents);
  const reviewByRequest = new Map<string, ParsedThreadEvent>();
  const reviewByEvent = new Map<string, ParsedThreadEvent>();
  for (const event of reviewEvents) {
    if (event.threadId !== page.threadId || event.revision > page.revision)
      throw new Error('invalid_public_act_review_event');
    reviewByEvent.set(event.id, event);
    reviewByRequest.set(reviewEventKey(event), event);
  }
  const messages = page.events.flatMap<z.infer<typeof simpleThreadMessageSchema>>((event) => {
    if (event.payload.type === 'input_response')
      return [
        {
          message: event.id,
          from: 'you' as const,
          type: 'input_response' as const,
          request: event.payload.requestId,
          arguments: safeReviewArguments(event.payload.arguments),
          content: [],
          status: event.delivery,
          createdAt: event.createdAt,
        },
      ];
    if (event.payload.type !== 'message' && event.payload.type !== 'result') return [];
    if (event.sender !== 'acting_ai' && event.sender !== 'target_ai' && event.sender !== 'runtime') return [];
    const common = {
      message: event.id,
      from: publicSender(event.sender),
      status: event.delivery,
      createdAt: event.createdAt,
    };
    if (event.payload.type === 'message') return [{ ...common, type: 'message', content: event.payload.parts }];
    return [
      {
        ...common,
        type: 'result',
        content: event.payload.parts,
        ...(event.payload.data !== undefined ? { data: event.payload.data } : {}),
      },
    ];
  });
  const errors = page.events.flatMap((event) =>
    event.payload.type === 'error'
      ? [
          {
            event: event.id,
            code: event.payload.code,
            retryable: event.payload.retryable,
            ...(event.payload.actionId ? { action: event.payload.actionId } : {}),
            createdAt: event.createdAt,
          },
        ]
      : [],
  );
  const actions = Object.values(page.operations).map((operation) => {
    const confirmation = page.requests[operation.requestId]?.resolvedBy;
    // Delivery may be recorded against the request or its confirmation event.
    // A confirmed outcome takes precedence over a stale unknown request.
    const delivery = (confirmation ? page.deliveries[confirmation] : undefined) ?? page.deliveries[operation.requestId];
    const status =
      (operation.status === 'queued' || operation.status === 'running') && delivery === 'unknown'
        ? 'reconciling'
        : operation.status;
    return {
      action: operation.id,
      capability: operation.operationId,
      request: operation.requestId,
      status,
      cancellationRequested: operation.cancellationRequested,
      ...(operation.accepted === undefined ? {} : { accepted: operation.accepted }),
    };
  });
  const requests = Object.values(page.requests).map((request) => {
    const event = reviewByRequest.get(request.id);
    if (!event || event.payload.type !== request.kind) throw new Error('missing_public_act_review_event');
    const base = {
      request: request.id,
      type: request.kind,
      action: request.actionId,
      status: publicRequestStatus(request),
    };
    switch (event.payload.type) {
      case 'input_request': {
        const operation = page.operations[request.actionId];
        if (!operation) throw new Error('missing_public_act_input_operation');
        return {
          ...base,
          type: event.payload.type,
          capability: operation.operationId,
          inputSchema: event.payload.inputSchema,
          ...(event.payload.inputSchemaResources ? { inputSchemaResources: event.payload.inputSchemaResources } : {}),
          expiresAt: event.payload.expiresAt,
        };
      }
      case 'action_request':
        return {
          ...base,
          type: event.payload.type,
          capability: event.payload.operationId,
          arguments: safeReviewArguments(event.payload.arguments),
          ...(event.payload.accountId ? { account: event.payload.accountId } : {}),
        };
      case 'approval_request': {
        const operation = page.operations[request.actionId];
        const actionEvent = operation ? reviewByEvent.get(operation.requestId) : undefined;
        if (!operation || !actionEvent || actionEvent.payload.type !== 'action_request')
          throw new Error('missing_public_act_action_review');
        return {
          ...base,
          type: event.payload.type,
          reason: event.payload.reason,
          expiresAt: event.payload.expiresAt,
          capability: actionEvent.payload.operationId,
          arguments: safeReviewArguments(actionEvent.payload.arguments),
          ...(actionEvent.payload.accountId ? { account: actionEvent.payload.accountId } : {}),
        };
      }
      case 'authentication_request':
        return {
          ...base,
          type: event.payload.type,
          targetAgent: event.payload.targetAiId,
          authenticationType: event.payload.authType,
          resource: event.payload.resource,
          scopes: event.payload.scopes,
          ...(event.payload.accountId ? { account: event.payload.accountId } : {}),
        };
      case 'authentication_required':
        return {
          ...base,
          type: event.payload.type,
          targetAgent: event.payload.targetAiId,
          scopes: event.payload.scopes,
          ...(event.payload.accountId ? { account: event.payload.accountId } : {}),
          ...(event.payload.expiresAt ? { expiresAt: event.payload.expiresAt } : {}),
        };
      case 'payment_request':
        return {
          ...base,
          type: event.payload.type,
          amountMinor: event.payload.amountMinor,
          currency: event.payload.currency,
          payee: { agent: event.payload.payeeId, name: event.payload.payeeName },
          acceptedMethods: event.payload.acceptedMethods,
          expiresAt: event.payload.expiresAt,
        };
      case 'completion_request': {
        const operation = page.operations[request.actionId];
        if (!operation?.resultEventId) throw new Error('missing_public_act_result_review');
        return { ...base, type: event.payload.type, result: operation.resultEventId };
      }
      default:
        throw new Error('unsupported_public_act_review_event');
    }
  });
  return simpleGetThreadResponseSchema.parse({
    thread: page.threadId,
    messages,
    errors,
    actions,
    requests,
    cursor: page.cursor,
    hasMore: page.hasMore,
    archived: page.archived,
    needsAttention: page.attention,
  });
}

export function projectSimpleListThreadsResponse(value: unknown) {
  const response = ACT_THREAD_RESPONSES.list_threads.parse(value);
  return simpleListThreadsResponseSchema.parse({
    threads: response.threads.map((thread) => ({
      thread: thread.threadId,
      targetAgent: thread.targetAiId,
      archived: thread.archived,
      needsAttention: thread.attention,
      createdAt: thread.createdAt,
    })),
    cursor: response.nextCursor,
  });
}

export function projectSimpleArchiveThreadResponse(value: unknown) {
  const response = ACT_THREAD_RESPONSES.archive_thread.parse(value);
  return simpleArchiveThreadResponseSchema.parse({ thread: response.threadId, archived: response.archived });
}

export function projectSimpleAuthenticationResponse(value: unknown, idempotencyKey?: string) {
  const response = ACT_THREAD_RESPONSES.authenticate.parse(value);
  const common = {
    authentication: response.authenticationId,
    status: response.status,
    expiresAt: response.expiresAt,
    ...(idempotencyKey === undefined ? {} : { idempotencyKey }),
  };
  if (response.status === 'awaiting_consent')
    return simpleAuthenticationResponseSchema.parse({
      ...common,
      ...(response.authorizationUrl === undefined ? {} : { url: response.authorizationUrl }),
    });
  if (response.status === 'connected')
    return simpleAuthenticationResponseSchema.parse({ ...common, account: response.accountId });
  return simpleAuthenticationResponseSchema.parse(common);
}

export function projectSimplePaymentResponse(value: unknown, idempotencyKey: string) {
  const response = ACT_THREAD_RESPONSES.pay.parse(value);
  const common = {
    payment: response.paymentId,
    status: response.status,
    expiresAt: response.expiresAt,
    idempotencyKey,
  };
  if (
    response.status === 'prepared' ||
    response.status === 'dispatching' ||
    response.status === 'uncertain' ||
    response.status === 'pending'
  )
    return simplePaymentResponseSchema.parse({ ...common, url: response.paymentUrl });
  if (
    response.status === 'settled' ||
    response.status === 'partially_refunded' ||
    response.status === 'reversal_pending' ||
    response.status === 'reversal_failed' ||
    response.status === 'disputed' ||
    response.status === 'refunded'
  )
    return simplePaymentResponseSchema.parse({ ...common, receipt: response.receiptId });
  return simplePaymentResponseSchema.parse(common);
}
