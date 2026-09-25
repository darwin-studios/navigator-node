export interface VaultItemList {
    items: VaultItemList.Items.Item[];
    nextCursor: string | null;
}
export declare namespace VaultItemList {
    type Items = Items.Item[];
    namespace Items {
        interface Item {
            id: string;
            kind: Item.Kind;
            provider: string;
            displayName: string;
            status: Item.Status;
            createdAt: string;
        }
        namespace Item {
            const Kind: {
                readonly OauthToken: "oauth_token";
                readonly ApiKey: "api_key";
                readonly ClientCredentials: "client_credentials";
                readonly Password: "password";
                readonly TotpSeed: "totp_seed";
                readonly SshPrivateKey: "ssh_private_key";
                readonly Certificate: "certificate";
                readonly ProviderSecret: "provider_secret";
            };
            type Kind = (typeof Kind)[keyof typeof Kind];
            const Status: {
                readonly Active: "active";
                readonly Expired: "expired";
                readonly Revoked: "revoked";
            };
            type Status = (typeof Status)[keyof typeof Status];
        }
    }
}
