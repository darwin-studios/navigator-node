export interface RevokeTargetAccountResponse {
  accountId: string;
  targetAiId: string;
  revoked: boolean;
  providerRevocation?: RevokeTargetAccountResponse.ProviderRevocation | undefined;
}
export declare namespace RevokeTargetAccountResponse {
  const ProviderRevocation: {
    readonly Confirmed: 'confirmed';
    readonly Unsupported: 'unsupported';
    readonly Uncertain: 'uncertain';
  };
  type ProviderRevocation = (typeof ProviderRevocation)[keyof typeof ProviderRevocation];
}
