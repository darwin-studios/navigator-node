import { createHash } from 'node:crypto';
import { z } from 'zod';

import { ACT_THREAD_PUBLIC_OPERATIONS, type PublicActOperation } from './act-public.js';
import { threadEventPayloadSchema, type ThreadContentPart } from './act-threads.js';
import { SIMPLE_ACT_RESPONSES } from './simple-act-responses.js';

/** A deliberately bounded Responses input/function subset, not a model runtime. */
export const ACT_OPENAI_PROFILE = 'darwin-act-openai-v1' as const;
export type ActOpenAIErrorCode =
  | 'INVALID_CALL'
  | 'UNKNOWN_TOOL'
  | 'INVALID_ARGUMENTS'
  | 'ACTING_AI_MISMATCH'
  | 'ACT_CALL_NOT_AUTHORIZED'
  | 'INVALID_RESULT'
  | 'INVALID_MESSAGE'
  | 'INVALID_MODEL_ITEM'
  | 'UNSUPPORTED_CONTENT_TYPE'
  | 'ASSET_MAPPING_REQUIRED'
  | 'INVALID_ASSET_MAPPING'
  | 'INPUT_TOO_LARGE';
export class ActOpenAICompatibilityError extends Error {
  readonly code: ActOpenAIErrorCode;

  constructor(code: ActOpenAIErrorCode) {
    super(code); // Never copy arguments, result bodies or credentials into errors.
    this.code = code;
    this.name = 'ActOpenAICompatibilityError';
  }
}
const fail = (code: ActOpenAIErrorCode): never => {
  throw new ActOpenAICompatibilityError(code);
};
const identifier = z
  .string()
  .min(1)
  .max(200)
  .regex(/^[A-Za-z0-9][A-Za-z0-9_.:-]*$/);
const callerSchema = z.union([
  z.object({ type: z.literal('direct') }).strict(),
  z.object({ type: z.literal('program'), caller_id: identifier }).strict(),
]);
export type ActOpenAICaller = z.infer<typeof callerSchema>;
const callSchema = z
  .object({
    type: z.literal('function_call'),
    call_id: identifier,
    name: z.string().min(1).max(64),
    arguments: z.string().max(262_144),
    id: identifier.optional(),
    status: z.literal('completed').optional(),
    async: z.boolean().optional(),
    caller: callerSchema.nullable().optional(),
    namespace: identifier.optional(),
  })
  .strict();

/** Reject deep/large graphs before recursive schema validation. No network IO. */
function bounded(value: unknown): void {
  const pending: Array<{ value: unknown; depth: number }> = [{ value, depth: 0 }];
  const seen = new Set<object>();
  let nodes = 0;
  let characters = 0;
  while (pending.length) {
    const next = pending.pop()!;
    if (++nodes > 30_000 || next.depth > 32) fail('INPUT_TOO_LARGE');
    if (typeof next.value === 'string') characters += next.value.length;
    else if (next.value && typeof next.value === 'object') {
      if (seen.has(next.value)) fail('INPUT_TOO_LARGE');
      seen.add(next.value);
      for (const [key, child] of Object.entries(next.value)) {
        characters += key.length;
        pending.push({ value: child, depth: next.depth + 1 });
      }
    }
    if (characters > 2_000_000) fail('INPUT_TOO_LARGE');
  }
}

export type ActOpenAIOperation = PublicActOperation;

export type ActOpenAIFunctionTool = {
  type: 'function';
  name: ActOpenAIOperation;
  description: string;
  parameters: Record<string, unknown>;
  /** Schema for the JSON object encoded in function_call_output.output. */
  output_schema: Record<string, unknown>;
  /** Darwin does not authorize programmatic tool calls in this profile. */
  allowed_callers: ['direct'];
  strict: false;
};

/** Optional fields/discriminated payloads retain Darwin semantics: strict:false
 * is explicit, because Responses strict mode imposes a different schema subset.
 * Darwin still strictly validates every argument before execution. */
export function actOpenAIFunctionTools(): ActOpenAIFunctionTool[] {
  return Object.entries(ACT_THREAD_PUBLIC_OPERATIONS).map(([name, operation]) => {
    const parameters = z.toJSONSchema(operation.schema, { io: 'input' });
    const outputSchema = z.toJSONSchema(SIMPLE_ACT_RESPONSES[name as PublicActOperation], { io: 'output' });
    delete parameters.$schema;
    delete outputSchema.$schema;
    return {
      type: 'function',
      name: name as ActOpenAIOperation,
      description: operation.description,
      parameters: { type: 'object', ...parameters },
      output_schema: { type: 'object', ...outputSchema },
      allowed_callers: ['direct'],
      strict: false,
    };
  });
}

