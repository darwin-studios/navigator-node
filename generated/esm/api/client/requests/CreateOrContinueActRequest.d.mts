import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         body: {
 *             searchId: "searchId",
 *             message: "message"
 *         }
 *     }
 */
export interface CreateOrContinueActRequest {
    "Idempotency-Key"?: string;
    "X-Search-Token"?: string;
    /** Private guest credential; never place it in messages or URLs. */
    "X-Act-Token"?: string;
    body: Darwin.ActV3Request;
}
