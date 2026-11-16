import type * as Darwin from "../index.mjs";
export type BuildRequestBodyOne = Darwin.BuildRequestBodyOne.CreateAgent | Darwin.BuildRequestBodyOne.CreateOperation | Darwin.BuildRequestBodyOne.UpdateAgent | Darwin.BuildRequestBodyOne.UpdateOperation | Darwin.BuildRequestBodyOne.GetAgent | Darwin.BuildRequestBodyOne.GetOperation | Darwin.BuildRequestBodyOne.TestAgent | Darwin.BuildRequestBodyOne.TestOperation;
export declare namespace BuildRequestBodyOne {
    interface CreateAgent {
        action: "create_agent";
        input: BuildRequestBodyOneCreateAgent.Input;
    }
    namespace BuildRequestBodyOneCreateAgent {
        interface Input {
            componentLibrary?: Input.ComponentLibrary | undefined;
            handle: string;
            name: string;
            description?: string | undefined;
            avatarUrl?: (string | null) | undefined;
        }
        namespace Input {
            type ComponentLibrary = {
                source: "darwin_ui";
            } | {
                schemaVersion: number;
                name: string;
                version: string;
                importName: string;
                entry: string;
                files: Record<string, string>;
                components: {
                    export: string;
                    description: string;
                    props: string;
                    example: string;
                    human?: {
                        description: string;
                        states: ("input" | "running" | "needs_input" | "approval" | "success" | "empty" | "error")[];
                    } | undefined;
                    agent?: {
                        description: string;
                        outputSchema: Record<string, unknown>;
                        example: Record<string, unknown>;
                        instructions?: string | undefined;
                    } | undefined;
                }[];
            };
        }
    }
    interface CreateOperation {
        action: "create_operation";
        input: BuildRequestBodyOneCreateOperation.Input;
    }
    namespace BuildRequestBodyOneCreateOperation {
        interface Input {
            agentId: string;
            handle: string;
            name: string;
            description?: string | undefined;
            inputSchema?: Record<string, unknown> | undefined;
            outputSchema?: Record<string, unknown> | undefined;
            fulfillment?: Input.Fulfillment | undefined;
            pricing?: Input.Pricing | undefined;
            ownerApproval?: Input.OwnerApproval | undefined;
        }
        namespace Input {
            interface Fulfillment {
                mechanism: Fulfillment.Mechanism;
                endpoint?: string | undefined;
            }
            namespace Fulfillment {
                const Mechanism: {
                    readonly Manual: "MANUAL";
                    readonly Api: "API";
                    readonly Mcp: "MCP";
                    readonly A2A: "A2A";
                    readonly Webmcp: "WEBMCP";
                };
                type Mechanism = (typeof Mechanism)[keyof typeof Mechanism];
            }
            interface Pricing {
                currency?: Pricing.Currency | undefined;
                amountCents: number;
            }
            namespace Pricing {
                const Currency: {
                    readonly Usd: "USD";
                };
                type Currency = (typeof Currency)[keyof typeof Currency];
            }
            const OwnerApproval: {
                readonly Manual: "MANUAL";
                readonly Auto: "AUTO";
            };
            type OwnerApproval = (typeof OwnerApproval)[keyof typeof OwnerApproval];
        }
    }
    interface UpdateAgent {
        action: "update_agent";
        agentId: string;
        input: BuildRequestBodyOneUpdateAgent.Input;
    }
    namespace BuildRequestBodyOneUpdateAgent {
        interface Input {
            componentLibrary?: Input.ComponentLibrary | undefined;
            handle?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            avatarUrl?: (string | null) | undefined;
            expectedRevision: number;
        }
        namespace Input {
            type ComponentLibrary = {
                source: "darwin_ui";
            } | {
                schemaVersion: number;
                name: string;
                version: string;
                importName: string;
                entry: string;
                files: Record<string, string>;
                components: {
                    export: string;
                    description: string;
                    props: string;
                    example: string;
                    human?: {
                        description: string;
                        states: ("input" | "running" | "needs_input" | "approval" | "success" | "empty" | "error")[];
                    } | undefined;
                    agent?: {
                        description: string;
                        outputSchema: Record<string, unknown>;
                        example: Record<string, unknown>;
                        instructions?: string | undefined;
                    } | undefined;
                }[];
            };
        }
    }
    interface UpdateOperation {
        action: "update_operation";
        operationId: string;
        input: BuildRequestBodyOneUpdateOperation.Input;
    }
    namespace BuildRequestBodyOneUpdateOperation {
        interface Input {
            handle?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            inputSchema?: Record<string, unknown> | undefined;
            outputSchema?: Record<string, unknown> | undefined;
            fulfillment?: Input.Fulfillment | undefined;
            pricing?: Input.Pricing | undefined;
            ownerApproval?: Input.OwnerApproval | undefined;
            expectedRevision: number;
        }
        namespace Input {
            interface Fulfillment {
                mechanism: Fulfillment.Mechanism;
                endpoint?: string | undefined;
            }
            namespace Fulfillment {
                const Mechanism: {
                    readonly Manual: "MANUAL";
                    readonly Api: "API";
                    readonly Mcp: "MCP";
                    readonly A2A: "A2A";
                    readonly Webmcp: "WEBMCP";
                };
                type Mechanism = (typeof Mechanism)[keyof typeof Mechanism];
            }
            interface Pricing {
                currency?: Pricing.Currency | undefined;
                amountCents: number;
            }
            namespace Pricing {
                const Currency: {
                    readonly Usd: "USD";
                };
                type Currency = (typeof Currency)[keyof typeof Currency];
            }
            const OwnerApproval: {
                readonly Manual: "MANUAL";
                readonly Auto: "AUTO";
            };
            type OwnerApproval = (typeof OwnerApproval)[keyof typeof OwnerApproval];
        }
    }
    interface GetAgent {
        action: "get_agent";
        agentId: string;
    }
    interface GetOperation {
        action: "get_operation";
        operationId: string;
    }
    interface TestAgent {
        action: "test_agent";
        agentId: string;
    }
    interface TestOperation {
        action: "test_operation";
        operationId: string;
    }
}
