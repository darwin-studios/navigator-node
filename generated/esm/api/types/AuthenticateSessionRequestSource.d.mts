import type * as Darwin from "../index.mjs";
export type AuthenticateSessionRequestSource = Darwin.AuthenticateSessionRequestSource.OneTime | Darwin.AuthenticateSessionRequestSource.DarwinVault | Darwin.AuthenticateSessionRequestSource.ExternalVault;
export declare namespace AuthenticateSessionRequestSource {
    interface OneTime {
        kind: "one_time";
    }
    interface DarwinVault {
        kind: "darwin_vault";
        vaultItemId: string;
    }
    interface ExternalVault {
        kind: "external_vault";
        vaultConnectionId: string;
        itemReference: string;
    }
}
