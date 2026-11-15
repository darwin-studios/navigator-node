import type * as Darwin from '../../index.js';

/**
 * @example
 *     {
 *         thread: "thread-id",
 *         wait: false,
 *         limit: 50
 *     }
 */
export interface GetThreadRequest {
  /** The thread whose history and current state you want to read. */
  thread: string;
  /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
  audience?: Darwin.GetThreadRequestAudience;
  /** Optional agent whose authorized view of this thread you want to read. */
  agent?: string;
  /** Return messages after this cursor. Omit it for the first page and use the returned cursor thereafter. */
  cursor?: string;
  /** When true, wait briefly for new messages after the cursor. */
  wait?: boolean;
  /** Maximum events to return in one page. */
  limit?: number;
}
