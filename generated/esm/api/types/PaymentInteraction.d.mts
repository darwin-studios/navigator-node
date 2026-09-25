export interface PaymentInteraction {
    id: string;
    kind: PaymentInteraction.Kind;
    state: PaymentInteraction.State;
    displayName: string;
    hostname: string;
    expiresAt: string;
    payment: PaymentInteraction.Payment;
}
export declare namespace PaymentInteraction {
    const Kind: {
        readonly Payment: "payment";
    };
    type Kind = (typeof Kind)[keyof typeof Kind];
    const State: {
        readonly Required: "required";
        readonly Pending: "pending";
        readonly Complete: "complete";
        readonly Declined: "declined";
        readonly Expired: "expired";
        readonly Failed: "failed";
    };
    type State = (typeof State)[keyof typeof State];
    interface Payment {
        amountMinor: number;
        currency: string;
        items: Payment.Items.Item[];
        feesMinor: number;
        protocol: Payment.Protocol;
        checkoutRevision: string;
        checkoutDigest: string;
    }
    namespace Payment {
        type Items = Items.Item[];
        namespace Items {
            interface Item {
                id: string;
                label: string;
                quantity: number;
                amountMinor: number;
            }
        }
        const Protocol: {
            readonly DarwinWallet: "DARWIN_WALLET";
            readonly HostedCheckout: "HOSTED_CHECKOUT";
            readonly UcpSpt: "UCP_SPT";
            readonly AcpSpt: "ACP_SPT";
            readonly MppSpt: "MPP_SPT";
            readonly X402: "X402";
        };
        type Protocol = (typeof Protocol)[keyof typeof Protocol];
    }
}
