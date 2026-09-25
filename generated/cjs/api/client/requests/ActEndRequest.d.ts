/**
 * @example
 *     {
 *         actionId: "actionId",
 *         expectedRevision: 7,
 *         intent: "finish",
 *         requestId: "request_end_01J9Y8M4Z7B9R6K2X3C5V1N0PQ"
 *     }
 */
export interface ActEndRequest {
  /** The Action identifier returned by Start action or List actions. */
  actionId: string;
  expectedRevision: number;
  intent: ActEndRequest.Intent;
  requestId: string;
}
export declare namespace ActEndRequest {
  const Intent: {
    readonly Finish: 'finish';
    readonly Cancel: 'cancel';
  };
  type Intent = (typeof Intent)[keyof typeof Intent];
}
