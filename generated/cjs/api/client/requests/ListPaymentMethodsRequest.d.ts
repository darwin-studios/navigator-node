/**
 * @example
 *     {
 *         aiId: "aiId"
 *     }
 */
export interface ListPaymentMethodsRequest {
  aiId: string;
  /** Maximum saved methods to return, up to 100. */
  limit?: number;
  /** Continue after the previous response nextCursor. */
  afterCursor?: string;
}
