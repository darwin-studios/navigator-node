/**
 * @example
 *     {}
 */
export interface ListAccountPaymentMethodsRequest {
  /** Maximum saved methods to return, up to 100. */
  limit?: number;
  /** Continue after the previous response nextCursor. */
  afterCursor?: string;
}
