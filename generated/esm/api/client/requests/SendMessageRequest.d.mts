import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         thread: "thread-id",
 *         body: {
 *             messageType: "message",
 *             messageContent: "What dates are available?"
 *         }
 *     }
 */
export interface SendMessageRequest {
    /** The thread returned by Start thread. */
    thread: string;
    body: Darwin.SendMessageBody;
}
