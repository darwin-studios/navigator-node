/**
 * @example
 *     {
 *         aiId: "aiId",
 *         methodId: "methodId",
 *         expectedRevision: 1
 *     }
 */
export interface SetPaymentMethodDefaultBody {
    aiId: string;
    methodId: string;
    expectedRevision: number;
}
