export interface CapabilityAccountRequirement {
    requirement: CapabilityAccountRequirement.Requirement;
    providerLabel: string | null;
    providerDomain: string | null;
    retentionModes: CapabilityAccountRequirement.RetentionModes.Item[];
    scopeDescriptions: string[];
    authorizationMode: CapabilityAccountRequirement.AuthorizationMode | null;
}
export declare namespace CapabilityAccountRequirement {
    const Requirement: {
        readonly None: "none";
        readonly Optional: "optional";
        readonly Required: "required";
    };
    type Requirement = (typeof Requirement)[keyof typeof Requirement];
    type RetentionModes = RetentionModes.Item[];
    namespace RetentionModes {
        const Item: {
            readonly Temporary: "temporary";
            readonly Saved: "saved";
        };
        type Item = (typeof Item)[keyof typeof Item];
    }
    const AuthorizationMode: {
        readonly RemoteMcpElicitation: "REMOTE_MCP_ELICITATION";
        readonly RemoteUcpIdentity: "REMOTE_UCP_IDENTITY";
        readonly DarwinBrokered: "DARWIN_BROKERED";
        readonly SellerHosted: "SELLER_HOSTED";
        readonly Unavailable: "UNAVAILABLE";
    };
    type AuthorizationMode = (typeof AuthorizationMode)[keyof typeof AuthorizationMode];
}
