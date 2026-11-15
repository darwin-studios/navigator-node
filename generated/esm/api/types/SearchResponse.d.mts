import type * as Darwin from "../index.mjs";
export interface SearchResponse {
    contractVersion: SearchResponse.ContractVersion;
    outcome: SearchResponse.Outcome;
    results: Darwin.SearchOrderedCapability[];
    agents: Darwin.SearchAgent[];
    versions: Darwin.SearchVersions;
    /** Present only for a server-configured read-only evaluation service account; ordinary clients cannot request it. */
    diagnostics?: SearchResponse.Diagnostics | undefined;
}
export declare namespace SearchResponse {
    const ContractVersion: {
        readonly SearchPublicV2: "search-public-v2";
    };
    type ContractVersion = (typeof ContractVersion)[keyof typeof ContractVersion];
    const Outcome: {
        readonly Match: "MATCH";
        readonly Clarify: "CLARIFY";
        readonly NoEligibleSupply: "NO_ELIGIBLE_SUPPLY";
    };
    type Outcome = (typeof Outcome)[keyof typeof Outcome];
    /**
     * Present only for a server-configured read-only evaluation service account; ordinary clients cannot request it.
     */
    interface Diagnostics {
        stopReason: string;
        intent?: unknown | undefined;
        candidates: Record<string, unknown>[];
    }
}
