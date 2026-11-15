/**
 * @example
 *     {
 *         "If-Match": "If-Match",
 *         credentialId: "credentialId"
 *     }
 */
export interface RevokeAccountAuthCredentialRequest {
    credentialId: string;
    "If-Match": string;
}
