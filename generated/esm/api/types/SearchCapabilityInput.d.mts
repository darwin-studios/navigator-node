import type * as Darwin from "../index.mjs";
export interface SearchCapabilityInput {
    available: boolean;
    additionalFieldsAllowed: boolean;
    fields: Darwin.SearchCapabilityInputField[];
}
