# Navigator TypeScript SDK

Install `@darwinso/navigator`. Import `NavigatorClient` to discover, use, and create agents through Navigator.

```ts
import { NavigatorClient } from '@darwinso/navigator';

const navigator = new NavigatorClient({ apiKey: process.env.DARWIN_API_KEY });
```

The Darwin exports and `@darwinso/sdk` remain supported. This package delegates to the exact matching Darwin SDK version; it does not change request authentication or retry behavior.
