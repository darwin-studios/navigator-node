/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface SelectAccountAgentRequest {
    id: string;
    channel?: SelectAccountAgentRequest.Channel;
}
export declare namespace SelectAccountAgentRequest {
    const Channel: {
        readonly Web: "web";
        readonly Ios: "ios";
    };
    type Channel = (typeof Channel)[keyof typeof Channel];
}
