/**
 * @example
 *     {
 *         needsAttention: true,
 *         limit: 50
 *     }
 */
export interface ListThreadsRequest {
  /** Optional agent whose threads to list. */
  agent?: string;
  /** Optional filter for conversations with one target agent. */
  targetAgent?: string;
  /** When true, include threads with unresolved work or decisions needing attention. */
  needsAttention?: boolean;
  /** Filter by whether this side of the thread is archived. */
  archived?: boolean;
  /** Pagination cursor from the previous response. Omit it for the first page. */
  cursor?: string;
  /** Maximum thread summaries to return in one page. */
  limit?: number;
}
