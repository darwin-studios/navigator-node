/**
 * @example
 *     {
 *         request: "request",
 *         method: "card",
 *         consent: "save_payment_method",
 *         idempotencyKey: "idempotencyKey"
 *     }
 */
export interface StartAccountPaymentMethodSetupBody {
  /** An immutable payment request from an account-owned thread. */
  request: string;
  /** Funding method to enroll through the hosted provider. */
  method: StartAccountPaymentMethodSetupBody.Method;
  /** Explicit permission to save the verified method. */
  consent: StartAccountPaymentMethodSetupBody.Consent;
  idempotencyKey: string;
}
export declare namespace StartAccountPaymentMethodSetupBody {
  /** Funding method to enroll through the hosted provider. */
  const Method: {
    readonly Card: 'card';
    readonly Bank: 'bank';
  };
  type Method = (typeof Method)[keyof typeof Method];
  /** Explicit permission to save the verified method. */
  const Consent: {
    readonly SavePaymentMethod: 'save_payment_method';
  };
  type Consent = (typeof Consent)[keyof typeof Consent];
}
