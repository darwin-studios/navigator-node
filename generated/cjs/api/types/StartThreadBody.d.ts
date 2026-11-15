import type * as Darwin from '../index.js';

export type StartThreadBody = Darwin.StartThreadBody.Message | Darwin.StartThreadBody.ActionRequest;
export declare namespace StartThreadBody {
  interface Message {
    messageType: 'message';
    /** The agent selected from a Search result. Darwin verifies that it has an executable route. */
    targetAgent: string;
    /** The text or typed action request to send as the first message. */
    messageContent: string;
    /** Optional agent in your account that will start and own this conversation. */
    agent?: string | undefined;
    /** Optional exact operation selected from Search for an ordinary first message. */
    operationId?: string | undefined;
    /** Optional stable key for this attempt. Reuse it with unchanged inputs after a timeout. */
    idempotencyKey?: string | undefined;
  }
  interface ActionRequest {
    messageType: 'action_request';
    /** The agent selected from a Search result. Darwin verifies that it has an executable route. */
    targetAgent: string;
    /** The text or typed action request to send as the first message. */
    messageContent: StartThreadBodyActionRequest.MessageContent;
    /** Optional agent in your account that will start and own this conversation. */
    agent?: string | undefined;
    /** Exact no-effect protected discovery reference. Connection alone never starts an action. */
    discoveryPreflight?: string | undefined;
    /** Optional stable key for this attempt. Reuse it with unchanged inputs after a timeout. */
    idempotencyKey?: string | undefined;
  }
  namespace StartThreadBodyActionRequest {
    /**
     * The text or typed action request to send as the first message.
     */
    interface MessageContent {
      /** Exact executable operation identifier returned by Search or get_thread. */
      operationId: string;
      /** Arguments for that operation, matching its advertised input schema. Never include credentials or payment details. */
      arguments: Record<string, unknown>;
      /** Optional saved external-account reference. This is an opaque Darwin ID, never a token or secret. */
      account?: string | undefined;
    }
  }
}
