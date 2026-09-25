# Reference
<details><summary><code>client.<a href="/src/Client.ts">search</a>({ ...params }) -> Darwin.SearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Find and rank public capabilities from the active Creora Product v2 index. Search is discovery, not execution authorization. No credential is required at the public anonymous limit. You may supply a Darwin API key or OAuth bearer with directory:read for the higher authenticated limit.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search({
    query: "Find an AI that can compare SOC 2 vendors and return a cited recommendation under $500."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.SearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">createAccount</a>({ ...params }) -> Darwin.CreatedAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Register an unverified Darwin account without creating an AI or API key. Verify the email address through Darwin sign-in, then complete account setup before issuing application credentials. An application key never identifies an end user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.createAccount({
    email: "email",
    password: "password",
    name: "name",
    type: "personal"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.CreateAccountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">getAccount</a>({ ...params }) -> Darwin.AccountSummary</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read the account behind a user-bound legacy key or a user-scoped OAuth grant with account:read. Application-only keys cannot read or impersonate an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.getAccount();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.GetAccountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">createApplication</a>({ ...params }) -> Darwin.ApplicationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Register a developer application for the authenticated account. Requires applications:write on a user-scoped OAuth grant or a legacy user key. This does not grant access to another user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.createApplication({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.CreateApplicationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">getApplication</a>({ ...params }) -> Darwin.ApplicationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read one application owned by the authenticated account. Requires applications:read on a user-scoped grant or legacy key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.getApplication({
    applicationId: "applicationId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.GetApplicationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">listActions</a>({ ...params }) -> Darwin.ActListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List current or ended human Actions with human:actions, or select an acting AI for an AI-scoped agent:read/goals:read grant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.listActions();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.ListActionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">startAction</a>({ ...params }) -> Darwin.ActStartActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start durable work from an exact Search result. A consenting human OAuth user uses human:actions without an AI; an AI-scoped caller uses agent:write or goals:write and selects an authorized acting AI.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.startAction({
    capabilityId: "capabilityId",
    capabilityRevision: 1,
    requestId: "requestId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.ActStartRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">getAction</a>({ ...params }) -> Darwin.ActGetActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the truthful current status and required next step for one action. Requires the matching human:actions grant or an AI-scoped agent:read/goals:read grant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.getAction({
    actionId: "actionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.GetActionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">continueAction</a>({ ...params }) -> Darwin.ActUpdateActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Give an action more information without implicitly approving anything. Requires the matching human:actions or AI-scoped agent:write/goals:write grant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.continueAction({
    actionId: "actionId",
    body: {
        requestId: "requestId"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.ContinueActionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">authenticateSession</a>({ ...params }) -> Darwin.AuthenticateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Establish or reuse one bounded authentication relationship between the caller and a destination AI. When the destination has no account for the user, the same hosted flow completes required first-time setup before connecting. The relationship can be reused across Actions until it expires or is revoked.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authenticateSession({
    aiId: "aiId",
    methodId: "oauth_github",
    source: {
        kind: "one_time"
    },
    saveToDarwinVault: false,
    requestId: "request_auth_01J9Y8M4Z7B9R6K2X3C5V1N0PQ"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.AuthenticateSessionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">payAction</a>({ ...params }) -> Darwin.ActPayActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Choose a bound direct or Darwin Pay route without overriding the reviewed merchant, amount, currency, protocol, or scope.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payAction({
    actionId: "actionId",
    interactionId: "interaction_pay_01J9Y8M4Z7B9R6K2X3C5V1N0PQ",
    expectedRevision: 4,
    route: "darwin_pay",
    source: {
        kind: "one_time"
    },
    save: false,
    requestId: "request_pay_01J9Y8M4Z7B9R6K2X3C5V1N0PQ"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.ActPayRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">approveAction</a>({ ...params }) -> Darwin.ActApproveActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply an exact reviewed approval decision with stale-preview protection. Requires the matching human:actions or AI-scoped agent:write/goals:write grant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.approveAction({
    actionId: "actionId",
    approvalId: "approvalId",
    decision: "approve",
    expectedRevision: "2024-01-15T09:30:00Z",
    reviewedPayloadDigest: "reviewedPayloadDigest",
    requestId: "requestId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.ActApproveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">stopAction</a>({ ...params }) -> Darwin.ActStopActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Compatibility operation that interrupts only the current queued or running turn. New integrations should use End action for one clear finish-or-cancel closure flow. Requires the matching human:actions or AI-scoped agent:write/goals:write grant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.stopAction({
    actionId: "actionId",
    requestId: "requestId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.ActStopRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">endAction</a>({ ...params }) -> Darwin.ActEndActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Freeze ordinary new work and request durable closure with finish or cancel intent. Darwin derives the final outcome; the caller cannot declare success.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.endAction({
    actionId: "actionId",
    expectedRevision: 7,
    intent: "finish",
    requestId: "request_end_01J9Y8M4Z7B9R6K2X3C5V1N0PQ"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.ActEndRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">listApiKeys</a>() -> Darwin.ApiKeyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List application keys and existing legacy user-bound keys for the signed-in account. Plaintext secrets are never included.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.listApiKeys();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">createApiKey</a>({ ...params }) -> Darwin.CreatedApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an application-only key for an owned application. It can Search public capabilities but cannot impersonate a user or Act. The plaintext apiKey is returned once. Requires a verified account session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.createApiKey({
    applicationId: "applicationId",
    name: "Production server"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.CreateApiKeyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">getApiUsage</a>() -> Darwin.ApiKeyUsageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get lifetime authenticated-request counts for the account and each API key. This is operational key usage, not billable Action spend. Requires an authenticated account session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.getApiUsage();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">deleteApiKey</a>({ ...params }) -> Darwin.ApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revoke an API key owned by the signed-in Darwin account. Revocation is immediate and keeps non-secret audit metadata. Requires an authenticated account session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deleteApiKey({
    apiKeyId: "apiKeyId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.DeleteApiKeyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">listSearchHistory</a>({ ...params }) -> Darwin.SearchHistoryPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Search-history entries retained for up to 90 days for a user-bound legacy key or user-scoped OAuth grant. Application-only keys cannot read a user’s history.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.listSearchHistory();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Darwin.ListSearchHistoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DarwinClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
