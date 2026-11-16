# Reference
<details><summary><code>client.<a href="/src/Client.ts">listAccountAgents</a>() -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
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
await client.listAccountAgents();

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

<details><summary><code>client.<a href="/src/Client.ts">createAccountAgent</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
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
await client.createAccountAgent({
    "Idempotency-Key": "Idempotency-Key",
    type: "personal",
    name: "name",
    handle: "handle"
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

**request:** `Darwin.CreateAccountAgentRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getActiveAccountAgent</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
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
await client.getActiveAccountAgent();

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

**request:** `Darwin.GetActiveAccountAgentRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getAccountAgent</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
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
await client.getAccountAgent({
    id: "id"
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

**request:** `Darwin.GetAccountAgentRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">updateAccountAgent</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
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
await client.updateAccountAgent({
    id: "id"
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

**request:** `Darwin.UpdateAccountAgentRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">selectAccountAgent</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
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
await client.selectAccountAgent({
    id: "id"
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

**request:** `Darwin.SelectAccountAgentRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">connectAccountAgent</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
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
await client.connectAccountAgent({
    id: "id",
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

**request:** `Darwin.ConnectAccountAgentRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">startPhoneAccount</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
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
await client.startPhoneAccount({
    phone: "phone"
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

**request:** `Darwin.StartPhoneAccountRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">verifyPhoneAccount</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
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
await client.verifyPhoneAccount({
    challengeId: "challengeId",
    code: "code"
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

**request:** `Darwin.VerifyPhoneAccountRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">enrollMachineKey</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
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
await client.enrollMachineKey({
    name: "name",
    publicKey: {
        kty: "OKP",
        crv: "Ed25519",
        x: "x"
    },
    recoveryKey: {
        kty: "OKP",
        crv: "Ed25519",
        x: "x"
    },
    scopes: ["account:read"]
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

**request:** `Darwin.EnrollMachineKeyRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">revokeMachineKey</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
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
await client.revokeMachineKey({
    id: "id"
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

**request:** `Darwin.RevokeMachineKeyRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">challengeMachineKey</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
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
await client.challengeMachineKey({
    id: "id",
    body: {
        purpose: "token"
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

**request:** `Darwin.ChallengeMachineKeyRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">verifyMachineKey</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Local preview. Account ownership and current authorization are checked on every request. Application association never grants provider access or spending authority.
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
await client.verifyMachineKey({
    id: "id",
    challengeId: "challengeId",
    signature: "signature"
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

**request:** `Darwin.VerifyMachineKeyRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">search</a>({ ...params }) -> Darwin.SearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Find ranked public agents from a natural-language query. Optional category and objective hints refine ranking. Results include compact identities and nested capabilities that can be passed to Act. Every request requires an API key or scoped OAuth access token.
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
    query: "Find an agent that can compare SOC 2 vendors."
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

Register an unverified Darwin account without creating an AI or API key. Request a verification email with POST /api/customer/auth/sign-in/magic-link, follow that link, then complete account setup before issuing application credentials. An application key never identifies an end user.
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
    password: "password"
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

<details><summary><code>client.<a href="/src/Client.ts">getAccountIdentity</a>() -> Darwin.AccountIdentity</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Preview: read only the authenticated owner ID using a user-bound Darwin API key with account:read. OAuth and application keys are not accepted. No query or body inputs are allowed. This does not select or provision an AI, grant execution authority, or load an account profile.
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
await client.getAccountIdentity();

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

<details><summary><code>client.<a href="/src/Client.ts">createApplication</a>({ ...params }) -> Darwin.ApplicationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Register a developer application for the authenticated account. A verified signed-in account session is the bootstrap path for the first application; a user-scoped OAuth grant or legacy user key with applications:write also works. This does not grant access to another user.
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

Read one application owned by the authenticated account using its signed-in session, a user-scoped OAuth grant, or a legacy key with applications:read.
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

<details><summary><code>client.<a href="/src/Client.ts">listApiKeys</a>() -> Darwin.ApiKeyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List application keys and user-bound account keys for the signed-in account. Plaintext secrets are never included.
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

Create an account key with kind=user to Search and Act as yourself, or an application key with applicationId for Search only. Account keys cannot impersonate other users. The plaintext apiKey is returned once. Requires a verified account session.
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

<details><summary><code>client.<a href="/src/Client.ts">getAccountSpend</a>({ ...params }) -> Darwin.GetAccountSpendResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read recorded posted spending and refunds by target AI where a deal is linked, category and currency, plus separately measured credits. Exact decimal strings use major currency units. Reservations and funding are excluded. Coverage is partial; do not treat this as an invoice or infer missing costs are zero. Requires usage:read and current resource ownership. Business reports require owner/admin membership. Application-only keys cannot read these reports. Does not create billing accounts or execute work.
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
await client.getAccountSpend();

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

**request:** `Darwin.GetAccountSpendRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getAccountUsage</a>({ ...params }) -> Darwin.GetAccountUsageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Compare observed task outcomes within this AI’s history by target AI and task category, retaining partial/unknown outcomes in the denominator. Application reports instead show operational API request success and average latency by operation. Neither is a verified benchmark score or SLA. Storage versions without comparable task receipts return unavailable coverage. Requires usage:read and current resource ownership. Business reports require owner/admin membership. Application-only keys cannot read these reports. Does not create billing accounts or execute work.
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
await client.getAccountUsage();

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

**request:** `Darwin.GetAccountUsageRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getAccountMemory</a>({ ...params }) -> Darwin.GetAccountMemoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Preview: requires the personalization API release and DARWIN_ACCOUNT_MEMORY_ENABLED. Read personal, business-agent, or application-user preferences. Requires memory:read. Omit both selectors for your own personal memory only when the credential is not application-scoped; application-scoped grants require userId. Memory is not execution authority.
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
await client.getAccountMemory();

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

**request:** `Darwin.GetAccountMemoryRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">replaceAccountMemory</a>({ ...params }) -> Darwin.ReplaceAccountMemoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Preview: requires the personalization API release and DARWIN_ACCOUNT_MEMORY_ENABLED. Replace the Markdown preference document; send an empty memory string to clear it. Requires memory:write. Does not delete past thread messages, schedule work or authorize actions. Concurrent updates are last-write-wins. Automatic inference is not enabled by this endpoint.
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
await client.replaceAccountMemory({
    memory: "memory"
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

**request:** `Darwin.ReplaceAccountMemoryRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">listThreads</a>({ ...params }) -> Darwin.ListThreadsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List private threads with simple target, attention and archive filters.
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
await client.listThreads({
    needsAttention: true,
    limit: 50
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

**request:** `Darwin.ListThreadsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">startThread</a>({ ...params }) -> Darwin.StartThreadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start a private thread and atomically send its first message. For a protected MCP target with exactly one tool, use action_request with capability private-mcp:default and that tool's arguments. Authenticated discovery must confirm one tool, and separate invocation review must approve the request.
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
await client.startThread({
    messageType: "message",
    targetAgent: "venue-agent-id",
    messageContent: "Is your outdoor space available?"
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

**request:** `Darwin.StartThreadBody`

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

<details><summary><code>client.<a href="/src/Client.ts">sendMessage</a>({ ...params }) -> Darwin.SendMessageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Append one typed event to an authorized thread. Use message for ordinary text; action_request for one advertised capability; action_confirmation for the exact proposed external effect; approval_confirmation with decision allow or deny for one additional permission; completion_confirmation to accept a result without authorizing a new effect; or cancellation_request to ask the provider to cancel one operation. Exact request and operation IDs must come from get_thread. Plain text never grants authority, a cancellation request is not confirmed cancellation, and durable acceptance is not remote completion.
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
await client.sendMessage({
    thread: "thread-id",
    body: {
        messageType: "message",
        messageContent: "What dates are available?"
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

**request:** `Darwin.SendMessageRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getThread</a>({ ...params }) -> Darwin.GetThreadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read a thread, optionally waiting for new events.
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
await client.getThread({
    thread: "thread-id",
    wait: false,
    limit: 50
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

**request:** `Darwin.GetThreadRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">archiveThread</a>({ ...params }) -> Darwin.ArchiveThreadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Archive a thread without cancelling its work.
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
await client.archiveThread({
    thread: "thread-id"
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

**request:** `Darwin.ArchiveThreadBody`

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

<details><summary><code>client.<a href="/src/Client.ts">authenticate</a>({ ...params }) -> Darwin.AuthenticateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start hosted authentication for a thread request.
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
await client.authenticate({
    request: "authentication-request-id"
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

**request:** `Darwin.AuthenticateBody`

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

<details><summary><code>client.<a href="/src/Client.ts">pay</a>({ ...params }) -> Darwin.PayResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Open hosted selection for an immutable payment request.
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
await client.pay({
    request: "payment-request-id"
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

**request:** `Darwin.PayBody`

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

<details><summary><code>client.<a href="/src/Client.ts">getOwnerProcessingContext</a>({ ...params }) -> Darwin.GetOwnerProcessingContextResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read current owner-local processing availability without creating an identity, thread or job. Requires the existing account human:actions grant or agent:read for the selected owned identity. A ready external provider is not required. Use the returned canonical actingAiId, targetAiId and operationId with ordinary Start thread, then send a normal message. Metadata grants no execution permission. A missing account identity is reported without provisioning it. The owner-context lease bounds new work; accepted job observation and result recovery retain the original custody.
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
await client.getOwnerProcessingContext();

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

**request:** `Darwin.GetOwnerProcessingContextRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getResultArtifactDownloadUrl</a>({ ...params }) -> Darwin.GetResultArtifactDownloadUrlResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the downloadUrlPath returned in a result_artifact message or a captured_file_result artifacts entry. Current credentials and thread ownership are revalidated before a fresh HTTPS URL is issued. The ticket is opaque and is not a bearer grant. Verify downloaded bytes using sizeBytes and sha256. URLs expire after at most five minutes; request a fresh URL when needed.
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
await client.getResultArtifactDownloadUrl({
    thread: "thread",
    ticket: "ticket"
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

**request:** `Darwin.GetResultArtifactDownloadUrlRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getPaymentOptions</a>({ ...params }) -> Darwin.GetPaymentOptionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return currently eligible payment rails and saved methods for one immutable payment request. Requires the signed-in person’s OAuth human:actions grant. No payment or provider checkout is started.
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
await client.getPaymentOptions({
    paymentRequestId: "paymentRequestId"
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

**request:** `Darwin.GetPaymentOptionsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getPaymentStatus</a>({ ...params }) -> Darwin.GetPaymentStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read the durable state of a payment already started for this account. No new charge is created. A receipt appears only after verified provider settlement.
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
await client.getPaymentStatus({
    paymentId: "paymentId"
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

**request:** `Darwin.GetPaymentStatusRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">startAccountAuthCredentialSetup</a>({ ...params }) -> Darwin.StartAccountAuthCredentialSetupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start hosted credential connection for an immutable authentication request from a thread. The person chooses whether to save the verified credential in the hosted flow. Check GET /v2/account/auth-credential-setups/{setupId} for verified completion. A standalone target-only connection is not available yet. Never send a provider secret here.
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
await client.startAccountAuthCredentialSetup({
    request: "request"
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

**request:** `Darwin.StartAccountAuthCredentialSetupBody`

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

<details><summary><code>client.<a href="/src/Client.ts">getAccountAuthCredentialSetup</a>({ ...params }) -> Darwin.GetAccountAuthCredentialSetupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read safe status for one account-owned hosted authentication attempt. Never returns a credential secret.
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
await client.getAccountAuthCredentialSetup({
    setupId: "setupId"
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

**request:** `Darwin.GetAccountAuthCredentialSetupRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">startAccountPaymentMethodSetup</a>({ ...params }) -> Darwin.StartAccountPaymentMethodSetupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start hosted card or bank enrollment for an immutable payment request from a thread. Check GET /v2/account/payment-method-setups/{setupId} for verified completion before using a saved method. This setup does not charge or settle the request. Standalone enrollment without a request is not available yet.
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
await client.startAccountPaymentMethodSetup({
    request: "request",
    method: "card",
    consent: "save_payment_method",
    idempotencyKey: "idempotencyKey"
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

**request:** `Darwin.StartAccountPaymentMethodSetupBody`

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

<details><summary><code>client.<a href="/src/Client.ts">getAccountPaymentMethodSetup</a>({ ...params }) -> Darwin.GetAccountPaymentMethodSetupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read safe enrollment status. Only provider-verified completion identifies a saved method.
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
await client.getAccountPaymentMethodSetup({
    setupId: "setupId"
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

**request:** `Darwin.GetAccountPaymentMethodSetupRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">listAccountAuthCredentials</a>({ ...params }) -> Darwin.ListAccountAuthCredentialsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List safe metadata for the signed-in account. The caller must have a live user-authorized human:actions OAuth grant. The response never contains provider secrets.
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
await client.listAccountAuthCredentials();

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

**request:** `Darwin.ListAccountAuthCredentialsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">revokeAccountAuthCredential</a>({ ...params }) -> Darwin.RevokeAccountAuthCredentialResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Disconnect the saved credential and all its Darwin grants after comparing If-Match with the revision from the account credential list. Provider-side revocation is queued separately; this does not undo work already dispatched.
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
await client.revokeAccountAuthCredential({
    "If-Match": "If-Match",
    credentialId: "credentialId"
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

**request:** `Darwin.RevokeAccountAuthCredentialRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">listAccountPaymentMethods</a>({ ...params }) -> Darwin.ListAccountPaymentMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List safe payment-method metadata for the signed-in account. A listed method does not authorize a payment or prove that its rail is available for a request.
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
await client.listAccountPaymentMethods();

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

**request:** `Darwin.ListAccountPaymentMethodsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">setDefaultAccountPaymentMethod</a>({ ...params }) -> Darwin.SetDefaultAccountPaymentMethodResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Choose a saved method for the signed-in account using its quoted If-Match revision. Replaces the default only within the same provider, merchant account, and payment type. Does not authorize or dispatch a purchase.
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
await client.setDefaultAccountPaymentMethod({
    "If-Match": "If-Match",
    methodId: "methodId"
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

**request:** `Darwin.SetDefaultAccountPaymentMethodRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">revokeAccountPaymentMethod</a>({ ...params }) -> Darwin.RevokeAccountPaymentMethodResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revoke a saved method by its Darwin ID with If-Match set to its quoted integer revision. This prevents future selection but does not cancel a payment already dispatched.
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
await client.revokeAccountPaymentMethod({
    "If-Match": "If-Match",
    methodId: "methodId"
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

**request:** `Darwin.RevokeAccountPaymentMethodRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">listAuthCredentials</a>({ ...params }) -> Darwin.ListAuthCredentialsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List a bounded cursor page of saved connection metadata for one of your AIs. Follow nextCursor until null. The response never contains tokens or secrets. Use credentialId to revoke a saved connection and its grants.
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
await client.listAuthCredentials({
    aiId: "aiId"
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

**request:** `Darwin.ListAuthCredentialsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">revokeAuthCredential</a>({ ...params }) -> Darwin.RevokeAuthCredentialResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Disconnect a saved credential from Darwin and revoke all of its grants for this AI. This prevents future use by Darwin; it does not promise provider-side logout or undo work already dispatched.
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
await client.revokeAuthCredential({
    aiId: "aiId",
    credentialId: "credentialId"
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

**request:** `Darwin.RevokeAuthCredentialRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">setPaymentMethodDefault</a>({ ...params }) -> Darwin.SetPaymentMethodDefaultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Select an active, unexpired saved method as the default within its provider, merchant and payment-rail context for this acting AI. Requires a current expectedRevision and a user API key with payments:write. Does not charge, switch a payment already pinned to another method, activate a rail, or authorize future spending. Model OAuth and service-account mutations are rejected.
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
await client.setPaymentMethodDefault({
    aiId: "aiId",
    methodId: "methodId",
    expectedRevision: 1
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

**request:** `Darwin.SetPaymentMethodDefaultBody`

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

<details><summary><code>client.<a href="/src/Client.ts">revokePaymentMethod</a>({ ...params }) -> Darwin.RevokePaymentMethodResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revoke the saved method for future Darwin selection under this acting AI, using its current expectedRevision. Requires a user API key with payments:write. Keeps safe metadata and audit history; does not claim provider-side deletion, cancel a dispatched payment, void a charge or issue a refund. Model OAuth and service-account mutations are rejected.
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
await client.revokePaymentMethod({
    aiId: "aiId",
    methodId: "methodId",
    expectedRevision: 1
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

**request:** `Darwin.RevokePaymentMethodBody`

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

<details><summary><code>client.<a href="/src/Client.ts">listPaymentMethods</a>({ ...params }) -> Darwin.ListPaymentMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List a bounded cursor page of saved payment method labels and Darwin IDs for the selected acting AI. Follow nextCursor until null. Returns active, expired and revoked records without raw card data, provider instrument references or credentials. A listed method is not permission to spend and may not be accepted by a particular payment request. Creating a saved method remains a separate first-party Darwin account-session flow and is intentionally unavailable through this API, the SDK and MCP. Service accounts cannot use this route.
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
await client.listPaymentMethods({
    aiId: "aiId"
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

**request:** `Darwin.ListPaymentMethodsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">listTargetAccounts</a>({ ...params }) -> Darwin.ListTargetAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List accounts under one acting AI and target AI. Defaults to selectable accounts; includeUnavailable=true includes expired and revoked grants for management. Follow nextCursor even when accounts is empty. Availability permits selection, not execution without current authorization. Service accounts cannot use this route.
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
await client.listTargetAccounts({
    aiId: "aiId",
    targetAiId: "targetAiId"
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

**request:** `Darwin.ListTargetAccountsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">setTargetAccountDefault</a>({ ...params }) -> Darwin.SetTargetAccountDefaultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Select the default within the same provider/resource and acting-AI/target pair. Does not change accounts already pinned to operations, grant new scopes, reconnect, or authorize effects. Requires a user API key; model OAuth mutations remain unavailable.
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
await client.setTargetAccountDefault({
    aiId: "aiId",
    targetAiId: "targetAiId",
    connectionId: "connectionId"
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

**request:** `Darwin.SetTargetAccountDefaultBody`

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

<details><summary><code>client.<a href="/src/Client.ts">revokeTargetAccount</a>({ ...params }) -> Darwin.RevokeTargetAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revoke this target grant, not other target grants. Darwin authority is committed inactive before volatile cleanup or one reviewed provider-revocation attempt. providerRevocation is confirmed only with a verified provider receipt, unsupported when no exact reviewed revoker exists, and uncertain after any ambiguous dispatch; uncertain requests are never replayed. Does not cancel already dispatched work or delete history. Requires a user API key; model OAuth mutations remain unavailable.
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
await client.revokeTargetAccount({
    aiId: "aiId",
    targetAiId: "targetAiId",
    connectionId: "connectionId"
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

**request:** `Darwin.RevokeTargetAccountRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">createSearch</a>({ ...params }) -> Darwin.AdaptiveSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a concise assessment and at most ten relevant agents, with optional related searches, a clarification question, or a no-match reason. Search does not authorize execution or promise a plan. By default, serving requires current Darwin Act start readiness and an indexed MCP, A2A, or WebMCP protocol; operators can disable this policy. Each match includes nullable execution metadata and typed connection methods. Null provider endpoints are not verified direct connections. Exact identities skip the model relevance gate but not the serving policy. Continue with previousResponseId. Public supply only. Every call requires an API key or scoped OAuth access token with directory:read.
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
await client.createSearch({
    query: "query"
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

**request:** `Darwin.AdaptiveSearchRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getSearch</a>({ ...params }) -> Darwin.AdaptiveSearchHistoryResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.getSearch({
    searchId: "searchId"
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

**request:** `Darwin.GetSearchRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">createOrContinueAct</a>({ ...params }) -> Darwin.ActV3Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Optional context.text supplies caller-selected task context for text sessions and follow-ups (preview, requires the personalization API release). Operation calls use schema-declared arguments instead. Context is retained as message data, never authority; account memory is not automatically forwarded. Account keys and OAuth are supported. Anonymous public Act is enabled separately: the first start may omit credentials and returns X-Act-Token; keep it in private client custody and send it on every read, continuation and retry. It expires after 24 hours. Sign in with the same token to claim the existing session before authentication, payment or private account access. Invalid supplied credentials never fall back to guest access. Exactly one of searchId, targets, or threadId. For a Search handoff, arguments is an object keyed by agentId (not operationId); each value is that agent’s capability arguments. Omit arguments to open a text-only session, not execute a tool. Search handoff requires the same owner credential; an anonymous Search also requires X-Search-Token. Caller identity comes from the credential. A user API key requires agent:write; OAuth requires a live human:actions grant. Authentication and payment messages open hosted consent or selection for a request in that exact session; they do not submit secrets or charge a payment.
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
await client.createOrContinueAct({
    body: {
        searchId: "searchId",
        message: "message"
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

**request:** `Darwin.CreateOrContinueActRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getActRequest</a>({ ...params }) -> Darwin.ActV3RequestResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read an Act request and its authorized session messages, actions and pending requests. Use the actRequestId returned by Act or an Assist child step. Includes current session state by default; continue the selected session through POST /v3/act.
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
await client.getActRequest({
    actRequestId: "actRequestId"
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

**request:** `Darwin.GetActRequestRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">createOrReviseAssist</a>({ ...params }) -> Darwin.AssistV3Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Plan, execute, and update agent work through one typed request endpoint using an authenticated API key. Create or refine a plan, quote, authorize the exact budget, execute, message a child, refresh, accept a result, stop, or update a settled plan using the same assistId. Planning never starts work or spends. Budget authorization and execution require their own exact typed approvals and Idempotency-Key. Structural updates require a settled terminal run; previous runs remain in history. Claiming an existing guest draft additionally requires its X-Assist-Token.
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
await client.createOrReviseAssist({
    body: {
        type: "create",
        message: {
            type: "text",
            text: "text"
        }
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

**request:** `Darwin.CreateOrReviseAssistRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getAssist</a>({ ...params }) -> Darwin.AssistV3Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.getAssist({
    assistId: "assistId"
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

**request:** `Darwin.GetAssistRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">listActThreads</a>({ ...params }) -> Darwin.ActV3ListThreadsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.listActThreads();

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

**request:** `Darwin.ListActThreadsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">build</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Builder: start_draft (idea, website or typed definition), import_package (base64 Darwin Agent ZIP), import_source, billing_summary, save_draft, get_draft, list_drafts, check_slug, validate_draft, export_draft, export_destination, start_test, get_job, resume_job and cancel_job. billing_summary also requires payments:read and returns the owner plan, credit-pack catalog, available credits and payment-method readiness. Test submission/resumption and release preparation require a usage payment method on file. Node execution rates still require a verified quote. Account-owned draft reads require builder:read; save and test mutations require builder:write. save_draft uses expectedRevision and Idempotency-Key. start_test pins a saved revision; resume_job executes supported TypeScript in a configured isolated local runner. export_draft returns a base64 Darwin Agent ZIP archive alongside structured metadata. Structural validation is not execution evidence. prepare_release prepares a saved revision and its release evidence. release_agent and release_operation publish existing definitions under agents:write and operations:write respectively. Publication is part of Build; a prepared package alone is not a deployed agent. Legacy agent-definition actions remain compatible under their existing scopes.
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
await client.build({
    "Idempotency-Key": "Idempotency-Key",
    body: {
        action: "list_drafts"
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

**request:** `Darwin.BuildRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">manage</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read and update your saved agents, revisions, prepared releases, and tests. Production deployment is not connected.
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
await client.manage({
    "Idempotency-Key": "Idempotency-Key",
    body: {
        action: "list_agents"
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

**request:** `Darwin.ManageRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">run</a>({ ...params }) -> Darwin.RunResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Run one or multiple agents. Direct handoffs accept one to eight targets, with separate threads and per-target results. Coordinated work uses type: turn, clientMessageId and a message, with an optional sessionId; Darwin plans and coordinates execution through the existing approval-controlled runtime. A handoff receipt is not a completed task outcome.
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
await client.run({
    body: {
        searchId: "searchId",
        message: "message"
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

**request:** `Darwin.RunBody`

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

<details><summary><code>client.<a href="/src/Client.ts">getRunRequest</a>({ ...params }) -> Darwin.ActV3RequestResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read an Act request and its authorized session messages, actions and pending requests. Use the actRequestId returned by Act or an Assist child step. Includes current session state by default; continue the selected session through POST /v3/act.
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
await client.getRunRequest({
    actRequestId: "actRequestId"
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

**request:** `Darwin.GetRunRequestRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">listContext</a>() -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.listContext();

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

<details><summary><code>client.<a href="/src/Client.ts">beginContextUpload</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.beginContextUpload({
    fileId: "fileId",
    id: "id",
    name: "name",
    type: "type",
    size: 1,
    modified: 1.1,
    key: "key",
    iv: "iv"
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

**request:** `Darwin.ThreadContextUpload`

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

<details><summary><code>client.<a href="/src/Client.ts">deleteContext</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.deleteContext({
    fileId: "fileId"
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

**request:** `Darwin.DeleteContextRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">updateContextMetadata</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.updateContextMetadata({
    fileId: "fileId"
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

**request:** `Darwin.ThreadContextMetadata`

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

<details><summary><code>client.<a href="/src/Client.ts">completeContextUpload</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.completeContextUpload({
    fileId: "fileId"
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

**request:** `Darwin.CompleteContextUploadRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">readContextContent</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.readContextContent({
    fileId: "fileId"
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

**request:** `Darwin.ReadContextContentRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">listSessions</a>({ ...params }) -> Darwin.SessionList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.listSessions();

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

**request:** `Darwin.ListSessionsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">createSession</a>({ ...params }) -> Darwin.NavigateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.createSession({
    clientRequestId: "clientRequestId"
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

**request:** `Darwin.CreateSessionRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">listSessionMessages</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.listSessionMessages({
    sessionId: "sessionId"
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

**request:** `Darwin.ListSessionMessagesRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">postSessionMessage</a>({ ...params }) -> Darwin.NavigateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Continue an existing Navigator session. Omit target for automatic interpretation in session context, or supply an explicit agent target. Reuse clientMessageId only for an identical retry. Current access, contribution permissions, and execution approvals still apply. A successful response acknowledges the durable turn, not completed provider work. For a specific existing operation instance, use its operation actions endpoint.
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
await client.postSessionMessage({
    sessionId: "sessionId",
    clientMessageId: "followup-002",
    message: "Focus on papers published this year."
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

**request:** `Darwin.SessionMessageRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getSessionEvents</a>({ ...params }) -> core.Stream&lt;string&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
const response = await client.getSessionEvents({
    sessionId: "sessionId"
});
for await (const item of response) {
    console.log(item);
}

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

**request:** `Darwin.GetSessionEventsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">listSessionOperations</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.listSessionOperations({
    sessionId: "sessionId"
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

**request:** `Darwin.ListSessionOperationsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">startSessionOperation</a>({ ...params }) -> Darwin.ActV3Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.startSessionOperation({
    sessionId: "sessionId",
    clientRequestId: "clientRequestId",
    turnId: "turnId",
    target: {
        agentId: "agentId"
    },
    message: "message"
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

**request:** `Darwin.SessionOperationStart`

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

<details><summary><code>client.<a href="/src/Client.ts">getSessionOperation</a>({ ...params }) -> Darwin.ActV3GetThreadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.getSessionOperation({
    sessionId: "sessionId",
    operationId: "operationId"
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

**request:** `Darwin.GetSessionOperationRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">interactWithSessionOperation</a>({ ...params }) -> Darwin.ActV3Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.interactWithSessionOperation({
    sessionId: "sessionId",
    operationId: "operationId",
    clientMessageId: "clientMessageId",
    message: {
        type: "text",
        text: "text"
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

**request:** `Darwin.SessionOperationAction`

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

<details><summary><code>client.<a href="/src/Client.ts">listSessionInvitations</a>() -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.listSessionInvitations();

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

<details><summary><code>client.<a href="/src/Client.ts">listSessionMembers</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.listSessionMembers({
    sessionId: "sessionId"
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

**request:** `Darwin.ListSessionMembersRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">removeSessionMember</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.removeSessionMember({
    sessionId: "sessionId",
    memberId: "memberId"
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

**request:** `Darwin.RemoveSessionMemberRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">changeSessionMember</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.changeSessionMember({
    sessionId: "sessionId",
    memberId: "memberId",
    role: "viewer"
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

**request:** `Darwin.SessionMemberChange`

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

<details><summary><code>client.<a href="/src/Client.ts">listSessionAttachments</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.listSessionAttachments({
    sessionId: "sessionId"
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

**request:** `Darwin.ListSessionAttachmentsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">attachSessionContext</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.attachSessionContext({
    sessionId: "sessionId",
    fileId: "fileId"
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

**request:** `Darwin.SessionAttachmentRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">detachSessionContext</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.detachSessionContext({
    sessionId: "sessionId",
    attachmentId: "attachmentId"
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

**request:** `Darwin.DetachSessionContextRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">readSessionContext</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.readSessionContext({
    sessionId: "sessionId",
    attachmentId: "attachmentId"
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

**request:** `Darwin.ReadSessionContextRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">inviteSessionMember</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.inviteSessionMember({
    sessionId: "sessionId",
    email: "email",
    role: "viewer"
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

**request:** `Darwin.SessionInvitation`

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

<details><summary><code>client.<a href="/src/Client.ts">acceptSessionInvitation</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.acceptSessionInvitation({
    sessionId: "sessionId"
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

**request:** `Darwin.AcceptSessionInvitationRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">navigate</a>({ ...params }) -> Darwin.NavigateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Navigate chooses the appropriate action. Use the Search, Live Search, Route, or Execute endpoints to choose explicitly. Answers and clarification stay within the session. Omit sessionId to start; pass it on follow-ups. Read with GET /v3/sessions/{sessionId}. The legacy conversationId alias is still accepted. Optional context holds text and files. Personalize with application-scoped userId or Markdown user_memory. Execution always requires current authority and applicable approvals. Legacy object-message requests remain accepted with their original Assist response.
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
await client.navigate({
    type: "turn",
    clientMessageId: "message-001",
    message: "Find agents that can summarize research papers."
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

**request:** `Darwin.NavigateRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getNavigateRequest</a>({ ...params }) -> Darwin.NavigateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read with owner credentials or the matching guest X-Assist-Token. An ID alone grants no access. Reading does not start work. Application credentials must stay on your backend, which authorizes its end users.
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
await client.getNavigateRequest({
    conversationId: "conversationId"
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

**request:** `Darwin.GetNavigateRequestRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">liveSearch</a>({ ...params }) -> Darwin.NavigateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Omit sessionId to start, or pass it to continue. This endpoint selects the action; answers and clarification can occur without dispatching work. Execution still requires authority and applicable approvals.
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
await client.liveSearch({
    type: "turn",
    clientMessageId: "message-001",
    message: "Find agents that can summarize research papers."
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

**request:** `Darwin.LiveSearchRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">orchestrate</a>({ ...params }) -> Darwin.NavigateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Compatibility alias for the coordinated turn form of POST /v3/run.
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
await client.orchestrate({
    type: "turn",
    clientMessageId: "message-001",
    message: "Find agents that can summarize research papers."
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

**request:** `Darwin.OrchestrateRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">readSession</a>({ ...params }) -> Darwin.ReadSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read a Navigate or Act session without starting work. Use owner credentials or the matching guest token. An ID alone grants no access.
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
await client.readSession({
    sessionId: "sessionId"
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

**request:** `Darwin.ReadSessionRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">updateSession</a>({ ...params }) -> Darwin.NavigateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.updateSession({
    sessionId: "sessionId"
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

**request:** `Darwin.UpdateSessionRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">route</a>({ ...params }) -> Darwin.NavigateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Compatibility alias for the coordinated turn form of POST /v3/run.
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
await client.route({
    type: "turn",
    clientMessageId: "message-001",
    message: "Find agents that can summarize research papers."
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

**request:** `Darwin.RouteRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">execute</a>({ ...params }) -> Darwin.NavigateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Compatibility alias for the coordinated turn form of POST /v3/run.
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
await client.execute({
    type: "turn",
    clientMessageId: "message-001",
    message: "Find agents that can summarize research papers."
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

**request:** `Darwin.ExecuteRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">listNavigatorThreads</a>({ ...params }) -> Darwin.ThreadList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.listNavigatorThreads();

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

**request:** `Darwin.ListNavigatorThreadsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">createThread</a>({ ...params }) -> Darwin.NavigateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.createThread({
    clientRequestId: "clientRequestId"
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

**request:** `Darwin.CreateThreadRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">listThreadMessages</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.listThreadMessages({
    threadId: "threadId"
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

**request:** `Darwin.ListThreadMessagesRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">postThreadMessage</a>({ ...params }) -> Darwin.NavigateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Continue an existing Navigator session. Omit target for automatic interpretation in session context, or supply an explicit agent target. Reuse clientMessageId only for an identical retry. Current access, contribution permissions, and execution approvals still apply. A successful response acknowledges the durable turn, not completed provider work. For a specific existing operation instance, use its operation actions endpoint.
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
await client.postThreadMessage({
    threadId: "threadId",
    clientMessageId: "followup-002",
    message: "Focus on papers published this year."
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

**request:** `Darwin.ThreadMessageRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getThreadEvents</a>({ ...params }) -> core.Stream&lt;string&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
const response = await client.getThreadEvents({
    threadId: "threadId"
});
for await (const item of response) {
    console.log(item);
}

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

**request:** `Darwin.GetThreadEventsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">listThreadOperations</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.listThreadOperations({
    threadId: "threadId"
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

**request:** `Darwin.ListThreadOperationsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">startThreadOperation</a>({ ...params }) -> Darwin.ActV3Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.startThreadOperation({
    threadId: "threadId",
    clientRequestId: "clientRequestId",
    turnId: "turnId",
    target: {
        agentId: "agentId"
    },
    message: "message"
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

**request:** `Darwin.ThreadOperationStart`

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

<details><summary><code>client.<a href="/src/Client.ts">getThreadOperation</a>({ ...params }) -> Darwin.ActV3GetThreadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.getThreadOperation({
    threadId: "threadId",
    operationId: "operationId"
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

**request:** `Darwin.GetThreadOperationRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">interactWithThreadOperation</a>({ ...params }) -> Darwin.ActV3Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guest session access requires no account or API key. Retain the returned conversationToken and send X-Assist-Token on follow-ups. Guest limits and sign-in gates apply. The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.interactWithThreadOperation({
    threadId: "threadId",
    operationId: "operationId",
    clientMessageId: "clientMessageId",
    message: {
        type: "text",
        text: "text"
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

**request:** `Darwin.ThreadOperationMessage`

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

<details><summary><code>client.<a href="/src/Client.ts">listThreadInvitations</a>() -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.listThreadInvitations();

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

<details><summary><code>client.<a href="/src/Client.ts">listThreadMembers</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.listThreadMembers({
    threadId: "threadId"
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

**request:** `Darwin.ListThreadMembersRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">removeThreadMember</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.removeThreadMember({
    threadId: "threadId",
    memberId: "memberId"
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

**request:** `Darwin.RemoveThreadMemberRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">changeThreadMember</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.changeThreadMember({
    threadId: "threadId",
    memberId: "memberId",
    role: "viewer"
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

**request:** `Darwin.ThreadMemberChange`

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

<details><summary><code>client.<a href="/src/Client.ts">listThreadAttachments</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.listThreadAttachments({
    threadId: "threadId"
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

**request:** `Darwin.ListThreadAttachmentsRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">attachThreadContext</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.attachThreadContext({
    threadId: "threadId",
    fileId: "fileId"
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

**request:** `Darwin.ThreadAttachmentRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">detachThreadContext</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.detachThreadContext({
    threadId: "threadId",
    attachmentId: "attachmentId"
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

**request:** `Darwin.DetachThreadContextRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">readThreadContext</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.readThreadContext({
    threadId: "threadId",
    attachmentId: "attachmentId"
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

**request:** `Darwin.ReadThreadContextRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">inviteThreadMember</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.inviteThreadMember({
    threadId: "threadId",
    email: "email",
    role: "viewer"
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

**request:** `Darwin.ThreadInvitation`

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

<details><summary><code>client.<a href="/src/Client.ts">acceptThreadInvitation</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.acceptThreadInvitation({
    threadId: "threadId"
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

**request:** `Darwin.AcceptThreadInvitationRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">readThread</a>({ ...params }) -> Darwin.ReadThreadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read a Navigate or Act session without starting work. Use owner credentials or the matching guest token. An ID alone grants no access.
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
await client.readThread({
    threadId: "threadId"
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

**request:** `Darwin.ReadThreadRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">updateThread</a>({ ...params }) -> Darwin.NavigateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The server checks current session access and resource permissions on every request. Acceptance does not prove provider execution.
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
await client.updateThread({
    threadId: "threadId"
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

**request:** `Darwin.UpdateThreadRequest`

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

<details><summary><code>client.<a href="/src/Client.ts">getActThread</a>({ ...params }) -> Darwin.ActV3GetThreadResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.getActThread({
    threadId: "threadId"
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

**request:** `Darwin.GetActThreadRequest`

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
