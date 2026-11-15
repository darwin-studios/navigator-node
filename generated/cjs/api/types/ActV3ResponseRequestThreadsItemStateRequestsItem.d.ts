import type * as Darwin from '../index.js';

export type ActV3ResponseRequestThreadsItemStateRequestsItem =
  | Darwin.ActV3ResponseRequestThreadsItemStateRequestsItem.InputRequest
  | Darwin.ActV3ResponseRequestThreadsItemStateRequestsItem.ActionRequest
  | Darwin.ActV3ResponseRequestThreadsItemStateRequestsItem.ApprovalRequest
  | Darwin.ActV3ResponseRequestThreadsItemStateRequestsItem.AuthenticationRequest
  | Darwin.ActV3ResponseRequestThreadsItemStateRequestsItem.AuthenticationRequired
  | Darwin.ActV3ResponseRequestThreadsItemStateRequestsItem.PaymentRequest
  | Darwin.ActV3ResponseRequestThreadsItemStateRequestsItem.CompletionRequest;
export declare namespace ActV3ResponseRequestThreadsItemStateRequestsItem {
  interface InputRequest {
    type: 'input_request';
    request: string;
    action: string;
    status: ActV3ResponseRequestThreadsItemStateRequestsItemInputRequest.Status;
    capability: string;
    inputSchema: Record<string, unknown>;
    inputSchemaResources?: Record<string, Record<string, unknown>> | undefined;
    expiresAt: string;
  }
  namespace ActV3ResponseRequestThreadsItemStateRequestsItemInputRequest {
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
    status: ActV3ResponseRequestThreadsItemStateRequestsItemActionRequest.Status;
    capability: string;
    arguments: Record<string, unknown>;
    account?: string | undefined;
  }
  namespace ActV3ResponseRequestThreadsItemStateRequestsItemActionRequest {
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
    status: ActV3ResponseRequestThreadsItemStateRequestsItemApprovalRequest.Status;
    reason: string;
    expiresAt: string;
    capability: string;
    arguments: Record<string, unknown>;
    account?: string | undefined;
  }
  namespace ActV3ResponseRequestThreadsItemStateRequestsItemApprovalRequest {
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
    status: ActV3ResponseRequestThreadsItemStateRequestsItemAuthenticationRequest.Status;
    targetAgent: string;
    authenticationType: string;
    resource: string;
    scopes: string[];
    account?: string | undefined;
  }
  namespace ActV3ResponseRequestThreadsItemStateRequestsItemAuthenticationRequest {
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
    status: ActV3ResponseRequestThreadsItemStateRequestsItemAuthenticationRequired.Status;
    targetAgent: string;
    scopes: string[];
    account?: string | undefined;
    expiresAt?: string | undefined;
  }
  namespace ActV3ResponseRequestThreadsItemStateRequestsItemAuthenticationRequired {
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
    status: ActV3ResponseRequestThreadsItemStateRequestsItemPaymentRequest.Status;
    amountMinor: string;
    currency: string;
    payee: ActV3ResponseRequestThreadsItemStateRequestsItemPaymentRequest.Payee;
    acceptedMethods: ActV3ResponseRequestThreadsItemStateRequestsItemPaymentRequest.AcceptedMethods.Item[];
    expiresAt: string;
  }
  namespace ActV3ResponseRequestThreadsItemStateRequestsItemPaymentRequest {
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
    status: ActV3ResponseRequestThreadsItemStateRequestsItemCompletionRequest.Status;
    result: string;
  }
  namespace ActV3ResponseRequestThreadsItemStateRequestsItemCompletionRequest {
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
