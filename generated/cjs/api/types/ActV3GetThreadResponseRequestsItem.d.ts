import type * as Darwin from '../index.js';

export type ActV3GetThreadResponseRequestsItem =
  | Darwin.ActV3GetThreadResponseRequestsItem.InputRequest
  | Darwin.ActV3GetThreadResponseRequestsItem.ActionRequest
  | Darwin.ActV3GetThreadResponseRequestsItem.ApprovalRequest
  | Darwin.ActV3GetThreadResponseRequestsItem.AuthenticationRequest
  | Darwin.ActV3GetThreadResponseRequestsItem.AuthenticationRequired
  | Darwin.ActV3GetThreadResponseRequestsItem.PaymentRequest
  | Darwin.ActV3GetThreadResponseRequestsItem.CompletionRequest;
export declare namespace ActV3GetThreadResponseRequestsItem {
  interface InputRequest {
    type: 'input_request';
    request: string;
    action: string;
    status: ActV3GetThreadResponseRequestsItemInputRequest.Status;
    capability: string;
    inputSchema: Record<string, unknown>;
    inputSchemaResources?: Record<string, Record<string, unknown>> | undefined;
    expiresAt: string;
  }
  namespace ActV3GetThreadResponseRequestsItemInputRequest {
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
    status: ActV3GetThreadResponseRequestsItemActionRequest.Status;
    capability: string;
    arguments: Record<string, unknown>;
    account?: string | undefined;
  }
  namespace ActV3GetThreadResponseRequestsItemActionRequest {
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
    status: ActV3GetThreadResponseRequestsItemApprovalRequest.Status;
    reason: string;
    expiresAt: string;
    capability: string;
    arguments: Record<string, unknown>;
    account?: string | undefined;
  }
  namespace ActV3GetThreadResponseRequestsItemApprovalRequest {
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
    status: ActV3GetThreadResponseRequestsItemAuthenticationRequest.Status;
    targetAgent: string;
    authenticationType: string;
    resource: string;
    scopes: string[];
    account?: string | undefined;
  }
  namespace ActV3GetThreadResponseRequestsItemAuthenticationRequest {
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
    status: ActV3GetThreadResponseRequestsItemAuthenticationRequired.Status;
    targetAgent: string;
    scopes: string[];
    account?: string | undefined;
    expiresAt?: string | undefined;
  }
  namespace ActV3GetThreadResponseRequestsItemAuthenticationRequired {
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
    status: ActV3GetThreadResponseRequestsItemPaymentRequest.Status;
    amountMinor: string;
    currency: string;
    payee: ActV3GetThreadResponseRequestsItemPaymentRequest.Payee;
    acceptedMethods: ActV3GetThreadResponseRequestsItemPaymentRequest.AcceptedMethods.Item[];
    expiresAt: string;
  }
  namespace ActV3GetThreadResponseRequestsItemPaymentRequest {
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
    status: ActV3GetThreadResponseRequestsItemCompletionRequest.Status;
    result: string;
  }
  namespace ActV3GetThreadResponseRequestsItemCompletionRequest {
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
