export interface SetPaymentMethodDefaultResponse {
    paymentMethodId: string;
    label: string;
    method: SetPaymentMethodDefaultResponse.Method;
    status: SetPaymentMethodDefaultResponse.Status;
    isDefault: boolean;
    revision: number;
    expiresAt: string;
}
export declare namespace SetPaymentMethodDefaultResponse {
    const Method: {
        readonly Card: "card";
        readonly Bank: "bank";
        readonly HostedCheckout: "hosted_checkout";
        readonly DarwinWallet: "darwin_wallet";
        readonly Mpp: "mpp";
        readonly X402: "x402";
        readonly Ucp: "ucp";
        readonly Acp: "acp";
    };
    type Method = (typeof Method)[keyof typeof Method];
    const Status: {
        readonly Active: "active";
        readonly Revoked: "revoked";
        readonly Expired: "expired";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
