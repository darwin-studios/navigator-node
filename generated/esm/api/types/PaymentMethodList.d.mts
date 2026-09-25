export interface PaymentMethodList {
    paymentMethods: PaymentMethodList.PaymentMethods.Item[];
    nextCursor: string | null;
}
export declare namespace PaymentMethodList {
    type PaymentMethods = PaymentMethods.Item[];
    namespace PaymentMethods {
        interface Item {
            id: string;
            provider: string;
            displayName: string;
            status: Item.Status;
            createdAt: string;
        }
        namespace Item {
            const Status: {
                readonly Active: "active";
                readonly Expired: "expired";
                readonly Revoked: "revoked";
            };
            type Status = (typeof Status)[keyof typeof Status];
        }
    }
}
