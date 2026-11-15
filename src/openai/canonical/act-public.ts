import { z } from 'zod';

import { composerAudienceSchema } from './composer.js';

/** The small caller-facing Act facade. Durable storage remains act-threads-v1. */
export const PUBLIC_ACT_CONTRACT_VERSION = 'act-public-v1' as const;

const id = z
  .string()
  .min(1)
  .max(200)
  .regex(/^[A-Za-z0-9][A-Za-z0-9_.:-]*$/);
const jsonObject = z.record(z.string().max(200), z.json());
const agent = id.optional();
const idempotencyKey = id.optional();
export const publicActIdempotencyKeySchema = id;

export const publicThreadAttachmentSchema = z.union([
  z
    .object({
      type: z.enum(['image', 'audio', 'video', 'file']),
      asset: id,
    })
    .strict(),
  z
    .object({
      type: z.literal('owner_file'),
      input: z
        .string()
        .max(8192)
        .regex(/^ofi_[A-Za-z0-9_-]+$/),
    })
    .strict(),
]);

const actionRequestContent = z
  .object({
    operationId: id.describe('Exact executable operation identifier returned by Search or get_thread.'),
    arguments: jsonObject.describe(
      'Arguments for that operation, matching its advertised input schema. Never include credentials or payment details.',
    ),
    account: id
      .optional()
      .describe('Optional saved external-account reference. This is an opaque Darwin ID, never a token or secret.'),
  })
  .strict();
const requestContent = z
  .object({
    request: id.describe('Exact immutable request identifier returned by get_thread.'),
  })
  .strict();
const approvalConfirmationContent = z
  .object({
    request: id.describe('Exact immutable approval request identifier returned by get_thread.'),
    decision: z
      .enum(['allow', 'deny'])
      .describe(
        'Approval decision: allow authorizes only the referenced request; deny rejects only that request. Neither value substitutes for another request type.',
      ),
  })
  .strict();
const inputResponseContent = z
  .object({
    request: id.describe('Exact pending input request returned by get_thread.'),
    arguments: jsonObject.describe(
      'Requested information matching that request schema. This continues the same operation; it is not a new action.',
    ),
  })
  .strict();
const cancellationRequestContent = z
  .object({
    actionId: id.describe(
      'Exact in-flight action identifier returned by get_thread whose cancellation should be requested.',
    ),
  })
  .strict();

export const PUBLIC_SEND_MESSAGE_TYPES = [
  'message',
  'action_request',
  'action_confirmation',
  'approval_confirmation',
  'input_response',
  'completion_confirmation',
  'cancellation_request',
] as const;

export const publicStartThreadSchema = z.discriminatedUnion('messageType', [
  z
    .object({
      targetAgent: id,
      messageType: z.literal('message'),
      messageContent: z.string().min(1).max(32_000),
      agent,
      operationId: id.optional(),
      idempotencyKey,
    })
    .strict(),
  z
    .object({
      targetAgent: id,
      messageType: z.literal('action_request'),
      messageContent: actionRequestContent,
      agent,
      discoveryPreflight: id
        .optional()
        .describe('Exact no-effect protected discovery reference. Connection alone never starts an action.'),
      idempotencyKey,
    })
    .strict(),
]);

