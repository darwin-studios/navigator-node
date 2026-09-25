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
   * Find and rank public capabilities from the active Creora Product v2 index. Search is discovery, not execution authorization. No credential is required at the public anonymous limit. You may supply a Darwin API key or OAuth bearer with directory:read for the higher authenticated limit.
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
   *         query: "Find an AI that can compare SOC 2 vendors and return a cited recommendation under $500."
   *     })
   */
  search(
    request: Darwin.SearchRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.SearchResponse>;
  private __search;
  /**
   * Register an unverified Darwin account without creating an AI or API key. Verify the email address through Darwin sign-in, then complete account setup before issuing application credentials. An application key never identifies an end user.
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
   *         password: "password",
   *         name: "name",
   *         type: "personal"
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
   * Register a developer application for the authenticated account. Requires applications:write on a user-scoped OAuth grant or a legacy user key. This does not grant access to another user.
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
   * Read one application owned by the authenticated account. Requires applications:read on a user-scoped grant or legacy key.
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
   * List current or ended human Actions with human:actions, or select an acting AI for an AI-scoped agent:read/goals:read grant.
   *
   * @param {Darwin.ListActionsRequest} request
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
   *     await client.listActions()
   */
  listActions(
    request?: Darwin.ListActionsRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActListResponse>;
  private __listActions;
  /**
   * Start durable work from an exact Search result. A consenting human OAuth user uses human:actions without an AI; an AI-scoped caller uses agent:write or goals:write and selects an authorized acting AI.
   *
   * @param {Darwin.ActStartRequest} request
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
   *     await client.startAction({
   *         capabilityId: "capabilityId",
   *         capabilityRevision: 1,
   *         requestId: "requestId"
   *     })
   */
  startAction(
    request: Darwin.ActStartRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActStartActionResponse>;
  private __startAction;
  /**
   * Get the truthful current status and required next step for one action. Requires the matching human:actions grant or an AI-scoped agent:read/goals:read grant.
   *
   * @param {Darwin.GetActionRequest} request
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
   *     await client.getAction({
   *         actionId: "actionId"
   *     })
   */
  getAction(
    request: Darwin.GetActionRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActGetActionResponse>;
  private __getAction;
  /**
   * Give an action more information without implicitly approving anything. Requires the matching human:actions or AI-scoped agent:write/goals:write grant.
   *
   * @param {Darwin.ContinueActionRequest} request
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
   *     await client.continueAction({
   *         actionId: "actionId",
   *         body: {
   *             requestId: "requestId"
   *         }
   *     })
   */
  continueAction(
    request: Darwin.ContinueActionRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActUpdateActionResponse>;
  private __continueAction;
  /**
   * Establish or reuse one bounded authentication relationship between the caller and a destination AI. When the destination has no account for the user, the same hosted flow completes required first-time setup before connecting. The relationship can be reused across Actions until it expires or is revoked.
   *
   * @param {Darwin.AuthenticateSessionRequest} request
   * @param {DarwinClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link Darwin.ConflictError}
   * @throws {@link Darwin.ServiceUnavailableError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.authenticateSession({
   *         aiId: "aiId",
   *         methodId: "oauth_github",
   *         source: {
   *             kind: "one_time"
   *         },
   *         saveToDarwinVault: false,
   *         requestId: "request_auth_01J9Y8M4Z7B9R6K2X3C5V1N0PQ"
   *     })
   */
  authenticateSession(
    request: Darwin.AuthenticateSessionRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.AuthenticateSessionResponse>;
  private __authenticateSession;
  /**
   * Choose a bound direct or Darwin Pay route without overriding the reviewed merchant, amount, currency, protocol, or scope.
   *
   * @param {Darwin.ActPayRequest} request
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
   *     await client.payAction({
   *         actionId: "actionId",
   *         interactionId: "interaction_pay_01J9Y8M4Z7B9R6K2X3C5V1N0PQ",
   *         expectedRevision: 4,
   *         route: "darwin_pay",
   *         source: {
   *             kind: "one_time"
   *         },
   *         save: false,
   *         requestId: "request_pay_01J9Y8M4Z7B9R6K2X3C5V1N0PQ"
   *     })
   */
  payAction(
    request: Darwin.ActPayRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActPayActionResponse>;
  private __payAction;
  /**
   * Apply an exact reviewed approval decision with stale-preview protection. Requires the matching human:actions or AI-scoped agent:write/goals:write grant.
   *
   * @param {Darwin.ActApproveRequest} request
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
   *     await client.approveAction({
   *         actionId: "actionId",
   *         approvalId: "approvalId",
   *         decision: "approve",
   *         expectedRevision: "2024-01-15T09:30:00Z",
   *         reviewedPayloadDigest: "reviewedPayloadDigest",
   *         requestId: "requestId"
   *     })
   */
  approveAction(
    request: Darwin.ActApproveRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActApproveActionResponse>;
  private __approveAction;
  /**
   * @deprecated
   *
   * Compatibility operation that interrupts only the current queued or running turn. New integrations should use End action for one clear finish-or-cancel closure flow. Requires the matching human:actions or AI-scoped agent:write/goals:write grant.
   *
   * @param {Darwin.ActStopRequest} request
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
   *     await client.stopAction({
   *         actionId: "actionId",
   *         requestId: "requestId"
   *     })
   */
  stopAction(
    request: Darwin.ActStopRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActStopActionResponse>;
  private __stopAction;
  /**
   * Freeze ordinary new work and request durable closure with finish or cancel intent. Darwin derives the final outcome; the caller cannot declare success.
   *
   * @param {Darwin.ActEndRequest} request
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
   *     await client.endAction({
   *         actionId: "actionId",
   *         expectedRevision: 7,
   *         intent: "finish",
   *         requestId: "request_end_01J9Y8M4Z7B9R6K2X3C5V1N0PQ"
   *     })
   */
  endAction(
    request: Darwin.ActEndRequest,
    requestOptions?: DarwinClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActEndActionResponse>;
  private __endAction;
  /**
   * List application keys and existing legacy user-bound keys for the signed-in account. Plaintext secrets are never included.
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
   * Create an application-only key for an owned application. It can Search public capabilities but cannot impersonate a user or Act. The plaintext apiKey is returned once. Requires a verified account session.
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
   *         applicationId: "applicationId",
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
