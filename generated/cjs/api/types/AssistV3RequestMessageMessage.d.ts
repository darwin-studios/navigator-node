import type * as Darwin from '../index.js';

export type AssistV3RequestMessageMessage =
  | Darwin.AssistV3RequestMessageMessage.Text
  | Darwin.AssistV3RequestMessageMessage.ActionRequest
  | Darwin.AssistV3RequestMessageMessage.ActionConfirmation
  | Darwin.AssistV3RequestMessageMessage.InputResponse
  | Darwin.AssistV3RequestMessageMessage.ApprovalConfirmation
  | Darwin.AssistV3RequestMessageMessage.CompletionConfirmation
  | Darwin.AssistV3RequestMessageMessage.CancellationRequest
  | Darwin.AssistV3RequestMessageMessage.AuthenticationResponse
  | Darwin.AssistV3RequestMessageMessage.PaymentResponse;
export declare namespace AssistV3RequestMessageMessage {
  interface Text {
    type: 'text';
    text: string;
    /** Relevant task context explicitly shared with this agent. For operation calls, put personalized values in declared arguments instead. Never send a complete account profile. */
    context?: AssistV3RequestMessageMessageText.Context | undefined;
  }
  namespace AssistV3RequestMessageMessageText {
    /**
     * Relevant task context explicitly shared with this agent. For operation calls, put personalized values in declared arguments instead. Never send a complete account profile.
     */
    interface Context {
      text: string;
    }
  }
  interface ActionRequest {
    type: 'action_request';
    operationId: string;
    arguments: Record<string, unknown>;
  }
  interface ActionConfirmation {
    type: 'action_confirmation';
    requestId: string;
  }
  interface InputResponse {
    type: 'input_response';
    requestId: string;
    arguments: Record<string, unknown>;
  }
  interface ApprovalConfirmation {
    type: 'approval_confirmation';
    requestId: string;
    decision: AssistV3RequestMessageMessageApprovalConfirmation.Decision;
  }
  namespace AssistV3RequestMessageMessageApprovalConfirmation {
    const Decision: {
      readonly Allow: 'allow';
      readonly Deny: 'deny';
    };
    type Decision = (typeof Decision)[keyof typeof Decision];
  }
  interface CompletionConfirmation {
    type: 'completion_confirmation';
    requestId: string;
  }
  interface CancellationRequest {
    type: 'cancellation_request';
    actionId: string;
  }
  interface AuthenticationResponse {
    type: 'authentication_response';
    requestId: string;
  }
  interface PaymentResponse {
    type: 'payment_response';
    requestId: string;
  }
}
