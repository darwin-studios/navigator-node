import type * as Darwin from "../index.mjs";
export interface SearchOrderedCapability {
    rank: number;
    agent: string;
    capability: string;
    revision: number;
    name: string;
    description: string | null;
    category: string | null;
    readiness: SearchOrderedCapability.Readiness;
    canStartThread: boolean;
    canAttemptThread?: boolean | undefined;
    threadUnavailableReason?: (SearchOrderedCapability.ThreadUnavailableReason | null) | undefined;
    input: Darwin.SearchCapabilityInput;
}
export declare namespace SearchOrderedCapability {
    const Readiness: {
        readonly Ready: "ready";
        readonly AuthenticationRequired: "authentication_required";
        readonly RecheckAvailable: "recheck_available";
        readonly Unavailable: "unavailable";
    };
    type Readiness = (typeof Readiness)[keyof typeof Readiness];
    const ThreadUnavailableReason: {
        readonly ActThreadCutoverPending: "ACT_THREAD_CUTOVER_PENDING";
        readonly TargetCapabilityNotFound: "TARGET_CAPABILITY_NOT_FOUND";
        readonly ThreadCapabilityCatalogTooLarge: "THREAD_CAPABILITY_CATALOG_TOO_LARGE";
        readonly RouteNotConfigured: "ROUTE_NOT_CONFIGURED";
        readonly RouteRevisionStale: "ROUTE_REVISION_STALE";
        readonly RouteNotApproved: "ROUTE_NOT_APPROVED";
        readonly RouteNotReady: "ROUTE_NOT_READY";
        readonly RouteNotVerified: "ROUTE_NOT_VERIFIED";
        readonly RouteVerificationExpired: "ROUTE_VERIFICATION_EXPIRED";
        readonly CallableTransportNotVerified: "CALLABLE_TRANSPORT_NOT_VERIFIED";
        readonly ThreadAdapterUnavailable: "THREAD_ADAPTER_UNAVAILABLE";
        readonly CapabilitySchemaMissing: "CAPABILITY_SCHEMA_MISSING";
        readonly ThreadAuthBindingUnverified: "THREAD_AUTH_BINDING_UNVERIFIED";
        readonly ThreadDiscoveryAuthenticationRequired: "THREAD_DISCOVERY_AUTHENTICATION_REQUIRED";
        readonly ExecutionMetadataPending: "EXECUTION_METADATA_PENDING";
        readonly ThreadReadinessUnavailable: "THREAD_READINESS_UNAVAILABLE";
    };
    type ThreadUnavailableReason = (typeof ThreadUnavailableReason)[keyof typeof ThreadUnavailableReason];
}