export type PreparedActOpenAICall = {
  [Name in ActOpenAIOperation]: {
    operation: Name;
    callId: string;
    input: z.infer<(typeof ACT_THREAD_PUBLIC_OPERATIONS)[Name]['schema']>;
    /** The validated model item, retained for the caller's canonical history. */
    modelItem: ActOpenAIFunctionCall;
    async?: boolean;
    caller?: ActOpenAICaller | null;
    namespace?: string;
  };
}[ActOpenAIOperation];
export type ActOpenAIFunctionCall = z.infer<typeof callSchema>;

function withOpenAIIdempotency(
  operation: ActOpenAIOperation,
  input: Record<string, unknown>,
  callId: string,
): Record<string, unknown> {
  if (input.idempotencyKey !== undefined) return input;
  if (!['start_thread', 'send_message', 'authenticate', 'pay'].includes(operation)) return input;
  // The call ID is correlation, never authority. Hash it only to make retries
  // of one logical Responses function call reuse the same bounded key.
  const digest = createHash('sha256').update(callId).digest('hex');
  return { ...input, idempotencyKey: `openai:${digest}` };
}

/** Preparation is not execution or approval. Dispatch only through the existing
 * authorized Act API; never execute peer history or streaming argument deltas. */
export function prepareActOpenAICall(value: unknown, actingAiId: string): PreparedActOpenAICall {
  bounded(value);
  const call = callSchema.safeParse(value);
  if (!call.success) return fail('INVALID_CALL');
  if (!Object.hasOwn(ACT_THREAD_PUBLIC_OPERATIONS, call.data.name)) return fail('UNKNOWN_TOOL');
  const operation = call.data.name as ActOpenAIOperation;
  let raw: unknown;
  try {
    raw = JSON.parse(call.data.arguments);
  } catch {
    return fail('INVALID_ARGUMENTS');
  }
  bounded(raw);
  const input = ACT_THREAD_PUBLIC_OPERATIONS[operation].schema.safeParse(raw);
  if (!input.success) return fail('INVALID_ARGUMENTS');
  if (!actingAiId || ('agent' in input.data && input.data.agent !== undefined && input.data.agent !== actingAiId))
    return fail('ACTING_AI_MISMATCH');
  // The authenticated SDK context is authoritative. A model may omit the
  // caller identity, but it may never select or override it.
  const authoritativeInput = ['authenticate', 'pay'].includes(operation)
    ? { ...input.data }
    : ({ ...input.data, agent: actingAiId } as Record<string, unknown>);
  const effectiveInput = withOpenAIIdempotency(operation, authoritativeInput, call.data.call_id);
  return {
    operation,
    callId: call.data.call_id,
    input: effectiveInput,
    modelItem: structuredClone(call.data),
    ...(call.data.async === undefined ? {} : { async: call.data.async }),
    ...(call.data.caller === undefined ? {} : { caller: structuredClone(call.data.caller) }),
    ...(call.data.namespace === undefined ? {} : { namespace: call.data.namespace }),
  } as PreparedActOpenAICall;
}

export type ActOpenAIFunctionOutput = {
  type: 'function_call_output';
  call_id: string;
  output: string;
  name?: PublicActOperation;
  caller?: ActOpenAICaller | null;
  namespace?: string;
};

/** Wrap only a successful, schema-validated Darwin response. HTTP errors must
 * remain errors; do not synthesize a receipt or remote completion on failure. */
