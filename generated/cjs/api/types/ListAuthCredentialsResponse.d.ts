export interface ListAuthCredentialsResponse {
  credentials: ListAuthCredentialsResponse.Credentials.Item[];
  nextCursor: string | null;
}
export declare namespace ListAuthCredentialsResponse {
  type Credentials = Credentials.Item[];
  namespace Credentials {
    interface Item {
      credentialId: string;
      provider: string;
      label: string | null;
      status: string;
      expiresAt: string | null;
      createdAt: string;
      /** Opaque revision for conditional revocation. */
      revision: string;
    }
  }
}
