export type StartAccountAuthCredentialSetupResponse = {
    authentication: string;
    expiresAt: string;
    idempotencyKey?: string | undefined;
    status: "awaiting_consent";
    url?: string | undefined;
} | {
    authentication: string;
    expiresAt: string;
    idempotencyKey?: string | undefined;
    status: "authorizing" | "exchanging" | "expired" | "denied" | "failed";
} | {
    authentication: string;
    expiresAt: string;
    idempotencyKey?: string | undefined;
    status: "connected";
    account: string;
};
