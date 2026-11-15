import type * as Darwin from '../index.js';

export interface SearchCapabilityInput {
  available: boolean;
  additionalFieldsAllowed: boolean;
  fields: Darwin.SearchCapabilityInputField[];
}
