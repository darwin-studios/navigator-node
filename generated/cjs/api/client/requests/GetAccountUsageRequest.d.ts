import type * as Darwin from '../../index.js';

/**
 * @example
 *     {}
 */
export interface GetAccountUsageRequest {
  /** Personal or business AI you own/administer. Defaults to your personal AI. OAuth grants must explicitly include this AI. */
  aiId?: string;
  /** Your developer application. Requires an owner user API key. Mutually exclusive with aiId. */
  applicationId?: string;
  /** UTC calendar days including the current partial day. Reports return an inclusive from and exclusive to timestamp. */
  days?: Darwin.GetAccountUsageRequestDays;
}
