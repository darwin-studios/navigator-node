import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         body: {
 *             type: "create",
 *             message: {
 *                 type: "text",
 *                 text: "text"
 *             }
 *         }
 *     }
 */
export interface CreateOrReviseAssistRequest {
    "X-Assist-Token"?: string;
    "Idempotency-Key"?: string;
    body: Darwin.AssistV3Request;
}