export const publicSendMessageSchema = z.discriminatedUnion('messageType', [
  z
    .object({
      thread: id,
      messageType: z.literal('input_response'),
      messageContent: inputResponseContent,
      agent,
      idempotencyKey,
    })
    .strict(),
  z
    .object({
      thread: id,
      messageType: z.literal('message').describe('Ordinary conversation content with no approval authority.'),
      messageContent: z
        .string()
        .min(1)
        .max(32_000)
        .describe(
          'Non-empty text. Plain text never approves an action, permission, completion, cancellation, or payment.',
        ),
      agent,
      attachments: z.array(publicThreadAttachmentSchema).max(19).optional(),
      idempotencyKey,
    })
    .strict(),
  z
    .object({
      thread: id,
      messageType: z.literal('action_request').describe('Request execution of one exact advertised operation.'),
      messageContent: actionRequestContent.describe(
        'Object with the exact operationId and schema-valid arguments; use account only as an opaque saved-account reference.',
      ),
      agent,
      idempotencyKey,
    })
    .strict(),
  z
    .object({
      thread: id,
      messageType: z
        .literal('action_confirmation')
        .describe('Authorize the exact proposed external effect referenced by request.'),
      messageContent: requestContent.describe(
        'Object containing only the exact action request ID returned by get_thread. It does not authorize later changes.',
      ),
      agent,
      idempotencyKey,
    })
    .strict(),
  z
    .object({
      thread: id,
      messageType: z
        .literal('approval_confirmation')
        .describe('Allow or deny one additional permission request after reviewing it.'),
      messageContent: approvalConfirmationContent.describe(
        'Object with the exact approval request ID and decision allow or deny. Plain text cannot replace this confirmation.',
      ),
      agent,
      idempotencyKey,
    })
    .strict(),
  z
    .object({
      thread: id,
      messageType: z
        .literal('completion_confirmation')
        .describe('Record acceptance of a presented result; this never authorizes a new external effect.'),
      messageContent: requestContent.describe(
        'Object containing only the exact completion request ID returned by get_thread.',
      ),
      agent,
      idempotencyKey,
    })
    .strict(),
  z
    .object({
      thread: id,
      messageType: z
        .literal('cancellation_request')
        .describe('Ask the provider to cancel one exact operation; the request alone does not prove cancellation.'),
      messageContent: cancellationRequestContent.describe(
        'Object containing only the exact operation ID. Wait for provider-confirmed cancellation in get_thread.',
      ),
      agent,
      idempotencyKey,
    })
    .strict(),
]);

/**
 * MCP discovery needs one object whose bounded modes are visible to policy
 * scanners. Calls are still parsed with publicSendMessageSchema before they
 * cross the Darwin API boundary, so mismatched messageType/messageContent
 * combinations advertised by this structural envelope are rejected safely.
 */
export const publicSendMessageMcpSchema = z
  .object({
    thread: id.describe('Authorized thread identifier returned by start_thread, get_thread, or list_threads.'),
    messageType: z
      .enum(PUBLIC_SEND_MESSAGE_TYPES)
      .describe(
        'Typed event mode. Supported values are message, action_request, action_confirmation, approval_confirmation, input_response, completion_confirmation, and cancellation_request.',
      ),
    messageContent: z
      .union([
        z.string().min(1).max(32_000),
        actionRequestContent,
        requestContent,
        approvalConfirmationContent,
        inputResponseContent,
        cancellationRequestContent,
      ])
      .describe(
        'Content required by messageType: message uses non-empty text; action_request uses {operationId, arguments, account?}; action_confirmation and completion_confirmation use {request}; approval_confirmation uses {request, decision} with decision allow or deny; input_response uses {request, arguments} for one pending input request; cancellation_request uses {actionId}. Exact request, action, and operation IDs must come from get_thread. Never place credentials, payment details, or approval authority in text.',
      ),
    agent: agent.describe("Optional authorized Darwin AI. Omit to use the caller's active AI."),
    attachments: z
      .array(publicThreadAttachmentSchema)
      .max(19)
      .optional()
      .describe(
        'Optional Darwin asset references, allowed only with messageType message; never inline base64 or secrets.',
      ),
    idempotencyKey: idempotencyKey.describe(
      'Optional caller-generated retry key. Reuse it only for an unchanged retry after an unknown outcome.',
    ),
  })
  .strict();

export const publicGetThreadSchema = z
  .object({
    audience: composerAudienceSchema.optional(),
    thread: id.describe('Exact owner-scoped thread identifier to read.'),
    agent,
    cursor: id.optional().describe('Opaque cursor from the previous page.'),
    wait: z.boolean().optional().describe('Wait briefly for new thread events when none are currently available.'),
    limit: z.number().int().min(1).max(100).optional().describe('Maximum entries to return, from 1 to 100.'),
  })
  .strict();

export const publicListThreadsSchema = z
  .object({
    agent,
    targetAgent: id.optional().describe('Filter history to threads with this target agent identifier.'),
    needsAttention: z.boolean().optional().describe('Filter by whether a thread needs attention from the caller.'),
    archived: z.boolean().optional().describe('Filter by archived state; omit to use the default history view.'),
    cursor: id.optional().describe('Opaque cursor from the previous page.'),
    limit: z.number().int().min(1).max(100).optional().describe('Maximum entries to return, from 1 to 100.'),
  })
  .strict();

