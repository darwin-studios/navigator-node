export type GetPaymentStatusResponse = {
    payment: string;
    status: "prepared" | "dispatching" | "uncertain" | "pending";
    expiresAt: string;
    url?: string | undefined;
} | {
    payment: string;
    status: "settled" | "partially_refunded" | "reversal_pending" | "reversal_failed" | "disputed" | "refunded";
    expiresAt: string;
    receipt: string;
} | {
    payment: string;
    status: "failed" | "voided";
    expiresAt: string;
};
