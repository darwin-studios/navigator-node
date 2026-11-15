import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         query: "query"
 *     }
 */
export interface AdaptiveSearchRequest {
    query: string;
    /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
    audience?: AdaptiveSearchRequest.Audience;
    /** Preview: request current provider replies. Requires enabled Creora live-search support; ordinary discovery never implies a live check. */
    liveSearch?: boolean;
    previousResponseId?: string;
    /** Copy a public Search conversation into a new owned search before refining it. */
    forkSearchId?: string;
    agentCount?: AdaptiveSearchRequest.AgentCount;
    maxResults?: number;
    /** Maximum total task budget in US dollars, with at most two decimal places. This guides Search matching; it is not an API usage limit, provider price guarantee, or permission to spend. */
    budgetUsd?: number;
    context?: Darwin.AdaptiveSearchRequestContextItem[];
}
export declare namespace AdaptiveSearchRequest {
    /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
    const Audience: {
        readonly Human: "human";
        readonly Agent: "agent";
    };
    type Audience = (typeof Audience)[keyof typeof Audience];
    type AgentCount = "auto" | number;
}
