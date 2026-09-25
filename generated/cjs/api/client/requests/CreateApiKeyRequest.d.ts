/**
 * @example
 *     {
 *         applicationId: "applicationId",
 *         name: "Production server"
 *     }
 */
export interface CreateApiKeyRequest {
  /** An active application owned by the signed-in account. */
  applicationId: string;
  /** A recognizable name for the environment or integration that will use this key. */
  name: string;
  /** Optional. New application keys are limited to directory:read; use OAuth for user-scoped Act. */
  scopes?: CreateApiKeyRequest.Scopes.Item[];
  /** Optional future ISO 8601 expiration. Omit or set null for no scheduled expiration. */
  expiresAt?: string | null;
}
export declare namespace CreateApiKeyRequest {
  type Scopes = Scopes.Item[];
  namespace Scopes {
    const Item: {
      readonly DirectoryRead: 'directory:read';
    };
    type Item = (typeof Item)[keyof typeof Item];
  }
}
