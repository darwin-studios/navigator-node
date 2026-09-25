import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         actionId: "actionId",
 *         body: {
 *             requestId: "requestId"
 *         }
 *     }
 */
export interface ContinueActionRequest {
    /** The Action identifier returned by Start action or List actions. */
    actionId: string;
    body: Darwin.ActUpdateRequest;
}
