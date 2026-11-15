import type * as Darwin from '../../index.js';

/**
 * @example
 *     {
 *         threadId: "threadId"
 *     }
 */
export interface ListThreadMessagesRequest {
  threadId: string;
  before?: string;
  /** Presentation consumer. Agent returns Markdown and structured facts; human also receives DarwinUI. This does not change identity, permissions or approvals. */
  audience?: Darwin.ListThreadMessagesRequestAudience;
}