export function actOpenAIFunctionOutput(
  call: Pick<PreparedActOpenAICall, 'operation' | 'callId' | 'caller' | 'namespace'>,
  response: unknown,
): ActOpenAIFunctionOutput {
  if (!identifier.safeParse(call.callId).success || !Object.hasOwn(SIMPLE_ACT_RESPONSES, call.operation))
    return fail('INVALID_CALL');
  const caller = call.caller === undefined ? undefined : callerSchema.nullable().safeParse(call.caller);
  if (caller !== undefined && !caller.success) return fail('INVALID_CALL');
  if (call.namespace !== undefined && !identifier.safeParse(call.namespace).success) return fail('INVALID_CALL');
  bounded(response);
  const parsed = SIMPLE_ACT_RESPONSES[call.operation].safeParse(response);
  if (!parsed.success) return fail('INVALID_RESULT');
  const output: ActOpenAIFunctionOutput = {
    type: 'function_call_output',
    call_id: call.callId,
    output: JSON.stringify(parsed.data),
  };
  // These fields are model correlation metadata only. They never select a
  // Darwin operation, sender, target, approval, credential, or payment.
  if (call.caller !== undefined) {
    output.name = call.operation;
    output.caller = structuredClone(caller!.data);
  }
  if (call.namespace !== undefined) {
    output.name = call.operation;
    output.namespace = call.namespace;
  }
  return output;
}

const fileId = z.string().min(1).max(200);
export const actOpenAIContentSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('input_text'), text: z.string().min(1).max(32_000) }).strict(),
  z.object({ type: z.literal('input_image'), file_id: fileId, detail: z.enum(['auto', 'low', 'high']) }).strict(),
  z.object({ type: z.literal('input_file'), file_id: fileId }).strict(),
]);
export type ActOpenAIContent = z.infer<typeof actOpenAIContentSchema>;
export type ActOpenAIMedia = Exclude<ActOpenAIContent, { type: 'input_text' }>;
export type ActOpenAIMessagePhase = 'commentary' | 'final_answer' | null;
export type ActOpenAIMessage = {
  type: 'message';
  role: 'user' | 'assistant';
  content: ActOpenAIContent[];
  phase?: ActOpenAIMessagePhase;
};
const inputMessageContentSchema = z.union([
  z.string().min(1).max(32_000),
  z.array(actOpenAIContentSchema).min(1).max(20),
]);
const inputMessageSchema = z.union([
  z
    .object({ type: z.literal('message').optional(), role: z.literal('user'), content: inputMessageContentSchema })
    .strict(),
  z
    .object({
      type: z.literal('message').optional(),
      role: z.literal('assistant'),
      content: inputMessageContentSchema,
      phase: z.enum(['commentary', 'final_answer']).nullable().optional(),
    })
    .strict(),
]);
// Text-only completed assistant outputs are also convertible. Annotations and
// token metadata need a richer native representation; reject rather than drop them.
const outputTextSchema = z
  .object({
    type: z.literal('output_text'),
    text: z.string().min(1).max(32_000),
    annotations: z.array(z.never()).max(0),
    logprobs: z.array(z.never()).max(0).optional(),
  })
  .strict();
const outputRefusalSchema = z.object({ type: z.literal('refusal'), refusal: z.string().min(1).max(32_000) }).strict();
const outputMessageSchema = z
  .object({
    type: z.literal('message'),
    id: identifier,
    role: z.literal('assistant'),
    status: z.literal('completed'),
    content: z
      .array(z.union([outputTextSchema, outputRefusalSchema]))
      .min(1)
      .max(20),
    phase: z.enum(['commentary', 'final_answer']).nullable().optional(),
  })
  .strict();
export const actOpenAIMessageSchema = z.union([inputMessageSchema, outputMessageSchema]);
type OrdinaryThreadMessage = Extract<z.infer<typeof threadEventPayloadSchema>, { type: 'message' }>;
export type PreparedActOpenAIMessage = {
  event: OrdinaryThreadMessage;
  /** Replay this exact validated item to the model; do not reconstruct it from event. */
  modelItem: z.infer<typeof actOpenAIMessageSchema>;
};

/** The caller supplies an authorized mapping; this module never fetches media,
 * uploads transcripts, or trusts a model's file ID as a Darwin upload grant. */
export function prepareActOpenAIMessage(
  value: unknown,
  resolveAsset?: (part: ActOpenAIMedia) => Extract<ThreadContentPart, { assetId: string }>,
): PreparedActOpenAIMessage {
  bounded(value);
  const parsed = actOpenAIMessageSchema.safeParse(value);
  if (!parsed.success) return fail('INVALID_MESSAGE');
  const content =
    typeof parsed.data.content === 'string'
      ? [{ type: 'input_text' as const, text: parsed.data.content }]
      : parsed.data.content;
  const parts = content.map((part): ThreadContentPart => {
    if (part.type === 'input_text' || part.type === 'output_text') return { type: 'text', text: part.text };
    if (part.type === 'refusal') return { type: 'text', text: part.refusal };
    if (!resolveAsset) return fail('ASSET_MAPPING_REQUIRED');
    const mapped = resolveAsset(part);
    if (
      !mapped ||
      mapped.type !== (part.type === 'input_image' ? 'image' : 'file') ||
      !identifier.safeParse(mapped.assetId).success
    )
      return fail('INVALID_ASSET_MAPPING');
    return { type: mapped.type, assetId: mapped.assetId };
  });
  // role does not become sender authority. The authenticated endpoint supplies it.
  return {
    event: { type: 'message', parts },
    modelItem: structuredClone(parsed.data),
  };
}

