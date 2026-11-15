export interface ListAccountAuthCredentialsResponse {
  credentials: ListAccountAuthCredentialsResponse.Credentials.Item[];
  nextCursor: string | null;
}
export declare namespace ListAccountAuthCredentialsResponse {
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
