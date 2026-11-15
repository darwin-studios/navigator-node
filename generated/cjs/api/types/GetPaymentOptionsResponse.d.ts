import type * as Darwin from '../index.js';

export interface GetPaymentOptionsResponse {
  paymentRequestId: string;
  targetAgent: string;
  requestRevision: number;
  requestDigest: string;
  expiresAt: string;
  amountMinor: string;
  currency: string;
  payeeId: string;
  payeeName: string;
  actionId: string;
  /** Independent seller identity review. Never grants payment eligibility or permission to spend. */
  sellerVerification?: GetPaymentOptionsResponse.SellerVerification | undefined;
  eligibleMethods: Darwin.GetPaymentOptionsResponseEligibleMethodsItem[];
  savedMethods: GetPaymentOptionsResponse.SavedMethods.Item[];
  unavailableMethods: GetPaymentOptionsResponse.UnavailableMethods.Item[];
  unavailableReason: GetPaymentOptionsResponse.UnavailableReason | null;
}
export declare namespace GetPaymentOptionsResponse {
  /** Independent seller identity review. Never grants payment eligibility or permission to spend. */
  const SellerVerification: {
    readonly Unverified: 'unverified';
    readonly VerifiedDeveloper: 'verified_developer';
    readonly Darwin: 'darwin';
  };
  type SellerVerification = (typeof SellerVerification)[keyof typeof SellerVerification];
  type SavedMethods = SavedMethods.Item[];
  namespace SavedMethods {
    interface Item {
      paymentMethodId: string;
      label: string;
      method: Item.Method;
      expiresAt: string;
      /** A saved preference within its provider and rail, never permission to pay. */
      isDefault?: boolean | undefined;
    }
    namespace Item {
      const Method: {
        readonly Card: 'card';
        readonly Bank: 'bank';
        readonly Mpp: 'mpp';
        readonly X402: 'x402';
        readonly Ucp: 'ucp';
        readonly Acp: 'acp';
      };
      type Method = (typeof Method)[keyof typeof Method];
    }
  }
  type UnavailableMethods = UnavailableMethods.Item[];
  namespace UnavailableMethods {
    interface Item {
      method: Item.Method;
      reason: Item.Reason;
    }
    namespace Item {
      const Method: {
        readonly Card: 'card';
        readonly Bank: 'bank';
        readonly HostedCheckout: 'hosted_checkout';
        readonly DarwinWallet: 'darwin_wallet';
        readonly Mpp: 'mpp';
        readonly X402: 'x402';
        readonly Ucp: 'ucp';
        readonly Acp: 'acp';
      };
      type Method = (typeof Method)[keyof typeof Method];
      const Reason: {
        readonly ProviderUnavailable: 'provider_unavailable';
        readonly SavedMethodUnavailable: 'saved_method_unavailable';
      };
      type Reason = (typeof Reason)[keyof typeof Reason];
    }
  }
  const UnavailableReason: {
    readonly RequestExpired: 'request_expired';
    readonly PaymentSettled: 'payment_settled';
    readonly PaymentFailed: 'payment_failed';
    readonly PaymentVoided: 'payment_voided';
    readonly PaymentRefunded: 'payment_refunded';
    readonly PaymentInProgress: 'payment_in_progress';
    readonly RequestNotPayable: 'request_not_payable';
    readonly UnsupportedRail: 'unsupported_rail';
    readonly ProviderUnavailable: 'provider_unavailable';
    readonly SavedMethodUnavailable: 'saved_method_unavailable';
  };
  type UnavailableReason = (typeof UnavailableReason)[keyof typeof UnavailableReason];
}
