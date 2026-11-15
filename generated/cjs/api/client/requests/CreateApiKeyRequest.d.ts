/**
 * @example
 *     {
 *         name: "Production server"
 *     }
 */
export interface CreateApiKeyRequest {
  /** user creates an account key; application creates a Search-only key for an owned application. */
  kind?: CreateApiKeyRequest.Kind;
  /** Required for application keys. Omit for kind=user. */
  applicationId?: string;
  /** A recognizable name for the environment or integration that will use this key. */
  name: string;
  /** Account keys can use directory:read for Search and agent:read plus agent:write for Act as the owner. Application keys are limited to directory:read. human:actions requires end-user OAuth and cannot be granted to an API key. */
  scopes?: CreateApiKeyRequest.Scopes.Item[];
  /** Optional future ISO 8601 expiration. Omit or set null for no scheduled expiration. */
  expiresAt?: string | null;
}
export declare namespace CreateApiKeyRequest {
  /** user creates an account key; application creates a Search-only key for an owned application. */
  const Kind: {
    readonly User: 'user';
    readonly Application: 'application';
  };
  type Kind = (typeof Kind)[keyof typeof Kind];
  type Scopes = Scopes.Item[];
  namespace Scopes {
    const Item: {
      readonly AccountRead: 'account:read';
      readonly MemoryRead: 'memory:read';
      readonly MemoryWrite: 'memory:write';
      readonly AisRead: 'ais:read';
      readonly AisWrite: 'ais:write';
      readonly AgentsRead: 'agents:read';
      readonly AgentsWrite: 'agents:write';
      readonly MembersRead: 'members:read';
      readonly MembersWrite: 'members:write';
      readonly ConversationsRead: 'conversations:read';
      readonly ConversationsWrite: 'conversations:write';
      readonly RequestsRead: 'requests:read';
      readonly RequestsWrite: 'requests:write';
      readonly SessionsRead: 'sessions:read';
      readonly SessionsWrite: 'sessions:write';
      readonly ToolsRead: 'tools:read';
      readonly ToolsExecute: 'tools:execute';
      readonly AiRead: 'ai:read';
      readonly AiWrite: 'ai:write';
      readonly AgentRead: 'agent:read';
      readonly AgentWrite: 'agent:write';
      readonly TasksRead: 'tasks:read';
      readonly TasksWrite: 'tasks:write';
      readonly GoalsRead: 'goals:read';
      readonly GoalsWrite: 'goals:write';
      readonly IntegrationsRead: 'integrations:read';
      readonly IntegrationsWrite: 'integrations:write';
      readonly ConnectionsRead: 'connections:read';
      readonly ConnectionsWrite: 'connections:write';
      readonly IdentityResolve: 'identity:resolve';
      readonly PermissionsRead: 'permissions:read';
      readonly PermissionsWrite: 'permissions:write';
      readonly ReputationRead: 'reputation:read';
      readonly SkillsRead: 'skills:read';
      readonly SkillsWrite: 'skills:write';
      readonly ListingsRead: 'listings:read';
      readonly ListingsWrite: 'listings:write';
      readonly OperationsRead: 'operations:read';
      readonly OperationsWrite: 'operations:write';
      readonly OperationsApprove: 'operations:approve';
      readonly AnalyticsRead: 'analytics:read';
      readonly AdvertisingRead: 'advertising:read';
      readonly AdvertisingWrite: 'advertising:write';
      readonly CapabilitiesRead: 'capabilities:read';
      readonly CapabilitiesWrite: 'capabilities:write';
      readonly NotificationsRead: 'notifications:read';
      readonly UsageRead: 'usage:read';
      readonly VerificationRead: 'verification:read';
      readonly DeploymentRead: 'deployment:read';
      readonly DeploymentWrite: 'deployment:write';
      readonly DirectoryRead: 'directory:read';
      readonly DealsRead: 'deals:read';
      readonly DealsWrite: 'deals:write';
      readonly OffersRead: 'offers:read';
      readonly OffersWrite: 'offers:write';
      readonly PaymentsRead: 'payments:read';
      readonly PaymentsWrite: 'payments:write';
      readonly TransactionsRead: 'transactions:read';
      readonly TransactionsWrite: 'transactions:write';
      readonly OutcomesRead: 'outcomes:read';
      readonly OutcomesWrite: 'outcomes:write';
      readonly EphemeralGoalsRead: 'ephemeral-goals:read';
      readonly EphemeralGoalsWrite: 'ephemeral-goals:write';
      readonly EphemeralTasksRead: 'ephemeral-tasks:read';
      readonly EphemeralTasksWrite: 'ephemeral-tasks:write';
      readonly ApplicationsRead: 'applications:read';
      readonly ApplicationsWrite: 'applications:write';
      readonly BuilderRead: 'builder:read';
      readonly BuilderWrite: 'builder:write';
      readonly UnclaimedAisRead: 'unclaimed-ais:read';
      readonly UnclaimedAisWrite: 'unclaimed-ais:write';
      readonly UnclaimedAgentsRead: 'unclaimed-agents:read';
      readonly UnclaimedAgentsWrite: 'unclaimed-agents:write';
      readonly WebhooksRead: 'webhooks:read';
      readonly WebhooksWrite: 'webhooks:write';
    };
    type Item = (typeof Item)[keyof typeof Item];
  }
}
