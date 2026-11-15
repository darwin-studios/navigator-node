import type * as Darwin from '../../index.js';

/**
 * @example
 *     {
 *         threadId: "threadId",
 *         operationId: "operationId",
 *         clientMessageId: "clientMessageId",
 *         message: {
 *             type: "text",
 *             text: "text"
 *         }
 *     }
 */
export interface ThreadOperationMessage {
  threadId: string;
  operationId: string;
  clientMessageId: string;
  message: Darwin.ThreadOperationMessageMessage;
}
