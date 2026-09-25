/**
 * @example
 *     {
 *         actionId: "actionId",
 *         approvalId: "approvalId",
 *         decision: "approve",
 *         expectedRevision: "2024-01-15T09:30:00Z",
 *         reviewedPayloadDigest: "reviewedPayloadDigest",
 *         requestId: "requestId"
 *     }
 */
export interface ActApproveRequest {
    /** The Action identifier returned by Start action or List actions. */
    actionId: string;
    approvalId: string;
    decision: ActApproveRequest.Decision;
    expectedRevision: string;
    reviewedPayloadDigest: string;
    reason?: string;
    requestId: string;
}
export declare namespace ActApproveRequest {
    const Decision: {
        readonly Approve: "approve";
        readonly Reject: "reject";
        readonly RequestChanges: "request_changes";
    };
    type Decision = (typeof Decision)[keyof typeof Decision];
}
