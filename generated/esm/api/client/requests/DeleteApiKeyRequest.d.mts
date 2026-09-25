/**
 * @example
 *     {
 *         apiKeyId: "apiKeyId"
 *     }
 */
export interface DeleteApiKeyRequest {
    /** The API-key ID returned by Create API key or List API keys. This is not the secret key value. */
    apiKeyId: string;
}
