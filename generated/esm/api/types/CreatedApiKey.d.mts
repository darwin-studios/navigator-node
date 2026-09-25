export interface CreatedApiKey {
    /** Stable non-secret identifier for the API key. */
    id: string;
    /** Human-readable key name supplied at creation. */
    name: string;
    /** Non-secret prefix you can use to identify the key in logs and settings. */
    prefix: string;
    /** Permissions granted to the key. Every API operation still enforces its required scope. */
    scopes: string[];
    /** Lifetime number of requests authenticated with this key. */
    requestCount: number;
    /** When Darwin most recently authenticated a request with this key, or null if unused. */
    lastUsedAt: string | null;
    /** When the key expires, or null when it has no scheduled expiration. */
    expiresAt: string | null;
    /** When the key was revoked, or null while it has not been revoked. */
    revokedAt: string | null;
    /** When the key was created. */
    createdAt: string;
    /** New keys identify an application; legacy keys retain their previous user-bound behavior until revoked. */
    kind?: CreatedApiKey.Kind | undefined;
    /** The application identified by a new key, or null for a legacy user key. */
    applicationId?: (string | null) | undefined;
    /** Plaintext API key. Darwin returns this value only in the create response. */
    apiKey?: string | undefined;
}
export declare namespace CreatedApiKey {
    /** New keys identify an application; legacy keys retain their previous user-bound behavior until revoked. */
    const Kind: {
        readonly Application: "application";
        readonly LegacyUser: "legacy_user";
    };
    type Kind = (typeof Kind)[keyof typeof Kind];
}
