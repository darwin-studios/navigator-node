import type * as Darwin from '../index.js';

export type SessionOperationActionMessage =
  | Darwin.SessionOperationActionMessage.Text
  | Darwin.SessionOperationActionMessage.ActionRequest
  | Darwin.SessionOperationActionMessage.ActionConfirmation
  | Darwin.SessionOperationActionMessage.InputResponse
  | Darwin.SessionOperationActionMessage.ApprovalConfirmation
  | Darwin.SessionOperationActionMessage.CompletionConfirmation
  | Darwin.SessionOperationActionMessage.CancellationRequest
  | Darwin.SessionOperationActionMessage.AuthenticationResponse
  | Darwin.SessionOperationActionMessage.PaymentResponse;
export declare namespace SessionOperationActionMessage {
  interface Text {
    type: 'text';
    text: string;
    /** Relevant task context explicitly shared with this agent. For operation calls, put personalized values in declared arguments instead. Never send a complete account profile. */
    context?: SessionOperationActionMessageText.Context | undefined;
  }
  namespace SessionOperationActionMessageText {
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
    decision: SessionOperationActionMessageApprovalConfirmation.Decision;
  }
  namespace SessionOperationActionMessageApprovalConfirmation {
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
