import type * as Darwin from "../index.mjs";
export type BuildRequestBodyThree = Darwin.BuildRequestBodyThree.ReleaseAgent | Darwin.BuildRequestBodyThree.ReleaseOperation | Darwin.BuildRequestBodyThree.Approve | Darwin.BuildRequestBodyThree.Analytics;
export declare namespace BuildRequestBodyThree {
    interface ReleaseAgent {
        action: "release_agent";
        agentId: string;
        expectedRevision: number;
    }
    interface ReleaseOperation {
        action: "release_operation";
        operationId: string;
        expectedRevision: number;
    }
    interface Approve {
        action: "approve";
        input: BuildRequestBodyThreeApprove.Input;
    }
    namespace BuildRequestBodyThreeApprove {
        interface Input {
            operationId: string;
            operationRevision: number;
            approvalId: string;
            requestId: string;
            expectedUpdatedAt: string;
            reviewToken: string;
            decision: Input.Decision;
        }
        namespace Input {
            const Decision: {
                readonly Allow: "allow";
                readonly Deny: "deny";
            };
            type Decision = (typeof Decision)[keyof typeof Decision];
        }
    }
    interface Analytics {
        action: "analytics";
        input: BuildRequestBodyThreeAnalytics.Input;
    }
    namespace BuildRequestBodyThreeAnalytics {
        interface Input {
            agentId: string;
            operationId?: string | undefined;
            from?: string | undefined;
            to?: string | undefined;
        }
    }
}
