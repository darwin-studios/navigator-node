/**
 * @example
 *     {
 *         memory: "memory"
 *     }
 */
export interface ReplaceAccountMemoryRequest {
    /** Application-scoped user ID. Required with application credentials; never grants access to a Darwin user account. */
    userId?: string;
    /** Account agent memory. Requires active membership; updates require owner/admin. Mutually exclusive with userId. */
    aiId?: string;
    memory: string;
}
