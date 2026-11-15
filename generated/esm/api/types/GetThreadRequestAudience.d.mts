/** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
export declare const GetThreadRequestAudience: {
    readonly Human: "human";
    readonly Agent: "agent";
};
export type GetThreadRequestAudience = (typeof GetThreadRequestAudience)[keyof typeof GetThreadRequestAudience];
