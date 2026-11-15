import type * as Darwin from "../index.mjs";
export type AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact = Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact.Research | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact.Extraction | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact.Directory | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact.Studio | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact.Storyboard | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact.Editorial | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact.Comparison | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact.Planner | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact.Estimate;
export declare namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact {
    interface Research {
        kind: "research";
        /** One focused research question in 10-18 words. */
        question: string;
        focus: string[];
        sourceTypes: string[];
    }
    interface Extraction {
        kind: "extraction";
        url: string | null;
        purpose: string;
        fields: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactExtraction.Fields.Item[];
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactExtraction {
        type Fields = Fields.Item[];
        namespace Fields {
            interface Item {
                name: string;
                description: string;
            }
        }
    }
    interface Directory {
        kind: "directory";
        /** The target prospect audience, e.g. independent fitness studios. Never the role of the person using this interface. */
        audience: string;
        criteria: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactDirectory.Criteria.Item[];
        columns: string[];
        questions: string[];
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactDirectory {
        type Criteria = Criteria.Item[];
        namespace Criteria {
            interface Item {
                label: string;
                value: string;
            }
        }
    }
    interface Studio {
        kind: "studio";
        headline: string;
        direction: string;
        palette: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactStudio.Palette.Item[];
        imageBrief: string;
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactStudio {
        type Palette = Palette.Item[];
        namespace Palette {
            interface Item {
                name: string;
                color: string;
            }
        }
    }
    interface Storyboard {
        kind: "storyboard";
        durationSeconds: number;
        aspectRatio: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactStoryboard.AspectRatio;
        scenes: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactStoryboard.Scenes.Item[];
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactStoryboard {
        const AspectRatio: {
            readonly Nine16: "9:16";
            readonly Sixteen9: "16:9";
            readonly One1: "1:1";
            readonly Four5: "4:5";
        };
        type AspectRatio = (typeof AspectRatio)[keyof typeof AspectRatio];
        type Scenes = Scenes.Item[];
        namespace Scenes {
            interface Item {
                title: string;
                start: number;
                end: number;
                visual: string;
                caption: string;
            }
        }
    }
    interface Editorial {
        kind: "editorial";
        script: string;
        tone: string;
        targetSeconds: number | null;
    }
    interface Comparison {
        kind: "comparison";
        /** A concise decision question in 4-10 words, not a restatement of the entire brief. */
        question: string;
        criteria: string[];
        options: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactComparison.Options.Item[];
        /** State whether these are proposed approaches, supplied facts, or verified evidence. Never invent product features or scores. */
        basis: string;
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactComparison {
        type Options = Options.Item[];
        namespace Options {
            interface Item {
                name: string;
                values: string[];
            }
        }
    }
    interface Planner {
        kind: "planner";
        title: string;
        steps: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactPlanner.Steps.Item[];
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactPlanner {
        type Steps = Steps.Item[];
        namespace Steps {
            interface Item {
                title: string;
                detail: string;
                durationMinutes: number | null;
            }
        }
    }
    interface Estimate {
        kind: "estimate";
        title: string;
        currency: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactEstimate.Currency;
        items: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactEstimate.Items.Item[];
        contingencyPercent: number;
        /** Explicitly identify any assumed prices, quantities and currency. These are editable estimates, not provider quotes. */
        assumptions: string;
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifactEstimate {
        const Currency: {
            readonly Usd: "USD";
            readonly Eur: "EUR";
            readonly Gbp: "GBP";
            readonly Cad: "CAD";
            readonly Aud: "AUD";
            readonly Inr: "INR";
            readonly Jpy: "JPY";
        };
        type Currency = (typeof Currency)[keyof typeof Currency];
        type Items = Items.Item[];
        namespace Items {
            interface Item {
                /** Item name only. Never duplicate quantities, currency amounts or unit costs in this label; the user can edit those independently. */
                label: string;
                quantity: number;
                unitCost: number;
            }
        }
    }
}
