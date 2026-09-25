import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         actionId: "actionId",
 *         interactionId: "interaction_pay_01J9Y8M4Z7B9R6K2X3C5V1N0PQ",
 *         expectedRevision: 4,
 *         route: "darwin_pay",
 *         source: {
 *             kind: "one_time"
 *         },
 *         save: false,
 *         requestId: "request_pay_01J9Y8M4Z7B9R6K2X3C5V1N0PQ"
 *     }
 */
export interface ActPayRequest {
    /** The Action identifier returned by Start action or List actions. */
    actionId: string;
    interactionId: string;
    expectedRevision: number;
    route: ActPayRequest.Route;
    source: Darwin.ActPayRequestSource;
    /** Explicit consent to save a tokenized processor reference after a successful one-time flow. */
    save: boolean;
    requestId: string;
}
export declare namespace ActPayRequest {
    const Route: {
        readonly Direct: "direct";
        readonly DarwinPay: "darwin_pay";
    };
    type Route = (typeof Route)[keyof typeof Route];
}
