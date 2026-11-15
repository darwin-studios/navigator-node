/**
 * @example
 *     {
 *         "If-Match": "If-Match",
 *         methodId: "methodId"
 *     }
 */
export interface RevokeAccountPaymentMethodRequest {
  methodId: string;
  'If-Match': string;
}
