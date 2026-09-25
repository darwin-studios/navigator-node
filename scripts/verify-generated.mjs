import { access, readFile } from 'node:fs/promises';

const requiredFiles = [
  'generated/cjs/index.js',
  'generated/esm/index.mjs',
  'generated/esm/index.d.mts',
  'generated/esm/api/client/requests/SearchRequest.d.mts',
  'generated/esm/api/types/SearchResponse.d.mts',
  'generated/esm/api/client/requests/ActStartRequest.d.mts',
  'generated/esm/api/types/ActActionResponse.d.mts',
  'generated/esm/api/types/ActListResponse.d.mts',
  'generated/esm/api/client/requests/GetAccountRequest.d.mts',
  'generated/esm/api/client/requests/ContinueActionRequest.d.mts',
];

await Promise.all(requiredFiles.map((path) => access(new URL(`../${path}`, import.meta.url))));

const clientTypes = await readFile(new URL('../generated/esm/Client.d.mts', import.meta.url), 'utf8');
for (const method of [
  'search',
  'getAccount',
  'listSearchHistory',
  'startAction',
  'getAction',
  'listActions',
  'continueAction',
  'authenticateSession',
  'payAction',
  'approveAction',
  'endAction',
]) {
  if (!clientTypes.includes(`  ${method}(`)) throw new Error(`Missing top-level SDK method: ${method}`);
}
for (const removed of ['get host()', 'get account()', 'get connect()', 'get supply()']) {
  if (clientTypes.includes(removed)) throw new Error(`Primary SDK still exposes ${removed}.`);
}
const environment = await readFile(new URL('../generated/esm/environments.mjs', import.meta.url), 'utf8');
if (!environment.includes('https://api.darwin.so/api/v2')) {
  throw new Error('Generated TypeScript SDK must default to the v2 API.');
}

const searchRequest = await readFile(
  new URL('../generated/esm/api/client/requests/SearchRequest.d.mts', import.meta.url),
  'utf8',
);
if (!searchRequest.includes('query: string;')) {
  throw new Error('Generated TypeScript SDK must require one natural-language Search query.');
}
for (const field of ['filters?', 'limit?']) {
  if (!searchRequest.includes(field)) throw new Error(`Generated Search request is missing ${field}.`);
}
for (const retiredField of [
  'includeAiIds?',
  'excludeAiIds?',
  'includeDomains?',
  'excludeDomains?',
  'context?',
  'cursor?',
]) {
  if (searchRequest.includes(retiredField)) throw new Error(`Generated Search request still exposes ${retiredField}.`);
}
for (const retiredSelector of ['aiId?', 'capabilityId?']) {
  if (searchRequest.includes(retiredSelector)) {
    throw new Error(`Generated Search request still exposes retired selector ${retiredSelector}.`);
  }
}
