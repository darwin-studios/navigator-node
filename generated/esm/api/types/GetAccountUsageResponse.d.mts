export interface GetAccountUsageResponse {
    scope: GetAccountUsageResponse.Scope;
    window: GetAccountUsageResponse.Window;
    coverage: GetAccountUsageResponse.Coverage;
    metric: GetAccountUsageResponse.Metric;
    groups: GetAccountUsageResponse.Groups.Item[];
}
export declare namespace GetAccountUsageResponse {
    interface Scope {
        type: Scope.Type;
        id: string;
    }
    namespace Scope {
        const Type: {
            readonly Personal: "personal";
            readonly Business: "business";
            readonly Application: "application";
        };
        type Type = (typeof Type)[keyof typeof Type];
    }
    interface Window {
        from: string;
        to: string;
        days: number;
        timezone: Window.Timezone;
    }
    namespace Window {
        const Timezone: {
            readonly Utc: "UTC";
        };
        type Timezone = (typeof Timezone)[keyof typeof Timezone];
    }
    interface Coverage {
        status: Coverage.Status;
        sources: string[];
        limitations: string[];
    }
    namespace Coverage {
        const Status: {
            readonly Available: "available";
            readonly Partial: "partial";
            readonly Unavailable: "unavailable";
        };
        type Status = (typeof Status)[keyof typeof Status];
    }
    const Metric: {
        readonly ObservedTaskOutcomes: "observed_task_outcomes";
        readonly ApiRequestSuccess: "api_request_success";
        readonly Unavailable: "unavailable";
    };
    type Metric = (typeof Metric)[keyof typeof Metric];
    type Groups = Groups.Item[];
    namespace Groups {
        interface Item {
            targetAiId: string | null;
            category: string;
            attempts: number;
            positive: number;
            partial: number;
            negative: number;
            unknown: number;
            observedSuccessRate: number | null;
            averageLatencyMs: number | null;
        }
    }
}
