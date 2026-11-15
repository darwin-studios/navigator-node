import type * as Darwin from '../index.js';

export type AssistV3ResponseConversationTurnsItemComposerGeneratedArtifact =
  | Darwin.AssistV3ResponseConversationTurnsItemComposerGeneratedArtifact.Research
  | Darwin.AssistV3ResponseConversationTurnsItemComposerGeneratedArtifact.Extraction
  | Darwin.AssistV3ResponseConversationTurnsItemComposerGeneratedArtifact.Directory
  | Darwin.AssistV3ResponseConversationTurnsItemComposerGeneratedArtifact.Studio
  | Darwin.AssistV3ResponseConversationTurnsItemComposerGeneratedArtifact.Storyboard
  | Darwin.AssistV3ResponseConversationTurnsItemComposerGeneratedArtifact.Editorial
  | Darwin.AssistV3ResponseConversationTurnsItemComposerGeneratedArtifact.Comparison
  | Darwin.AssistV3ResponseConversationTurnsItemComposerGeneratedArtifact.Planner
  | Darwin.AssistV3ResponseConversationTurnsItemComposerGeneratedArtifact.Estimate;
export declare namespace AssistV3ResponseConversationTurnsItemComposerGeneratedArtifact {
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
    fields: AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactExtraction.Fields.Item[];
  }
  namespace AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactExtraction {
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
    criteria: AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactDirectory.Criteria.Item[];
    columns: string[];
    questions: string[];
  }
  namespace AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactDirectory {
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
    palette: AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactStudio.Palette.Item[];
    imageBrief: string;
  }
  namespace AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactStudio {
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
    aspectRatio: AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactStoryboard.AspectRatio;
    scenes: AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactStoryboard.Scenes.Item[];
  }
  namespace AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactStoryboard {
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
    options: AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactComparison.Options.Item[];
    /** State whether these are proposed approaches, supplied facts, or verified evidence. Never invent product features or scores. */
    basis: string;
  }
  namespace AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactComparison {
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
    steps: AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactPlanner.Steps.Item[];
  }
  namespace AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactPlanner {
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
    currency: AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactEstimate.Currency;
    items: AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactEstimate.Items.Item[];
    contingencyPercent: number;
    /** Explicitly identify any assumed prices, quantities and currency. These are editable estimates, not provider quotes. */
    assumptions: string;
  }
  namespace AssistV3ResponseConversationTurnsItemComposerGeneratedArtifactEstimate {
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
