import type * as Darwin from "../index.mjs";
export type AssistV3ResponseConversationTurnsItemBlocksItem = Darwin.AssistV3ResponseConversationTurnsItemBlocksItem.LiveConsent | Darwin.AssistV3ResponseConversationTurnsItemBlocksItem.LiveSearch | Darwin.AssistV3ResponseConversationTurnsItemBlocksItem.Text | Darwin.AssistV3ResponseConversationTurnsItemBlocksItem.Agents | Darwin.AssistV3ResponseConversationTurnsItemBlocksItem.Checkpoint | Darwin.AssistV3ResponseConversationTurnsItemBlocksItem.Plan | Darwin.AssistV3ResponseConversationTurnsItemBlocksItem.Handoff | Darwin.AssistV3ResponseConversationTurnsItemBlocksItem.Outcome;
export declare namespace AssistV3ResponseConversationTurnsItemBlocksItem {
    interface LiveConsent {
        type: "live_consent";
        text: string;
    }
    interface LiveSearch {
        type: "live_search";
        sourceTurnId: string;
        snapshot: AssistV3ResponseConversationTurnsItemBlocksItemLiveSearch.Snapshot;
        agents: AssistV3ResponseConversationTurnsItemBlocksItemLiveSearch.Agents.Item[];
    }
    namespace AssistV3ResponseConversationTurnsItemBlocksItemLiveSearch {
        interface Snapshot {
            contractVersion: Snapshot.ContractVersion;
            sessionId: string;
            taskRevision: number;
            sequence: number;
            rankRevision: number;
            status: Snapshot.Status;
            deadlineAt: string;
            uniqueAgentsUsed: number;
            candidates: Snapshot.Candidates.Item[];
            orderedAgentIds: string[];
            events: Snapshot.Events.Item[];
            hasMore: boolean;
            nextEventCursor: number;
            completionReason: string | null;
        }
        namespace Snapshot {
            const ContractVersion: {
                readonly LiveSearch010: "live-search/0.1.0";
            };
            type ContractVersion = (typeof ContractVersion)[keyof typeof ContractVersion];
            const Status: {
                readonly Prepared: "prepared";
                readonly Running: "running";
                readonly Completed: "completed";
                readonly Cancelled: "cancelled";
                readonly RequiresInput: "requires_input";
            };
            type Status = (typeof Status)[keyof typeof Status];
            type Candidates = Candidates.Item[];
            namespace Candidates {
                interface Item {
                    agentId: string;
                    operationId: string;
                    operationRevision: number;
                    taskRevision: number;
                    evidenceVersion: number;
                    progress: Item.Progress;
                    verdict: Item.Verdict;
                    sends: number;
                    score: number;
                    evidence: Item.Evidence.Item[];
                    reason: string;
                }
                namespace Item {
                    const Progress: {
                        readonly Retrieved: "retrieved";
                        readonly Queued: "queued";
                        readonly Contacting: "contacting";
                        readonly Waiting: "waiting";
                        readonly Replied: "replied";
                        readonly Finished: "finished";
                    };
                    type Progress = (typeof Progress)[keyof typeof Progress];
                    const Verdict: {
                        readonly FitConfirmed: "fit_confirmed";
                        readonly Conditional: "conditional";
                        readonly NotFit: "not_fit";
                        readonly Unknown: "unknown";
                        readonly NoResponse: "no_response";
                        readonly RequiresInput: "requires_input";
                        readonly RequiresIdentity: "requires_identity";
                        readonly RequiresAuth: "requires_auth";
                        readonly RequiresPayment: "requires_payment";
                        readonly UnsupportedRoute: "unsupported_route";
                        readonly RateLimited: "rate_limited";
                        readonly TransportError: "transport_error";
                        readonly Cancelled: "cancelled";
                        readonly BudgetExhausted: "budget_exhausted";
                    };
                    type Verdict = (typeof Verdict)[keyof typeof Verdict];
                    type Evidence = Evidence.Item[];
                    namespace Evidence {
                        interface Item {
                            requirementId: string;
                            truth: Item.Truth;
                            kind: Item.Kind;
                            replyDigest: string;
                            quote: string;
                            observedAt: string;
                            validUntil: string;
                        }
                        namespace Item {
                            const Truth: {
                                readonly Pass: "PASS";
                                readonly Fail: "FAIL";
                                readonly Unknown: "UNKNOWN";
                                readonly Stale: "STALE";
                            };
                            type Truth = (typeof Truth)[keyof typeof Truth];
                            const Kind: {
                                readonly ProviderClaim: "provider_claim";
                                readonly Observed: "observed";
                                readonly CompletedWork: "completed_work";
                            };
                            type Kind = (typeof Kind)[keyof typeof Kind];
                        }
                    }
                }
            }
            type Events = Events.Item[];
            namespace Events {
                interface Item {
                    sequence: number;
                    taskRevision: number;
                    rankRevision: number;
                    kind: Item.Kind;
                    occurredAt: string;
                    candidate: Item.Candidate | null;
                    orderedAgentIds: string[];
                    reason: string;
                }
                namespace Item {
                    const Kind: {
                        readonly Started: "started";
                        readonly CandidateUpsert: "candidate_upsert";
                        readonly CandidateRemoved: "candidate_removed";
                        readonly Ranking: "ranking";
                        readonly Revised: "revised";
                        readonly Completed: "completed";
                        readonly Cancelled: "cancelled";
                        readonly RequiresInput: "requires_input";
                    };
                    type Kind = (typeof Kind)[keyof typeof Kind];
                    interface Candidate {
                        agentId: string;
                        operationId: string;
                        operationRevision: number;
                        taskRevision: number;
                        evidenceVersion: number;
                        progress: Candidate.Progress;
                        verdict: Candidate.Verdict;
                        sends: number;
                        score: number;
                        evidence: Candidate.Evidence.Item[];
                        reason: string;
                    }
                    namespace Candidate {
                        const Progress: {
                            readonly Retrieved: "retrieved";
                            readonly Queued: "queued";
                            readonly Contacting: "contacting";
                            readonly Waiting: "waiting";
                            readonly Replied: "replied";
                            readonly Finished: "finished";
                        };
                        type Progress = (typeof Progress)[keyof typeof Progress];
                        const Verdict: {
                            readonly FitConfirmed: "fit_confirmed";
                            readonly Conditional: "conditional";
                            readonly NotFit: "not_fit";
                            readonly Unknown: "unknown";
                            readonly NoResponse: "no_response";
                            readonly RequiresInput: "requires_input";
                            readonly RequiresIdentity: "requires_identity";
                            readonly RequiresAuth: "requires_auth";
                            readonly RequiresPayment: "requires_payment";
                            readonly UnsupportedRoute: "unsupported_route";
                            readonly RateLimited: "rate_limited";
                            readonly TransportError: "transport_error";
                            readonly Cancelled: "cancelled";
                            readonly BudgetExhausted: "budget_exhausted";
                        };
                        type Verdict = (typeof Verdict)[keyof typeof Verdict];
                        type Evidence = Evidence.Item[];
                        namespace Evidence {
                            interface Item {
                                requirementId: string;
                                truth: Item.Truth;
                                kind: Item.Kind;
                                replyDigest: string;
                                quote: string;
                                observedAt: string;
                                validUntil: string;
                            }
                            namespace Item {
                                const Truth: {
                                    readonly Pass: "PASS";
                                    readonly Fail: "FAIL";
                                    readonly Unknown: "UNKNOWN";
                                    readonly Stale: "STALE";
                                };
                                type Truth = (typeof Truth)[keyof typeof Truth];
                                const Kind: {
                                    readonly ProviderClaim: "provider_claim";
                                    readonly Observed: "observed";
                                    readonly CompletedWork: "completed_work";
                                };
                                type Kind = (typeof Kind)[keyof typeof Kind];
                            }
                        }
                    }
                }
            }
        }
        type Agents = Agents.Item[];
        namespace Agents {
            interface Item {
                agentId: string;
                agentSlug: string | null;
                operationId: string;
                operationRevision: number;
                providerFamilyRef: string | null;
                rank: number;
                selected: boolean;
                name: string;
                description: string | null;
                imageUrl?: (string | null) | undefined;
                avatarUrl?: (string | null) | undefined;
                requiredSetup: Item.RequiredSetup | null;
                executionRequirements: Item.ExecutionRequirements | null;
                executionGuidance: Item.ExecutionGuidance | null;
                readiness: Item.Readiness;
                canStartThread: boolean;
                canAttemptThread?: boolean | undefined;
                reasons: string[];
                uncertainties: string[];
                inquiry?: Item.Inquiry | undefined;
                providerCheck: Item.ProviderCheck;
                connectionMethods: Item.ConnectionMethods.Item[];
                connectionPrompt: string;
            }
            namespace Item {
                interface RequiredSetup {
                    kind: RequiredSetup.Kind;
                    suppliedBy: RequiredSetup.SuppliedBy;
                    description: string;
                }
                namespace RequiredSetup {
                    const Kind: {
                        readonly Credential: "credential";
                        readonly Installation: "installation";
                        readonly ProviderConfiguration: "provider_configuration";
                    };
                    type Kind = (typeof Kind)[keyof typeof Kind];
                    const SuppliedBy: {
                        readonly User: "user";
                        readonly Provider: "provider";
                        readonly Runtime: "runtime";
                    };
                    type SuppliedBy = (typeof SuppliedBy)[keyof typeof SuppliedBy];
                }
                interface ExecutionRequirements {
                    contractVersion: ExecutionRequirements.ContractVersion;
                    providerAuthentication: ExecutionRequirements.ProviderAuthentication;
                    operationCredentials: ExecutionRequirements.OperationCredentials;
                    runtime: ExecutionRequirements.Runtime;
                    payment: ExecutionRequirements.Payment;
                    browser: ExecutionRequirements.Browser;
                    providerContract: ExecutionRequirements.ProviderContract;
                    providerBlockers: ExecutionRequirements.ProviderBlockers.Item[];
                    derivation: ExecutionRequirements.Derivation;
                }
                namespace ExecutionRequirements {
                    const ContractVersion: {
                        readonly One00: "1.0.0";
                    };
                    type ContractVersion = (typeof ContractVersion)[keyof typeof ContractVersion];
                    interface ProviderAuthentication {
                        state: ProviderAuthentication.State;
                        mechanisms: ProviderAuthentication.Mechanisms.Item[];
                        placements: ProviderAuthentication.Placements.Item[];
                        scopes: string[];
                        evidence: ProviderAuthentication.Evidence;
                    }
                    namespace ProviderAuthentication {
                        const State: {
                            readonly Required: "REQUIRED";
                            readonly NotRequired: "NOT_REQUIRED";
                            readonly Unknown: "UNKNOWN";
                            readonly NotApplicable: "NOT_APPLICABLE";
                        };
                        type State = (typeof State)[keyof typeof State];
                        type Mechanisms = Mechanisms.Item[];
                        namespace Mechanisms {
                            const Item: {
                                readonly Bearer: "BEARER";
                                readonly ApiKey: "API_KEY";
                                readonly Oauth2: "OAUTH2";
                                readonly HttpBasic: "HTTP_BASIC";
                                readonly MutualTls: "MUTUAL_TLS";
                                readonly SignedRequest: "SIGNED_REQUEST";
                                readonly SessionCookie: "SESSION_COOKIE";
                                readonly OperationSecretInput: "OPERATION_SECRET_INPUT";
                                readonly Unspecified: "UNSPECIFIED";
                            };
                            type Item = (typeof Item)[keyof typeof Item];
                        }
                        type Placements = Placements.Item[];
                        namespace Placements {
                            const Item: {
                                readonly Header: "HEADER";
                                readonly Query: "QUERY";
                                readonly Cookie: "COOKIE";
                                readonly Body: "BODY";
                                readonly ToolArgument: "TOOL_ARGUMENT";
                                readonly Environment: "ENVIRONMENT";
                                readonly AuthContinuation: "AUTH_CONTINUATION";
                            };
                            type Item = (typeof Item)[keyof typeof Item];
                        }
                        const Evidence: {
                            readonly ProviderDeclared: "PROVIDER_DECLARED";
                            readonly ProviderObserved: "PROVIDER_OBSERVED";
                            readonly DerivedFromVerifiedReceipt: "DERIVED_FROM_VERIFIED_RECEIPT";
                            readonly Unknown: "UNKNOWN";
                        };
                        type Evidence = (typeof Evidence)[keyof typeof Evidence];
                    }
                    interface OperationCredentials {
                        state: OperationCredentials.State;
                        sensitiveInputNames: string[];
                    }
                    namespace OperationCredentials {
                        const State: {
                            readonly Required: "REQUIRED";
                            readonly NotRequired: "NOT_REQUIRED";
                            readonly Unknown: "UNKNOWN";
                            readonly NotApplicable: "NOT_APPLICABLE";
                        };
                        type State = (typeof State)[keyof typeof State];
                    }
                    interface Runtime {
                        kind: Runtime.Kind;
                        package: Runtime.Package | null;
                        requiredEnvironmentNames: string[];
                    }
                    namespace Runtime {
                        const Kind: {
                            readonly RemoteMcp: "REMOTE_MCP";
                            readonly LocalStdio: "LOCAL_STDIO";
                            readonly A2AJsonrpc: "A2A_JSONRPC";
                            readonly HttpJson: "HTTP_JSON";
                            readonly OpenapiHttp: "OPENAPI_HTTP";
                            readonly BoundedFetch: "BOUNDED_FETCH";
                            readonly Browser: "BROWSER";
                            readonly X402Payment: "X402_PAYMENT";
                            readonly Commerce: "COMMERCE";
                            readonly Unsupported: "UNSUPPORTED";
                        };
                        type Kind = (typeof Kind)[keyof typeof Kind];
                        interface Package {
                            ecosystem: string;
                            identifier: string;
                            version: string;
                            runtimeProfile: string;
                        }
                    }
                    interface Payment {
                        state: Payment.State;
                        termsDigest: string | null;
                    }
                    namespace Payment {
                        const State: {
                            readonly Required: "REQUIRED";
                            readonly NotRequired: "NOT_REQUIRED";
                            readonly Unknown: "UNKNOWN";
                            readonly NotApplicable: "NOT_APPLICABLE";
                        };
                        type State = (typeof State)[keyof typeof State];
                    }
                    interface Browser {
                        state: Browser.State;
                        sessionKind: Browser.SessionKind | null;
                    }
                    namespace Browser {
                        const State: {
                            readonly Required: "REQUIRED";
                            readonly NotRequired: "NOT_REQUIRED";
                            readonly Unknown: "UNKNOWN";
                            readonly NotApplicable: "NOT_APPLICABLE";
                        };
                        type State = (typeof State)[keyof typeof State];
                        const SessionKind: {
                            readonly Anonymous: "ANONYMOUS";
                            readonly ProviderSession: "PROVIDER_SESSION";
                            readonly Unknown: "UNKNOWN";
                        };
                        type SessionKind = (typeof SessionKind)[keyof typeof SessionKind];
                    }
                    interface ProviderContract {
                        route: ProviderContract.Route;
                        inputSchema: ProviderContract.InputSchema;
                        outputSchema: ProviderContract.OutputSchema;
                    }
                    namespace ProviderContract {
                        const Route: {
                            readonly Resolved: "RESOLVED";
                            readonly Missing: "MISSING";
                            readonly Ambiguous: "AMBIGUOUS";
                            readonly Unsafe: "UNSAFE";
                            readonly Unsupported: "UNSUPPORTED";
                            readonly Unknown: "UNKNOWN";
                        };
                        type Route = (typeof Route)[keyof typeof Route];
                        const InputSchema: {
                            readonly Concrete: "CONCRETE";
                            readonly DigestOnly: "DIGEST_ONLY";
                            readonly Missing: "MISSING";
                            readonly Unknown: "UNKNOWN";
                        };
                        type InputSchema = (typeof InputSchema)[keyof typeof InputSchema];
                        const OutputSchema: {
                            readonly Concrete: "CONCRETE";
                            readonly DigestOnly: "DIGEST_ONLY";
                            readonly Missing: "MISSING";
                            readonly Unknown: "UNKNOWN";
                        };
                        type OutputSchema = (typeof OutputSchema)[keyof typeof OutputSchema];
                    }
                    type ProviderBlockers = ProviderBlockers.Item[];
                    namespace ProviderBlockers {
                        interface Item {
                            code: Item.Code;
                            owner: Item.Owner;
                        }
                        namespace Item {
                            const Code: {
                                readonly ProviderRouteUnsupported: "PROVIDER_ROUTE_UNSUPPORTED";
                                readonly ProviderSchemaMissing: "PROVIDER_SCHEMA_MISSING";
                                readonly ProviderAuthSchemeUnspecified: "PROVIDER_AUTH_SCHEME_UNSPECIFIED";
                                readonly ProviderMetadataIncomplete: "PROVIDER_METADATA_INCOMPLETE";
                                readonly DarwinAdapterUnavailable: "DARWIN_ADAPTER_UNAVAILABLE";
                                readonly DarwinRouteNotApproved: "DARWIN_ROUTE_NOT_APPROVED";
                                readonly DarwinLocalRuntimeUnavailable: "DARWIN_LOCAL_RUNTIME_UNAVAILABLE";
                                readonly DarwinBrowserRuntimeUnavailable: "DARWIN_BROWSER_RUNTIME_UNAVAILABLE";
                                readonly DarwinPaymentRuntimeUnavailable: "DARWIN_PAYMENT_RUNTIME_UNAVAILABLE";
                            };
                            type Code = (typeof Code)[keyof typeof Code];
                            const Owner: {
                                readonly Provider: "PROVIDER";
                                readonly Darwin: "DARWIN";
                            };
                            type Owner = (typeof Owner)[keyof typeof Owner];
                        }
                    }
                    interface Derivation {
                        normalizerVersion: Derivation.NormalizerVersion;
                        sourceRevision: string;
                        sourceReceiptDigest: string | null;
                        completeness: Derivation.Completeness;
                        derivationKey: string;
                    }
                    namespace Derivation {
                        const NormalizerVersion: {
                            readonly ExecutionRequirementsV1: "execution-requirements-v1";
                        };
                        type NormalizerVersion = (typeof NormalizerVersion)[keyof typeof NormalizerVersion];
                        const Completeness: {
                            readonly Complete: "COMPLETE";
                            readonly Partial: "PARTIAL";
                        };
                        type Completeness = (typeof Completeness)[keyof typeof Completeness];
                    }
                }
                interface ExecutionGuidance {
                    credentialSummaryCode: string;
                    credentialSummary: string;
                    setupSummaryCode: string;
                    setupSummary: string;
                    recordBlockers: ExecutionGuidance.RecordBlockers.Item[];
                    primaryBlockerCode: ExecutionGuidance.PrimaryBlockerCode | null;
                    rendererVersion: ExecutionGuidance.RendererVersion;
                }
                namespace ExecutionGuidance {
                    type RecordBlockers = RecordBlockers.Item[];
                    namespace RecordBlockers {
                        interface Item {
                            code: Item.Code;
                            owner: Item.Owner;
                        }
                        namespace Item {
                            const Code: {
                                readonly ProviderRouteUnsupported: "PROVIDER_ROUTE_UNSUPPORTED";
                                readonly ProviderSchemaMissing: "PROVIDER_SCHEMA_MISSING";
                                readonly ProviderAuthSchemeUnspecified: "PROVIDER_AUTH_SCHEME_UNSPECIFIED";
                                readonly ProviderMetadataIncomplete: "PROVIDER_METADATA_INCOMPLETE";
                                readonly DarwinAdapterUnavailable: "DARWIN_ADAPTER_UNAVAILABLE";
                                readonly DarwinRouteNotApproved: "DARWIN_ROUTE_NOT_APPROVED";
                                readonly DarwinLocalRuntimeUnavailable: "DARWIN_LOCAL_RUNTIME_UNAVAILABLE";
                                readonly DarwinBrowserRuntimeUnavailable: "DARWIN_BROWSER_RUNTIME_UNAVAILABLE";
                                readonly DarwinPaymentRuntimeUnavailable: "DARWIN_PAYMENT_RUNTIME_UNAVAILABLE";
                            };
                            type Code = (typeof Code)[keyof typeof Code];
                            const Owner: {
                                readonly Provider: "PROVIDER";
                                readonly Darwin: "DARWIN";
                            };
                            type Owner = (typeof Owner)[keyof typeof Owner];
                        }
                    }
                    const PrimaryBlockerCode: {
                        readonly ProviderRouteUnsupported: "PROVIDER_ROUTE_UNSUPPORTED";
                        readonly ProviderSchemaMissing: "PROVIDER_SCHEMA_MISSING";
                        readonly ProviderAuthSchemeUnspecified: "PROVIDER_AUTH_SCHEME_UNSPECIFIED";
                        readonly ProviderMetadataIncomplete: "PROVIDER_METADATA_INCOMPLETE";
                        readonly DarwinAdapterUnavailable: "DARWIN_ADAPTER_UNAVAILABLE";
                        readonly DarwinRouteNotApproved: "DARWIN_ROUTE_NOT_APPROVED";
                        readonly DarwinLocalRuntimeUnavailable: "DARWIN_LOCAL_RUNTIME_UNAVAILABLE";
                        readonly DarwinBrowserRuntimeUnavailable: "DARWIN_BROWSER_RUNTIME_UNAVAILABLE";
                        readonly DarwinPaymentRuntimeUnavailable: "DARWIN_PAYMENT_RUNTIME_UNAVAILABLE";
                    };
                    type PrimaryBlockerCode = (typeof PrimaryBlockerCode)[keyof typeof PrimaryBlockerCode];
                    const RendererVersion: {
                        readonly ExecutionGuidanceV1: "execution-guidance-v1";
                    };
                    type RendererVersion = (typeof RendererVersion)[keyof typeof RendererVersion];
                }
                const Readiness: {
                    readonly Ready: "ready";
                    readonly AuthenticationRequired: "authentication_required";
                    readonly RecheckRequired: "recheck_required";
                    readonly Unavailable: "unavailable";
                };
                type Readiness = (typeof Readiness)[keyof typeof Readiness];
                interface Inquiry {
                    status: Inquiry.Status;
                    fit?: Inquiry.Fit | undefined;
                    expiresAt?: string | undefined;
                    threadId?: string | undefined;
                    question: string;
                    replies: Inquiry.Replies.Item[];
                    description?: string | undefined;
                    reason?: string | undefined;
                }
                namespace Inquiry {
                    const Status: {
                        readonly Contacting: "contacting";
                        readonly Waiting: "waiting";
                        readonly FollowingUp: "following_up";
                        readonly Replied: "replied";
                        readonly NeedsInput: "needs_input";
                        readonly NoReply: "no_reply";
                        readonly NotContacted: "not_contacted";
                        readonly OutcomeUnknown: "outcome_unknown";
                    };
                    type Status = (typeof Status)[keyof typeof Status];
                    const Fit: {
                        readonly Matches: "matches";
                        readonly Partial: "partial";
                        readonly NotFit: "not_fit";
                        readonly Unknown: "unknown";
                    };
                    type Fit = (typeof Fit)[keyof typeof Fit];
                    type Replies = Replies.Item[];
                    namespace Replies {
                        interface Item {
                            messageId: string;
                            text: string;
                            at: string;
                        }
                    }
                }
                const ProviderCheck: {
                    readonly NotAttempted: "not_attempted";
                    readonly Confirmed: "confirmed";
                    readonly Unconfirmed: "unconfirmed";
                    readonly Unavailable: "unavailable";
                };
                type ProviderCheck = (typeof ProviderCheck)[keyof typeof ProviderCheck];
                type ConnectionMethods = ConnectionMethods.Item[];
                namespace ConnectionMethods {
                    interface Item {
                        protocol: Item.Protocol;
                        environment: Item.Environment;
                        endpointUrl: string | null;
                        endpointStatus: Item.EndpointStatus;
                        documentationUrl: string;
                    }
                    namespace Item {
                        const Protocol: {
                            readonly Mcp: "MCP";
                            readonly A2A: "A2A";
                            readonly Webmcp: "WEBMCP";
                        };
                        type Protocol = (typeof Protocol)[keyof typeof Protocol];
                        const Environment: {
                            readonly RemoteClient: "remote_client";
                            readonly BrowserSession: "browser_session";
                        };
                        type Environment = (typeof Environment)[keyof typeof Environment];
                        const EndpointStatus: {
                            readonly NotPublished: "not_published";
                            readonly Verified: "verified";
                        };
                        type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];
                    }
                }
            }
        }
    }
    interface Text {
        type: "text";
        text: string;
    }
    interface Agents {
        type: "agents";
        searchId: string;
        agents: AssistV3ResponseConversationTurnsItemBlocksItemAgents.Agents.Item[];
        role: AssistV3ResponseConversationTurnsItemBlocksItemAgents.Role;
    }
    namespace AssistV3ResponseConversationTurnsItemBlocksItemAgents {
        type Agents = Agents.Item[];
        namespace Agents {
            interface Item {
                agentId: string;
                agentSlug: string | null;
                operationId: string;
                operationRevision: number;
                providerFamilyRef: string | null;
                rank: number;
                selected: boolean;
                name: string;
                description: string | null;
                imageUrl?: (string | null) | undefined;
                avatarUrl?: (string | null) | undefined;
                requiredSetup: Item.RequiredSetup | null;
                executionRequirements: Item.ExecutionRequirements | null;
                executionGuidance: Item.ExecutionGuidance | null;
                readiness: Item.Readiness;
                canStartThread: boolean;
                canAttemptThread?: boolean | undefined;
                reasons: string[];
                uncertainties: string[];
                inquiry?: Item.Inquiry | undefined;
                providerCheck: Item.ProviderCheck;
                connectionMethods: Item.ConnectionMethods.Item[];
                connectionPrompt: string;
            }
            namespace Item {
                interface RequiredSetup {
                    kind: RequiredSetup.Kind;
                    suppliedBy: RequiredSetup.SuppliedBy;
                    description: string;
                }
                namespace RequiredSetup {
                    const Kind: {
                        readonly Credential: "credential";
                        readonly Installation: "installation";
                        readonly ProviderConfiguration: "provider_configuration";
                    };
                    type Kind = (typeof Kind)[keyof typeof Kind];
                    const SuppliedBy: {
                        readonly User: "user";
                        readonly Provider: "provider";
                        readonly Runtime: "runtime";
                    };
                    type SuppliedBy = (typeof SuppliedBy)[keyof typeof SuppliedBy];
                }
                interface ExecutionRequirements {
                    contractVersion: ExecutionRequirements.ContractVersion;
                    providerAuthentication: ExecutionRequirements.ProviderAuthentication;
                    operationCredentials: ExecutionRequirements.OperationCredentials;
                    runtime: ExecutionRequirements.Runtime;
                    payment: ExecutionRequirements.Payment;
                    browser: ExecutionRequirements.Browser;
                    providerContract: ExecutionRequirements.ProviderContract;
                    providerBlockers: ExecutionRequirements.ProviderBlockers.Item[];
                    derivation: ExecutionRequirements.Derivation;
                }
                namespace ExecutionRequirements {
                    const ContractVersion: {
                        readonly One00: "1.0.0";
                    };
                    type ContractVersion = (typeof ContractVersion)[keyof typeof ContractVersion];
                    interface ProviderAuthentication {
                        state: ProviderAuthentication.State;
                        mechanisms: ProviderAuthentication.Mechanisms.Item[];
                        placements: ProviderAuthentication.Placements.Item[];
                        scopes: string[];
                        evidence: ProviderAuthentication.Evidence;
                    }
                    namespace ProviderAuthentication {
                        const State: {
                            readonly Required: "REQUIRED";
                            readonly NotRequired: "NOT_REQUIRED";
                            readonly Unknown: "UNKNOWN";
                            readonly NotApplicable: "NOT_APPLICABLE";
                        };
                        type State = (typeof State)[keyof typeof State];
                        type Mechanisms = Mechanisms.Item[];
                        namespace Mechanisms {
                            const Item: {
                                readonly Bearer: "BEARER";
                                readonly ApiKey: "API_KEY";
                                readonly Oauth2: "OAUTH2";
                                readonly HttpBasic: "HTTP_BASIC";
                                readonly MutualTls: "MUTUAL_TLS";
                                readonly SignedRequest: "SIGNED_REQUEST";
                                readonly SessionCookie: "SESSION_COOKIE";
                                readonly OperationSecretInput: "OPERATION_SECRET_INPUT";
                                readonly Unspecified: "UNSPECIFIED";
                            };
                            type Item = (typeof Item)[keyof typeof Item];
                        }
                        type Placements = Placements.Item[];
                        namespace Placements {
                            const Item: {
                                readonly Header: "HEADER";
                                readonly Query: "QUERY";
                                readonly Cookie: "COOKIE";
                                readonly Body: "BODY";
                                readonly ToolArgument: "TOOL_ARGUMENT";
                                readonly Environment: "ENVIRONMENT";
                                readonly AuthContinuation: "AUTH_CONTINUATION";
                            };
                            type Item = (typeof Item)[keyof typeof Item];
                        }
                        const Evidence: {
                            readonly ProviderDeclared: "PROVIDER_DECLARED";
                            readonly ProviderObserved: "PROVIDER_OBSERVED";
                            readonly DerivedFromVerifiedReceipt: "DERIVED_FROM_VERIFIED_RECEIPT";
                            readonly Unknown: "UNKNOWN";
                        };
                        type Evidence = (typeof Evidence)[keyof typeof Evidence];
                    }
                    interface OperationCredentials {
                        state: OperationCredentials.State;
                        sensitiveInputNames: string[];
                    }
                    namespace OperationCredentials {
                        const State: {
                            readonly Required: "REQUIRED";
                            readonly NotRequired: "NOT_REQUIRED";
                            readonly Unknown: "UNKNOWN";
                            readonly NotApplicable: "NOT_APPLICABLE";
                        };
                        type State = (typeof State)[keyof typeof State];
                    }
                    interface Runtime {
                        kind: Runtime.Kind;
                        package: Runtime.Package | null;
                        requiredEnvironmentNames: string[];
                    }
                    namespace Runtime {
                        const Kind: {
                            readonly RemoteMcp: "REMOTE_MCP";
                            readonly LocalStdio: "LOCAL_STDIO";
                            readonly A2AJsonrpc: "A2A_JSONRPC";
                            readonly HttpJson: "HTTP_JSON";
                            readonly OpenapiHttp: "OPENAPI_HTTP";
                            readonly BoundedFetch: "BOUNDED_FETCH";
                            readonly Browser: "BROWSER";
                            readonly X402Payment: "X402_PAYMENT";
                            readonly Commerce: "COMMERCE";
                            readonly Unsupported: "UNSUPPORTED";
                        };
                        type Kind = (typeof Kind)[keyof typeof Kind];
                        interface Package {
                            ecosystem: string;
                            identifier: string;
                            version: string;
                            runtimeProfile: string;
                        }
                    }
                    interface Payment {
                        state: Payment.State;
                        termsDigest: string | null;
                    }
                    namespace Payment {
                        const State: {
                            readonly Required: "REQUIRED";
                            readonly NotRequired: "NOT_REQUIRED";
                            readonly Unknown: "UNKNOWN";
                            readonly NotApplicable: "NOT_APPLICABLE";
                        };
                        type State = (typeof State)[keyof typeof State];
                    }
                    interface Browser {
                        state: Browser.State;
                        sessionKind: Browser.SessionKind | null;
                    }
                    namespace Browser {
                        const State: {
                            readonly Required: "REQUIRED";
                            readonly NotRequired: "NOT_REQUIRED";
                            readonly Unknown: "UNKNOWN";
                            readonly NotApplicable: "NOT_APPLICABLE";
                        };
                        type State = (typeof State)[keyof typeof State];
                        const SessionKind: {
                            readonly Anonymous: "ANONYMOUS";
                            readonly ProviderSession: "PROVIDER_SESSION";
                            readonly Unknown: "UNKNOWN";
                        };
                        type SessionKind = (typeof SessionKind)[keyof typeof SessionKind];
                    }
                    interface ProviderContract {
                        route: ProviderContract.Route;
                        inputSchema: ProviderContract.InputSchema;
                        outputSchema: ProviderContract.OutputSchema;
                    }
                    namespace ProviderContract {
                        const Route: {
                            readonly Resolved: "RESOLVED";
                            readonly Missing: "MISSING";
                            readonly Ambiguous: "AMBIGUOUS";
                            readonly Unsafe: "UNSAFE";
                            readonly Unsupported: "UNSUPPORTED";
                            readonly Unknown: "UNKNOWN";
                        };
                        type Route = (typeof Route)[keyof typeof Route];
                        const InputSchema: {
                            readonly Concrete: "CONCRETE";
                            readonly DigestOnly: "DIGEST_ONLY";
                            readonly Missing: "MISSING";
                            readonly Unknown: "UNKNOWN";
                        };
                        type InputSchema = (typeof InputSchema)[keyof typeof InputSchema];
                        const OutputSchema: {
                            readonly Concrete: "CONCRETE";
                            readonly DigestOnly: "DIGEST_ONLY";
                            readonly Missing: "MISSING";
                            readonly Unknown: "UNKNOWN";
                        };
                        type OutputSchema = (typeof OutputSchema)[keyof typeof OutputSchema];
                    }
                    type ProviderBlockers = ProviderBlockers.Item[];
                    namespace ProviderBlockers {
                        interface Item {
                            code: Item.Code;
                            owner: Item.Owner;
                        }
                        namespace Item {
                            const Code: {
                                readonly ProviderRouteUnsupported: "PROVIDER_ROUTE_UNSUPPORTED";
                                readonly ProviderSchemaMissing: "PROVIDER_SCHEMA_MISSING";
                                readonly ProviderAuthSchemeUnspecified: "PROVIDER_AUTH_SCHEME_UNSPECIFIED";
                                readonly ProviderMetadataIncomplete: "PROVIDER_METADATA_INCOMPLETE";
                                readonly DarwinAdapterUnavailable: "DARWIN_ADAPTER_UNAVAILABLE";
                                readonly DarwinRouteNotApproved: "DARWIN_ROUTE_NOT_APPROVED";
                                readonly DarwinLocalRuntimeUnavailable: "DARWIN_LOCAL_RUNTIME_UNAVAILABLE";
                                readonly DarwinBrowserRuntimeUnavailable: "DARWIN_BROWSER_RUNTIME_UNAVAILABLE";
                                readonly DarwinPaymentRuntimeUnavailable: "DARWIN_PAYMENT_RUNTIME_UNAVAILABLE";
                            };
                            type Code = (typeof Code)[keyof typeof Code];
                            const Owner: {
                                readonly Provider: "PROVIDER";
                                readonly Darwin: "DARWIN";
                            };
                            type Owner = (typeof Owner)[keyof typeof Owner];
                        }
                    }
                    interface Derivation {
                        normalizerVersion: Derivation.NormalizerVersion;
                        sourceRevision: string;
                        sourceReceiptDigest: string | null;
                        completeness: Derivation.Completeness;
                        derivationKey: string;
                    }
                    namespace Derivation {
                        const NormalizerVersion: {
                            readonly ExecutionRequirementsV1: "execution-requirements-v1";
                        };
                        type NormalizerVersion = (typeof NormalizerVersion)[keyof typeof NormalizerVersion];
                        const Completeness: {
                            readonly Complete: "COMPLETE";
                            readonly Partial: "PARTIAL";
                        };
                        type Completeness = (typeof Completeness)[keyof typeof Completeness];
                    }
                }
                interface ExecutionGuidance {
                    credentialSummaryCode: string;
                    credentialSummary: string;
                    setupSummaryCode: string;
                    setupSummary: string;
                    recordBlockers: ExecutionGuidance.RecordBlockers.Item[];
                    primaryBlockerCode: ExecutionGuidance.PrimaryBlockerCode | null;
                    rendererVersion: ExecutionGuidance.RendererVersion;
                }
                namespace ExecutionGuidance {
                    type RecordBlockers = RecordBlockers.Item[];
                    namespace RecordBlockers {
                        interface Item {
                            code: Item.Code;
                            owner: Item.Owner;
                        }
                        namespace Item {
                            const Code: {
                                readonly ProviderRouteUnsupported: "PROVIDER_ROUTE_UNSUPPORTED";
                                readonly ProviderSchemaMissing: "PROVIDER_SCHEMA_MISSING";
                                readonly ProviderAuthSchemeUnspecified: "PROVIDER_AUTH_SCHEME_UNSPECIFIED";
                                readonly ProviderMetadataIncomplete: "PROVIDER_METADATA_INCOMPLETE";
                                readonly DarwinAdapterUnavailable: "DARWIN_ADAPTER_UNAVAILABLE";
                                readonly DarwinRouteNotApproved: "DARWIN_ROUTE_NOT_APPROVED";
                                readonly DarwinLocalRuntimeUnavailable: "DARWIN_LOCAL_RUNTIME_UNAVAILABLE";
                                readonly DarwinBrowserRuntimeUnavailable: "DARWIN_BROWSER_RUNTIME_UNAVAILABLE";
                                readonly DarwinPaymentRuntimeUnavailable: "DARWIN_PAYMENT_RUNTIME_UNAVAILABLE";
                            };
                            type Code = (typeof Code)[keyof typeof Code];
                            const Owner: {
                                readonly Provider: "PROVIDER";
                                readonly Darwin: "DARWIN";
                            };
                            type Owner = (typeof Owner)[keyof typeof Owner];
                        }
                    }
                    const PrimaryBlockerCode: {
                        readonly ProviderRouteUnsupported: "PROVIDER_ROUTE_UNSUPPORTED";
                        readonly ProviderSchemaMissing: "PROVIDER_SCHEMA_MISSING";
                        readonly ProviderAuthSchemeUnspecified: "PROVIDER_AUTH_SCHEME_UNSPECIFIED";
                        readonly ProviderMetadataIncomplete: "PROVIDER_METADATA_INCOMPLETE";
                        readonly DarwinAdapterUnavailable: "DARWIN_ADAPTER_UNAVAILABLE";
                        readonly DarwinRouteNotApproved: "DARWIN_ROUTE_NOT_APPROVED";
                        readonly DarwinLocalRuntimeUnavailable: "DARWIN_LOCAL_RUNTIME_UNAVAILABLE";
                        readonly DarwinBrowserRuntimeUnavailable: "DARWIN_BROWSER_RUNTIME_UNAVAILABLE";
                        readonly DarwinPaymentRuntimeUnavailable: "DARWIN_PAYMENT_RUNTIME_UNAVAILABLE";
                    };
                    type PrimaryBlockerCode = (typeof PrimaryBlockerCode)[keyof typeof PrimaryBlockerCode];
                    const RendererVersion: {
                        readonly ExecutionGuidanceV1: "execution-guidance-v1";
                    };
                    type RendererVersion = (typeof RendererVersion)[keyof typeof RendererVersion];
                }
                const Readiness: {
                    readonly Ready: "ready";
                    readonly AuthenticationRequired: "authentication_required";
                    readonly RecheckRequired: "recheck_required";
                    readonly Unavailable: "unavailable";
                };
                type Readiness = (typeof Readiness)[keyof typeof Readiness];
                interface Inquiry {
                    status: Inquiry.Status;
                    fit?: Inquiry.Fit | undefined;
                    expiresAt?: string | undefined;
                    threadId?: string | undefined;
                    question: string;
                    replies: Inquiry.Replies.Item[];
                    description?: string | undefined;
                    reason?: string | undefined;
                }
                namespace Inquiry {
                    const Status: {
                        readonly Contacting: "contacting";
                        readonly Waiting: "waiting";
                        readonly FollowingUp: "following_up";
                        readonly Replied: "replied";
                        readonly NeedsInput: "needs_input";
                        readonly NoReply: "no_reply";
                        readonly NotContacted: "not_contacted";
                        readonly OutcomeUnknown: "outcome_unknown";
                    };
                    type Status = (typeof Status)[keyof typeof Status];
                    const Fit: {
                        readonly Matches: "matches";
                        readonly Partial: "partial";
                        readonly NotFit: "not_fit";
                        readonly Unknown: "unknown";
                    };
                    type Fit = (typeof Fit)[keyof typeof Fit];
                    type Replies = Replies.Item[];
                    namespace Replies {
                        interface Item {
                            messageId: string;
                            text: string;
                            at: string;
                        }
                    }
                }
                const ProviderCheck: {
                    readonly NotAttempted: "not_attempted";
                    readonly Confirmed: "confirmed";
                    readonly Unconfirmed: "unconfirmed";
                    readonly Unavailable: "unavailable";
                };
                type ProviderCheck = (typeof ProviderCheck)[keyof typeof ProviderCheck];
                type ConnectionMethods = ConnectionMethods.Item[];
                namespace ConnectionMethods {
                    interface Item {
                        protocol: Item.Protocol;
                        environment: Item.Environment;
                        endpointUrl: string | null;
                        endpointStatus: Item.EndpointStatus;
                        documentationUrl: string;
                    }
                    namespace Item {
                        const Protocol: {
                            readonly Mcp: "MCP";
                            readonly A2A: "A2A";
                            readonly Webmcp: "WEBMCP";
                        };
                        type Protocol = (typeof Protocol)[keyof typeof Protocol];
                        const Environment: {
                            readonly RemoteClient: "remote_client";
                            readonly BrowserSession: "browser_session";
                        };
                        type Environment = (typeof Environment)[keyof typeof Environment];
                        const EndpointStatus: {
                            readonly NotPublished: "not_published";
                            readonly Verified: "verified";
                        };
                        type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];
                    }
                }
            }
        }
        const Role: {
            readonly Suggested: "suggested";
            readonly Used: "used";
        };
        type Role = (typeof Role)[keyof typeof Role];
    }
    interface Checkpoint {
        type: "checkpoint";
        reason: AssistV3ResponseConversationTurnsItemBlocksItemCheckpoint.Reason;
        text: string;
        threadId?: string | undefined;
    }
    namespace AssistV3ResponseConversationTurnsItemBlocksItemCheckpoint {
        const Reason: {
            readonly Approval: "approval";
            readonly Connection: "connection";
            readonly Unavailable: "unavailable";
            readonly Limit: "limit";
            readonly UserControl: "user_control";
            readonly Input: "input";
        };
        type Reason = (typeof Reason)[keyof typeof Reason];
    }
    interface Plan {
        type: "plan";
        presentation?: AssistV3ResponseConversationTurnsItemBlocksItemPlan.Presentation | undefined;
        steps: AssistV3ResponseConversationTurnsItemBlocksItemPlan.Steps.Item[];
    }
    namespace AssistV3ResponseConversationTurnsItemBlocksItemPlan {
        interface Presentation {
            outcome: string;
            timeline: string | null;
            budget: string | null;
            steps: Presentation.Steps.Item[];
        }
        namespace Presentation {
            type Steps = Steps.Item[];
            namespace Steps {
                interface Item {
                    title: string;
                    description: string;
                    operationIds: string[];
                    alternativeOperationIds?: string[] | undefined;
                }
            }
        }
        type Steps = Steps.Item[];
        namespace Steps {
            interface Item {
                stepId: string;
                objective: string;
                agentId: string;
                dependsOn: string[];
            }
        }
    }
    interface Handoff {
        type: "handoff";
        agentId: string;
        threadId: string;
        actingAiId?: string | undefined;
        actRequestId?: string | undefined;
        url?: string | undefined;
        control?: AssistV3ResponseConversationTurnsItemBlocksItemHandoff.Control | undefined;
        presentation?: AssistV3ResponseConversationTurnsItemBlocksItemHandoff.Presentation | undefined;
        sourceTurnId?: string | undefined;
        status?: AssistV3ResponseConversationTurnsItemBlocksItemHandoff.Status | undefined;
        operationId?: string | undefined;
    }
    namespace AssistV3ResponseConversationTurnsItemBlocksItemHandoff {
        const Control: {
            readonly User: "user";
            readonly Coordinator: "coordinator";
        };
        type Control = (typeof Control)[keyof typeof Control];
        const Presentation: {
            readonly Chat: "chat";
            readonly Operation: "operation";
        };
        type Presentation = (typeof Presentation)[keyof typeof Presentation];
        const Status: {
            readonly ThreadCreated: "thread_created";
        };
        type Status = (typeof Status)[keyof typeof Status];
    }
    interface Outcome {
        type: "outcome";
        text: string;
        messageIds: string[];
        verification: AssistV3ResponseConversationTurnsItemBlocksItemOutcome.Verification;
        partial: boolean;
    }
    namespace AssistV3ResponseConversationTurnsItemBlocksItemOutcome {
        const Verification: {
            readonly ProviderReported: "provider_reported";
            readonly CriteriaChecked: "criteria_checked";
        };
        type Verification = (typeof Verification)[keyof typeof Verification];
    }
}
