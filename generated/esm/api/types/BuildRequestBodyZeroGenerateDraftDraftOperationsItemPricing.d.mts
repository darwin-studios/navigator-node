import type * as Darwin from "../index.mjs";
export type BuildRequestBodyZeroGenerateDraftDraftOperationsItemPricing = Darwin.BuildRequestBodyZeroGenerateDraftDraftOperationsItemPricing.Free | Darwin.BuildRequestBodyZeroGenerateDraftDraftOperationsItemPricing.Fixed;
export declare namespace BuildRequestBodyZeroGenerateDraftDraftOperationsItemPricing {
    interface Free {
        kind: "free";
    }
    interface Fixed {
        kind: "fixed";
        amountCents: number;
        currency: BuildRequestBodyZeroGenerateDraftDraftOperationsItemPricingFixed.Currency;
    }
    namespace BuildRequestBodyZeroGenerateDraftDraftOperationsItemPricingFixed {
        const Currency: {
            readonly Usd: "USD";
        };
        type Currency = (typeof Currency)[keyof typeof Currency];
    }
}
