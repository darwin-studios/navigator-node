import type * as Darwin from '../index.js';

export type AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifact =
  | Darwin.AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifact.Research
  | Darwin.AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifact.Extraction
  | Darwin.AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifact.Directory
  | Darwin.AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifact.Studio
  | Darwin.AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifact.Storyboard
  | Darwin.AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifact.Editorial
  | Darwin.AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifact.Comparison
  | Darwin.AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifact.Planner
  | Darwin.AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifact.Estimate;
export declare namespace AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifact {
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
    fields: AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactExtraction.Fields.Item[];
  }
  namespace AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactExtraction {
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
    criteria: AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactDirectory.Criteria.Item[];
    columns: string[];
    questions: string[];
  }
  namespace AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactDirectory {
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
    palette: AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactStudio.Palette.Item[];
    imageBrief: string;
  }
  namespace AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactStudio {
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
    aspectRatio: AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactStoryboard.AspectRatio;
    scenes: AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactStoryboard.Scenes.Item[];
  }
  namespace AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactStoryboard {
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
    options: AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactComparison.Options.Item[];
    /** State whether these are proposed approaches, supplied facts, or verified evidence. Never invent product features or scores. */
    basis: string;
  }
  namespace AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactComparison {
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
    steps: AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactPlanner.Steps.Item[];
  }
  namespace AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactPlanner {
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
    currency: AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactEstimate.Currency;
    items: AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactEstimate.Items.Item[];
    contingencyPercent: number;
    /** Explicitly identify any assumed prices, quantities and currency. These are editable estimates, not provider quotes. */
    assumptions: string;
  }
  namespace AssistV3ResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifactEstimate {
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
