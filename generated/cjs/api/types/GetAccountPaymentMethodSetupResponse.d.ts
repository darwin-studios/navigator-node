export interface GetAccountPaymentMethodSetupResponse {
  setup: string;
  status: GetAccountPaymentMethodSetupResponse.Status;
  revision: number;
  expiresAt: string;
  url?: string | undefined;
  paymentMethodId?: string | undefined;
}
export declare namespace GetAccountPaymentMethodSetupResponse {
  const Status: {
    readonly Prepared: 'prepared';
    readonly Dispatching: 'dispatching';
    readonly AwaitingUser: 'awaiting_user';
    readonly Processing: 'processing';
    readonly Verified: 'verified';
    readonly Failed: 'failed';
    readonly Expired: 'expired';
    readonly Cancelled: 'cancelled';
  };
  type Status = (typeof Status)[keyof typeof Status];
}
