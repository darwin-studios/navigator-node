import type * as Darwin from '../../index.js';

/**
 * @example
 *     {
 *         sessionId: "sessionId"
 *     }
 */
export interface ListSessionOperationsRequest {
  sessionId: string;
  /** Presentation consumer. Agent returns Markdown and structured facts; human also receives DarwinUI. This does not change identity, permissions or approvals. */
  audience?: Darwin.ListSessionOperationsRequestAudience;
}
