export interface Error_ {
  error?: string | undefined;
  message?: string | undefined;
  fields?: Record<string, unknown>[] | undefined;
  /** Machine-readable failure reason when the API returns a structured code, including revision conflicts. */
  code?: string | undefined;
  /** Wait at least this many seconds before retrying a throttled or unavailable request. */
  retryAfterSeconds?: number | undefined;
  /** Safe discovery-only challenge on HTTP 409 THREAD_DISCOVERY_AUTHENTICATION_REQUIRED. No thread or executable route is implied. Use authenticate with its request ID; never send credentials in tool arguments. */
  authenticationRequest?: Error_.AuthenticationRequest | undefined;
  /** Safe public MCP tool or OpenAPI operation selection on HTTP 409 THREAD_TOOL_SELECTION_REQUIRED. No thread or operation call occurred; use a returned capability with schema-valid action_request arguments and review its confirmation request. */
  targetAgent?: string | undefined;
  /** Safe public MCP tool or OpenAPI operation selection on HTTP 409 THREAD_TOOL_SELECTION_REQUIRED. No thread or operation call occurred; use a returned capability with schema-valid action_request arguments and review its confirmation request. */
  agent?: string | undefined;
  /** Safe public MCP tool or OpenAPI operation selection on HTTP 409 THREAD_TOOL_SELECTION_REQUIRED. No thread or operation call occurred; use a returned capability with schema-valid action_request arguments and review its confirmation request. */
  expiresAt?: string | undefined;
  /** Safe public MCP tool or OpenAPI operation selection on HTTP 409 THREAD_TOOL_SELECTION_REQUIRED. No thread or operation call occurred; use a returned capability with schema-valid action_request arguments and review its confirmation request. */
  capabilities?: Error_.Capabilities.Item[] | undefined;
  /** Accepts any additional properties */
  [key: string]: any;
}
export declare namespace Error_ {
  /**
   * Safe discovery-only challenge on HTTP 409 THREAD_DISCOVERY_AUTHENTICATION_REQUIRED. No thread or executable route is implied. Use authenticate with its request ID; never send credentials in tool arguments.
   */
  interface AuthenticationRequest {
    authenticationRequestId: string;
    actingAiId: string;
    targetAiId: string;
    purpose: AuthenticationRequest.Purpose;
    expiresAt: string;
  }
  namespace AuthenticationRequest {
    const Purpose: {
      readonly Discovery: 'discovery';
    };
    type Purpose = (typeof Purpose)[keyof typeof Purpose];
  }
  type Capabilities = Capabilities.Item[];
  namespace Capabilities {
    interface Item {
      capability: string;
      title: string;
      inputSchema: Record<string, unknown>;
      effect: Item.Effect;
      pricing: Item.Pricing;
      requiresConfirmation: boolean;
    }
    namespace Item {
      const Effect: {
        readonly ExternalEffect: 'external_effect';
      };
      type Effect = (typeof Effect)[keyof typeof Effect];
      const Pricing: {
        readonly Unknown: 'unknown';
      };
      type Pricing = (typeof Pricing)[keyof typeof Pricing];
    }
  }
}
