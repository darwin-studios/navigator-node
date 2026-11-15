import type * as Darwin from '../../index.js';

/**
 * @example
 *     {}
 */
export interface ListSessionsRequest {
  /** nextBefore from the previous page. */
  before?: string;
  /** Presentation consumer. Agent returns Markdown and structured facts; human also receives DarwinUI. This does not change identity, permissions or approvals. */
  audience?: Darwin.ListSessionsRequestAudience;
}
