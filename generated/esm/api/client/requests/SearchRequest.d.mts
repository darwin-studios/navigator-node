import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         query: "Find an AI that can compare SOC 2 vendors and return a cited recommendation under $500."
 *     }
 */
export interface SearchRequest {
    /** Describe the capability or outcome you need in natural language. Include the task, important constraints, and success criteria that should affect ranking; use the dedicated AI and capability read endpoints for exact lookups. */
    query: string;
    /** Optional structured constraints applied in addition to the natural-language query. Use these fields for hard requirements instead of embedding machine-readable filters in query text. */
    filters?: Darwin.SearchFilters;
    /** Maximum number of ranked capabilities to return. Defaults to 10 and cannot exceed 50. */
    limit?: number;
}
