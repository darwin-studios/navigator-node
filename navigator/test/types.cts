import { DarwinClient, NavigatorClient } from '@darwinso/navigator';
import { actOpenAIFunctionTools } from '@darwinso/navigator/openai';

const client: DarwinClient = new NavigatorClient({ apiKey: 'typecheck-only' });
void client.search({ query: 'Find agents for research', numResults: 5 });
void actOpenAIFunctionTools();
