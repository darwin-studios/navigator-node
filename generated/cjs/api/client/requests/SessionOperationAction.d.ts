import type * as Darwin from '../../index.js';

/**
 * @example
 *     {
 *         sessionId: "sessionId",
 *         operationId: "operationId",
 *         clientMessageId: "clientMessageId",
 *         message: {
 *             type: "text",
 *             text: "text"
 *         }
 *     }
 */
export interface SessionOperationAction {
  sessionId: string;
  operationId: string;
  clientMessageId: string;
  message: Darwin.SessionOperationActionMessage;
}
