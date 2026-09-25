import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         aiId: "aiId",
 *         methodId: "oauth_github",
 *         source: {
 *             kind: "one_time"
 *         },
 *         saveToDarwinVault: false,
 *         requestId: "request_auth_01J9Y8M4Z7B9R6K2X3C5V1N0PQ"
 *     }
 */
export interface AuthenticateSessionRequest {
    /** The destination AI to authenticate with. */
    aiId: string;
    methodId: string;
    source: Darwin.AuthenticateSessionRequestSource;
    /** Explicit consent to persist a one-time credential in Darwin Vault after authorization. */
    saveToDarwinVault: boolean;
    requestId: string;
}
