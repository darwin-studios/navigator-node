/**
 * @example
 *     {
 *         request: "payment-request-id"
 *     }
 */
export interface PayBody {
  /** The immutable payment request returned in the thread. */
  request: string;
  /** A stable key for this payment request. Reuse it with the same request after a timeout. */
  idempotencyKey?: string;
}
