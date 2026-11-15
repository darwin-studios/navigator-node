import { access, readFile } from 'node:fs/promises';

const requiredFiles = [
  'generated/cjs/index.js',
  'generated/esm/index.mjs',
  'generated/esm/index.d.mts',
  'generated/esm/api/client/requests/SearchRequest.d.mts',
  'generated/esm/api/types/SearchResponse.d.mts',
  'generated/esm/api/types/StartThreadBody.d.mts',
  'generated/esm/api/types/GetThreadResponse.d.mts',
  'generated/esm/api/types/PayResponse.d.mts',
  'generated/esm/api/client/requests/GetAccountRequest.d.mts',
  'generated/esm/api/client/requests/SendMessageRequest.d.mts',
  'generated/esm/api/types/SendMessageBody.d.mts',
];

await Promise.all(requiredFiles.map((path) => access(new URL(`../${path}`, import.meta.url))));

const clientTypes = await readFile(new URL('../generated/esm/Client.d.mts', import.meta.url), 'utf8');
for (const method of [
  'search',
  'createSearch',
  'getSearch',
  'navigate',
  'getNavigateRequest',
  'createOrContinueAct',
  'getActRequest',
  'listActThreads',
  'getActThread',
  'getAccount',
  'listSearchHistory',
  'startThread',
  'getThread',
  'listThreads',
  'sendMessage',
  'authenticate',
  'pay',
  'listAuthCredentials',
  'revokeAuthCredential',
  'listTargetAccounts',
  'setTargetAccountDefault',
  'revokeTargetAccount',
  'listPaymentMethods',
  'setPaymentMethodDefault',
  'revokePaymentMethod',
]) {
  if (!clientTypes.includes(`  ${method}(`)) throw new Error(`Missing top-level SDK method: ${method}`);
}
for (const removed of [
  'get host()',
  'get account()',
  'get connect()',
  'get supply()',
  'startAction(',
  'approveAction(',
  'endAction(',
  'getAuthenticationStatus(',
]) {
  if (clientTypes.includes(removed)) throw new Error(`Primary SDK still exposes ${removed}.`);
}
const environment = await readFile(new URL('../generated/esm/environments.mjs', import.meta.url), 'utf8');
if (!environment.includes('https://api.darwin.so/api')) {
  throw new Error('Generated TypeScript SDK must default to the versioned API root.');
}
const clientRuntime = await readFile(new URL('../generated/esm/Client.mjs', import.meta.url), 'utf8');
if (!clientRuntime.includes("'v2/search'") || !clientRuntime.includes("'v3/search'")) {
  throw new Error('Generated Search methods must preserve v2 and route adaptive Search to v3.');
}

const searchRequest = await readFile(
  new URL('../generated/esm/api/client/requests/SearchRequest.d.mts', import.meta.url),
  'utf8',
);
if (!searchRequest.includes('query: string;')) {
  throw new Error('Generated TypeScript SDK must require one natural-language Search query.');
}
for (const field of ['category?', 'objective?', 'numResults?']) {
  if (!searchRequest.includes(field)) throw new Error(`Generated Search request is missing ${field}.`);
}
for (const retiredField of [
  'filters?',
  'limit?',
  'includeAiIds?',
  'excludeAiIds?',
  'includeDomains?',
  'excludeDomains?',
  'context?',
  'cursor?',
]) {
  if (searchRequest.includes(retiredField)) throw new Error(`Generated Search request still exposes ${retiredField}.`);
}
for (const retiredSelector of ['aiId?', 'operationId?']) {
  if (searchRequest.includes(retiredSelector)) {
    throw new Error(`Generated Search request still exposes retired selector ${retiredSelector}.`);
  }
}
