export type PayResponse = {
    request: string;
    status: "selection_required";
    expiresAt: string;
    url: string;
    idempotencyKey: string;
} | {
    payment: string;
    expiresAt: string;
    idempotencyKey: string;
    status: "prepared" | "dispatching" | "uncertain" | "pending";
    url: string;
} | {
    payment: string;
    expiresAt: string;
    idempotencyKey: string;
    status: "settled" | "partially_refunded" | "reversal_pending" | "reversal_failed" | "disputed" | "refunded";
    receipt: string;
} | {
    payment: string;
    expiresAt: string;
    idempotencyKey: string;
    status: "failed" | "voided";
};
