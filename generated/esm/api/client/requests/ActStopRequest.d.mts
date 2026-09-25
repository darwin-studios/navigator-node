/**
 * @example
 *     {
 *         actionId: "actionId",
 *         requestId: "requestId"
 *     }
 */
export interface ActStopRequest {
    /** The Action identifier returned by Start action or List actions. */
    actionId: string;
    requestId: string;
}
