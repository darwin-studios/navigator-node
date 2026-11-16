import type * as Darwin from "../index.mjs";
export type BuildRequestBodyZeroSaveDraftDraftOperationsItemPricing = Darwin.BuildRequestBodyZeroSaveDraftDraftOperationsItemPricing.Free | Darwin.BuildRequestBodyZeroSaveDraftDraftOperationsItemPricing.Fixed;
export declare namespace BuildRequestBodyZeroSaveDraftDraftOperationsItemPricing {
    interface Free {
        kind: "free";
    }
    interface Fixed {
        kind: "fixed";
        amountCents: number;
        currency: BuildRequestBodyZeroSaveDraftDraftOperationsItemPricingFixed.Currency;
    }
    namespace BuildRequestBodyZeroSaveDraftDraftOperationsItemPricingFixed {
        const Currency: {
            readonly Usd: "USD";
        };
        type Currency = (typeof Currency)[keyof typeof Currency];
    }
}
