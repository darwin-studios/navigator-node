import * as Darwin from './api/index.mjs';
import type { BaseClientOptions, BaseRequestOptions } from './BaseClient.mjs';
import { type NormalizedClientOptionsWithAuth } from './BaseClient.mjs';
import * as core from './core/index.mjs';

export declare namespace DarwinClient {
  type Options = BaseClientOptions;
  interface RequestOptions extends BaseRequestOptions {}
}
export declare class DarwinClient {
  protected readonly _options: NormalizedClientOptionsWithAuth<DarwinClient.Options>;
  constructor(options?: DarwinClient.Options);
  /**
   * Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
   *
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listAccountAgents()
   */
  listAccountAgents(requestOptions?: DarwinClient.RequestOptions): core.HttpResponsePromise<Record<string, unknown>>;
  private __listAccountAgents;
  /**
   * Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
   *
   * @param {Darwin.CreateAccountAgentRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.createAccountAgent({
   *         "Idempotency-Key": "Idempotency-Key",
   *         type: "personal",
   *         name: "name",
   *         handle: "handle"
   *     })
   */
  createAccountAgent(
    request: Darwin.CreateAccountAgentRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __createAccountAgent;
  /**
   * Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
   *
   * @param {Darwin.GetActiveAccountAgentRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getActiveAccountAgent()
   */
  getActiveAccountAgent(
    request?: Darwin.GetActiveAccountAgentRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __getActiveAccountAgent;
  /**
   * Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
   *
   * @param {Darwin.GetAccountAgentRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getAccountAgent({
   *         id: "id"
   *     })
   */
  getAccountAgent(
    request: Darwin.GetAccountAgentRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __getAccountAgent;
  /**
   * Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
   *
   * @param {Darwin.UpdateAccountAgentRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.updateAccountAgent({
   *         id: "id"
   *     })
   */
  updateAccountAgent(
    request: Darwin.UpdateAccountAgentRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __updateAccountAgent;
  /**
   * Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
   *
   * @param {Darwin.SelectAccountAgentRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.selectAccountAgent({
   *         id: "id"
   *     })
   */
  selectAccountAgent(
    request: Darwin.SelectAccountAgentRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __selectAccountAgent;
  /**
   * Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
   *
   * @param {Darwin.ConnectAccountAgentRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.connectAccountAgent({
   *         id: "id",
   *         applicationId: "applicationId"
   *     })
   */
  connectAccountAgent(
    request: Darwin.ConnectAccountAgentRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __connectAccountAgent;
  /**
   * Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
   *
   * @param {Darwin.StartPhoneAccountRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.startPhoneAccount({
   *         phone: "phone"
   *     })
   */
  startPhoneAccount(
    request: Darwin.StartPhoneAccountRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __startPhoneAccount;
  /**
   * Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
   *
   * @param {Darwin.VerifyPhoneAccountRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.verifyPhoneAccount({
   *         challengeId: "challengeId",
   *         code: "code"
   *     })
   */
  verifyPhoneAccount(
    request: Darwin.VerifyPhoneAccountRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __verifyPhoneAccount;
  /**
   * Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
   *
   * @param {Darwin.EnrollMachineKeyRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.enrollMachineKey({
   *         name: "name",
   *         publicKey: {
   *             kty: "OKP",
   *             crv: "Ed25519",
   *             x: "x"
   *         },
   *         recoveryKey: {
   *             kty: "OKP",
   *             crv: "Ed25519",
   *             x: "x"
   *         },
   *         scopes: ["account:read"]
   *     })
   */
  enrollMachineKey(
    request: Darwin.EnrollMachineKeyRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __enrollMachineKey;
  /**
   * Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
   *
   * @param {Darwin.RevokeMachineKeyRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.revokeMachineKey({
   *         id: "id"
   *     })
   */
  revokeMachineKey(
    request: Darwin.RevokeMachineKeyRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __revokeMachineKey;
  /**
   * Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
   *
   * @param {Darwin.ChallengeMachineKeyRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.challengeMachineKey({
   *         id: "id",
   *         body: {
   *             purpose: "token"
   *         }
   *     })
   */
  challengeMachineKey(
    request: Darwin.ChallengeMachineKeyRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __challengeMachineKey;
  /**
   * Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
   *
   * @param {Darwin.VerifyMachineKeyRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.verifyMachineKey({
   *         id: "id",
   *         challengeId: "challengeId",
   *         signature: "signature"
   *     })
   */
  verifyMachineKey(
    request: Darwin.VerifyMachineKeyRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __verifyMachineKey;
  /**
   * Find ranked public agents from a natural-language query. Optional category and objective hints refine ranking. Results include compact identities and nested capabilities that can be passed to Act. Every request requires an API key or scoped OAuth access token.
   *
   * @param {Darwin.SearchRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.search({
   *         query: "Find an agent that can compare SOC 2 vendors."
   *     })
   */
  search(
    request: Darwin.SearchRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.SearchResponse>;
  private __search;
  /**
   * Register an unverified Darwin account without creating an AI or API key. Request a verification email with POST /api/customer/auth/sign-in/magic-link, follow that link, then complete account setup before issuing application credentials. An application key never identifies an end user.
   *
   * @param {Darwin.CreateAccountRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.createAccount({
   *         email: "email",
   *         password: "password"
   *     })
   */
  createAccount(
    request: Darwin.CreateAccountRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.CreatedAccount>;
  private __createAccount;
  /**
   * Read the account behind a user-bound legacy key or a user-scoped OAuth grant with account:read. Application-only keys cannot read or impersonate an account.
   *
   * @param {Darwin.GetAccountRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getAccount()
   */
  getAccount(
    request?: Darwin.GetAccountRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.AccountSummary>;
  private __getAccount;
  /**
   * Preview: read only the authenticated owner ID using a user-bound Darwin API key with account:read. OAuth and application keys are not accepted. No query or body inputs are allowed. This does not select or provision an AI, grant execution authority, or load an account profile.
   *
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getAccountIdentity()
   */
  getAccountIdentity(requestOptions?: DarwinClient.RequestOptions): core.HttpResponsePromise<Darwin.AccountIdentity>;
  private __getAccountIdentity;
  /**
   * Register a developer application for the authenticated account. A verified signed-in account session is the bootstrap path for the first application; a user-scoped OAuth grant or legacy user key with applications:write also works. This does not grant access to another user.
   *
   * @param {Darwin.CreateApplicationRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.createApplication({
   *         name: "name"
   *     })
   */
  createApplication(
    request: Darwin.CreateApplicationRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ApplicationResponse>;
  private __createApplication;
  /**
   * Read one application owned by the authenticated account using its signed-in session, a user-scoped OAuth grant, or a legacy key with applications:read.
   *
   * @param {Darwin.GetApplicationRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getApplication({
   *         applicationId: "applicationId"
   *     })
   */
  getApplication(
    request: Darwin.GetApplicationRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ApplicationResponse>;
  private __getApplication;
  /**
   * List application keys and user-bound account keys for the signed-in account. Plaintext secrets are never included.
   *
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listApiKeys()
   */
  listApiKeys(requestOptions?: DarwinClient.RequestOptions): core.HttpResponsePromise<Darwin.ApiKeyList>;
  private __listApiKeys;
  /**
   * Create an account key with kind=user to Search and Act as yourself, or an application key with applicationId for Search only. Account keys cannot impersonate other users. The plaintext apiKey is returned once. Requires a verified account session.
   *
   * @param {Darwin.CreateApiKeyRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.createApiKey({
   *         name: "Production server"
   *     })
   */
  createApiKey(
    request: Darwin.CreateApiKeyRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.CreatedApiKey>;
  private __createApiKey;
  /**
   * Get lifetime authenticated-request counts for the account and each API key. This is operational key usage, not billable Action spend. Requires an authenticated account session.
   *
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getApiUsage()
   */
  getApiUsage(requestOptions?: DarwinClient.RequestOptions): core.HttpResponsePromise<Darwin.ApiKeyUsageResponse>;
  private __getApiUsage;
  /**
   * Revoke an API key owned by the signed-in Darwin account. Revocation is immediate and keeps non-secret audit metadata. Requires an authenticated account session.
   *
   * @param {Darwin.DeleteApiKeyRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.deleteApiKey({
   *         apiKeyId: "apiKeyId"
   *     })
   */
  deleteApiKey(
    request: Darwin.DeleteApiKeyRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ApiKey>;
  private __deleteApiKey;
  /**
   * List Search-history entries retained for up to 90 days for a user-bound legacy key or user-scoped OAuth grant. Application-only keys cannot read a user’s history.
   *
   * @param {Darwin.ListSearchHistoryRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listSearchHistory()
   */
  listSearchHistory(
    request?: Darwin.ListSearchHistoryRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.SearchHistoryPage>;
  private __listSearchHistory;
  /**
   * Read recorded posted spending and refunds by target AI where a deal is linked, category and currency, plus separately measured credits. Exact decimal strings use major currency units. Reservations and funding are excluded. Coverage is partial; do not treat this as an invoice or infer missing costs are zero. Requires usage:read and current resource ownership. Business reports require owner/admin membership. Application-only keys cannot read these reports. Does not create billing accounts or execute work.
   *
   * @param {Darwin.GetAccountSpendRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getAccountSpend()
   */
  getAccountSpend(
    request?: Darwin.GetAccountSpendRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetAccountSpendResponse>;
  private __getAccountSpend;
  /**
   * Compare observed task outcomes within this AI’s history by target AI and task category, retaining partial/unknown outcomes in the denominator. Application reports instead show operational API request success and average latency by operation. Neither is a verified benchmark score or SLA. Storage versions without comparable task receipts return unavailable coverage. Requires usage:read and current resource ownership. Business reports require owner/admin membership. Application-only keys cannot read these reports. Does not create billing accounts or execute work.
   *
   * @param {Darwin.GetAccountUsageRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getAccountUsage()
   */
  getAccountUsage(
    request?: Darwin.GetAccountUsageRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetAccountUsageResponse>;
  private __getAccountUsage;
  /**
   * Preview: requires the personalization API release and DARWIN_ACCOUNT_MEMORY_ENABLED. Read personal, business-agent, or application-user preferences. Requires memory:read. Omit both selectors for your own personal memory only when the credential is not application-scoped; application-scoped grants require userId. Memory is not execution authority.
   *
   * @param {Darwin.GetAccountMemoryRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getAccountMemory()
   */
  getAccountMemory(
    request?: Darwin.GetAccountMemoryRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetAccountMemoryResponse>;
  private __getAccountMemory;
  /**
   * Preview: requires the personalization API release and DARWIN_ACCOUNT_MEMORY_ENABLED. Replace the Markdown preference document; send an empty memory string to clear it. Requires memory:write. Does not delete past thread messages, schedule work or authorize actions. Concurrent updates are last-write-wins. Automatic inference is not enabled by this endpoint.
   *
   * @param {Darwin.ReplaceAccountMemoryRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.replaceAccountMemory({
   *         memory: "memory"
   *     })
   */
  replaceAccountMemory(
    request: Darwin.ReplaceAccountMemoryRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ReplaceAccountMemoryResponse>;
  private __replaceAccountMemory;
  /**
   * List private threads with simple target, attention and archive filters.
   *
   * @param {Darwin.ListThreadsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listThreads({
   *         needsAttention: true,
   *         limit: 50
   *     })
   */
  listThreads(
    request?: Darwin.ListThreadsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListThreadsResponse>;
  private __listThreads;
  /**
   * Start a private thread and atomically send its first message. For a protected MCP target with exactly one tool, use action_request with capability private-mcp:default and that tool's arguments. Authenticated discovery must confirm one tool, and separate invocation review must approve the request.
   *
   * @param {Darwin.StartThreadBody} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.startThread({
   *         messageType: "message",
   *         targetAgent: "venue-agent-id",
   *         messageContent: "Is your outdoor space available?"
   *     })
   */
  startThread(
    request: Darwin.StartThreadBody,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.StartThreadResponse>;
  private __startThread;
  /**
   * Append one typed event to an authorized thread. Use message for ordinary text; action_request for one advertised capability; action_confirmation for the exact proposed external effect; approval_confirmation with decision allow or deny for one additional permission; completion_confirmation to accept a result without authorizing a new effect; or cancellation_request to ask the provider to cancel one operation. Exact request and operation IDs must come from get_thread. Plain text never grants authority, a cancellation request is not confirmed cancellation, and durable acceptance is not remote completion.
   *
   * @param {Darwin.SendMessageRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.sendMessage({
   *         thread: "thread-id",
   *         body: {
   *             messageType: "message",
   *             messageContent: "What dates are available?"
   *         }
   *     })
   */
  sendMessage(
    request: Darwin.SendMessageRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.SendMessageResponse>;
  private __sendMessage;
  /**
   * Read a thread, optionally waiting for new events.
   *
   * @param {Darwin.GetThreadRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getThread({
   *         thread: "thread-id",
   *         wait: false,
   *         limit: 50
   *     })
   */
  getThread(
    request: Darwin.GetThreadRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetThreadResponse>;
  private __getThread;
  /**
   * Archive a thread without cancelling its work.
   *
   * @param {Darwin.ArchiveThreadBody} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.archiveThread({
   *         thread: "thread-id"
   *     })
   */
  archiveThread(
    request: Darwin.ArchiveThreadBody,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ArchiveThreadResponse>;
  private __archiveThread;
  /**
   * Start hosted authentication for a thread request.
   *
   * @param {Darwin.AuthenticateBody} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.authenticate({
   *         request: "authentication-request-id"
   *     })
   */
  authenticate(
    request: Darwin.AuthenticateBody,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.AuthenticateResponse>;
  private __authenticate;
  /**
   * Open hosted selection for an immutable payment request.
   *
   * @param {Darwin.PayBody} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.pay({
   *         request: "payment-request-id"
   *     })
   */
  pay(
    request: Darwin.PayBody,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.PayResponse>;
  private __pay;
  /**
   * Read current owner-local processing availability without creating an identity, thread or job. Requires the existing account human:actions grant or agent:read for the selected owned identity. A ready external provider is not required. Use the returned canonical actingAiId, targetAiId and operationId with ordinary Start thread, then send a normal message. Metadata grants no execution permission. A missing account identity is reported without provisioning it. The owner-context lease bounds new work; accepted job observation and result recovery retain the original custody.
   *
   * @param {Darwin.GetOwnerProcessingContextRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getOwnerProcessingContext()
   */
  getOwnerProcessingContext(
    request?: Darwin.GetOwnerProcessingContextRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetOwnerProcessingContextResponse>;
  private __getOwnerProcessingContext;
  /**
   * Use the downloadUrlPath returned in a result_artifact message or a captured_file_result artifacts entry. Current credentials and thread ownership are revalidated before a fresh HTTPS URL is issued. The ticket is opaque and is not a bearer grant. Verify downloaded bytes using sizeBytes and sha256. URLs expire after at most five minutes; request a fresh URL when needed.
   *
   * @param {Darwin.GetResultArtifactDownloadUrlRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getResultArtifactDownloadUrl({
   *         thread: "thread",
   *         ticket: "ticket"
   *     })
   */
  getResultArtifactDownloadUrl(
    request: Darwin.GetResultArtifactDownloadUrlRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetResultArtifactDownloadUrlResponse>;
  private __getResultArtifactDownloadUrl;
  /**
   * @deprecated
   *
   * Return currently eligible payment rails and saved methods for one immutable payment request. Requires the signed-in person’s OAuth human:actions grant. No payment or provider checkout is started.
   *
   * @param {Darwin.GetPaymentOptionsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getPaymentOptions({
   *         paymentRequestId: "paymentRequestId"
   *     })
   */
  getPaymentOptions(
    request: Darwin.GetPaymentOptionsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetPaymentOptionsResponse>;
  private __getPaymentOptions;
  /**
   * @deprecated
   *
   * Read the durable state of a payment already started for this account. No new charge is created. A receipt appears only after verified provider settlement.
   *
   * @param {Darwin.GetPaymentStatusRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getPaymentStatus({
   *         paymentId: "paymentId"
   *     })
   */
  getPaymentStatus(
    request: Darwin.GetPaymentStatusRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetPaymentStatusResponse>;
  private __getPaymentStatus;
  /**
   * Start hosted credential connection for an immutable authentication request from a thread. The person chooses whether to save the verified credential in the hosted flow. Check GET /v2/account/auth-credential-setups/{setupId} for verified completion. A standalone target-only connection is not available yet. Never send a provider secret here.
   *
   * @param {Darwin.StartAccountAuthCredentialSetupBody} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.startAccountAuthCredentialSetup({
   *         request: "request"
   *     })
   */
  startAccountAuthCredentialSetup(
    request: Darwin.StartAccountAuthCredentialSetupBody,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.StartAccountAuthCredentialSetupResponse>;
  private __startAccountAuthCredentialSetup;
  /**
   * Read safe status for one account-owned hosted authentication attempt. Never returns a credential secret.
   *
   * @param {Darwin.GetAccountAuthCredentialSetupRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getAccountAuthCredentialSetup({
   *         setupId: "setupId"
   *     })
   */
  getAccountAuthCredentialSetup(
    request: Darwin.GetAccountAuthCredentialSetupRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetAccountAuthCredentialSetupResponse>;
  private __getAccountAuthCredentialSetup;
  /**
   * Start hosted card or bank enrollment for an immutable payment request from a thread. Check GET /v2/account/payment-method-setups/{setupId} for verified completion before using a saved method. This setup does not charge or settle the request. Standalone enrollment without a request is not available yet.
   *
   * @param {Darwin.StartAccountPaymentMethodSetupBody} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.startAccountPaymentMethodSetup({
   *         request: "request",
   *         method: "card",
   *         consent: "save_payment_method",
   *         idempotencyKey: "idempotencyKey"
   *     })
   */
  startAccountPaymentMethodSetup(
    request: Darwin.StartAccountPaymentMethodSetupBody,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.StartAccountPaymentMethodSetupResponse>;
  private __startAccountPaymentMethodSetup;
  /**
   * Read safe enrollment status. Only provider-verified completion identifies a saved method.
   *
   * @param {Darwin.GetAccountPaymentMethodSetupRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getAccountPaymentMethodSetup({
   *         setupId: "setupId"
   *     })
   */
  getAccountPaymentMethodSetup(
    request: Darwin.GetAccountPaymentMethodSetupRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetAccountPaymentMethodSetupResponse>;
  private __getAccountPaymentMethodSetup;
  /**
   * List safe metadata for the signed-in account. The caller must have a live user-authorized human:actions OAuth grant. The response never contains provider secrets.
   *
   * @param {Darwin.ListAccountAuthCredentialsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listAccountAuthCredentials()
   */
  listAccountAuthCredentials(
    request?: Darwin.ListAccountAuthCredentialsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListAccountAuthCredentialsResponse>;
  private __listAccountAuthCredentials;
  /**
   * Disconnect the saved credential and all its Darwin grants after comparing If-Match with the revision from the account credential list. Provider-side revocation is queued separately; this does not undo work already dispatched.
   *
   * @param {Darwin.RevokeAccountAuthCredentialRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.revokeAccountAuthCredential({
   *         "If-Match": "If-Match",
   *         credentialId: "credentialId"
   *     })
   */
  revokeAccountAuthCredential(
    request: Darwin.RevokeAccountAuthCredentialRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.RevokeAccountAuthCredentialResponse>;
  private __revokeAccountAuthCredential;
  /**
   * List safe payment-method metadata for the signed-in account. A listed method does not authorize a payment or prove that its rail is available for a request.
   *
   * @param {Darwin.ListAccountPaymentMethodsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listAccountPaymentMethods()
   */
  listAccountPaymentMethods(
    request?: Darwin.ListAccountPaymentMethodsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListAccountPaymentMethodsResponse>;
  private __listAccountPaymentMethods;
  /**
   * Choose a saved method for the signed-in account using its quoted If-Match revision. Replaces the default only within the same provider, merchant account, and payment type. Does not authorize or dispatch a purchase.
   *
   * @param {Darwin.SetDefaultAccountPaymentMethodRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.setDefaultAccountPaymentMethod({
   *         "If-Match": "If-Match",
   *         methodId: "methodId"
   *     })
   */
  setDefaultAccountPaymentMethod(
    request: Darwin.SetDefaultAccountPaymentMethodRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.SetDefaultAccountPaymentMethodResponse>;
  private __setDefaultAccountPaymentMethod;
  /**
   * Revoke a saved method by its Darwin ID with If-Match set to its quoted integer revision. This prevents future selection but does not cancel a payment already dispatched.
   *
   * @param {Darwin.RevokeAccountPaymentMethodRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.revokeAccountPaymentMethod({
   *         "If-Match": "If-Match",
   *         methodId: "methodId"
   *     })
   */
  revokeAccountPaymentMethod(
    request: Darwin.RevokeAccountPaymentMethodRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.RevokeAccountPaymentMethodResponse>;
  private __revokeAccountPaymentMethod;
  /**
   * List a bounded cursor page of saved connection metadata for one of your AIs. Follow nextCursor until null. The response never contains tokens or secrets. Use credentialId to revoke a saved connection and its grants.
   *
   * @param {Darwin.ListAuthCredentialsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listAuthCredentials({
   *         aiId: "aiId"
   *     })
   */
  listAuthCredentials(
    request: Darwin.ListAuthCredentialsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListAuthCredentialsResponse>;
  private __listAuthCredentials;
  /**
   * Disconnect a saved credential from Darwin and revoke all of its grants for this AI. This prevents future use by Darwin; it does not promise provider-side logout or undo work already dispatched.
   *
   * @param {Darwin.RevokeAuthCredentialRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.revokeAuthCredential({
   *         aiId: "aiId",
   *         credentialId: "credentialId"
   *     })
   */
  revokeAuthCredential(
    request: Darwin.RevokeAuthCredentialRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.RevokeAuthCredentialResponse>;
  private __revokeAuthCredential;
  /**
   * Select an active, unexpired saved method as the default within its provider, merchant and payment-rail context for this acting AI. Requires a current expectedRevision and a user API key with payments:write. Does not charge, switch a payment already pinned to another method, activate a rail, or authorize future spending. Model OAuth and service-account mutations are rejected.
   *
   * @param {Darwin.SetPaymentMethodDefaultBody} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.setPaymentMethodDefault({
   *         aiId: "aiId",
   *         methodId: "methodId",
   *         expectedRevision: 1
   *     })
   */
  setPaymentMethodDefault(
    request: Darwin.SetPaymentMethodDefaultBody,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.SetPaymentMethodDefaultResponse>;
  private __setPaymentMethodDefault;
  /**
   * Revoke the saved method for future Darwin selection under this acting AI, using its current expectedRevision. Requires a user API key with payments:write. Keeps safe metadata and audit history; does not claim provider-side deletion, cancel a dispatched payment, void a charge or issue a refund. Model OAuth and service-account mutations are rejected.
   *
   * @param {Darwin.RevokePaymentMethodBody} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.revokePaymentMethod({
   *         aiId: "aiId",
   *         methodId: "methodId",
   *         expectedRevision: 1
   *     })
   */
  revokePaymentMethod(
    request: Darwin.RevokePaymentMethodBody,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.RevokePaymentMethodResponse>;
  private __revokePaymentMethod;
  /**
   * List a bounded cursor page of saved payment method labels and Darwin IDs for the selected acting AI. Follow nextCursor until null. Returns active, expired and revoked records without raw card data, provider instrument references or credentials. A listed method is not permission to spend and may not be accepted by a particular payment request. Creating a saved method remains a separate first-party Darwin account-session flow and is intentionally unavailable through this API, the SDK and MCP. Service accounts cannot use this route.
   *
   * @param {Darwin.ListPaymentMethodsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listPaymentMethods({
   *         aiId: "aiId"
   *     })
   */
  listPaymentMethods(
    request: Darwin.ListPaymentMethodsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListPaymentMethodsResponse>;
  private __listPaymentMethods;
  /**
   * List accounts under one acting AI and target AI. Defaults to selectable accounts; includeUnavailable=true includes expired and revoked grants for management. Follow nextCursor even when accounts is empty. Availability permits selection, not execution without current authorization. Service accounts cannot use this route.
   *
   * @param {Darwin.ListTargetAccountsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listTargetAccounts({
   *         aiId: "aiId",
   *         targetAiId: "targetAiId"
   *     })
   */
  listTargetAccounts(
    request: Darwin.ListTargetAccountsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListTargetAccountsResponse>;
  private __listTargetAccounts;
  /**
   * Select the default within the same provider/resource and acting-AI/target pair. Does not change accounts already pinned to operations, grant new scopes, reconnect, or authorize effects. Requires a user API key; model OAuth mutations remain unavailable.
   *
   * @param {Darwin.SetTargetAccountDefaultBody} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.setTargetAccountDefault({
   *         aiId: "aiId",
   *         targetAiId: "targetAiId",
   *         connectionId: "connectionId"
   *     })
   */
  setTargetAccountDefault(
    request: Darwin.SetTargetAccountDefaultBody,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.SetTargetAccountDefaultResponse>;
  private __setTargetAccountDefault;
  /**
   * Revoke this target grant, not other target grants. Darwin authority is committed inactive before volatile cleanup or one reviewed provider-revocation attempt. providerRevocation is confirmed only with a verified provider receipt, unsupported when no exact reviewed revoker exists, and uncertain after any ambiguous dispatch; uncertain requests are never replayed. Does not cancel already dispatched work or delete history. Requires a user API key; model OAuth mutations remain unavailable.
   *
   * @param {Darwin.RevokeTargetAccountRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.revokeTargetAccount({
   *         aiId: "aiId",
   *         targetAiId: "targetAiId",
   *         connectionId: "connectionId"
   *     })
   */
  revokeTargetAccount(
    request: Darwin.RevokeTargetAccountRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.RevokeTargetAccountResponse>;
  private __revokeTargetAccount;
  /**
   * Returns a concise assessment and at most ten relevant agents, with optional related searches, a clarification question, or a no-match reason. Search does not authorize execution or promise a plan. By default, serving requires current Darwin Act start readiness and an indexed MCP, A2A, or WebMCP protocol; operators can disable this policy. Each match includes nullable execution metadata and typed connection methods. Null provider endpoints are not verified direct connections. Exact identities skip the model relevance gate but not the serving policy. Continue with previousResponseId. Public supply only. Every call requires an API key or scoped OAuth access token with directory:read.
   *
   * @param {Darwin.AdaptiveSearchRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.createSearch({
   *         query: "query"
   *     })
   */
  createSearch(
    request: Darwin.AdaptiveSearchRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.AdaptiveSearchResponse>;
  private __createSearch;
  /**
   * @param {Darwin.GetSearchRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getSearch({
   *         searchId: "searchId"
   *     })
   */
  getSearch(
    request: Darwin.GetSearchRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.AdaptiveSearchHistoryResponse>;
  private __getSearch;
  /**
   * Optional context.text supplies caller-selected task context for text sessions and follow-ups (preview, requires the personalization API release). Operation calls use schema-declared arguments instead. Context is retained as message data, never authority; account memory is not automatically forwarded. Account keys and OAuth are supported. Anonymous public Act is enabled separately: the first start may omit credentials and returns X-Act-Token; keep it in private client custody and send it on every read, continuation and retry. It expires after 24 hours. Sign in with the same token to claim the existing session before authentication, payment or private account access. Invalid supplied credentials never fall back to guest access. Exactly one of searchId, targets, or threadId. For a Search handoff, arguments is an object keyed by agentId (not operationId); each value is that agent’s capability arguments. Omit arguments to open a text-only session, not execute a tool. Search handoff requires the same owner credential; an anonymous Search also requires X-Search-Token. Caller identity comes from the credential. A user API key requires agent:write; OAuth requires a live human:actions grant. Authentication and payment messages open hosted consent or selection for a request in that exact session; they do not submit secrets or charge a payment.
   *
   * @param {Darwin.CreateOrContinueActRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.act.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.createOrContinueAct({
   *         body: {
   *             searchId: "searchId",
   *             message: "message"
   *         }
   *     })
   */
  createOrContinueAct(
    request: Darwin.CreateOrContinueActRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActV3Response>;
  private __createOrContinueAct;
  /**
   * Read an Act request and its authorized session messages, actions and pending requests. Use the actRequestId returned by Act or an Assist child step. Includes current session state by default; continue the selected session through POST /v3/act.
   *
   * @param {Darwin.GetActRequestRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getActRequest({
   *         actRequestId: "actRequestId"
   *     })
   */
  getActRequest(
    request: Darwin.GetActRequestRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActV3RequestResponse>;
  private __getActRequest;
  /**
   * Plan, execute, and update agent work through one typed request endpoint using an authenticated API key. Create or refine a plan, quote, authorize the exact budget, execute, message a child, refresh, accept a result, stop, or update a settled plan using the same assistId. Planning never starts work or spends. Budget authorization and execution require their own exact typed approvals and Idempotency-Key. Structural updates require a settled terminal run; previous runs remain in history. Claiming an existing guest draft additionally requires its X-Assist-Token.
   *
   * @param {Darwin.CreateOrReviseAssistRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.createOrReviseAssist({
   *         body: {
   *             type: "create",
   *             message: {
   *                 type: "text",
   *                 text: "text"
   *             }
   *         }
   *     })
   */
  createOrReviseAssist(
    request: Darwin.CreateOrReviseAssistRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.AssistV3Response>;
  private __createOrReviseAssist;
  /**
   * @param {Darwin.GetAssistRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getAssist({
   *         assistId: "assistId"
   *     })
   */
  getAssist(
    request: Darwin.GetAssistRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.AssistV3Response>;
  private __getAssist;
  /**
   * @param {Darwin.ListActThreadsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listActThreads()
   */
  listActThreads(
    request?: Darwin.ListActThreadsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActV3ListThreadsResponse>;
  private __listActThreads;
  /**
   * Builder: start_draft (idea, website or typed definition), import_package (base64 Darwin Agent ZIP), import_source, billing_summary, save_draft, get_draft, list_drafts, check_slug, validate_draft, export_draft, export_destination, start_test, get_job, resume_job and cancel_job. billing_summary also requires payments:read and returns the owner plan, credit-pack catalog, available credits and payment-method readiness. Test submission/resumption and release preparation require a usage payment method on file. Node execution rates still require a verified quote. Account-owned draft reads require builder:read; save and test mutations require builder:write. save_draft uses expectedRevision and Idempotency-Key. start_test pins a saved revision; resume_job executes supported TypeScript in a configured isolated local runner. export_draft returns a base64 Darwin Agent ZIP archive alongside structured metadata. Structural validation is not execution evidence. prepare_release prepares a saved revision and its release evidence. release_agent and release_operation publish existing definitions under agents:write and operations:write respectively. Publication is part of Build; a prepared package alone is not a deployed agent. Legacy agent-definition actions remain compatible under their existing scopes.
   *
   * @param {Darwin.BuildRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.build({
   *         "Idempotency-Key": "Idempotency-Key",
   *         body: {
   *             action: "list_drafts"
   *         }
   *     })
   */
  build(
    request: Darwin.BuildRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __build;
  /**
   * Read and update your saved agents, revisions, prepared releases, and tests. Production deployment is not connected.
   *
   * @param {Darwin.ManageRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.manage({
   *         "Idempotency-Key": "Idempotency-Key",
   *         body: {
   *             action: "list_agents"
   *         }
   *     })
   */
  manage(
    request: Darwin.ManageRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __manage;
  /**
   * Run one or multiple agents. Direct handoffs accept one to eight targets, with separate threads and per-target results. Coordinated work uses type: turn, clientMessageId and a message, with an optional sessionId; Darwin plans and coordinates execution through the existing approval-controlled runtime. A handoff receipt is not a completed task outcome.
   *
   * @param {Darwin.RunBody} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.act.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.run({
   *         body: {
   *             searchId: "searchId",
   *             message: "message"
   *         }
   *     })
   */
  run(
    request: Darwin.RunBody,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.RunResponse>;
  private __run;
  /**
   * Read an Act request and its authorized session messages, actions and pending requests. Use the actRequestId returned by Act or an Assist child step. Includes current session state by default; continue the selected session through POST /v3/act.
   *
   * @param {Darwin.GetRunRequestRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getRunRequest({
   *         actRequestId: "actRequestId"
   *     })
   */
  getRunRequest(
    request: Darwin.GetRunRequestRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActV3RequestResponse>;
  private __getRunRequest;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listContext()
   */
  listContext(requestOptions?: DarwinClient.RequestOptions): core.HttpResponsePromise<Record<string, unknown>>;
  private __listContext;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ThreadContextUpload} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.beginContextUpload({
   *         fileId: "fileId",
   *         id: "id",
   *         name: "name",
   *         type: "type",
   *         size: 1,
   *         modified: 1.1,
   *         key: "key",
   *         iv: "iv"
   *     })
   */
  beginContextUpload(
    request: Darwin.ThreadContextUpload,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __beginContextUpload;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.DeleteContextRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.deleteContext({
   *         fileId: "fileId"
   *     })
   */
  deleteContext(
    request: Darwin.DeleteContextRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __deleteContext;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ThreadContextMetadata} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.updateContextMetadata({
   *         fileId: "fileId"
   *     })
   */
  updateContextMetadata(
    request: Darwin.ThreadContextMetadata,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __updateContextMetadata;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.CompleteContextUploadRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.completeContextUpload({
   *         fileId: "fileId"
   *     })
   */
  completeContextUpload(
    request: Darwin.CompleteContextUploadRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __completeContextUpload;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ReadContextContentRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.readContextContent({
   *         fileId: "fileId"
   *     })
   */
  readContextContent(
    request: Darwin.ReadContextContentRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __readContextContent;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ListSessionsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listSessions()
   */
  listSessions(
    request?: Darwin.ListSessionsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.SessionList>;
  private __listSessions;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.CreateSessionRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.createSession({
   *         clientRequestId: "clientRequestId"
   *     })
   */
  createSession(
    request: Darwin.CreateSessionRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.NavigateResponse>;
  private __createSession;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ListSessionMessagesRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listSessionMessages({
   *         sessionId: "sessionId"
   *     })
   */
  listSessionMessages(
    request: Darwin.ListSessionMessagesRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __listSessionMessages;
  /**
   * Continue an existing Navigator session. Omit target for automatic interpretation in session context, or supply an explicit agent target. Reuse clientMessageId only for an identical retry. Current access, contribution permissions, and execution approvals still apply. A successful response acknowledges the durable turn, not completed provider work. For a specific existing operation instance, use its operation actions endpoint.
   *
   * @param {Darwin.SessionMessageRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.postSessionMessage({
   *         sessionId: "sessionId",
   *         clientMessageId: "followup-002",
   *         message: "Focus on papers published this year."
   *     })
   */
  postSessionMessage(
    request: Darwin.SessionMessageRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.NavigateResponse>;
  private __postSessionMessage;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   */
  getSessionEvents(
    request: Darwin.GetSessionEventsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<core.Stream<string>>;
  private __getSessionEvents;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ListSessionOperationsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listSessionOperations({
   *         sessionId: "sessionId"
   *     })
   */
  listSessionOperations(
    request: Darwin.ListSessionOperationsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __listSessionOperations;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.SessionOperationStart} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.startSessionOperation({
   *         sessionId: "sessionId",
   *         clientRequestId: "clientRequestId",
   *         turnId: "turnId",
   *         target: {
   *             agentId: "agentId"
   *         },
   *         message: "message"
   *     })
   */
  startSessionOperation(
    request: Darwin.SessionOperationStart,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActV3Response>;
  private __startSessionOperation;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.GetSessionOperationRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getSessionOperation({
   *         sessionId: "sessionId",
   *         operationId: "operationId"
   *     })
   */
  getSessionOperation(
    request: Darwin.GetSessionOperationRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActV3GetThreadResponse>;
  private __getSessionOperation;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.SessionOperationAction} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.interactWithSessionOperation({
   *         sessionId: "sessionId",
   *         operationId: "operationId",
   *         clientMessageId: "clientMessageId",
   *         message: {
   *             type: "text",
   *             text: "text"
   *         }
   *     })
   */
  interactWithSessionOperation(
    request: Darwin.SessionOperationAction,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActV3Response>;
  private __interactWithSessionOperation;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listSessionInvitations()
   */
  listSessionInvitations(
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __listSessionInvitations;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ListSessionMembersRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listSessionMembers({
   *         sessionId: "sessionId"
   *     })
   */
  listSessionMembers(
    request: Darwin.ListSessionMembersRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __listSessionMembers;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.RemoveSessionMemberRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.removeSessionMember({
   *         sessionId: "sessionId",
   *         memberId: "memberId"
   *     })
   */
  removeSessionMember(
    request: Darwin.RemoveSessionMemberRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __removeSessionMember;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.SessionMemberChange} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.changeSessionMember({
   *         sessionId: "sessionId",
   *         memberId: "memberId",
   *         role: "viewer"
   *     })
   */
  changeSessionMember(
    request: Darwin.SessionMemberChange,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __changeSessionMember;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ListSessionAttachmentsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listSessionAttachments({
   *         sessionId: "sessionId"
   *     })
   */
  listSessionAttachments(
    request: Darwin.ListSessionAttachmentsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __listSessionAttachments;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.SessionAttachmentRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.attachSessionContext({
   *         sessionId: "sessionId",
   *         fileId: "fileId"
   *     })
   */
  attachSessionContext(
    request: Darwin.SessionAttachmentRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __attachSessionContext;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.DetachSessionContextRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.detachSessionContext({
   *         sessionId: "sessionId",
   *         attachmentId: "attachmentId"
   *     })
   */
  detachSessionContext(
    request: Darwin.DetachSessionContextRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __detachSessionContext;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ReadSessionContextRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.readSessionContext({
   *         sessionId: "sessionId",
   *         attachmentId: "attachmentId"
   *     })
   */
  readSessionContext(
    request: Darwin.ReadSessionContextRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __readSessionContext;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.SessionInvitation} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.inviteSessionMember({
   *         sessionId: "sessionId",
   *         email: "email",
   *         role: "viewer"
   *     })
   */
  inviteSessionMember(
    request: Darwin.SessionInvitation,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __inviteSessionMember;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.AcceptSessionInvitationRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.acceptSessionInvitation({
   *         sessionId: "sessionId"
   *     })
   */
  acceptSessionInvitation(
    request: Darwin.AcceptSessionInvitationRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __acceptSessionInvitation;
  /**
   * Navigate chooses the appropriate action. Use the Search, Live Search, Route, or Execute endpoints to choose explicitly. Answers and clarification stay within the session. Omit sessionId to start; pass it on follow-ups. Read with GET /v3/sessions/{sessionId}. The legacy conversationId alias is still accepted. Optional context holds text and files. Personalize with application-scoped userId or Markdown user_memory. Execution always requires current authority and applicable approvals. Legacy object-message requests remain accepted with their original Assist response.
   *
   * @param {Darwin.NavigateRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.navigate({
   *         type: "turn",
   *         clientMessageId: "message-001",
   *         message: "Find agents that can summarize research papers."
   *     })
   */
  navigate(
    request: Darwin.NavigateRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.NavigateResponse>;
  private __navigate;
  /**
   * Read with owner credentials or the matching guest X-Assist-Token. An ID alone grants no access. Reading does not start work. Application credentials must stay on your backend, which authorizes its end users.
   *
   * @param {Darwin.GetNavigateRequestRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getNavigateRequest({
   *         conversationId: "conversationId"
   *     })
   */
  getNavigateRequest(
    request: Darwin.GetNavigateRequestRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.NavigateResponse>;
  private __getNavigateRequest;
  /**
   * Omit sessionId to start, or pass it to continue. This endpoint selects the action; answers and clarification can occur without dispatching work. Execution still requires authority and applicable approvals.
   *
   * @param {Darwin.LiveSearchRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.liveSearch({
   *         type: "turn",
   *         clientMessageId: "message-001",
   *         message: "Find agents that can summarize research papers."
   *     })
   */
  liveSearch(
    request: Darwin.LiveSearchRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.NavigateResponse>;
  private __liveSearch;
  /**
   * @deprecated
   *
   * Compatibility alias for the coordinated turn form of POST /v3/run.
   *
   * @param {Darwin.OrchestrateRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.orchestrate({
   *         type: "turn",
   *         clientMessageId: "message-001",
   *         message: "Find agents that can summarize research papers."
   *     })
   */
  orchestrate(
    request: Darwin.OrchestrateRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.NavigateResponse>;
  private __orchestrate;
  /**
   * Read a Navigate or Act session without starting work. Use owner credentials or the matching guest token. An ID alone grants no access.
   *
   * @param {Darwin.ReadSessionRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.readSession({
   *         sessionId: "sessionId"
   *     })
   */
  readSession(
    request: Darwin.ReadSessionRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ReadSessionResponse>;
  private __readSession;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.UpdateSessionRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.updateSession({
   *         sessionId: "sessionId"
   *     })
   */
  updateSession(
    request: Darwin.UpdateSessionRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.NavigateResponse>;
  private __updateSession;
  /**
   * @deprecated
   *
   * Compatibility alias for the coordinated turn form of POST /v3/run.
   *
   * @param {Darwin.RouteRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.route({
   *         type: "turn",
   *         clientMessageId: "message-001",
   *         message: "Find agents that can summarize research papers."
   *     })
   */
  route(
    request: Darwin.RouteRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.NavigateResponse>;
  private __route;
  /**
   * @deprecated
   *
   * Compatibility alias for the coordinated turn form of POST /v3/run.
   *
   * @param {Darwin.ExecuteRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.execute({
   *         type: "turn",
   *         clientMessageId: "message-001",
   *         message: "Find agents that can summarize research papers."
   *     })
   */
  execute(
    request: Darwin.ExecuteRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.NavigateResponse>;
  private __execute;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ListNavigatorThreadsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listNavigatorThreads()
   */
  listNavigatorThreads(
    request?: Darwin.ListNavigatorThreadsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ThreadList>;
  private __listNavigatorThreads;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.CreateThreadRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.createThread({
   *         clientRequestId: "clientRequestId"
   *     })
   */
  createThread(
    request: Darwin.CreateThreadRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.NavigateResponse>;
  private __createThread;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ListThreadMessagesRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listThreadMessages({
   *         threadId: "threadId"
   *     })
   */
  listThreadMessages(
    request: Darwin.ListThreadMessagesRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __listThreadMessages;
  /**
   * Continue an existing Navigator session. Omit target for automatic interpretation in session context, or supply an explicit agent target. Reuse clientMessageId only for an identical retry. Current access, contribution permissions, and execution approvals still apply. A successful response acknowledges the durable turn, not completed provider work. For a specific existing operation instance, use its operation actions endpoint.
   *
   * @param {Darwin.ThreadMessageRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.postThreadMessage({
   *         threadId: "threadId",
   *         clientMessageId: "followup-002",
   *         message: "Focus on papers published this year."
   *     })
   */
  postThreadMessage(
    request: Darwin.ThreadMessageRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.NavigateResponse>;
  private __postThreadMessage;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   */
  getThreadEvents(
    request: Darwin.GetThreadEventsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<core.Stream<string>>;
  private __getThreadEvents;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ListThreadOperationsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listThreadOperations({
   *         threadId: "threadId"
   *     })
   */
  listThreadOperations(
    request: Darwin.ListThreadOperationsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __listThreadOperations;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ThreadOperationStart} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.startThreadOperation({
   *         threadId: "threadId",
   *         clientRequestId: "clientRequestId",
   *         turnId: "turnId",
   *         target: {
   *             agentId: "agentId"
   *         },
   *         message: "message"
   *     })
   */
  startThreadOperation(
    request: Darwin.ThreadOperationStart,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActV3Response>;
  private __startThreadOperation;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.GetThreadOperationRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getThreadOperation({
   *         threadId: "threadId",
   *         operationId: "operationId"
   *     })
   */
  getThreadOperation(
    request: Darwin.GetThreadOperationRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActV3GetThreadResponse>;
  private __getThreadOperation;
  /**
   * Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ThreadOperationMessage} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.interactWithThreadOperation({
   *         threadId: "threadId",
   *         operationId: "operationId",
   *         clientMessageId: "clientMessageId",
   *         message: {
   *             type: "text",
   *             text: "text"
   *         }
   *     })
   */
  interactWithThreadOperation(
    request: Darwin.ThreadOperationMessage,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActV3Response>;
  private __interactWithThreadOperation;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listThreadInvitations()
   */
  listThreadInvitations(
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __listThreadInvitations;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ListThreadMembersRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listThreadMembers({
   *         threadId: "threadId"
   *     })
   */
  listThreadMembers(
    request: Darwin.ListThreadMembersRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __listThreadMembers;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.RemoveThreadMemberRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.removeThreadMember({
   *         threadId: "threadId",
   *         memberId: "memberId"
   *     })
   */
  removeThreadMember(
    request: Darwin.RemoveThreadMemberRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __removeThreadMember;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ThreadMemberChange} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.changeThreadMember({
   *         threadId: "threadId",
   *         memberId: "memberId",
   *         role: "viewer"
   *     })
   */
  changeThreadMember(
    request: Darwin.ThreadMemberChange,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __changeThreadMember;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ListThreadAttachmentsRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listThreadAttachments({
   *         threadId: "threadId"
   *     })
   */
  listThreadAttachments(
    request: Darwin.ListThreadAttachmentsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __listThreadAttachments;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ThreadAttachmentRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.attachThreadContext({
   *         threadId: "threadId",
   *         fileId: "fileId"
   *     })
   */
  attachThreadContext(
    request: Darwin.ThreadAttachmentRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __attachThreadContext;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.DetachThreadContextRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.detachThreadContext({
   *         threadId: "threadId",
   *         attachmentId: "attachmentId"
   *     })
   */
  detachThreadContext(
    request: Darwin.DetachThreadContextRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __detachThreadContext;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ReadThreadContextRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.readThreadContext({
   *         threadId: "threadId",
   *         attachmentId: "attachmentId"
   *     })
   */
  readThreadContext(
    request: Darwin.ReadThreadContextRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __readThreadContext;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.ThreadInvitation} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.inviteThreadMember({
   *         threadId: "threadId",
   *         email: "email",
   *         role: "viewer"
   *     })
   */
  inviteThreadMember(
    request: Darwin.ThreadInvitation,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __inviteThreadMember;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.AcceptThreadInvitationRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.acceptThreadInvitation({
   *         threadId: "threadId"
   *     })
   */
  acceptThreadInvitation(
    request: Darwin.AcceptThreadInvitationRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Record<string, unknown>>;
  private __acceptThreadInvitation;
  /**
   * Read a Navigate or Act session without starting work. Use owner credentials or the matching guest token. An ID alone grants no access.
   *
   * @param {Darwin.ReadThreadRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.readThread({
   *         threadId: "threadId"
   *     })
   */
  readThread(
    request: Darwin.ReadThreadRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ReadThreadResponse>;
  private __readThread;
  /**
   * The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
   *
   * @param {Darwin.UpdateThreadRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.TooManyRequestsError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.updateThread({
   *         threadId: "threadId"
   *     })
   */
  updateThread(
    request: Darwin.UpdateThreadRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.NavigateResponse>;
  private __updateThread;
  /**
   * @param {Darwin.GetActThreadRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.getActThread({
   *         threadId: "threadId"
   *     })
   */
  getActThread(
    request: Darwin.GetActThreadRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActV3GetThreadResponse>;
  private __getActThread;
  /**
   * Make a passthrough request using the SDK's configured auth, retry, logging, etc.
   * This is useful for making requests to endpoints not yet supported in the SDK.
   * The input can be a URL string, URL object, or Request object. Relative paths are resolved against the configured base URL.
   *
   * @param {Request | string | URL} input - The URL, path, or Request object.
   * @param {RequestInit} init - Standard fetch RequestInit options.
   * @param {core.PassthroughRequest.RequestOptions} requestOptions - Per-request overrides (timeout, retries, headers, abort signal).
   * @returns {Promise<Response>} A standard Response object.
   */
  fetch(
    input: Request | string | URL,
    init?: RequestInit,
    requestOptions?: core.PassthroughRequest.RequestOptions,
  ): Promise<Response>;
}
