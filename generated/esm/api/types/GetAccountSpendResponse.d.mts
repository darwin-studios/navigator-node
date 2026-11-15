export interface GetAccountSpendResponse {
    scope: GetAccountSpendResponse.Scope;
    window: GetAccountSpendResponse.Window;
    coverage: GetAccountSpendResponse.Coverage;
    groups: GetAccountSpendResponse.Groups.Item[];
    totals: GetAccountSpendResponse.Totals.Item[];
    credits: GetAccountSpendResponse.Credits;
}
export declare namespace GetAccountSpendResponse {
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
    type Groups = Groups.Item[];
    namespace Groups {
        interface Item {
            category: string;
            targetAiId: string | null;
            currency: string;
            entries: number;
            /** Exact decimal amount in currency major units; never combine currencies. */
            charged: string;
            /** Exact decimal amount in currency major units; never combine currencies. */
            refunded: string;
            /** Exact decimal amount in currency major units; never combine currencies. */
            net: string;
        }
    }
    type Totals = Totals.Item[];
    namespace Totals {
        interface Item {
            currency: string;
            /** Exact decimal amount in currency major units; never combine currencies. */
            charged: string;
            /** Exact decimal amount in currency major units; never combine currencies. */
            refunded: string;
            /** Exact decimal amount in currency major units; never combine currencies. */
            net: string;
        }
    }
    interface Credits {
        consumed: number;
        unit: Credits.Unit;
        available: boolean;
    }
    namespace Credits {
        const Unit: {
            readonly Credits: "credits";
        };
        type Unit = (typeof Unit)[keyof typeof Unit];
    }
}
