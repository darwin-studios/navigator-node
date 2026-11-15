/**
 * @example
 *     {
 *         aiId: "aiId",
 *         methodId: "methodId",
 *         expectedRevision: 1
 *     }
 */
export interface RevokePaymentMethodBody {
  aiId: string;
  methodId: string;
  expectedRevision: number;
}
