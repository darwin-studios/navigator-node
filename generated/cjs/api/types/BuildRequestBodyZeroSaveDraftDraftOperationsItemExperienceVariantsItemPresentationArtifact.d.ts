import type * as Darwin from '../index.js';

export type BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifact =
  | Darwin.BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifact.Research
  | Darwin.BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifact.Extraction
  | Darwin.BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifact.Directory
  | Darwin.BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifact.Studio
  | Darwin.BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifact.Storyboard
  | Darwin.BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifact.Editorial
  | Darwin.BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifact.Comparison
  | Darwin.BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifact.Planner
  | Darwin.BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifact.Estimate;
export declare namespace BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifact {
  interface Research {
    kind: 'research';
    /** One focused research question in 10-18 words. */
    question: string;
    focus: string[];
    sourceTypes: string[];
  }
  interface Extraction {
    kind: 'extraction';
    url: string | null;
    purpose: string;
    fields: BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactExtraction.Fields.Item[];
  }
  namespace BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactExtraction {
    type Fields = Fields.Item[];
    namespace Fields {
      interface Item {
        name: string;
        description: string;
      }
    }
  }
  interface Directory {
    kind: 'directory';
    /** The target prospect audience, e.g. independent fitness studios. Never the role of the person using this interface. */
    audience: string;
    criteria: BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactDirectory.Criteria.Item[];
    columns: string[];
    questions: string[];
  }
  namespace BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactDirectory {
    type Criteria = Criteria.Item[];
    namespace Criteria {
      interface Item {
        label: string;
        value: string;
      }
    }
  }
  interface Studio {
    kind: 'studio';
    headline: string;
    direction: string;
    palette: BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactStudio.Palette.Item[];
    imageBrief: string;
  }
  namespace BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactStudio {
    type Palette = Palette.Item[];
    namespace Palette {
      interface Item {
        name: string;
        color: string;
      }
    }
  }
  interface Storyboard {
    kind: 'storyboard';
    durationSeconds: number;
    aspectRatio: BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactStoryboard.AspectRatio;
    scenes: BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactStoryboard.Scenes.Item[];
  }
  namespace BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactStoryboard {
    const AspectRatio: {
      readonly Nine16: '9:16';
      readonly Sixteen9: '16:9';
      readonly One1: '1:1';
      readonly Four5: '4:5';
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
    kind: 'editorial';
    script: string;
    tone: string;
    targetSeconds: number | null;
  }
  interface Comparison {
    kind: 'comparison';
    /** A concise decision question in 4-10 words, not a restatement of the entire brief. */
    question: string;
    criteria: string[];
    options: BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactComparison.Options.Item[];
    /** State whether these are proposed approaches, supplied facts, or verified evidence. Never invent product features or scores. */
    basis: string;
  }
  namespace BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactComparison {
    type Options = Options.Item[];
    namespace Options {
      interface Item {
        name: string;
        values: string[];
      }
    }
  }
  interface Planner {
    kind: 'planner';
    title: string;
    steps: BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactPlanner.Steps.Item[];
  }
  namespace BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactPlanner {
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
    kind: 'estimate';
    title: string;
    currency: BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactEstimate.Currency;
    items: BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactEstimate.Items.Item[];
    contingencyPercent: number;
    /** Explicitly identify any assumed prices, quantities and currency. These are editable estimates, not provider quotes. */
    assumptions: string;
  }
  namespace BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifactEstimate {
    const Currency: {
      readonly Usd: 'USD';
      readonly Eur: 'EUR';
      readonly Gbp: 'GBP';
      readonly Cad: 'CAD';
      readonly Aud: 'AUD';
      readonly Inr: 'INR';
      readonly Jpy: 'JPY';
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
