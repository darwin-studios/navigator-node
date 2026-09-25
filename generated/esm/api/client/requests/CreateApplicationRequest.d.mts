/**
 * @example
 *     {
 *         name: "name"
 *     }
 */
export interface CreateApplicationRequest {
    name: string;
    description?: string;
    websiteUrl?: string;
    redirectUris?: string[];
    metadata?: Record<string, unknown>;
}
