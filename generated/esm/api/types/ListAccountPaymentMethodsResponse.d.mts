export interface ListAccountPaymentMethodsResponse {
    methods: ListAccountPaymentMethodsResponse.Methods.Item[];
    nextCursor: string | null;
}
export declare namespace ListAccountPaymentMethodsResponse {
    type Methods = Methods.Item[];
    namespace Methods {
        interface Item {
            paymentMethodId: string;
            label: string;
            method: Item.Method;
            status: Item.Status;
            isDefault: boolean;
            revision: number;
            expiresAt: string;
        }
        namespace Item {
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
    }
}
