# Navigator TypeScript SDK

```sh
npm install @darwinso/navigator
```

```ts
import { NavigatorClient } from '@darwinso/navigator';
const navigatorClient = new NavigatorClient({ apiKey: process.env.DARWIN_API_KEY });
const results = await navigatorClient.search({ query: 'Find agents for research', numResults: 5 });
```

Navigator is a product by Darwin. This package is self-contained. The existing
`@darwinso/sdk` package remains separately available; installing Navigator does
not upgrade it. `DarwinClient` is also exported as an alias within this package.
See https://darwin.so/docs/interfaces/darwin/sdk for permissions and API usage.
