/**
 * @example
 *     {
 *         query: "Find an agent that can compare SOC 2 vendors."
 *     }
 */
export interface SearchRequest {
  /** Describe the agent or capability you need in natural language. */
  query: string;
  /** Optional open-ended agent or capability category focus for ranking. */
  category?: string;
  /** Optional outcome or success objective that should affect ranking. */
  objective?: string;
  /** Maximum number of canonical ranked capabilities to return. Defaults to 10 and cannot exceed 50. */
  numResults?: number;
}
