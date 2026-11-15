import type * as Darwin from '../index.js';

export type GetThreadResponseRequestsItem =
  | Darwin.GetThreadResponseRequestsItem.InputRequest
  | Darwin.GetThreadResponseRequestsItem.ActionRequest
  | Darwin.GetThreadResponseRequestsItem.ApprovalRequest
  | Darwin.GetThreadResponseRequestsItem.AuthenticationRequest
  | Darwin.GetThreadResponseRequestsItem.AuthenticationRequired
  | Darwin.GetThreadResponseRequestsItem.PaymentRequest
  | Darwin.GetThreadResponseRequestsItem.CompletionRequest;
export declare namespace GetThreadResponseRequestsItem {
  interface InputRequest {
    type: 'input_request';
    request: string;
    action: string;
    status: GetThreadResponseRequestsItemInputRequest.Status;
    capability: string;
    inputSchema: Record<string, unknown>;
    inputSchemaResources?: Record<string, Record<string, unknown>> | undefined;
    expiresAt: string;
  }
  namespace GetThreadResponseRequestsItemInputRequest {
    const Status: {
      readonly Pending: 'pending';
      readonly Resolved: 'resolved';
      readonly Expired: 'expired';
      readonly Cancelled: 'cancelled';
      readonly Settled: 'settled';
      readonly Failed: 'failed';
      readonly Voided: 'voided';
      readonly PartiallyRefunded: 'partially_refunded';
      readonly ReversalPending: 'reversal_pending';
      readonly ReversalFailed: 'reversal_failed';
      readonly Disputed: 'disputed';
      readonly Refunded: 'refunded';
    };
    type Status = (typeof Status)[keyof typeof Status];
  }
  interface ActionRequest {
    type: 'action_request';
    request: string;
    action: string;
    status: GetThreadResponseRequestsItemActionRequest.Status;
    capability: string;
    arguments: Record<string, unknown>;
    account?: string | undefined;
  }
  namespace GetThreadResponseRequestsItemActionRequest {
    const Status: {
      readonly Pending: 'pending';
      readonly Resolved: 'resolved';
      readonly Expired: 'expired';
      readonly Cancelled: 'cancelled';
      readonly Settled: 'settled';
      readonly Failed: 'failed';
      readonly Voided: 'voided';
      readonly PartiallyRefunded: 'partially_refunded';
      readonly ReversalPending: 'reversal_pending';
      readonly ReversalFailed: 'reversal_failed';
      readonly Disputed: 'disputed';
      readonly Refunded: 'refunded';
    };
    type Status = (typeof Status)[keyof typeof Status];
  }
  interface ApprovalRequest {
    type: 'approval_request';
    request: string;
    action: string;
    status: GetThreadResponseRequestsItemApprovalRequest.Status;
    reason: string;
    expiresAt: string;
    capability: string;
    arguments: Record<string, unknown>;
    account?: string | undefined;
  }
  namespace GetThreadResponseRequestsItemApprovalRequest {
    const Status: {
      readonly Pending: 'pending';
      readonly Resolved: 'resolved';
      readonly Expired: 'expired';
      readonly Cancelled: 'cancelled';
      readonly Settled: 'settled';
      readonly Failed: 'failed';
      readonly Voided: 'voided';
      readonly PartiallyRefunded: 'partially_refunded';
      readonly ReversalPending: 'reversal_pending';
      readonly ReversalFailed: 'reversal_failed';
      readonly Disputed: 'disputed';
      readonly Refunded: 'refunded';
    };
    type Status = (typeof Status)[keyof typeof Status];
  }
  interface AuthenticationRequest {
    type: 'authentication_request';
    request: string;
    action: string;
    status: GetThreadResponseRequestsItemAuthenticationRequest.Status;
    targetAgent: string;
    authenticationType: string;
    resource: string;
    scopes: string[];
    account?: string | undefined;
  }
  namespace GetThreadResponseRequestsItemAuthenticationRequest {
    const Status: {
      readonly Pending: 'pending';
      readonly Resolved: 'resolved';
      readonly Expired: 'expired';
      readonly Cancelled: 'cancelled';
      readonly Settled: 'settled';
      readonly Failed: 'failed';
      readonly Voided: 'voided';
      readonly PartiallyRefunded: 'partially_refunded';
      readonly ReversalPending: 'reversal_pending';
      readonly ReversalFailed: 'reversal_failed';
      readonly Disputed: 'disputed';
      readonly Refunded: 'refunded';
    };
    type Status = (typeof Status)[keyof typeof Status];
  }
  interface AuthenticationRequired {
    type: 'authentication_required';
    request: string;
    action: string;
    status: GetThreadResponseRequestsItemAuthenticationRequired.Status;
    targetAgent: string;
    scopes: string[];
    account?: string | undefined;
    expiresAt?: string | undefined;
  }
  namespace GetThreadResponseRequestsItemAuthenticationRequired {
    const Status: {
      readonly Pending: 'pending';
      readonly Resolved: 'resolved';
      readonly Expired: 'expired';
      readonly Cancelled: 'cancelled';
      readonly Settled: 'settled';
      readonly Failed: 'failed';
      readonly Voided: 'voided';
      readonly PartiallyRefunded: 'partially_refunded';
      readonly ReversalPending: 'reversal_pending';
      readonly ReversalFailed: 'reversal_failed';
      readonly Disputed: 'disputed';
      readonly Refunded: 'refunded';
    };
    type Status = (typeof Status)[keyof typeof Status];
  }
  interface PaymentRequest {
    type: 'payment_request';
    request: string;
    action: string;
    status: GetThreadResponseRequestsItemPaymentRequest.Status;
    amountMinor: string;
    currency: string;
    payee: GetThreadResponseRequestsItemPaymentRequest.Payee;
    acceptedMethods: GetThreadResponseRequestsItemPaymentRequest.AcceptedMethods.Item[];
    expiresAt: string;
  }
  namespace GetThreadResponseRequestsItemPaymentRequest {
    const Status: {
      readonly Pending: 'pending';
      readonly Resolved: 'resolved';
      readonly Expired: 'expired';
      readonly Cancelled: 'cancelled';
      readonly Settled: 'settled';
      readonly Failed: 'failed';
      readonly Voided: 'voided';
      readonly PartiallyRefunded: 'partially_refunded';
      readonly ReversalPending: 'reversal_pending';
      readonly ReversalFailed: 'reversal_failed';
      readonly Disputed: 'disputed';
      readonly Refunded: 'refunded';
    };
    type Status = (typeof Status)[keyof typeof Status];
    interface Payee {
      agent: string;
      name: string;
    }
    type AcceptedMethods = AcceptedMethods.Item[];
    namespace AcceptedMethods {
      const Item: {
        readonly Card: 'card';
        readonly Bank: 'bank';
        readonly HostedCheckout: 'hosted_checkout';
        readonly DarwinWallet: 'darwin_wallet';
        readonly Mpp: 'mpp';
        readonly X402: 'x402';
        readonly Ucp: 'ucp';
        readonly Acp: 'acp';
      };
      type Item = (typeof Item)[keyof typeof Item];
    }
  }
  interface CompletionRequest {
    type: 'completion_request';
    request: string;
    action: string;
    status: GetThreadResponseRequestsItemCompletionRequest.Status;
    result: string;
  }
  namespace GetThreadResponseRequestsItemCompletionRequest {
    const Status: {
      readonly Pending: 'pending';
      readonly Resolved: 'resolved';
      readonly Expired: 'expired';
      readonly Cancelled: 'cancelled';
      readonly Settled: 'settled';
      readonly Failed: 'failed';
      readonly Voided: 'voided';
      readonly PartiallyRefunded: 'partially_refunded';
      readonly ReversalPending: 'reversal_pending';
      readonly ReversalFailed: 'reversal_failed';
      readonly Disputed: 'disputed';
      readonly Refunded: 'refunded';
    };
    type Status = (typeof Status)[keyof typeof Status];
  }
}
