import {
  ActOpenAICompatibilityError,
  actOpenAIFunctionOutput,
  prepareActOpenAICall,
  type ActOpenAIFunctionOutput,
  type PreparedActOpenAICall,
} from './canonical/act-openai.js';
import type { DarwinClient } from '../../generated/esm/Client.mjs';

export * from './canonical/act-openai.js';

export type ActOpenAIClient = Pick<
  DarwinClient,
  'startThread' | 'sendMessage' | 'getThread' | 'listThreads' | 'archiveThread' | 'authenticate' | 'pay'
>;

/** Call only for fresh, complete model function calls, never replayed peer history.
 * The caller's policy must authorize the exact operation (including user consent
 * for external effects, authentication and payment). Parsing is not approval.
 * Errors propagate: no synthetic receipt, automatic confirmation or extra retry.
 */
export async function executeActOpenAICall(
  client: ActOpenAIClient,
  item: unknown,
  context: { agent: string; authorize: (call: PreparedActOpenAICall) => boolean | Promise<boolean> },
  options?: DarwinClient.RequestOptions,
): Promise<ActOpenAIFunctionOutput> {
  const call = prepareActOpenAICall(item, context.agent);
  // A UI/policy gets its own copy, so it cannot mutate the validated dispatch.
  if ((await context.authorize(structuredClone(call))) !== true)
    throw new ActOpenAICompatibilityError('ACT_CALL_NOT_AUTHORIZED');
  let result: unknown;
  switch (call.operation) {
    case 'start_thread':
      result = await client.startThread(call.input as Parameters<ActOpenAIClient['startThread']>[0], options);
      break;
    case 'send_message': {
      // The shared validator accepts JSON values that Fern represents with narrower generated types.
      const { thread, ...body } = call.input;
      result = await client.sendMessage(
        { thread, body } as unknown as Parameters<ActOpenAIClient['sendMessage']>[0],
        options,
      );
      break;
    }
    case 'get_thread':
      result = await client.getThread(call.input, options);
      break;
    case 'list_threads':
      result = await client.listThreads(call.input, options);
      break;
    case 'archive_thread':
      result = await client.archiveThread(call.input, options);
      break;
    case 'authenticate':
      result = await client.authenticate(call.input as Parameters<ActOpenAIClient['authenticate']>[0], options);
      break;
    case 'pay':
      result = await client.pay(call.input, options);
      break;
  }
  return actOpenAIFunctionOutput(call, result);
}
