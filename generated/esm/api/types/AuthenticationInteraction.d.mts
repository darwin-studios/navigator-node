/**
 * A provider and scope requirement bound to the Action. The same hosted flow completes first-time provider setup when needed. A completed saved grant becomes a revocable connection record; authentication never grants payment or approval authority.
 */
export interface AuthenticationInteraction {
    id: string;
    /** `connection` is a deprecated compatibility alias until the runtime migration ships. */
    kind: AuthenticationInteraction.Kind;
    state: AuthenticationInteraction.State;
    displayName: string;
    hostname: string;
    expiresAt: string;
    retentionChoices: AuthenticationInteraction.RetentionChoices.Item[];
    scopeDescriptions: string[];
}
export declare namespace AuthenticationInteraction {
    /** `connection` is a deprecated compatibility alias until the runtime migration ships. */
    const Kind: {
        readonly Authentication: "authentication";
        readonly Connection: "connection";
    };
    type Kind = (typeof Kind)[keyof typeof Kind];
    const State: {
        readonly Required: "required";
        readonly Pending: "pending";
        readonly Complete: "complete";
        readonly Declined: "declined";
        readonly Expired: "expired";
        readonly Failed: "failed";
    };
    type State = (typeof State)[keyof typeof State];
    type RetentionChoices = RetentionChoices.Item[];
    namespace RetentionChoices {
        const Item: {
            readonly Temporary: "temporary";
            readonly Saved: "saved";
        };
        type Item = (typeof Item)[keyof typeof Item];
    }
}
