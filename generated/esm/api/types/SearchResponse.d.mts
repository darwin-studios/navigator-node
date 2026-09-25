import type * as Darwin from "../index.mjs";
export interface SearchResponse {
    results: Darwin.Capability[];
    nextCursor: string | null;
    degraded?: boolean | undefined;
    degradedReason?: (SearchResponse.DegradedReason | null) | undefined;
    partialHydration?: boolean | undefined;
    rankingVersion?: string | undefined;
}
export declare namespace SearchResponse {
    const DegradedReason: {
        readonly CanonicalCache: "CANONICAL_CACHE";
        readonly PostgresCompatibility: "POSTGRES_COMPATIBILITY";
    };
    type DegradedReason = (typeof DegradedReason)[keyof typeof DegradedReason];
}