export const publicArchiveThreadSchema = z.object({ thread: id, agent }).strict();

export const publicAuthenticateSchema = z
  .object({
    request: id,
    idempotencyKey,
  })
  .strict();

export const publicPaySchema = z
  .object({
    request: id,
    idempotencyKey,
  })
  .strict();

export const ACT_THREAD_PUBLIC_OPERATIONS = {
  start_thread: {
    title: 'Start thread',
    method: 'POST',
    path: '/v2/act/threads',
    scope: 'agent:write',
    description:
      "Start a private thread and atomically send its first message. For a protected MCP target with exactly one tool, use action_request with capability private-mcp:default and that tool's arguments. Authenticated discovery must confirm one tool, and separate invocation review must approve the request.",
    annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: true, openWorldHint: true },
    schema: publicStartThreadSchema,
  },
  send_message: {
    title: 'Send message',
    method: 'POST',
    path: '/v2/act/threads/{thread}/messages',
    scope: 'agent:write',
    description:
      'Append one typed event to an authorized thread. Use message for ordinary text; action_request for one advertised capability; action_confirmation for the exact proposed external effect; approval_confirmation with decision allow or deny for one additional permission; completion_confirmation to accept a result without authorizing a new effect; or cancellation_request to ask the provider to cancel one operation. Exact request and operation IDs must come from get_thread. Plain text never grants authority, a cancellation request is not confirmed cancellation, and durable acceptance is not remote completion.',
    annotations: { readOnlyHint: false, destructiveHint: true, idempotentHint: true, openWorldHint: true },
    schema: publicSendMessageSchema,
  },
  get_thread: {
    title: 'Get thread',
    method: 'GET',
    path: '/v2/act/threads/{thread}',
    scope: 'agent:read',
    description: 'Read a thread, optionally waiting for new events.',
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
    schema: publicGetThreadSchema,
  },
  list_threads: {
    title: 'List threads',
    method: 'GET',
    path: '/v2/act/threads',
    scope: 'agent:read',
    description: 'List private threads with simple target, attention and archive filters.',
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
    schema: publicListThreadsSchema,
  },
  archive_thread: {
    title: 'Archive thread',
    method: 'POST',
    path: '/v2/act/threads/{thread}/archive',
    scope: 'agent:write',
    description: 'Archive a thread without cancelling its work.',
    annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: true, openWorldHint: false },
    schema: publicArchiveThreadSchema,
  },
  authenticate: {
    title: 'Authenticate',
    method: 'POST',
    path: '/v2/act/authentications',
    scope: 'connections:write',
    description: 'Start hosted authentication for a thread request.',
    annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: true },
    schema: publicAuthenticateSchema,
  },
  pay: {
    title: 'Pay',
    method: 'POST',
    path: '/v2/act/payments',
    scope: 'agent:write',
    description: 'Open hosted selection for an immutable payment request.',
    annotations: { readOnlyHint: false, destructiveHint: true, idempotentHint: true, openWorldHint: true },
    schema: publicPaySchema,
  },
} as const;

/** The account-authorized MCP surface omits the legacy acting-AI selector.
 * REST keeps accepting that field during the ownership migration. */
export const ACCOUNT_ACT_MCP_SCHEMAS = {
  start_thread: z.discriminatedUnion('messageType', [
    publicStartThreadSchema.options[0].omit({ agent: true }),
    publicStartThreadSchema.options[1].omit({ agent: true }),
  ]),
  send_message: publicSendMessageMcpSchema.omit({ agent: true }),
  get_thread: publicGetThreadSchema.omit({ agent: true }),
  list_threads: publicListThreadsSchema.omit({ agent: true }),
  archive_thread: publicArchiveThreadSchema.omit({ agent: true }),
  authenticate: publicAuthenticateSchema,
  pay: publicPaySchema,
} as const;

export type PublicActOperation = keyof typeof ACT_THREAD_PUBLIC_OPERATIONS;
export type PublicStartThread = z.infer<typeof publicStartThreadSchema>;
export type PublicSendMessage = z.infer<typeof publicSendMessageSchema>;
