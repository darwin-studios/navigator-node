export interface ListTargetAccountsResponse {
  accounts: ListTargetAccountsResponse.Accounts.Item[];
  nextCursor: string | null;
}
export declare namespace ListTargetAccountsResponse {
  type Accounts = Accounts.Item[];
  namespace Accounts {
    interface Item {
      accountId: string;
      grantId: string;
      targetAiId: string;
      label: string;
      scopes: string[];
      isDefault: boolean;
      retention: Item.Retention;
      status: Item.Status;
      /** When the user explicitly chose this retention mode. Null means the retention consent cannot be proven and the account must not be used. */
      retentionConsentedAt: string | null;
      expiresAt: string | null;
      credentialExpiresAt: string | null;
      canRefresh: boolean;
    }
    namespace Item {
      const Retention: {
        readonly Temporary: 'temporary';
        readonly Saved: 'saved';
      };
      type Retention = (typeof Retention)[keyof typeof Retention];
      const Status: {
        readonly Available: 'available';
        readonly AuthenticationRequired: 'authentication_required';
        readonly Revoked: 'revoked';
      };
      type Status = (typeof Status)[keyof typeof Status];
    }
  }
}
