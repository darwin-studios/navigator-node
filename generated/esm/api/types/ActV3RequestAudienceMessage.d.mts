import type * as Darwin from "../index.mjs";
export type ActV3RequestAudienceMessage = Darwin.ActV3RequestAudienceMessage.Text | Darwin.ActV3RequestAudienceMessage.ActionRequest | Darwin.ActV3RequestAudienceMessage.ActionConfirmation | Darwin.ActV3RequestAudienceMessage.InputResponse | Darwin.ActV3RequestAudienceMessage.ApprovalConfirmation | Darwin.ActV3RequestAudienceMessage.CompletionConfirmation | Darwin.ActV3RequestAudienceMessage.CancellationRequest | Darwin.ActV3RequestAudienceMessage.AuthenticationResponse | Darwin.ActV3RequestAudienceMessage.PaymentResponse;
export declare namespace ActV3RequestAudienceMessage {
    interface Text {
        type: "text";
        text: string;
        /** Relevant task context explicitly shared with this agent. For operation calls, put personalized values in declared arguments instead. Never send a complete account profile. */
        context?: ActV3RequestAudienceMessageText.Context | undefined;
    }
    namespace ActV3RequestAudienceMessageText {
        /**
         * Relevant task context explicitly shared with this agent. For operation calls, put personalized values in declared arguments instead. Never send a complete account profile.
         */
        interface Context {
            text: string;
        }
    }
    interface ActionRequest {
        type: "action_request";
        operationId: string;
        arguments: Record<string, unknown>;
    }
    interface ActionConfirmation {
        type: "action_confirmation";
        requestId: string;
    }
    interface InputResponse {
        type: "input_response";
        requestId: string;
        arguments: Record<string, unknown>;
    }
    interface ApprovalConfirmation {
        type: "approval_confirmation";
        requestId: string;
        decision: ActV3RequestAudienceMessageApprovalConfirmation.Decision;
    }
    namespace ActV3RequestAudienceMessageApprovalConfirmation {
        const Decision: {
            readonly Allow: "allow";
            readonly Deny: "deny";
        };
        type Decision = (typeof Decision)[keyof typeof Decision];
    }
    interface CompletionConfirmation {
        type: "completion_confirmation";
        requestId: string;
    }
    interface CancellationRequest {
        type: "cancellation_request";
        actionId: string;
    }
    interface AuthenticationResponse {
        type: "authentication_response";
        requestId: string;
    }
    interface PaymentResponse {
        type: "payment_response";
        requestId: string;
    }
}
