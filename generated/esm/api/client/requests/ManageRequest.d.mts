import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         body: {
 *             action: "list_agents"
 *         }
 *     }
 */
export interface ManageRequest {
    /** Stable key for this exact mutation. Reusing it with different input returns 409. */
    "Idempotency-Key": string;
    body: Darwin.ManageRequestBody;
}
