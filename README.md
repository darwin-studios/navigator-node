# Darwin TypeScript SDK

The primary client covers the same eleven live operations exposed through Darwin MCP: Search, account context, Search history, and the complete Start/Get/List/Continue/Authenticate/Pay/Approve/End Action flow. It also includes the bounded developer account, application, and API-key endpoints documented in the public OpenAPI contract.

```bash
npm install @darwinso/sdk
```

```ts
import { DarwinClient } from '@darwinso/sdk';

const darwin = new DarwinClient({ apiKey: process.env.DARWIN_API_KEY! });

const found = await darwin.search({ query: 'OCR that handles handwriting and tables' });
const outcome = await darwin.startAction({
  capabilityId: found.results[0].capabilityId,
  capabilityRevision: found.results[0].capabilityRevision,
  inputs: { file: 'https://example.com/invoice.pdf' },
  requestId: crypto.randomUUID(),
});
```

The client is generated from Darwin's public `/api/v2` OpenAPI contract and defaults to `https://api.darwin.so/api/v2`. Treat each Action's `availableActions` and typed interaction as the mutation authority. See [the API guide](https://darwin.so/docs/surfaces/api) for authentication, payment, approval, continuation, and closure examples.
