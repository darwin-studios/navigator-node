/**
 * @example
 *     {
 *         threadId: "threadId",
 *         clientRequestId: "clientRequestId",
 *         turnId: "turnId",
 *         target: {
 *             agentId: "agentId"
 *         },
 *         message: "message"
 *     }
 */
export interface ThreadOperationStart {
    threadId: string;
    clientRequestId: string;
    turnId: string;
    target: ThreadOperationStart.Target;
    message: string;
}
export declare namespace ThreadOperationStart {
    interface Target {
        agentId: string;
        operationId?: string | undefined;
        operationRevision?: number | undefined;
        arguments?: Record<string, unknown> | undefined;
    }
}
