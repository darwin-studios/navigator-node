import type * as Darwin from "../index.mjs";
export type SendMessageBody = Darwin.SendMessageBody.InputResponse | Darwin.SendMessageBody.Message | Darwin.SendMessageBody.ActionRequest | Darwin.SendMessageBody.ActionConfirmation | Darwin.SendMessageBody.ApprovalConfirmation | Darwin.SendMessageBody.CompletionConfirmation | Darwin.SendMessageBody.CancellationRequest;
export declare namespace SendMessageBody {
    interface InputResponse {
        messageType: "input_response";
        /** The text or typed payload for this message type. */
        messageContent: SendMessageBodyInputResponse.MessageContent;
        /** Optional agent in your account that owns this side of the thread. */
        agent?: string | undefined;
        /** Optional stable key for this message. Reuse it with unchanged inputs after a timeout. */
        idempotencyKey?: string | undefined;
    }
    namespace SendMessageBodyInputResponse {
        /**
         * The text or typed payload for this message type.
         */
        interface MessageContent {
            /** Exact pending input request returned by get_thread. */
            request: string;
            /** Requested information matching that request schema. This continues the same operation; it is not a new action. */
            arguments: Record<string, unknown>;
        }
    }
    interface Message {
        messageType: "message";
        /** The text or typed payload for this message type. */
        messageContent: string;
        /** Optional agent in your account that owns this side of the thread. */
        agent?: string | undefined;
        /** Optional validated assets to include with an ordinary message. */
        attachments?: SendMessageBodyMessage.Attachments.Item[] | undefined;
        /** Optional stable key for this message. Reuse it with unchanged inputs after a timeout. */
        idempotencyKey?: string | undefined;
    }
    namespace SendMessageBodyMessage {
        type Attachments = Attachments.Item[];
        namespace Attachments {
            type Item = {
                type: "image" | "audio" | "video" | "file";
                asset: string;
            } | {
                type: "owner_file";
                input: string;
            };
        }
    }
    interface ActionRequest {
        messageType: "action_request";
        /** The text or typed payload for this message type. */
        messageContent: SendMessageBodyActionRequest.MessageContent;
        /** Optional agent in your account that owns this side of the thread. */
        agent?: string | undefined;
        /** Optional stable key for this message. Reuse it with unchanged inputs after a timeout. */
        idempotencyKey?: string | undefined;
    }
    namespace SendMessageBodyActionRequest {
        /**
         * The text or typed payload for this message type.
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
    interface ActionConfirmation {
        messageType: "action_confirmation";
        /** The text or typed payload for this message type. */
        messageContent: SendMessageBodyActionConfirmation.MessageContent;
        /** Optional agent in your account that owns this side of the thread. */
        agent?: string | undefined;
        /** Optional stable key for this message. Reuse it with unchanged inputs after a timeout. */
        idempotencyKey?: string | undefined;
    }
    namespace SendMessageBodyActionConfirmation {
        /**
         * The text or typed payload for this message type.
         */
        interface MessageContent {
            /** Exact immutable request identifier returned by get_thread. */
            request: string;
        }
    }
    interface ApprovalConfirmation {
        messageType: "approval_confirmation";
        /** The text or typed payload for this message type. */
        messageContent: SendMessageBodyApprovalConfirmation.MessageContent;
        /** Optional agent in your account that owns this side of the thread. */
        agent?: string | undefined;
        /** Optional stable key for this message. Reuse it with unchanged inputs after a timeout. */
        idempotencyKey?: string | undefined;
    }
    namespace SendMessageBodyApprovalConfirmation {
        /**
         * The text or typed payload for this message type.
         */
        interface MessageContent {
            /** Exact immutable approval request identifier returned by get_thread. */
            request: string;
            /** Approval decision: allow authorizes only the referenced request; deny rejects only that request. Neither value substitutes for another request type. */
            decision: MessageContent.Decision;
        }
        namespace MessageContent {
            /** Approval decision: allow authorizes only the referenced request; deny rejects only that request. Neither value substitutes for another request type. */
            const Decision: {
                readonly Allow: "allow";
                readonly Deny: "deny";
            };
            type Decision = (typeof Decision)[keyof typeof Decision];
        }
    }
    interface CompletionConfirmation {
        messageType: "completion_confirmation";
        /** The text or typed payload for this message type. */
        messageContent: SendMessageBodyCompletionConfirmation.MessageContent;
        /** Optional agent in your account that owns this side of the thread. */
        agent?: string | undefined;
        /** Optional stable key for this message. Reuse it with unchanged inputs after a timeout. */
        idempotencyKey?: string | undefined;
    }
    namespace SendMessageBodyCompletionConfirmation {
        /**
         * The text or typed payload for this message type.
         */
        interface MessageContent {
            /** Exact immutable request identifier returned by get_thread. */
            request: string;
        }
    }
    interface CancellationRequest {
        messageType: "cancellation_request";
        /** The text or typed payload for this message type. */
        messageContent: SendMessageBodyCancellationRequest.MessageContent;
        /** Optional agent in your account that owns this side of the thread. */
        agent?: string | undefined;
        /** Optional stable key for this message. Reuse it with unchanged inputs after a timeout. */
        idempotencyKey?: string | undefined;
    }
    namespace SendMessageBodyCancellationRequest {
        /**
         * The text or typed payload for this message type.
         */
        interface MessageContent {
            /** Exact in-flight action identifier returned by get_thread whose cancellation should be requested. */
            actionId: string;
        }
    }
}