/** Convenience conversion for metadata-free messages. Use
 * prepareActOpenAIMessage when phase/refusal metadata is present so the exact
 * model item remains available for replay. */
export function actMessageFromOpenAI(
  value: unknown,
  resolveAsset?: (part: ActOpenAIMedia) => Extract<ThreadContentPart, { assetId: string }>,
): OrdinaryThreadMessage {
  const prepared = prepareActOpenAIMessage(value, resolveAsset);
  if (
    'phase' in prepared.modelItem ||
    (Array.isArray(prepared.modelItem.content) && prepared.modelItem.content.some((part) => part.type === 'refusal'))
  )
    return fail('INVALID_MESSAGE');
  return prepared.event;
}

export function actMessageToOpenAI(
  value: unknown,
  role: 'user' | 'assistant',
  resolveAsset?: (part: Extract<ThreadContentPart, { assetId: string }>) => ActOpenAIMedia,
  phase?: ActOpenAIMessagePhase,
): ActOpenAIMessage {
  bounded(value);
  const parsed = threadEventPayloadSchema.safeParse(value);
  if (!parsed.success || parsed.data.type !== 'message' || !['user', 'assistant'].includes(role))
    return fail('INVALID_MESSAGE');
  const content = parsed.data.parts.map((part): ActOpenAIContent => {
    if (part.type === 'text') return { type: 'input_text', text: part.text };
    if (part.type !== 'image' && part.type !== 'file') return fail('UNSUPPORTED_CONTENT_TYPE');
    if (!resolveAsset) return fail('ASSET_MAPPING_REQUIRED');
    const mapped = actOpenAIContentSchema.safeParse(resolveAsset(part));
    if (!mapped.success || mapped.data.type !== (part.type === 'image' ? 'input_image' : 'input_file'))
      return fail('INVALID_ASSET_MAPPING');
    return mapped.data;
  });
  if (phase !== undefined && role !== 'assistant') return fail('INVALID_MESSAGE');
  return { type: 'message', role, content, ...(phase === undefined ? {} : { phase }) };
}

const reasoningItemSchema = z
  .object({
    type: z.literal('reasoning'),
    id: identifier,
    summary: z.array(z.object({ type: z.literal('summary_text'), text: z.string().max(64_000) }).strict()).max(100),
    content: z
      .array(z.object({ type: z.literal('reasoning_text'), text: z.string().max(64_000) }).strict())
      .max(100)
      .optional(),
    encrypted_content: z.string().max(1_500_000).nullable().optional(),
    status: z.literal('completed').optional(),
  })
  .strict();
const programItemSchema = z
  .object({
    type: z.literal('program'),
    id: identifier,
    call_id: identifier,
    code: z.string().max(1_500_000),
    fingerprint: z.string().min(1).max(200_000),
  })
  .strict();
const programOutputItemSchema = z
  .object({
    type: z.literal('program_output'),
    id: identifier,
    call_id: identifier,
    result: z.string().max(1_500_000),
    status: z.enum(['completed', 'incomplete']),
  })
  .strict();

/** A deliberately opaque, non-executable replay subset. Darwin never imports
 * these items into a thread or evaluates program code/reasoning content. */
export const actOpenAIModelItemSchema = z.discriminatedUnion('type', [
  reasoningItemSchema,
  programItemSchema,
  programOutputItemSchema,
]);
export type ActOpenAIModelItem = z.infer<typeof actOpenAIModelItemSchema>;

export function preserveActOpenAIModelItem(value: unknown): ActOpenAIModelItem {
  bounded(value);
  const parsed = actOpenAIModelItemSchema.safeParse(value);
  if (!parsed.success) return fail('INVALID_MODEL_ITEM');
  return structuredClone(parsed.data);
}
