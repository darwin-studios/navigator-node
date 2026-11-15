import type * as Darwin from "../index.mjs";
export type AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact = Darwin.AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact.Research | Darwin.AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact.Extraction | Darwin.AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact.Directory | Darwin.AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact.Studio | Darwin.AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact.Storyboard | Darwin.AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact.Editorial | Darwin.AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact.Comparison | Darwin.AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact.Planner | Darwin.AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact.Estimate;
export declare namespace AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact {
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
        fields: AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactExtraction.Fields.Item[];
    }
    namespace AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactExtraction {
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
        criteria: AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactDirectory.Criteria.Item[];
        columns: string[];
        questions: string[];
    }
    namespace AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactDirectory {
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
        palette: AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactStudio.Palette.Item[];
        imageBrief: string;
    }
    namespace AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactStudio {
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
        aspectRatio: AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactStoryboard.AspectRatio;
        scenes: AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactStoryboard.Scenes.Item[];
    }
    namespace AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactStoryboard {
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
        options: AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactComparison.Options.Item[];
        /** State whether these are proposed approaches, supplied facts, or verified evidence. Never invent product features or scores. */
        basis: string;
    }
    namespace AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactComparison {
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
        steps: AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactPlanner.Steps.Item[];
    }
    namespace AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactPlanner {
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
        currency: AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactEstimate.Currency;
        items: AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactEstimate.Items.Item[];
        contingencyPercent: number;
        /** Explicitly identify any assumed prices, quantities and currency. These are editable estimates, not provider quotes. */
        assumptions: string;
    }
    namespace AssistV3ResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifactEstimate {
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
