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
export interface RunBody {
    "Idempotency-Key"?: string;
    "X-Search-Token"?: string;
    /** Private guest credential; never place it in messages or URLs. */
    "X-Act-Token"?: string;
    /** Private continuation proof for coordinated guest turns only. */
    "X-Assist-Token"?: string;
    body: Darwin.RunRequest;
}
