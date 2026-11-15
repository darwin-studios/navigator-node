/**
 * @example
 *     {
 *         sessionId: "sessionId",
 *         clientRequestId: "clientRequestId",
 *         turnId: "turnId",
 *         target: {
 *             agentId: "agentId"
 *         },
 *         message: "message"
 *     }
 */
export interface SessionOperationStart {
    sessionId: string;
    clientRequestId: string;
    turnId: string;
    target: SessionOperationStart.Target;
    message: string;
}
export declare namespace SessionOperationStart {
    interface Target {
        agentId: string;
        operationId?: string | undefined;
        operationRevision?: number | undefined;
        arguments?: Record<string, unknown> | undefined;
    }
}
