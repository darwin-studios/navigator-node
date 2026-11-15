import type * as Darwin from "../index.mjs";
export type AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifact = Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifact.Research | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifact.Extraction | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifact.Directory | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifact.Studio | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifact.Storyboard | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifact.Editorial | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifact.Comparison | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifact.Planner | Darwin.AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifact.Estimate;
export declare namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifact {
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
        fields: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactExtraction.Fields.Item[];
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactExtraction {
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
        criteria: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactDirectory.Criteria.Item[];
        columns: string[];
        questions: string[];
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactDirectory {
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
        palette: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactStudio.Palette.Item[];
        imageBrief: string;
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactStudio {
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
        aspectRatio: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactStoryboard.AspectRatio;
        scenes: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactStoryboard.Scenes.Item[];
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactStoryboard {
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
        options: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactComparison.Options.Item[];
        /** State whether these are proposed approaches, supplied facts, or verified evidence. Never invent product features or scores. */
        basis: string;
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactComparison {
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
        steps: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactPlanner.Steps.Item[];
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactPlanner {
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
        currency: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactEstimate.Currency;
        items: AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactEstimate.Items.Item[];
        contingencyPercent: number;
        /** Explicitly identify any assumed prices, quantities and currency. These are editable estimates, not provider quotes. */
        assumptions: string;
    }
    namespace AdaptiveSearchHistoryResponseResponsesItemDeliveryPresentationExperienceSurfacesItemGeneratedArtifactEstimate {
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
