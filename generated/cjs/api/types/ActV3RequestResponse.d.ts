import type * as Darwin from '../index.js';

export interface ActV3RequestResponse {
  type: ActV3RequestResponse.Type;
  delivery?: ActV3RequestResponse.Delivery | undefined;
  composer?: ActV3RequestResponse.Composer | undefined;
  actRequestId: string;
  /** The one created thread. Omitted for historical failed or batch receipts. */
  threadId?: string | undefined;
  searchId: string | null;
  /** Act Request handoff status only. Completed means thread receipts were created; read each thread for action confirmation and provider result. */
  status: ActV3RequestResponse.Status;
  createdAt: string;
  threads: ActV3RequestResponse.Threads.Item[];
}
export declare namespace ActV3RequestResponse {
  const Type: {
    readonly Request: 'request';
  };
  type Type = (typeof Type)[keyof typeof Type];
  interface Delivery {
    version: Delivery.Version;
    /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
    audience: Delivery.Audience;
    status: Delivery.Status;
    markdown: string;
    ui?: Delivery.Ui | undefined;
    presentation?: Delivery.Presentation | undefined;
    runId?: string | undefined;
  }
  namespace Delivery {
    const Version: {
      readonly ComposerDeliveryV1: 'composer.delivery.v1';
    };
    type Version = (typeof Version)[keyof typeof Version];
    /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
    const Audience: {
      readonly Human: 'human';
      readonly Agent: 'agent';
    };
    type Audience = (typeof Audience)[keyof typeof Audience];
    const Status: {
      readonly Composed: 'composed';
      readonly Fallback: 'fallback';
    };
    type Status = (typeof Status)[keyof typeof Status];
    interface Ui {
      version: Ui.Version;
      components: Ui.Components.Item[];
      incomplete: string[];
    }
    namespace Ui {
      const Version: {
        readonly DarwinuiAgentV1: 'darwinui-agent-v1';
      };
      type Version = (typeof Version)[keyof typeof Version];
      type Components = Components.Item[];
      namespace Components {
        interface Item {
          id: string;
          kind: string;
          title: string;
          data?: unknown | undefined;
          text?: string | undefined;
          actions: Item.Actions.Item[];
        }
        namespace Item {
          type Actions = Actions.Item[];
          namespace Actions {
            interface Item {
              label: string;
              available: boolean;
              requiredInputs: string[];
              approval: string;
              binding?: Item.Binding | undefined;
              reason?: string | undefined;
            }
            namespace Item {
              interface Binding {
                name: string;
                arguments: Record<string, unknown>;
              }
            }
          }
        }
      }
    }
    interface Presentation {
      version: Presentation.Version;
      selection?: Presentation.Selection | undefined;
      decision?: Presentation.Decision | undefined;
      experience?: Presentation.Experience | undefined;
      runId: string;
      revision: number;
      mode: Presentation.Mode;
      request: Presentation.Request;
      generated: Presentation.Generated;
      facts: Presentation.Facts;
      markdown: string;
      artifactId: string | null;
      policy: Presentation.Policy;
      diagnostics: Presentation.Diagnostics;
      createdAt: string;
    }
    namespace Presentation {
      const Version: {
        readonly ComposerV1: 'composer.v1';
        readonly ComposerV2: 'composer.v2';
      };
      type Version = (typeof Version)[keyof typeof Version];
      interface Selection {
        version: Selection.Version;
        catalogRevision: number;
        catalogHash: string;
        operationId: string | null;
        stateId: string;
        variantId: string;
        model: string;
        confidence: number;
        fallback: string | null;
        latencyMs: number;
        inputTokens: number;
      }
      namespace Selection {
        const Version: {
          readonly ComposerSelectionV1: 'composer-selection.v1';
        };
        type Version = (typeof Version)[keyof typeof Version];
      }
      interface Decision {
        id: string;
        model: string;
        questionVersion: string;
        catalogVersion: string;
        mode: Decision.Mode;
        eligible: Decision.Eligible.Item[];
        selected: Decision.Selected;
        audio?: Decision.Audio | undefined;
        audioSelection?: Decision.AudioSelection | undefined;
        supporting: Decision.Supporting.Item[];
        override: Decision.Override | null;
        confidence: number;
        probabilities: Decision.Probabilities.Item[];
        transition: Decision.Transition;
        fallback: string | null;
        latencyMs: number;
        inputTokens: number;
        appliedPolicies: Decision.AppliedPolicies.Item[];
      }
      namespace Decision {
        const Mode: {
          readonly Shadow: 'shadow';
          readonly Active: 'active';
        };
        type Mode = (typeof Mode)[keyof typeof Mode];
        type Eligible = Eligible.Item[];
        namespace Eligible {
          const Item: {
            readonly Markdown: 'markdown';
            readonly Simple: 'simple';
            readonly React: 'react';
            readonly World: 'world';
            readonly Video: 'video';
            readonly Audio: 'audio';
            readonly Game: 'game';
            readonly Image: 'image';
            readonly Model3D: 'model3d';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
        const Selected: {
          readonly Markdown: 'markdown';
          readonly Simple: 'simple';
          readonly React: 'react';
          readonly World: 'world';
          readonly Video: 'video';
          readonly Audio: 'audio';
          readonly Game: 'game';
          readonly Image: 'image';
          readonly Model3D: 'model3d';
        };
        type Selected = (typeof Selected)[keyof typeof Selected];
        interface Audio {
          kind: Audio.Kind;
          voice: Audio.Voice;
          speed: number;
        }
        namespace Audio {
          const Kind: {
            readonly Speech: 'speech';
            readonly Music: 'music';
          };
          type Kind = (typeof Kind)[keyof typeof Kind];
          const Voice: {
            readonly Rachel: 'Rachel';
            readonly Aria: 'Aria';
          };
          type Voice = (typeof Voice)[keyof typeof Voice];
        }
        interface AudioSelection {
          model: string;
          questionVersion: string;
          latencyMs: number;
          inputTokens: number;
          answers: AudioSelection.Answers.Item[];
        }
        namespace AudioSelection {
          type Answers = Answers.Item[];
          namespace Answers {
            interface Item {
              name: string;
              choice: string;
              confidence: number;
              probabilities?: Item.Probabilities.Item[] | undefined;
            }
            namespace Item {
              type Probabilities = Probabilities.Item[];
              namespace Probabilities {
                interface Item {
                  value: string;
                  probability: number;
                }
              }
            }
          }
        }
        type Supporting = Supporting.Item[];
        namespace Supporting {
          const Item: {
            readonly Markdown: 'markdown';
            readonly Simple: 'simple';
            readonly React: 'react';
            readonly World: 'world';
            readonly Video: 'video';
            readonly Audio: 'audio';
            readonly Game: 'game';
            readonly Image: 'image';
            readonly Model3D: 'model3d';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
        const Override: {
          readonly Markdown: 'markdown';
          readonly Simple: 'simple';
          readonly React: 'react';
          readonly World: 'world';
          readonly Video: 'video';
          readonly Audio: 'audio';
          readonly Game: 'game';
          readonly Image: 'image';
          readonly Model3D: 'model3d';
        };
        type Override = (typeof Override)[keyof typeof Override];
        type Probabilities = Probabilities.Item[];
        namespace Probabilities {
          interface Item {
            value: Item.Value;
            probability: number;
          }
          namespace Item {
            const Value: {
              readonly Markdown: 'markdown';
              readonly Simple: 'simple';
              readonly React: 'react';
              readonly World: 'world';
              readonly Video: 'video';
              readonly Audio: 'audio';
              readonly Game: 'game';
              readonly Image: 'image';
              readonly Model3D: 'model3d';
            };
            type Value = (typeof Value)[keyof typeof Value];
          }
        }
        const Transition: {
          readonly Retain: 'retain';
          readonly Update: 'update';
          readonly Replace: 'replace';
        };
        type Transition = (typeof Transition)[keyof typeof Transition];
        type AppliedPolicies = AppliedPolicies.Item[];
        namespace AppliedPolicies {
          interface Item {
            id: string;
            version: number;
            scope: string;
            probability: number;
          }
        }
      }
      interface Experience {
        decisionId: string;
        surfaces: Experience.Surfaces.Item[];
      }
      namespace Experience {
        type Surfaces = Surfaces.Item[];
        namespace Surfaces {
          interface Item {
            id: string;
            capability: Item.Capability;
            role: Item.Role;
            status: Item.Status;
            artifactId: string | null;
            sessionId: string | null;
            assetJobId?: string | undefined;
            generated?: Item.Generated | undefined;
            markdown?: string | undefined;
            failure?: (string | null) | undefined;
            actionReferences: string[];
            evidenceReferences: string[];
          }
          namespace Item {
            const Capability: {
              readonly Markdown: 'markdown';
              readonly Simple: 'simple';
              readonly React: 'react';
              readonly World: 'world';
              readonly Video: 'video';
              readonly Audio: 'audio';
              readonly Game: 'game';
              readonly Image: 'image';
              readonly Model3D: 'model3d';
            };
            type Capability = (typeof Capability)[keyof typeof Capability];
            const Role: {
              readonly Primary: 'primary';
              readonly Supporting: 'supporting';
              readonly Fallback: 'fallback';
            };
            type Role = (typeof Role)[keyof typeof Role];
            const Status: {
              readonly Ready: 'ready';
              readonly Pending: 'pending';
              readonly Failed: 'failed';
              readonly Unavailable: 'unavailable';
            };
            type Status = (typeof Status)[keyof typeof Status];
            interface Generated {
              title: string;
              summary: string;
              layout: Generated.Layout;
              representation: Generated.Representation;
              artifact?:
                | (Darwin.ActV3RequestResponseDeliveryPresentationExperienceSurfacesItemGeneratedArtifact | null)
                | undefined;
              journey?: (Generated.Journey | null) | undefined;
              design?: Generated.Design | undefined;
              runtimeRegions?: Generated.RuntimeRegions.Item[] | undefined;
              sections: Generated.Sections.Item[];
              next: Generated.Next.Item[];
              reactSource: string | null;
              mediaPrompt: string | null;
            }
            namespace Generated {
              const Layout: {
                readonly Stack: 'stack';
                readonly Columns: 'columns';
              };
              type Layout = (typeof Layout)[keyof typeof Layout];
              const Representation: {
                readonly Components: 'components';
                readonly React: 'react';
                readonly Media: 'media';
                readonly Agent: 'agent';
              };
              type Representation = (typeof Representation)[keyof typeof Representation];
              interface Journey {
                stage: Journey.Stage;
                instruction: string;
                action: Journey.Action | null;
              }
              namespace Journey {
                const Stage: {
                  readonly Input: 'input';
                  readonly Review: 'review';
                  readonly Ready: 'ready';
                  readonly Complete: 'complete';
                };
                type Stage = (typeof Stage)[keyof typeof Stage];
                interface Action {
                  kind: Action.Kind;
                  label: string;
                  /** A concrete next-step instruction in plain language. Never an opaque command token such as confirm_criteria. */
                  intent: string;
                  operationId: string | null;
                  argumentsJson: string | null;
                }
                namespace Action {
                  const Kind: {
                    readonly Continue: 'continue';
                    readonly Execute: 'execute';
                    readonly Copy: 'copy';
                  };
                  type Kind = (typeof Kind)[keyof typeof Kind];
                }
              }
              interface Design {
                character: Design.Character;
                density: Design.Density;
              }
              namespace Design {
                const Character: {
                  readonly Editorial: 'editorial';
                  readonly Research: 'research';
                  readonly Extraction: 'extraction';
                  readonly Directory: 'directory';
                  readonly Storyboard: 'storyboard';
                  readonly Studio: 'studio';
                  readonly Comparison: 'comparison';
                  readonly Planner: 'planner';
                  readonly Estimate: 'estimate';
                  readonly Utility: 'utility';
                };
                type Character = (typeof Character)[keyof typeof Character];
                const Density: {
                  readonly Relaxed: 'relaxed';
                  readonly Compact: 'compact';
                };
                type Density = (typeof Density)[keyof typeof Density];
              }
              type RuntimeRegions = RuntimeRegions.Item[];
              namespace RuntimeRegions {
                interface Item {
                  id: string;
                  sectionId: string;
                  libraryDigest: string;
                  status: Item.Status;
                  artifactId: string | null;
                  tree: Item.Tree | null;
                  inputFields: string[];
                  failure: string | null;
                  model?: string | undefined;
                  inputTokens?: number | undefined;
                  outputTokens?: number | undefined;
                }
                namespace Item {
                  const Status: {
                    readonly Generated: 'generated';
                    readonly Ready: 'ready';
                    readonly Unavailable: 'unavailable';
                  };
                  type Status = (typeof Status)[keyof typeof Status];
                  interface Tree {
                    nodes: unknown[];
                  }
                }
              }
              type Sections = Sections.Item[];
              namespace Sections {
                interface Item {
                  id: string;
                  kind: Item.Kind;
                  title: string;
                  text: string;
                  items: string[];
                  operationId: string | null;
                }
                namespace Item {
                  const Kind: {
                    readonly Message: 'message';
                    readonly List: 'list';
                    readonly Fields: 'fields';
                    readonly Operation: 'operation';
                    readonly Progress: 'progress';
                    readonly Results: 'results';
                    readonly Notice: 'notice';
                  };
                  type Kind = (typeof Kind)[keyof typeof Kind];
                }
              }
              type Next = Next.Item[];
              namespace Next {
                interface Item {
                  label: string;
                  intent: string;
                  confidence: number;
                }
              }
            }
          }
        }
      }
      const Mode: {
        readonly Live: 'live';
        readonly Replay: 'replay';
        readonly Simulation: 'simulation';
      };
      type Mode = (typeof Mode)[keyof typeof Mode];
      interface Request {
        clientRequestId: string;
        agentId: string;
        message: string;
        interaction?: Request.Interaction | undefined;
        operationId?: string | undefined;
        authoring?: Request.Authoring | undefined;
        audio?: Request.Audio | undefined;
        presentationOverride?: Request.PresentationOverride | undefined;
        threadId?: string | undefined;
        threadKind: Request.ThreadKind;
        turnId?: string | undefined;
        previousRunId?: string | undefined;
        expectedRevision?: number | undefined;
        mode: Request.Mode;
        host: Request.Host;
      }
      namespace Request {
        interface Interaction {
          type: Interaction.Type;
          modality?: Interaction.Modality | undefined;
          fields: Record<string, string>;
        }
        namespace Interaction {
          const Type: {
            readonly Edit: 'edit';
            readonly Continue: 'continue';
          };
          type Type = (typeof Type)[keyof typeof Type];
          const Modality: {
            readonly Text: 'text';
            readonly Voice: 'voice';
            readonly Image: 'image';
            readonly Audio: 'audio';
            readonly Video: 'video';
            readonly File: 'file';
          };
          type Modality = (typeof Modality)[keyof typeof Modality];
        }
        interface Authoring {
          draftId: string;
          revision: number;
        }
        interface Audio {
          kind?: Audio.Kind | undefined;
          voice?: Audio.Voice | undefined;
          speed?: number | undefined;
        }
        namespace Audio {
          const Kind: {
            readonly Speech: 'speech';
            readonly Music: 'music';
          };
          type Kind = (typeof Kind)[keyof typeof Kind];
          const Voice: {
            readonly Rachel: 'Rachel';
            readonly Aria: 'Aria';
          };
          type Voice = (typeof Voice)[keyof typeof Voice];
        }
        const PresentationOverride: {
          readonly Markdown: 'markdown';
          readonly Simple: 'simple';
          readonly React: 'react';
          readonly World: 'world';
          readonly Video: 'video';
          readonly Audio: 'audio';
          readonly Game: 'game';
          readonly Image: 'image';
          readonly Model3D: 'model3d';
        };
        type PresentationOverride = (typeof PresentationOverride)[keyof typeof PresentationOverride];
        const ThreadKind: {
          readonly Assist: 'assist';
          readonly Operation: 'operation';
        };
        type ThreadKind = (typeof ThreadKind)[keyof typeof ThreadKind];
        const Mode: {
          readonly Live: 'live';
          readonly Replay: 'replay';
          readonly Simulation: 'simulation';
        };
        type Mode = (typeof Mode)[keyof typeof Mode];
        interface Host {
          /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
          audience: Host.Audience;
          capabilities: Host.Capabilities.Item[];
          viewport: Host.Viewport;
          theme: Host.Theme;
        }
        namespace Host {
          /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
          const Audience: {
            readonly Human: 'human';
            readonly Agent: 'agent';
          };
          type Audience = (typeof Audience)[keyof typeof Audience];
          type Capabilities = Capabilities.Item[];
          namespace Capabilities {
            const Item: {
              readonly Components: 'components';
              readonly RuntimeComponents: 'runtime_components';
              readonly React: 'react';
              readonly Media: 'media';
              readonly Markdown: 'markdown';
              readonly Structured: 'structured';
            };
            type Item = (typeof Item)[keyof typeof Item];
          }
          const Viewport: {
            readonly Mobile: 'mobile';
            readonly Desktop: 'desktop';
          };
          type Viewport = (typeof Viewport)[keyof typeof Viewport];
          const Theme: {
            readonly Light: 'light';
            readonly Dark: 'dark';
          };
          type Theme = (typeof Theme)[keyof typeof Theme];
        }
      }
      interface Generated {
        title: string;
        summary: string;
        layout: Generated.Layout;
        representation: Generated.Representation;
        artifact?: (Darwin.ActV3RequestResponseDeliveryPresentationGeneratedArtifact | null) | undefined;
        journey?: (Generated.Journey | null) | undefined;
        design?: Generated.Design | undefined;
        runtimeRegions?: Generated.RuntimeRegions.Item[] | undefined;
        sections: Generated.Sections.Item[];
        next: Generated.Next.Item[];
        reactSource: string | null;
        mediaPrompt: string | null;
      }
      namespace Generated {
        const Layout: {
          readonly Stack: 'stack';
          readonly Columns: 'columns';
        };
        type Layout = (typeof Layout)[keyof typeof Layout];
        const Representation: {
          readonly Components: 'components';
          readonly React: 'react';
          readonly Media: 'media';
          readonly Agent: 'agent';
        };
        type Representation = (typeof Representation)[keyof typeof Representation];
        interface Journey {
          stage: Journey.Stage;
          instruction: string;
          action: Journey.Action | null;
        }
        namespace Journey {
          const Stage: {
            readonly Input: 'input';
            readonly Review: 'review';
            readonly Ready: 'ready';
            readonly Complete: 'complete';
          };
          type Stage = (typeof Stage)[keyof typeof Stage];
          interface Action {
            kind: Action.Kind;
            label: string;
            /** A concrete next-step instruction in plain language. Never an opaque command token such as confirm_criteria. */
            intent: string;
            operationId: string | null;
            argumentsJson: string | null;
          }
          namespace Action {
            const Kind: {
              readonly Continue: 'continue';
              readonly Execute: 'execute';
              readonly Copy: 'copy';
            };
            type Kind = (typeof Kind)[keyof typeof Kind];
          }
        }
        interface Design {
          character: Design.Character;
          density: Design.Density;
        }
        namespace Design {
          const Character: {
            readonly Editorial: 'editorial';
            readonly Research: 'research';
            readonly Extraction: 'extraction';
            readonly Directory: 'directory';
            readonly Storyboard: 'storyboard';
            readonly Studio: 'studio';
            readonly Comparison: 'comparison';
            readonly Planner: 'planner';
            readonly Estimate: 'estimate';
            readonly Utility: 'utility';
          };
          type Character = (typeof Character)[keyof typeof Character];
          const Density: {
            readonly Relaxed: 'relaxed';
            readonly Compact: 'compact';
          };
          type Density = (typeof Density)[keyof typeof Density];
        }
        type RuntimeRegions = RuntimeRegions.Item[];
        namespace RuntimeRegions {
          interface Item {
            id: string;
            sectionId: string;
            libraryDigest: string;
            status: Item.Status;
            artifactId: string | null;
            tree: Item.Tree | null;
            inputFields: string[];
            failure: string | null;
            model?: string | undefined;
            inputTokens?: number | undefined;
            outputTokens?: number | undefined;
          }
          namespace Item {
            const Status: {
              readonly Generated: 'generated';
              readonly Ready: 'ready';
              readonly Unavailable: 'unavailable';
            };
            type Status = (typeof Status)[keyof typeof Status];
            interface Tree {
              nodes: unknown[];
            }
          }
        }
        type Sections = Sections.Item[];
        namespace Sections {
          interface Item {
            id: string;
            kind: Item.Kind;
            title: string;
            text: string;
            items: string[];
            operationId: string | null;
          }
          namespace Item {
            const Kind: {
              readonly Message: 'message';
              readonly List: 'list';
              readonly Fields: 'fields';
              readonly Operation: 'operation';
              readonly Progress: 'progress';
              readonly Results: 'results';
              readonly Notice: 'notice';
            };
            type Kind = (typeof Kind)[keyof typeof Kind];
          }
        }
        type Next = Next.Item[];
        namespace Next {
          interface Item {
            label: string;
            intent: string;
            confidence: number;
          }
        }
      }
      interface Facts {
        agent: Facts.Agent;
        sessionContext?: Facts.SessionContext | undefined;
        operations: Facts.Operations.Item[];
        execution: Facts.Execution;
      }
      namespace Facts {
        interface Agent {
          id: string;
          name: string;
          description: string;
          brand?: Agent.Brand | undefined;
          loading?: Agent.Loading | undefined;
          appearance?: Agent.Appearance | undefined;
        }
        namespace Agent {
          interface Brand {
            primary: string;
            secondary: string;
            background: string;
            foreground: string;
            font: Brand.Font;
          }
          namespace Brand {
            const Font: {
              readonly System: 'system';
              readonly Serif: 'serif';
              readonly Mono: 'mono';
            };
            type Font = (typeof Font)[keyof typeof Font];
          }
          interface Loading {
            kind: Loading.Kind;
            asset?: string | undefined;
            poster?: string | undefined;
          }
          namespace Loading {
            const Kind: {
              readonly Darwin: 'darwin';
              readonly Pulse: 'pulse';
              readonly Media: 'media';
            };
            type Kind = (typeof Kind)[keyof typeof Kind];
          }
          interface Appearance {
            instructions: string;
            libraryName?: string | undefined;
            source?: Appearance.Source | undefined;
            library?: Appearance.Library | undefined;
            componentContracts: Appearance.ComponentContracts.Item[];
          }
          namespace Appearance {
            const Source: {
              readonly DarwinUi: 'darwin_ui';
              readonly Uploaded: 'uploaded';
              readonly Generated: 'generated';
            };
            type Source = (typeof Source)[keyof typeof Source];
            interface Library {
              schemaVersion: number;
              name: string;
              version: string;
              importName: string;
              entry: string;
              files: Record<string, string>;
              components: Library.Components.Item[];
            }
            namespace Library {
              type Components = Components.Item[];
              namespace Components {
                interface Item {
                  export: string;
                  description: string;
                  props: string;
                  example: string;
                  human?: Item.Human | undefined;
                  agent?: Item.Agent | undefined;
                }
                namespace Item {
                  interface Human {
                    description: string;
                    states: Human.States.Item[];
                  }
                  namespace Human {
                    type States = States.Item[];
                    namespace States {
                      const Item: {
                        readonly Input: 'input';
                        readonly Running: 'running';
                        readonly NeedsInput: 'needs_input';
                        readonly Approval: 'approval';
                        readonly Success: 'success';
                        readonly Empty: 'empty';
                        readonly Error: 'error';
                      };
                      type Item = (typeof Item)[keyof typeof Item];
                    }
                  }
                  interface Agent {
                    description: string;
                    outputSchema: Record<string, unknown>;
                    example: Record<string, unknown>;
                    instructions: string;
                  }
                }
              }
            }
            type ComponentContracts = ComponentContracts.Item[];
            namespace ComponentContracts {
              interface Item {
                name: string;
                description: string;
              }
            }
          }
        }
        interface SessionContext {
          goal: string;
          brief: string;
          messages: SessionContext.Messages.Item[];
        }
        namespace SessionContext {
          type Messages = Messages.Item[];
          namespace Messages {
            interface Item {
              role: Item.Role;
              text: string;
            }
            namespace Item {
              const Role: {
                readonly User: 'user';
                readonly Assistant: 'assistant';
              };
              type Role = (typeof Role)[keyof typeof Role];
            }
          }
        }
        type Operations = Operations.Item[];
        namespace Operations {
          interface Item {
            id: string;
            name: string;
            description: string;
            guidance?: Item.Guidance | undefined;
            experience?: Item.Experience | undefined;
            revision?: number | undefined;
            available: boolean;
            reason: string | null;
            fields: Item.Fields.Item[];
            inputSchema?: Record<string, unknown> | undefined;
          }
          namespace Item {
            interface Guidance {
              openingQuestion: string;
              primaryAction: string;
              context: string;
              afterInput: string;
              success: string;
              recovery: string;
            }
            interface Experience {
              version: number;
              revision: number;
              initialState: string;
              instructions: string;
              states: Experience.States.Item[];
              variants: Experience.Variants.Item[];
            }
            namespace Experience {
              type States = States.Item[];
              namespace States {
                interface Item {
                  id: string;
                  description: string;
                  instructions: string;
                  executionStatuses: Item.ExecutionStatuses.Item[];
                  transitions: string[];
                  variants: string[];
                }
                namespace Item {
                  type ExecutionStatuses = ExecutionStatuses.Item[];
                  namespace ExecutionStatuses {
                    const Item: {
                      readonly NotStarted: 'not_started';
                      readonly Queued: 'queued';
                      readonly Running: 'running';
                      readonly Waiting: 'waiting';
                      readonly Completed: 'completed';
                      readonly Failed: 'failed';
                      readonly Cancelled: 'cancelled';
                      readonly Unavailable: 'unavailable';
                    };
                    type Item = (typeof Item)[keyof typeof Item];
                  }
                }
              }
              type Variants = Variants.Item[];
              namespace Variants {
                interface Item {
                  id: string;
                  description: string;
                  instructions: string;
                  modalities: Item.Modalities.Item[];
                  presentation: Item.Presentation;
                  runtimeComponents?: Item.RuntimeComponents.Item[] | undefined;
                  argumentBindings?: Item.ArgumentBindings.Item[] | undefined;
                  bindings: Item.Bindings.Item[];
                }
                namespace Item {
                  type Modalities = Modalities.Item[];
                  namespace Modalities {
                    const Item: {
                      readonly Text: 'text';
                      readonly Voice: 'voice';
                      readonly Image: 'image';
                      readonly Audio: 'audio';
                      readonly Video: 'video';
                      readonly File: 'file';
                    };
                    type Item = (typeof Item)[keyof typeof Item];
                  }
                  interface Presentation {
                    title: string;
                    summary: string;
                    layout: Presentation.Layout;
                    representation: Presentation.Representation;
                    artifact?:
                      | (Darwin.ActV3RequestResponseDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact | null)
                      | undefined;
                    journey?: (Presentation.Journey | null) | undefined;
                    design?: Presentation.Design | undefined;
                    runtimeRegions?: Presentation.RuntimeRegions.Item[] | undefined;
                    sections: Presentation.Sections.Item[];
                    next: Presentation.Next.Item[];
                    reactSource: string | null;
                    mediaPrompt: string | null;
                  }
                  namespace Presentation {
                    const Layout: {
                      readonly Stack: 'stack';
                      readonly Columns: 'columns';
                    };
                    type Layout = (typeof Layout)[keyof typeof Layout];
                    const Representation: {
                      readonly Components: 'components';
                      readonly React: 'react';
                      readonly Media: 'media';
                      readonly Agent: 'agent';
                    };
                    type Representation = (typeof Representation)[keyof typeof Representation];
                    interface Journey {
                      stage: Journey.Stage;
                      instruction: string;
                      action: Journey.Action | null;
                    }
                    namespace Journey {
                      const Stage: {
                        readonly Input: 'input';
                        readonly Review: 'review';
                        readonly Ready: 'ready';
                        readonly Complete: 'complete';
                      };
                      type Stage = (typeof Stage)[keyof typeof Stage];
                      interface Action {
                        kind: Action.Kind;
                        label: string;
                        /** A concrete next-step instruction in plain language. Never an opaque command token such as confirm_criteria. */
                        intent: string;
                        operationId: string | null;
                        argumentsJson: string | null;
                      }
                      namespace Action {
                        const Kind: {
                          readonly Continue: 'continue';
                          readonly Execute: 'execute';
                          readonly Copy: 'copy';
                        };
                        type Kind = (typeof Kind)[keyof typeof Kind];
                      }
                    }
                    interface Design {
                      character: Design.Character;
                      density: Design.Density;
                    }
                    namespace Design {
                      const Character: {
                        readonly Editorial: 'editorial';
                        readonly Research: 'research';
                        readonly Extraction: 'extraction';
                        readonly Directory: 'directory';
                        readonly Storyboard: 'storyboard';
                        readonly Studio: 'studio';
                        readonly Comparison: 'comparison';
                        readonly Planner: 'planner';
                        readonly Estimate: 'estimate';
                        readonly Utility: 'utility';
                      };
                      type Character = (typeof Character)[keyof typeof Character];
                      const Density: {
                        readonly Relaxed: 'relaxed';
                        readonly Compact: 'compact';
                      };
                      type Density = (typeof Density)[keyof typeof Density];
                    }
                    type RuntimeRegions = RuntimeRegions.Item[];
                    namespace RuntimeRegions {
                      interface Item {
                        id: string;
                        sectionId: string;
                        libraryDigest: string;
                        status: Item.Status;
                        artifactId: string | null;
                        tree: Item.Tree | null;
                        inputFields: string[];
                        failure: string | null;
                        model?: string | undefined;
                        inputTokens?: number | undefined;
                        outputTokens?: number | undefined;
                      }
                      namespace Item {
                        const Status: {
                          readonly Generated: 'generated';
                          readonly Ready: 'ready';
                          readonly Unavailable: 'unavailable';
                        };
                        type Status = (typeof Status)[keyof typeof Status];
                        interface Tree {
                          nodes: unknown[];
                        }
                      }
                    }
                    type Sections = Sections.Item[];
                    namespace Sections {
                      interface Item {
                        id: string;
                        kind: Item.Kind;
                        title: string;
                        text: string;
                        items: string[];
                        operationId: string | null;
                      }
                      namespace Item {
                        const Kind: {
                          readonly Message: 'message';
                          readonly List: 'list';
                          readonly Fields: 'fields';
                          readonly Operation: 'operation';
                          readonly Progress: 'progress';
                          readonly Results: 'results';
                          readonly Notice: 'notice';
                        };
                        type Kind = (typeof Kind)[keyof typeof Kind];
                      }
                    }
                    type Next = Next.Item[];
                    namespace Next {
                      interface Item {
                        label: string;
                        intent: string;
                        confidence: number;
                      }
                    }
                  }
                  type RuntimeComponents = RuntimeComponents.Item[];
                  namespace RuntimeComponents {
                    interface Item {
                      id: string;
                      sectionId: string;
                      instructions: string;
                      components: string[];
                      inputFields: string[];
                    }
                  }
                  type ArgumentBindings = ArgumentBindings.Item[];
                  namespace ArgumentBindings {
                    interface Item {
                      field: string;
                      target: string;
                    }
                  }
                  type Bindings = Bindings.Item[];
                  namespace Bindings {
                    interface Item {
                      path: string[];
                      source: Item.Source;
                      field?: string | undefined;
                    }
                    namespace Item {
                      const Source: {
                        readonly Message: 'message';
                        readonly Field: 'field';
                      };
                      type Source = (typeof Source)[keyof typeof Source];
                    }
                  }
                }
              }
            }
            type Fields = Fields.Item[];
            namespace Fields {
              interface Item {
                name: string;
                label: string;
                type: Item.Type;
                required: boolean;
                primary?: boolean | undefined;
                encoding?: Item.Encoding | undefined;
                options?: string[] | undefined;
                multiple?: boolean | undefined;
                description?: string | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
              }
              namespace Item {
                const Type: {
                  readonly Text: 'text';
                  readonly Number: 'number';
                  readonly Select: 'select';
                };
                type Type = (typeof Type)[keyof typeof Type];
                const Encoding: {
                  readonly Json: 'json';
                };
                type Encoding = (typeof Encoding)[keyof typeof Encoding];
              }
            }
          }
        }
        interface Execution {
          threadId: string | null;
          turnId: string | null;
          status: Execution.Status;
          evidence: Execution.Evidence.Item[];
        }
        namespace Execution {
          const Status: {
            readonly NotStarted: 'not_started';
            readonly Queued: 'queued';
            readonly Running: 'running';
            readonly Waiting: 'waiting';
            readonly Completed: 'completed';
            readonly Failed: 'failed';
            readonly Cancelled: 'cancelled';
            readonly Unavailable: 'unavailable';
          };
          type Status = (typeof Status)[keyof typeof Status];
          type Evidence = Evidence.Item[];
          namespace Evidence {
            interface Item {
              id: string;
              text: string;
              verification: Item.Verification;
            }
            namespace Item {
              const Verification: {
                readonly ProviderReported: 'provider_reported';
                readonly CriteriaChecked: 'criteria_checked';
                readonly Observed: 'observed';
              };
              type Verification = (typeof Verification)[keyof typeof Verification];
            }
          }
        }
      }
      interface Policy {
        id: string;
        version: number;
        probability: number;
        applied?: Policy.Applied.Item[] | undefined;
      }
      namespace Policy {
        type Applied = Applied.Item[];
        namespace Applied {
          interface Item {
            id: string;
            version: number;
            scope: Item.Scope;
            probability: number;
          }
          namespace Item {
            const Scope: {
              readonly Global: 'global';
              readonly Agent: 'agent';
              readonly User: 'user';
            };
            type Scope = (typeof Scope)[keyof typeof Scope];
          }
        }
      }
      interface Diagnostics {
        model: string;
        generationMs: number;
        inputTokens: number;
        outputTokens: number;
        repairs: number;
        fallback: string | null;
      }
    }
  }
  interface Composer {
    version: Composer.Version;
    selection?: Composer.Selection | undefined;
    decision?: Composer.Decision | undefined;
    experience?: Composer.Experience | undefined;
    runId: string;
    revision: number;
    mode: Composer.Mode;
    request: Composer.Request;
    generated: Composer.Generated;
    facts: Composer.Facts;
    markdown: string;
    artifactId: string | null;
    policy: Composer.Policy;
    diagnostics: Composer.Diagnostics;
    createdAt: string;
  }
  namespace Composer {
    const Version: {
      readonly ComposerV1: 'composer.v1';
      readonly ComposerV2: 'composer.v2';
    };
    type Version = (typeof Version)[keyof typeof Version];
    interface Selection {
      version: Selection.Version;
      catalogRevision: number;
      catalogHash: string;
      operationId: string | null;
      stateId: string;
      variantId: string;
      model: string;
      confidence: number;
      fallback: string | null;
      latencyMs: number;
      inputTokens: number;
    }
    namespace Selection {
      const Version: {
        readonly ComposerSelectionV1: 'composer-selection.v1';
      };
      type Version = (typeof Version)[keyof typeof Version];
    }
    interface Decision {
      id: string;
      model: string;
      questionVersion: string;
      catalogVersion: string;
      mode: Decision.Mode;
      eligible: Decision.Eligible.Item[];
      selected: Decision.Selected;
      audio?: Decision.Audio | undefined;
      audioSelection?: Decision.AudioSelection | undefined;
      supporting: Decision.Supporting.Item[];
      override: Decision.Override | null;
      confidence: number;
      probabilities: Decision.Probabilities.Item[];
      transition: Decision.Transition;
      fallback: string | null;
      latencyMs: number;
      inputTokens: number;
      appliedPolicies: Decision.AppliedPolicies.Item[];
    }
    namespace Decision {
      const Mode: {
        readonly Shadow: 'shadow';
        readonly Active: 'active';
      };
      type Mode = (typeof Mode)[keyof typeof Mode];
      type Eligible = Eligible.Item[];
      namespace Eligible {
        const Item: {
          readonly Markdown: 'markdown';
          readonly Simple: 'simple';
          readonly React: 'react';
          readonly World: 'world';
          readonly Video: 'video';
          readonly Audio: 'audio';
          readonly Game: 'game';
          readonly Image: 'image';
          readonly Model3D: 'model3d';
        };
        type Item = (typeof Item)[keyof typeof Item];
      }
      const Selected: {
        readonly Markdown: 'markdown';
        readonly Simple: 'simple';
        readonly React: 'react';
        readonly World: 'world';
        readonly Video: 'video';
        readonly Audio: 'audio';
        readonly Game: 'game';
        readonly Image: 'image';
        readonly Model3D: 'model3d';
      };
      type Selected = (typeof Selected)[keyof typeof Selected];
      interface Audio {
        kind: Audio.Kind;
        voice: Audio.Voice;
        speed: number;
      }
      namespace Audio {
        const Kind: {
          readonly Speech: 'speech';
          readonly Music: 'music';
        };
        type Kind = (typeof Kind)[keyof typeof Kind];
        const Voice: {
          readonly Rachel: 'Rachel';
          readonly Aria: 'Aria';
        };
        type Voice = (typeof Voice)[keyof typeof Voice];
      }
      interface AudioSelection {
        model: string;
        questionVersion: string;
        latencyMs: number;
        inputTokens: number;
        answers: AudioSelection.Answers.Item[];
      }
      namespace AudioSelection {
        type Answers = Answers.Item[];
        namespace Answers {
          interface Item {
            name: string;
            choice: string;
            confidence: number;
            probabilities?: Item.Probabilities.Item[] | undefined;
          }
          namespace Item {
            type Probabilities = Probabilities.Item[];
            namespace Probabilities {
              interface Item {
                value: string;
                probability: number;
              }
            }
          }
        }
      }
      type Supporting = Supporting.Item[];
      namespace Supporting {
        const Item: {
          readonly Markdown: 'markdown';
          readonly Simple: 'simple';
          readonly React: 'react';
          readonly World: 'world';
          readonly Video: 'video';
          readonly Audio: 'audio';
          readonly Game: 'game';
          readonly Image: 'image';
          readonly Model3D: 'model3d';
        };
        type Item = (typeof Item)[keyof typeof Item];
      }
      const Override: {
        readonly Markdown: 'markdown';
        readonly Simple: 'simple';
        readonly React: 'react';
        readonly World: 'world';
        readonly Video: 'video';
        readonly Audio: 'audio';
        readonly Game: 'game';
        readonly Image: 'image';
        readonly Model3D: 'model3d';
      };
      type Override = (typeof Override)[keyof typeof Override];
      type Probabilities = Probabilities.Item[];
      namespace Probabilities {
        interface Item {
          value: Item.Value;
          probability: number;
        }
        namespace Item {
          const Value: {
            readonly Markdown: 'markdown';
            readonly Simple: 'simple';
            readonly React: 'react';
            readonly World: 'world';
            readonly Video: 'video';
            readonly Audio: 'audio';
            readonly Game: 'game';
            readonly Image: 'image';
            readonly Model3D: 'model3d';
          };
          type Value = (typeof Value)[keyof typeof Value];
        }
      }
      const Transition: {
        readonly Retain: 'retain';
        readonly Update: 'update';
        readonly Replace: 'replace';
      };
      type Transition = (typeof Transition)[keyof typeof Transition];
      type AppliedPolicies = AppliedPolicies.Item[];
      namespace AppliedPolicies {
        interface Item {
          id: string;
          version: number;
          scope: string;
          probability: number;
        }
      }
    }
    interface Experience {
      decisionId: string;
      surfaces: Experience.Surfaces.Item[];
    }
    namespace Experience {
      type Surfaces = Surfaces.Item[];
      namespace Surfaces {
        interface Item {
          id: string;
          capability: Item.Capability;
          role: Item.Role;
          status: Item.Status;
          artifactId: string | null;
          sessionId: string | null;
          assetJobId?: string | undefined;
          generated?: Item.Generated | undefined;
          markdown?: string | undefined;
          failure?: (string | null) | undefined;
          actionReferences: string[];
          evidenceReferences: string[];
        }
        namespace Item {
          const Capability: {
            readonly Markdown: 'markdown';
            readonly Simple: 'simple';
            readonly React: 'react';
            readonly World: 'world';
            readonly Video: 'video';
            readonly Audio: 'audio';
            readonly Game: 'game';
            readonly Image: 'image';
            readonly Model3D: 'model3d';
          };
          type Capability = (typeof Capability)[keyof typeof Capability];
          const Role: {
            readonly Primary: 'primary';
            readonly Supporting: 'supporting';
            readonly Fallback: 'fallback';
          };
          type Role = (typeof Role)[keyof typeof Role];
          const Status: {
            readonly Ready: 'ready';
            readonly Pending: 'pending';
            readonly Failed: 'failed';
            readonly Unavailable: 'unavailable';
          };
          type Status = (typeof Status)[keyof typeof Status];
          interface Generated {
            title: string;
            summary: string;
            layout: Generated.Layout;
            representation: Generated.Representation;
            artifact?: (Darwin.ActV3RequestResponseComposerExperienceSurfacesItemGeneratedArtifact | null) | undefined;
            journey?: (Generated.Journey | null) | undefined;
            design?: Generated.Design | undefined;
            runtimeRegions?: Generated.RuntimeRegions.Item[] | undefined;
            sections: Generated.Sections.Item[];
            next: Generated.Next.Item[];
            reactSource: string | null;
            mediaPrompt: string | null;
          }
          namespace Generated {
            const Layout: {
              readonly Stack: 'stack';
              readonly Columns: 'columns';
            };
            type Layout = (typeof Layout)[keyof typeof Layout];
            const Representation: {
              readonly Components: 'components';
              readonly React: 'react';
              readonly Media: 'media';
              readonly Agent: 'agent';
            };
            type Representation = (typeof Representation)[keyof typeof Representation];
            interface Journey {
              stage: Journey.Stage;
              instruction: string;
              action: Journey.Action | null;
            }
            namespace Journey {
              const Stage: {
                readonly Input: 'input';
                readonly Review: 'review';
                readonly Ready: 'ready';
                readonly Complete: 'complete';
              };
              type Stage = (typeof Stage)[keyof typeof Stage];
              interface Action {
                kind: Action.Kind;
                label: string;
                /** A concrete next-step instruction in plain language. Never an opaque command token such as confirm_criteria. */
                intent: string;
                operationId: string | null;
                argumentsJson: string | null;
              }
              namespace Action {
                const Kind: {
                  readonly Continue: 'continue';
                  readonly Execute: 'execute';
                  readonly Copy: 'copy';
                };
                type Kind = (typeof Kind)[keyof typeof Kind];
              }
            }
            interface Design {
              character: Design.Character;
              density: Design.Density;
            }
            namespace Design {
              const Character: {
                readonly Editorial: 'editorial';
                readonly Research: 'research';
                readonly Extraction: 'extraction';
                readonly Directory: 'directory';
                readonly Storyboard: 'storyboard';
                readonly Studio: 'studio';
                readonly Comparison: 'comparison';
                readonly Planner: 'planner';
                readonly Estimate: 'estimate';
                readonly Utility: 'utility';
              };
              type Character = (typeof Character)[keyof typeof Character];
              const Density: {
                readonly Relaxed: 'relaxed';
                readonly Compact: 'compact';
              };
              type Density = (typeof Density)[keyof typeof Density];
            }
            type RuntimeRegions = RuntimeRegions.Item[];
            namespace RuntimeRegions {
              interface Item {
                id: string;
                sectionId: string;
                libraryDigest: string;
                status: Item.Status;
                artifactId: string | null;
                tree: Item.Tree | null;
                inputFields: string[];
                failure: string | null;
                model?: string | undefined;
                inputTokens?: number | undefined;
                outputTokens?: number | undefined;
              }
              namespace Item {
                const Status: {
                  readonly Generated: 'generated';
                  readonly Ready: 'ready';
                  readonly Unavailable: 'unavailable';
                };
                type Status = (typeof Status)[keyof typeof Status];
                interface Tree {
                  nodes: unknown[];
                }
              }
            }
            type Sections = Sections.Item[];
            namespace Sections {
              interface Item {
                id: string;
                kind: Item.Kind;
                title: string;
                text: string;
                items: string[];
                operationId: string | null;
              }
              namespace Item {
                const Kind: {
                  readonly Message: 'message';
                  readonly List: 'list';
                  readonly Fields: 'fields';
                  readonly Operation: 'operation';
                  readonly Progress: 'progress';
                  readonly Results: 'results';
                  readonly Notice: 'notice';
                };
                type Kind = (typeof Kind)[keyof typeof Kind];
              }
            }
            type Next = Next.Item[];
            namespace Next {
              interface Item {
                label: string;
                intent: string;
                confidence: number;
              }
            }
          }
        }
      }
    }
    const Mode: {
      readonly Live: 'live';
      readonly Replay: 'replay';
      readonly Simulation: 'simulation';
    };
    type Mode = (typeof Mode)[keyof typeof Mode];
    interface Request {
      clientRequestId: string;
      agentId: string;
      message: string;
      interaction?: Request.Interaction | undefined;
      operationId?: string | undefined;
      authoring?: Request.Authoring | undefined;
      audio?: Request.Audio | undefined;
      presentationOverride?: Request.PresentationOverride | undefined;
      threadId?: string | undefined;
      threadKind: Request.ThreadKind;
      turnId?: string | undefined;
      previousRunId?: string | undefined;
      expectedRevision?: number | undefined;
      mode: Request.Mode;
      host: Request.Host;
    }
    namespace Request {
      interface Interaction {
        type: Interaction.Type;
        modality?: Interaction.Modality | undefined;
        fields: Record<string, string>;
      }
      namespace Interaction {
        const Type: {
          readonly Edit: 'edit';
          readonly Continue: 'continue';
        };
        type Type = (typeof Type)[keyof typeof Type];
        const Modality: {
          readonly Text: 'text';
          readonly Voice: 'voice';
          readonly Image: 'image';
          readonly Audio: 'audio';
          readonly Video: 'video';
          readonly File: 'file';
        };
        type Modality = (typeof Modality)[keyof typeof Modality];
      }
      interface Authoring {
        draftId: string;
        revision: number;
      }
      interface Audio {
        kind?: Audio.Kind | undefined;
        voice?: Audio.Voice | undefined;
        speed?: number | undefined;
      }
      namespace Audio {
        const Kind: {
          readonly Speech: 'speech';
          readonly Music: 'music';
        };
        type Kind = (typeof Kind)[keyof typeof Kind];
        const Voice: {
          readonly Rachel: 'Rachel';
          readonly Aria: 'Aria';
        };
        type Voice = (typeof Voice)[keyof typeof Voice];
      }
      const PresentationOverride: {
        readonly Markdown: 'markdown';
        readonly Simple: 'simple';
        readonly React: 'react';
        readonly World: 'world';
        readonly Video: 'video';
        readonly Audio: 'audio';
        readonly Game: 'game';
        readonly Image: 'image';
        readonly Model3D: 'model3d';
      };
      type PresentationOverride = (typeof PresentationOverride)[keyof typeof PresentationOverride];
      const ThreadKind: {
        readonly Assist: 'assist';
        readonly Operation: 'operation';
      };
      type ThreadKind = (typeof ThreadKind)[keyof typeof ThreadKind];
      const Mode: {
        readonly Live: 'live';
        readonly Replay: 'replay';
        readonly Simulation: 'simulation';
      };
      type Mode = (typeof Mode)[keyof typeof Mode];
      interface Host {
        /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
        audience: Host.Audience;
        capabilities: Host.Capabilities.Item[];
        viewport: Host.Viewport;
        theme: Host.Theme;
      }
      namespace Host {
        /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
        const Audience: {
          readonly Human: 'human';
          readonly Agent: 'agent';
        };
        type Audience = (typeof Audience)[keyof typeof Audience];
        type Capabilities = Capabilities.Item[];
        namespace Capabilities {
          const Item: {
            readonly Components: 'components';
            readonly RuntimeComponents: 'runtime_components';
            readonly React: 'react';
            readonly Media: 'media';
            readonly Markdown: 'markdown';
            readonly Structured: 'structured';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
        const Viewport: {
          readonly Mobile: 'mobile';
          readonly Desktop: 'desktop';
        };
        type Viewport = (typeof Viewport)[keyof typeof Viewport];
        const Theme: {
          readonly Light: 'light';
          readonly Dark: 'dark';
        };
        type Theme = (typeof Theme)[keyof typeof Theme];
      }
    }
    interface Generated {
      title: string;
      summary: string;
      layout: Generated.Layout;
      representation: Generated.Representation;
      artifact?: (Darwin.ActV3RequestResponseComposerGeneratedArtifact | null) | undefined;
      journey?: (Generated.Journey | null) | undefined;
      design?: Generated.Design | undefined;
      runtimeRegions?: Generated.RuntimeRegions.Item[] | undefined;
      sections: Generated.Sections.Item[];
      next: Generated.Next.Item[];
      reactSource: string | null;
      mediaPrompt: string | null;
    }
    namespace Generated {
      const Layout: {
        readonly Stack: 'stack';
        readonly Columns: 'columns';
      };
      type Layout = (typeof Layout)[keyof typeof Layout];
      const Representation: {
        readonly Components: 'components';
        readonly React: 'react';
        readonly Media: 'media';
        readonly Agent: 'agent';
      };
      type Representation = (typeof Representation)[keyof typeof Representation];
      interface Journey {
        stage: Journey.Stage;
        instruction: string;
        action: Journey.Action | null;
      }
      namespace Journey {
        const Stage: {
          readonly Input: 'input';
          readonly Review: 'review';
          readonly Ready: 'ready';
          readonly Complete: 'complete';
        };
        type Stage = (typeof Stage)[keyof typeof Stage];
        interface Action {
          kind: Action.Kind;
          label: string;
          /** A concrete next-step instruction in plain language. Never an opaque command token such as confirm_criteria. */
          intent: string;
          operationId: string | null;
          argumentsJson: string | null;
        }
        namespace Action {
          const Kind: {
            readonly Continue: 'continue';
            readonly Execute: 'execute';
            readonly Copy: 'copy';
          };
          type Kind = (typeof Kind)[keyof typeof Kind];
        }
      }
      interface Design {
        character: Design.Character;
        density: Design.Density;
      }
      namespace Design {
        const Character: {
          readonly Editorial: 'editorial';
          readonly Research: 'research';
          readonly Extraction: 'extraction';
          readonly Directory: 'directory';
          readonly Storyboard: 'storyboard';
          readonly Studio: 'studio';
          readonly Comparison: 'comparison';
          readonly Planner: 'planner';
          readonly Estimate: 'estimate';
          readonly Utility: 'utility';
        };
        type Character = (typeof Character)[keyof typeof Character];
        const Density: {
          readonly Relaxed: 'relaxed';
          readonly Compact: 'compact';
        };
        type Density = (typeof Density)[keyof typeof Density];
      }
      type RuntimeRegions = RuntimeRegions.Item[];
      namespace RuntimeRegions {
        interface Item {
          id: string;
          sectionId: string;
          libraryDigest: string;
          status: Item.Status;
          artifactId: string | null;
          tree: Item.Tree | null;
          inputFields: string[];
          failure: string | null;
          model?: string | undefined;
          inputTokens?: number | undefined;
          outputTokens?: number | undefined;
        }
        namespace Item {
          const Status: {
            readonly Generated: 'generated';
            readonly Ready: 'ready';
            readonly Unavailable: 'unavailable';
          };
          type Status = (typeof Status)[keyof typeof Status];
          interface Tree {
            nodes: unknown[];
          }
        }
      }
      type Sections = Sections.Item[];
      namespace Sections {
        interface Item {
          id: string;
          kind: Item.Kind;
          title: string;
          text: string;
          items: string[];
          operationId: string | null;
        }
        namespace Item {
          const Kind: {
            readonly Message: 'message';
            readonly List: 'list';
            readonly Fields: 'fields';
            readonly Operation: 'operation';
            readonly Progress: 'progress';
            readonly Results: 'results';
            readonly Notice: 'notice';
          };
          type Kind = (typeof Kind)[keyof typeof Kind];
        }
      }
      type Next = Next.Item[];
      namespace Next {
        interface Item {
          label: string;
          intent: string;
          confidence: number;
        }
      }
    }
    interface Facts {
      agent: Facts.Agent;
      sessionContext?: Facts.SessionContext | undefined;
      operations: Facts.Operations.Item[];
      execution: Facts.Execution;
    }
    namespace Facts {
      interface Agent {
        id: string;
        name: string;
        description: string;
        brand?: Agent.Brand | undefined;
        loading?: Agent.Loading | undefined;
        appearance?: Agent.Appearance | undefined;
      }
      namespace Agent {
        interface Brand {
          primary: string;
          secondary: string;
          background: string;
          foreground: string;
          font: Brand.Font;
        }
        namespace Brand {
          const Font: {
            readonly System: 'system';
            readonly Serif: 'serif';
            readonly Mono: 'mono';
          };
          type Font = (typeof Font)[keyof typeof Font];
        }
        interface Loading {
          kind: Loading.Kind;
          asset?: string | undefined;
          poster?: string | undefined;
        }
        namespace Loading {
          const Kind: {
            readonly Darwin: 'darwin';
            readonly Pulse: 'pulse';
            readonly Media: 'media';
          };
          type Kind = (typeof Kind)[keyof typeof Kind];
        }
        interface Appearance {
          instructions: string;
          libraryName?: string | undefined;
          source?: Appearance.Source | undefined;
          library?: Appearance.Library | undefined;
          componentContracts: Appearance.ComponentContracts.Item[];
        }
        namespace Appearance {
          const Source: {
            readonly DarwinUi: 'darwin_ui';
            readonly Uploaded: 'uploaded';
            readonly Generated: 'generated';
          };
          type Source = (typeof Source)[keyof typeof Source];
          interface Library {
            schemaVersion: number;
            name: string;
            version: string;
            importName: string;
            entry: string;
            files: Record<string, string>;
            components: Library.Components.Item[];
          }
          namespace Library {
            type Components = Components.Item[];
            namespace Components {
              interface Item {
                export: string;
                description: string;
                props: string;
                example: string;
                human?: Item.Human | undefined;
                agent?: Item.Agent | undefined;
              }
              namespace Item {
                interface Human {
                  description: string;
                  states: Human.States.Item[];
                }
                namespace Human {
                  type States = States.Item[];
                  namespace States {
                    const Item: {
                      readonly Input: 'input';
                      readonly Running: 'running';
                      readonly NeedsInput: 'needs_input';
                      readonly Approval: 'approval';
                      readonly Success: 'success';
                      readonly Empty: 'empty';
                      readonly Error: 'error';
                    };
                    type Item = (typeof Item)[keyof typeof Item];
                  }
                }
                interface Agent {
                  description: string;
                  outputSchema: Record<string, unknown>;
                  example: Record<string, unknown>;
                  instructions: string;
                }
              }
            }
          }
          type ComponentContracts = ComponentContracts.Item[];
          namespace ComponentContracts {
            interface Item {
              name: string;
              description: string;
            }
          }
        }
      }
      interface SessionContext {
        goal: string;
        brief: string;
        messages: SessionContext.Messages.Item[];
      }
      namespace SessionContext {
        type Messages = Messages.Item[];
        namespace Messages {
          interface Item {
            role: Item.Role;
            text: string;
          }
          namespace Item {
            const Role: {
              readonly User: 'user';
              readonly Assistant: 'assistant';
            };
            type Role = (typeof Role)[keyof typeof Role];
          }
        }
      }
      type Operations = Operations.Item[];
      namespace Operations {
        interface Item {
          id: string;
          name: string;
          description: string;
          guidance?: Item.Guidance | undefined;
          experience?: Item.Experience | undefined;
          revision?: number | undefined;
          available: boolean;
          reason: string | null;
          fields: Item.Fields.Item[];
          inputSchema?: Record<string, unknown> | undefined;
        }
        namespace Item {
          interface Guidance {
            openingQuestion: string;
            primaryAction: string;
            context: string;
            afterInput: string;
            success: string;
            recovery: string;
          }
          interface Experience {
            version: number;
            revision: number;
            initialState: string;
            instructions: string;
            states: Experience.States.Item[];
            variants: Experience.Variants.Item[];
          }
          namespace Experience {
            type States = States.Item[];
            namespace States {
              interface Item {
                id: string;
                description: string;
                instructions: string;
                executionStatuses: Item.ExecutionStatuses.Item[];
                transitions: string[];
                variants: string[];
              }
              namespace Item {
                type ExecutionStatuses = ExecutionStatuses.Item[];
                namespace ExecutionStatuses {
                  const Item: {
                    readonly NotStarted: 'not_started';
                    readonly Queued: 'queued';
                    readonly Running: 'running';
                    readonly Waiting: 'waiting';
                    readonly Completed: 'completed';
                    readonly Failed: 'failed';
                    readonly Cancelled: 'cancelled';
                    readonly Unavailable: 'unavailable';
                  };
                  type Item = (typeof Item)[keyof typeof Item];
                }
              }
            }
            type Variants = Variants.Item[];
            namespace Variants {
              interface Item {
                id: string;
                description: string;
                instructions: string;
                modalities: Item.Modalities.Item[];
                presentation: Item.Presentation;
                runtimeComponents?: Item.RuntimeComponents.Item[] | undefined;
                argumentBindings?: Item.ArgumentBindings.Item[] | undefined;
                bindings: Item.Bindings.Item[];
              }
              namespace Item {
                type Modalities = Modalities.Item[];
                namespace Modalities {
                  const Item: {
                    readonly Text: 'text';
                    readonly Voice: 'voice';
                    readonly Image: 'image';
                    readonly Audio: 'audio';
                    readonly Video: 'video';
                    readonly File: 'file';
                  };
                  type Item = (typeof Item)[keyof typeof Item];
                }
                interface Presentation {
                  title: string;
                  summary: string;
                  layout: Presentation.Layout;
                  representation: Presentation.Representation;
                  artifact?:
                    | (Darwin.ActV3RequestResponseComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact | null)
                    | undefined;
                  journey?: (Presentation.Journey | null) | undefined;
                  design?: Presentation.Design | undefined;
                  runtimeRegions?: Presentation.RuntimeRegions.Item[] | undefined;
                  sections: Presentation.Sections.Item[];
                  next: Presentation.Next.Item[];
                  reactSource: string | null;
                  mediaPrompt: string | null;
                }
                namespace Presentation {
                  const Layout: {
                    readonly Stack: 'stack';
                    readonly Columns: 'columns';
                  };
                  type Layout = (typeof Layout)[keyof typeof Layout];
                  const Representation: {
                    readonly Components: 'components';
                    readonly React: 'react';
                    readonly Media: 'media';
                    readonly Agent: 'agent';
                  };
                  type Representation = (typeof Representation)[keyof typeof Representation];
                  interface Journey {
                    stage: Journey.Stage;
                    instruction: string;
                    action: Journey.Action | null;
                  }
                  namespace Journey {
                    const Stage: {
                      readonly Input: 'input';
                      readonly Review: 'review';
                      readonly Ready: 'ready';
                      readonly Complete: 'complete';
                    };
                    type Stage = (typeof Stage)[keyof typeof Stage];
                    interface Action {
                      kind: Action.Kind;
                      label: string;
                      /** A concrete next-step instruction in plain language. Never an opaque command token such as confirm_criteria. */
                      intent: string;
                      operationId: string | null;
                      argumentsJson: string | null;
                    }
                    namespace Action {
                      const Kind: {
                        readonly Continue: 'continue';
                        readonly Execute: 'execute';
                        readonly Copy: 'copy';
                      };
                      type Kind = (typeof Kind)[keyof typeof Kind];
                    }
                  }
                  interface Design {
                    character: Design.Character;
                    density: Design.Density;
                  }
                  namespace Design {
                    const Character: {
                      readonly Editorial: 'editorial';
                      readonly Research: 'research';
                      readonly Extraction: 'extraction';
                      readonly Directory: 'directory';
                      readonly Storyboard: 'storyboard';
                      readonly Studio: 'studio';
                      readonly Comparison: 'comparison';
                      readonly Planner: 'planner';
                      readonly Estimate: 'estimate';
                      readonly Utility: 'utility';
                    };
                    type Character = (typeof Character)[keyof typeof Character];
                    const Density: {
                      readonly Relaxed: 'relaxed';
                      readonly Compact: 'compact';
                    };
                    type Density = (typeof Density)[keyof typeof Density];
                  }
                  type RuntimeRegions = RuntimeRegions.Item[];
                  namespace RuntimeRegions {
                    interface Item {
                      id: string;
                      sectionId: string;
                      libraryDigest: string;
                      status: Item.Status;
                      artifactId: string | null;
                      tree: Item.Tree | null;
                      inputFields: string[];
                      failure: string | null;
                      model?: string | undefined;
                      inputTokens?: number | undefined;
                      outputTokens?: number | undefined;
                    }
                    namespace Item {
                      const Status: {
                        readonly Generated: 'generated';
                        readonly Ready: 'ready';
                        readonly Unavailable: 'unavailable';
                      };
                      type Status = (typeof Status)[keyof typeof Status];
                      interface Tree {
                        nodes: unknown[];
                      }
                    }
                  }
                  type Sections = Sections.Item[];
                  namespace Sections {
                    interface Item {
                      id: string;
                      kind: Item.Kind;
                      title: string;
                      text: string;
                      items: string[];
                      operationId: string | null;
                    }
                    namespace Item {
                      const Kind: {
                        readonly Message: 'message';
                        readonly List: 'list';
                        readonly Fields: 'fields';
                        readonly Operation: 'operation';
                        readonly Progress: 'progress';
                        readonly Results: 'results';
                        readonly Notice: 'notice';
                      };
                      type Kind = (typeof Kind)[keyof typeof Kind];
                    }
                  }
                  type Next = Next.Item[];
                  namespace Next {
                    interface Item {
                      label: string;
                      intent: string;
                      confidence: number;
                    }
                  }
                }
                type RuntimeComponents = RuntimeComponents.Item[];
                namespace RuntimeComponents {
                  interface Item {
                    id: string;
                    sectionId: string;
                    instructions: string;
                    components: string[];
                    inputFields: string[];
                  }
                }
                type ArgumentBindings = ArgumentBindings.Item[];
                namespace ArgumentBindings {
                  interface Item {
                    field: string;
                    target: string;
                  }
                }
                type Bindings = Bindings.Item[];
                namespace Bindings {
                  interface Item {
                    path: string[];
                    source: Item.Source;
                    field?: string | undefined;
                  }
                  namespace Item {
                    const Source: {
                      readonly Message: 'message';
                      readonly Field: 'field';
                    };
                    type Source = (typeof Source)[keyof typeof Source];
                  }
                }
              }
            }
          }
          type Fields = Fields.Item[];
          namespace Fields {
            interface Item {
              name: string;
              label: string;
              type: Item.Type;
              required: boolean;
              primary?: boolean | undefined;
              encoding?: Item.Encoding | undefined;
              options?: string[] | undefined;
              multiple?: boolean | undefined;
              description?: string | undefined;
              minimum?: number | undefined;
              maximum?: number | undefined;
              minLength?: number | undefined;
              maxLength?: number | undefined;
            }
            namespace Item {
              const Type: {
                readonly Text: 'text';
                readonly Number: 'number';
                readonly Select: 'select';
              };
              type Type = (typeof Type)[keyof typeof Type];
              const Encoding: {
                readonly Json: 'json';
              };
              type Encoding = (typeof Encoding)[keyof typeof Encoding];
            }
          }
        }
      }
      interface Execution {
        threadId: string | null;
        turnId: string | null;
        status: Execution.Status;
        evidence: Execution.Evidence.Item[];
      }
      namespace Execution {
        const Status: {
          readonly NotStarted: 'not_started';
          readonly Queued: 'queued';
          readonly Running: 'running';
          readonly Waiting: 'waiting';
          readonly Completed: 'completed';
          readonly Failed: 'failed';
          readonly Cancelled: 'cancelled';
          readonly Unavailable: 'unavailable';
        };
        type Status = (typeof Status)[keyof typeof Status];
        type Evidence = Evidence.Item[];
        namespace Evidence {
          interface Item {
            id: string;
            text: string;
            verification: Item.Verification;
          }
          namespace Item {
            const Verification: {
              readonly ProviderReported: 'provider_reported';
              readonly CriteriaChecked: 'criteria_checked';
              readonly Observed: 'observed';
            };
            type Verification = (typeof Verification)[keyof typeof Verification];
          }
        }
      }
    }
    interface Policy {
      id: string;
      version: number;
      probability: number;
      applied?: Policy.Applied.Item[] | undefined;
    }
    namespace Policy {
      type Applied = Applied.Item[];
      namespace Applied {
        interface Item {
          id: string;
          version: number;
          scope: Item.Scope;
          probability: number;
        }
        namespace Item {
          const Scope: {
            readonly Global: 'global';
            readonly Agent: 'agent';
            readonly User: 'user';
          };
          type Scope = (typeof Scope)[keyof typeof Scope];
        }
      }
    }
    interface Diagnostics {
      model: string;
      generationMs: number;
      inputTokens: number;
      outputTokens: number;
      repairs: number;
      fallback: string | null;
    }
  }
  /** Act Request handoff status only. Completed means thread receipts were created; read each thread for action confirmation and provider result. */
  const Status: {
    readonly Pending: 'pending';
    readonly Completed: 'completed';
    readonly Partial: 'partial';
    readonly Failed: 'failed';
  };
  type Status = (typeof Status)[keyof typeof Status];
  type Threads = Threads.Item[];
  namespace Threads {
    interface Item {
      agentId: string;
      operationId?: string | undefined;
      operationRevision?: number | undefined;
      threadId?: string | undefined;
      messageId?: string | undefined;
      errorCode?: string | undefined;
      state?: Item.State | undefined;
    }
    namespace Item {
      interface State {
        delivery?: State.Delivery | undefined;
        composer?: State.Composer | undefined;
        thread: string;
        messages: Darwin.ActV3RequestResponseThreadsItemStateMessagesItem[];
        /** Error events in this page. Retryable does not authorize replaying an accepted effect or payment. */
        errors?: State.Errors.Item[] | undefined;
        actions: State.Actions.Item[];
        requests: Darwin.ActV3RequestResponseThreadsItemStateRequestsItem[];
        cursor: string;
        hasMore: boolean;
        archived: boolean;
        needsAttention: boolean;
      }
      namespace State {
        interface Delivery {
          version: Delivery.Version;
          /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
          audience: Delivery.Audience;
          status: Delivery.Status;
          markdown: string;
          ui?: Delivery.Ui | undefined;
          presentation?: Delivery.Presentation | undefined;
          runId?: string | undefined;
        }
        namespace Delivery {
          const Version: {
            readonly ComposerDeliveryV1: 'composer.delivery.v1';
          };
          type Version = (typeof Version)[keyof typeof Version];
          /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
          const Audience: {
            readonly Human: 'human';
            readonly Agent: 'agent';
          };
          type Audience = (typeof Audience)[keyof typeof Audience];
          const Status: {
            readonly Composed: 'composed';
            readonly Fallback: 'fallback';
          };
          type Status = (typeof Status)[keyof typeof Status];
          interface Ui {
            version: Ui.Version;
            components: Ui.Components.Item[];
            incomplete: string[];
          }
          namespace Ui {
            const Version: {
              readonly DarwinuiAgentV1: 'darwinui-agent-v1';
            };
            type Version = (typeof Version)[keyof typeof Version];
            type Components = Components.Item[];
            namespace Components {
              interface Item {
                id: string;
                kind: string;
                title: string;
                data?: unknown | undefined;
                text?: string | undefined;
                actions: Item.Actions.Item[];
              }
              namespace Item {
                type Actions = Actions.Item[];
                namespace Actions {
                  interface Item {
                    label: string;
                    available: boolean;
                    requiredInputs: string[];
                    approval: string;
                    binding?: Item.Binding | undefined;
                    reason?: string | undefined;
                  }
                  namespace Item {
                    interface Binding {
                      name: string;
                      arguments: Record<string, unknown>;
                    }
                  }
                }
              }
            }
          }
          interface Presentation {
            version: Presentation.Version;
            selection?: Presentation.Selection | undefined;
            decision?: Presentation.Decision | undefined;
            experience?: Presentation.Experience | undefined;
            runId: string;
            revision: number;
            mode: Presentation.Mode;
            request: Presentation.Request;
            generated: Presentation.Generated;
            facts: Presentation.Facts;
            markdown: string;
            artifactId: string | null;
            policy: Presentation.Policy;
            diagnostics: Presentation.Diagnostics;
            createdAt: string;
          }
          namespace Presentation {
            const Version: {
              readonly ComposerV1: 'composer.v1';
              readonly ComposerV2: 'composer.v2';
            };
            type Version = (typeof Version)[keyof typeof Version];
            interface Selection {
              version: Selection.Version;
              catalogRevision: number;
              catalogHash: string;
              operationId: string | null;
              stateId: string;
              variantId: string;
              model: string;
              confidence: number;
              fallback: string | null;
              latencyMs: number;
              inputTokens: number;
            }
            namespace Selection {
              const Version: {
                readonly ComposerSelectionV1: 'composer-selection.v1';
              };
              type Version = (typeof Version)[keyof typeof Version];
            }
            interface Decision {
              id: string;
              model: string;
              questionVersion: string;
              catalogVersion: string;
              mode: Decision.Mode;
              eligible: Decision.Eligible.Item[];
              selected: Decision.Selected;
              audio?: Decision.Audio | undefined;
              audioSelection?: Decision.AudioSelection | undefined;
              supporting: Decision.Supporting.Item[];
              override: Decision.Override | null;
              confidence: number;
              probabilities: Decision.Probabilities.Item[];
              transition: Decision.Transition;
              fallback: string | null;
              latencyMs: number;
              inputTokens: number;
              appliedPolicies: Decision.AppliedPolicies.Item[];
            }
            namespace Decision {
              const Mode: {
                readonly Shadow: 'shadow';
                readonly Active: 'active';
              };
              type Mode = (typeof Mode)[keyof typeof Mode];
              type Eligible = Eligible.Item[];
              namespace Eligible {
                const Item: {
                  readonly Markdown: 'markdown';
                  readonly Simple: 'simple';
                  readonly React: 'react';
                  readonly World: 'world';
                  readonly Video: 'video';
                  readonly Audio: 'audio';
                  readonly Game: 'game';
                  readonly Image: 'image';
                  readonly Model3D: 'model3d';
                };
                type Item = (typeof Item)[keyof typeof Item];
              }
              const Selected: {
                readonly Markdown: 'markdown';
                readonly Simple: 'simple';
                readonly React: 'react';
                readonly World: 'world';
                readonly Video: 'video';
                readonly Audio: 'audio';
                readonly Game: 'game';
                readonly Image: 'image';
                readonly Model3D: 'model3d';
              };
              type Selected = (typeof Selected)[keyof typeof Selected];
              interface Audio {
                kind: Audio.Kind;
                voice: Audio.Voice;
                speed: number;
              }
              namespace Audio {
                const Kind: {
                  readonly Speech: 'speech';
                  readonly Music: 'music';
                };
                type Kind = (typeof Kind)[keyof typeof Kind];
                const Voice: {
                  readonly Rachel: 'Rachel';
                  readonly Aria: 'Aria';
                };
                type Voice = (typeof Voice)[keyof typeof Voice];
              }
              interface AudioSelection {
                model: string;
                questionVersion: string;
                latencyMs: number;
                inputTokens: number;
                answers: AudioSelection.Answers.Item[];
              }
              namespace AudioSelection {
                type Answers = Answers.Item[];
                namespace Answers {
                  interface Item {
                    name: string;
                    choice: string;
                    confidence: number;
                    probabilities?: Item.Probabilities.Item[] | undefined;
                  }
                  namespace Item {
                    type Probabilities = Probabilities.Item[];
                    namespace Probabilities {
                      interface Item {
                        value: string;
                        probability: number;
                      }
                    }
                  }
                }
              }
              type Supporting = Supporting.Item[];
              namespace Supporting {
                const Item: {
                  readonly Markdown: 'markdown';
                  readonly Simple: 'simple';
                  readonly React: 'react';
                  readonly World: 'world';
                  readonly Video: 'video';
                  readonly Audio: 'audio';
                  readonly Game: 'game';
                  readonly Image: 'image';
                  readonly Model3D: 'model3d';
                };
                type Item = (typeof Item)[keyof typeof Item];
              }
              const Override: {
                readonly Markdown: 'markdown';
                readonly Simple: 'simple';
                readonly React: 'react';
                readonly World: 'world';
                readonly Video: 'video';
                readonly Audio: 'audio';
                readonly Game: 'game';
                readonly Image: 'image';
                readonly Model3D: 'model3d';
              };
              type Override = (typeof Override)[keyof typeof Override];
              type Probabilities = Probabilities.Item[];
              namespace Probabilities {
                interface Item {
                  value: Item.Value;
                  probability: number;
                }
                namespace Item {
                  const Value: {
                    readonly Markdown: 'markdown';
                    readonly Simple: 'simple';
                    readonly React: 'react';
                    readonly World: 'world';
                    readonly Video: 'video';
                    readonly Audio: 'audio';
                    readonly Game: 'game';
                    readonly Image: 'image';
                    readonly Model3D: 'model3d';
                  };
                  type Value = (typeof Value)[keyof typeof Value];
                }
              }
              const Transition: {
                readonly Retain: 'retain';
                readonly Update: 'update';
                readonly Replace: 'replace';
              };
              type Transition = (typeof Transition)[keyof typeof Transition];
              type AppliedPolicies = AppliedPolicies.Item[];
              namespace AppliedPolicies {
                interface Item {
                  id: string;
                  version: number;
                  scope: string;
                  probability: number;
                }
              }
            }
            interface Experience {
              decisionId: string;
              surfaces: Experience.Surfaces.Item[];
            }
            namespace Experience {
              type Surfaces = Surfaces.Item[];
              namespace Surfaces {
                interface Item {
                  id: string;
                  capability: Item.Capability;
                  role: Item.Role;
                  status: Item.Status;
                  artifactId: string | null;
                  sessionId: string | null;
                  assetJobId?: string | undefined;
                  generated?: Item.Generated | undefined;
                  markdown?: string | undefined;
                  failure?: (string | null) | undefined;
                  actionReferences: string[];
                  evidenceReferences: string[];
                }
                namespace Item {
                  const Capability: {
                    readonly Markdown: 'markdown';
                    readonly Simple: 'simple';
                    readonly React: 'react';
                    readonly World: 'world';
                    readonly Video: 'video';
                    readonly Audio: 'audio';
                    readonly Game: 'game';
                    readonly Image: 'image';
                    readonly Model3D: 'model3d';
                  };
                  type Capability = (typeof Capability)[keyof typeof Capability];
                  const Role: {
                    readonly Primary: 'primary';
                    readonly Supporting: 'supporting';
                    readonly Fallback: 'fallback';
                  };
                  type Role = (typeof Role)[keyof typeof Role];
                  const Status: {
                    readonly Ready: 'ready';
                    readonly Pending: 'pending';
                    readonly Failed: 'failed';
                    readonly Unavailable: 'unavailable';
                  };
                  type Status = (typeof Status)[keyof typeof Status];
                  interface Generated {
                    title: string;
                    summary: string;
                    layout: Generated.Layout;
                    representation: Generated.Representation;
                    artifact?:
                      | (Darwin.ActV3RequestResponseThreadsItemStateDeliveryPresentationExperienceSurfacesItemGeneratedArtifact | null)
                      | undefined;
                    journey?: (Generated.Journey | null) | undefined;
                    design?: Generated.Design | undefined;
                    runtimeRegions?: Generated.RuntimeRegions.Item[] | undefined;
                    sections: Generated.Sections.Item[];
                    next: Generated.Next.Item[];
                    reactSource: string | null;
                    mediaPrompt: string | null;
                  }
                  namespace Generated {
                    const Layout: {
                      readonly Stack: 'stack';
                      readonly Columns: 'columns';
                    };
                    type Layout = (typeof Layout)[keyof typeof Layout];
                    const Representation: {
                      readonly Components: 'components';
                      readonly React: 'react';
                      readonly Media: 'media';
                      readonly Agent: 'agent';
                    };
                    type Representation = (typeof Representation)[keyof typeof Representation];
                    interface Journey {
                      stage: Journey.Stage;
                      instruction: string;
                      action: Journey.Action | null;
                    }
                    namespace Journey {
                      const Stage: {
                        readonly Input: 'input';
                        readonly Review: 'review';
                        readonly Ready: 'ready';
                        readonly Complete: 'complete';
                      };
                      type Stage = (typeof Stage)[keyof typeof Stage];
                      interface Action {
                        kind: Action.Kind;
                        label: string;
                        /** A concrete next-step instruction in plain language. Never an opaque command token such as confirm_criteria. */
                        intent: string;
                        operationId: string | null;
                        argumentsJson: string | null;
                      }
                      namespace Action {
                        const Kind: {
                          readonly Continue: 'continue';
                          readonly Execute: 'execute';
                          readonly Copy: 'copy';
                        };
                        type Kind = (typeof Kind)[keyof typeof Kind];
                      }
                    }
                    interface Design {
                      character: Design.Character;
                      density: Design.Density;
                    }
                    namespace Design {
                      const Character: {
                        readonly Editorial: 'editorial';
                        readonly Research: 'research';
                        readonly Extraction: 'extraction';
                        readonly Directory: 'directory';
                        readonly Storyboard: 'storyboard';
                        readonly Studio: 'studio';
                        readonly Comparison: 'comparison';
                        readonly Planner: 'planner';
                        readonly Estimate: 'estimate';
                        readonly Utility: 'utility';
                      };
                      type Character = (typeof Character)[keyof typeof Character];
                      const Density: {
                        readonly Relaxed: 'relaxed';
                        readonly Compact: 'compact';
                      };
                      type Density = (typeof Density)[keyof typeof Density];
                    }
                    type RuntimeRegions = RuntimeRegions.Item[];
                    namespace RuntimeRegions {
                      interface Item {
                        id: string;
                        sectionId: string;
                        libraryDigest: string;
                        status: Item.Status;
                        artifactId: string | null;
                        tree: Item.Tree | null;
                        inputFields: string[];
                        failure: string | null;
                        model?: string | undefined;
                        inputTokens?: number | undefined;
                        outputTokens?: number | undefined;
                      }
                      namespace Item {
                        const Status: {
                          readonly Generated: 'generated';
                          readonly Ready: 'ready';
                          readonly Unavailable: 'unavailable';
                        };
                        type Status = (typeof Status)[keyof typeof Status];
                        interface Tree {
                          nodes: unknown[];
                        }
                      }
                    }
                    type Sections = Sections.Item[];
                    namespace Sections {
                      interface Item {
                        id: string;
                        kind: Item.Kind;
                        title: string;
                        text: string;
                        items: string[];
                        operationId: string | null;
                      }
                      namespace Item {
                        const Kind: {
                          readonly Message: 'message';
                          readonly List: 'list';
                          readonly Fields: 'fields';
                          readonly Operation: 'operation';
                          readonly Progress: 'progress';
                          readonly Results: 'results';
                          readonly Notice: 'notice';
                        };
                        type Kind = (typeof Kind)[keyof typeof Kind];
                      }
                    }
                    type Next = Next.Item[];
                    namespace Next {
                      interface Item {
                        label: string;
                        intent: string;
                        confidence: number;
                      }
                    }
                  }
                }
              }
            }
            const Mode: {
              readonly Live: 'live';
              readonly Replay: 'replay';
              readonly Simulation: 'simulation';
            };
            type Mode = (typeof Mode)[keyof typeof Mode];
            interface Request {
              clientRequestId: string;
              agentId: string;
              message: string;
              interaction?: Request.Interaction | undefined;
              operationId?: string | undefined;
              authoring?: Request.Authoring | undefined;
              audio?: Request.Audio | undefined;
              presentationOverride?: Request.PresentationOverride | undefined;
              threadId?: string | undefined;
              threadKind: Request.ThreadKind;
              turnId?: string | undefined;
              previousRunId?: string | undefined;
              expectedRevision?: number | undefined;
              mode: Request.Mode;
              host: Request.Host;
            }
            namespace Request {
              interface Interaction {
                type: Interaction.Type;
                modality?: Interaction.Modality | undefined;
                fields: Record<string, string>;
              }
              namespace Interaction {
                const Type: {
                  readonly Edit: 'edit';
                  readonly Continue: 'continue';
                };
                type Type = (typeof Type)[keyof typeof Type];
                const Modality: {
                  readonly Text: 'text';
                  readonly Voice: 'voice';
                  readonly Image: 'image';
                  readonly Audio: 'audio';
                  readonly Video: 'video';
                  readonly File: 'file';
                };
                type Modality = (typeof Modality)[keyof typeof Modality];
              }
              interface Authoring {
                draftId: string;
                revision: number;
              }
              interface Audio {
                kind?: Audio.Kind | undefined;
                voice?: Audio.Voice | undefined;
                speed?: number | undefined;
              }
              namespace Audio {
                const Kind: {
                  readonly Speech: 'speech';
                  readonly Music: 'music';
                };
                type Kind = (typeof Kind)[keyof typeof Kind];
                const Voice: {
                  readonly Rachel: 'Rachel';
                  readonly Aria: 'Aria';
                };
                type Voice = (typeof Voice)[keyof typeof Voice];
              }
              const PresentationOverride: {
                readonly Markdown: 'markdown';
                readonly Simple: 'simple';
                readonly React: 'react';
                readonly World: 'world';
                readonly Video: 'video';
                readonly Audio: 'audio';
                readonly Game: 'game';
                readonly Image: 'image';
                readonly Model3D: 'model3d';
              };
              type PresentationOverride = (typeof PresentationOverride)[keyof typeof PresentationOverride];
              const ThreadKind: {
                readonly Assist: 'assist';
                readonly Operation: 'operation';
              };
              type ThreadKind = (typeof ThreadKind)[keyof typeof ThreadKind];
              const Mode: {
                readonly Live: 'live';
                readonly Replay: 'replay';
                readonly Simulation: 'simulation';
              };
              type Mode = (typeof Mode)[keyof typeof Mode];
              interface Host {
                /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
                audience: Host.Audience;
                capabilities: Host.Capabilities.Item[];
                viewport: Host.Viewport;
                theme: Host.Theme;
              }
              namespace Host {
                /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
                const Audience: {
                  readonly Human: 'human';
                  readonly Agent: 'agent';
                };
                type Audience = (typeof Audience)[keyof typeof Audience];
                type Capabilities = Capabilities.Item[];
                namespace Capabilities {
                  const Item: {
                    readonly Components: 'components';
                    readonly RuntimeComponents: 'runtime_components';
                    readonly React: 'react';
                    readonly Media: 'media';
                    readonly Markdown: 'markdown';
                    readonly Structured: 'structured';
                  };
                  type Item = (typeof Item)[keyof typeof Item];
                }
                const Viewport: {
                  readonly Mobile: 'mobile';
                  readonly Desktop: 'desktop';
                };
                type Viewport = (typeof Viewport)[keyof typeof Viewport];
                const Theme: {
                  readonly Light: 'light';
                  readonly Dark: 'dark';
                };
                type Theme = (typeof Theme)[keyof typeof Theme];
              }
            }
            interface Generated {
              title: string;
              summary: string;
              layout: Generated.Layout;
              representation: Generated.Representation;
              artifact?:
                | (Darwin.ActV3RequestResponseThreadsItemStateDeliveryPresentationGeneratedArtifact | null)
                | undefined;
              journey?: (Generated.Journey | null) | undefined;
              design?: Generated.Design | undefined;
              runtimeRegions?: Generated.RuntimeRegions.Item[] | undefined;
              sections: Generated.Sections.Item[];
              next: Generated.Next.Item[];
              reactSource: string | null;
              mediaPrompt: string | null;
            }
            namespace Generated {
              const Layout: {
                readonly Stack: 'stack';
                readonly Columns: 'columns';
              };
              type Layout = (typeof Layout)[keyof typeof Layout];
              const Representation: {
                readonly Components: 'components';
                readonly React: 'react';
                readonly Media: 'media';
                readonly Agent: 'agent';
              };
              type Representation = (typeof Representation)[keyof typeof Representation];
              interface Journey {
                stage: Journey.Stage;
                instruction: string;
                action: Journey.Action | null;
              }
              namespace Journey {
                const Stage: {
                  readonly Input: 'input';
                  readonly Review: 'review';
                  readonly Ready: 'ready';
                  readonly Complete: 'complete';
                };
                type Stage = (typeof Stage)[keyof typeof Stage];
                interface Action {
                  kind: Action.Kind;
                  label: string;
                  /** A concrete next-step instruction in plain language. Never an opaque command token such as confirm_criteria. */
                  intent: string;
                  operationId: string | null;
                  argumentsJson: string | null;
                }
                namespace Action {
                  const Kind: {
                    readonly Continue: 'continue';
                    readonly Execute: 'execute';
                    readonly Copy: 'copy';
                  };
                  type Kind = (typeof Kind)[keyof typeof Kind];
                }
              }
              interface Design {
                character: Design.Character;
                density: Design.Density;
              }
              namespace Design {
                const Character: {
                  readonly Editorial: 'editorial';
                  readonly Research: 'research';
                  readonly Extraction: 'extraction';
                  readonly Directory: 'directory';
                  readonly Storyboard: 'storyboard';
                  readonly Studio: 'studio';
                  readonly Comparison: 'comparison';
                  readonly Planner: 'planner';
                  readonly Estimate: 'estimate';
                  readonly Utility: 'utility';
                };
                type Character = (typeof Character)[keyof typeof Character];
                const Density: {
                  readonly Relaxed: 'relaxed';
                  readonly Compact: 'compact';
                };
                type Density = (typeof Density)[keyof typeof Density];
              }
              type RuntimeRegions = RuntimeRegions.Item[];
              namespace RuntimeRegions {
                interface Item {
                  id: string;
                  sectionId: string;
                  libraryDigest: string;
                  status: Item.Status;
                  artifactId: string | null;
                  tree: Item.Tree | null;
                  inputFields: string[];
                  failure: string | null;
                  model?: string | undefined;
                  inputTokens?: number | undefined;
                  outputTokens?: number | undefined;
                }
                namespace Item {
                  const Status: {
                    readonly Generated: 'generated';
                    readonly Ready: 'ready';
                    readonly Unavailable: 'unavailable';
                  };
                  type Status = (typeof Status)[keyof typeof Status];
                  interface Tree {
                    nodes: unknown[];
                  }
                }
              }
              type Sections = Sections.Item[];
              namespace Sections {
                interface Item {
                  id: string;
                  kind: Item.Kind;
                  title: string;
                  text: string;
                  items: string[];
                  operationId: string | null;
                }
                namespace Item {
                  const Kind: {
                    readonly Message: 'message';
                    readonly List: 'list';
                    readonly Fields: 'fields';
                    readonly Operation: 'operation';
                    readonly Progress: 'progress';
                    readonly Results: 'results';
                    readonly Notice: 'notice';
                  };
                  type Kind = (typeof Kind)[keyof typeof Kind];
                }
              }
              type Next = Next.Item[];
              namespace Next {
                interface Item {
                  label: string;
                  intent: string;
                  confidence: number;
                }
              }
            }
            interface Facts {
              agent: Facts.Agent;
              sessionContext?: Facts.SessionContext | undefined;
              operations: Facts.Operations.Item[];
              execution: Facts.Execution;
            }
            namespace Facts {
              interface Agent {
                id: string;
                name: string;
                description: string;
                brand?: Agent.Brand | undefined;
                loading?: Agent.Loading | undefined;
                appearance?: Agent.Appearance | undefined;
              }
              namespace Agent {
                interface Brand {
                  primary: string;
                  secondary: string;
                  background: string;
                  foreground: string;
                  font: Brand.Font;
                }
                namespace Brand {
                  const Font: {
                    readonly System: 'system';
                    readonly Serif: 'serif';
                    readonly Mono: 'mono';
                  };
                  type Font = (typeof Font)[keyof typeof Font];
                }
                interface Loading {
                  kind: Loading.Kind;
                  asset?: string | undefined;
                  poster?: string | undefined;
                }
                namespace Loading {
                  const Kind: {
                    readonly Darwin: 'darwin';
                    readonly Pulse: 'pulse';
                    readonly Media: 'media';
                  };
                  type Kind = (typeof Kind)[keyof typeof Kind];
                }
                interface Appearance {
                  instructions: string;
                  libraryName?: string | undefined;
                  source?: Appearance.Source | undefined;
                  library?: Appearance.Library | undefined;
                  componentContracts: Appearance.ComponentContracts.Item[];
                }
                namespace Appearance {
                  const Source: {
                    readonly DarwinUi: 'darwin_ui';
                    readonly Uploaded: 'uploaded';
                    readonly Generated: 'generated';
                  };
                  type Source = (typeof Source)[keyof typeof Source];
                  interface Library {
                    schemaVersion: number;
                    name: string;
                    version: string;
                    importName: string;
                    entry: string;
                    files: Record<string, string>;
                    components: Library.Components.Item[];
                  }
                  namespace Library {
                    type Components = Components.Item[];
                    namespace Components {
                      interface Item {
                        export: string;
                        description: string;
                        props: string;
                        example: string;
                        human?: Item.Human | undefined;
                        agent?: Item.Agent | undefined;
                      }
                      namespace Item {
                        interface Human {
                          description: string;
                          states: Human.States.Item[];
                        }
                        namespace Human {
                          type States = States.Item[];
                          namespace States {
                            const Item: {
                              readonly Input: 'input';
                              readonly Running: 'running';
                              readonly NeedsInput: 'needs_input';
                              readonly Approval: 'approval';
                              readonly Success: 'success';
                              readonly Empty: 'empty';
                              readonly Error: 'error';
                            };
                            type Item = (typeof Item)[keyof typeof Item];
                          }
                        }
                        interface Agent {
                          description: string;
                          outputSchema: Record<string, unknown>;
                          example: Record<string, unknown>;
                          instructions: string;
                        }
                      }
                    }
                  }
                  type ComponentContracts = ComponentContracts.Item[];
                  namespace ComponentContracts {
                    interface Item {
                      name: string;
                      description: string;
                    }
                  }
                }
              }
              interface SessionContext {
                goal: string;
                brief: string;
                messages: SessionContext.Messages.Item[];
              }
              namespace SessionContext {
                type Messages = Messages.Item[];
                namespace Messages {
                  interface Item {
                    role: Item.Role;
                    text: string;
                  }
                  namespace Item {
                    const Role: {
                      readonly User: 'user';
                      readonly Assistant: 'assistant';
                    };
                    type Role = (typeof Role)[keyof typeof Role];
                  }
                }
              }
              type Operations = Operations.Item[];
              namespace Operations {
                interface Item {
                  id: string;
                  name: string;
                  description: string;
                  guidance?: Item.Guidance | undefined;
                  experience?: Item.Experience | undefined;
                  revision?: number | undefined;
                  available: boolean;
                  reason: string | null;
                  fields: Item.Fields.Item[];
                  inputSchema?: Record<string, unknown> | undefined;
                }
                namespace Item {
                  interface Guidance {
                    openingQuestion: string;
                    primaryAction: string;
                    context: string;
                    afterInput: string;
                    success: string;
                    recovery: string;
                  }
                  interface Experience {
                    version: number;
                    revision: number;
                    initialState: string;
                    instructions: string;
                    states: Experience.States.Item[];
                    variants: Experience.Variants.Item[];
                  }
                  namespace Experience {
                    type States = States.Item[];
                    namespace States {
                      interface Item {
                        id: string;
                        description: string;
                        instructions: string;
                        executionStatuses: Item.ExecutionStatuses.Item[];
                        transitions: string[];
                        variants: string[];
                      }
                      namespace Item {
                        type ExecutionStatuses = ExecutionStatuses.Item[];
                        namespace ExecutionStatuses {
                          const Item: {
                            readonly NotStarted: 'not_started';
                            readonly Queued: 'queued';
                            readonly Running: 'running';
                            readonly Waiting: 'waiting';
                            readonly Completed: 'completed';
                            readonly Failed: 'failed';
                            readonly Cancelled: 'cancelled';
                            readonly Unavailable: 'unavailable';
                          };
                          type Item = (typeof Item)[keyof typeof Item];
                        }
                      }
                    }
                    type Variants = Variants.Item[];
                    namespace Variants {
                      interface Item {
                        id: string;
                        description: string;
                        instructions: string;
                        modalities: Item.Modalities.Item[];
                        presentation: Item.Presentation;
                        runtimeComponents?: Item.RuntimeComponents.Item[] | undefined;
                        argumentBindings?: Item.ArgumentBindings.Item[] | undefined;
                        bindings: Item.Bindings.Item[];
                      }
                      namespace Item {
                        type Modalities = Modalities.Item[];
                        namespace Modalities {
                          const Item: {
                            readonly Text: 'text';
                            readonly Voice: 'voice';
                            readonly Image: 'image';
                            readonly Audio: 'audio';
                            readonly Video: 'video';
                            readonly File: 'file';
                          };
                          type Item = (typeof Item)[keyof typeof Item];
                        }
                        interface Presentation {
                          title: string;
                          summary: string;
                          layout: Presentation.Layout;
                          representation: Presentation.Representation;
                          artifact?:
                            | (Darwin.ActV3RequestResponseThreadsItemStateDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact | null)
                            | undefined;
                          journey?: (Presentation.Journey | null) | undefined;
                          design?: Presentation.Design | undefined;
                          runtimeRegions?: Presentation.RuntimeRegions.Item[] | undefined;
                          sections: Presentation.Sections.Item[];
                          next: Presentation.Next.Item[];
                          reactSource: string | null;
                          mediaPrompt: string | null;
                        }
                        namespace Presentation {
                          const Layout: {
                            readonly Stack: 'stack';
                            readonly Columns: 'columns';
                          };
                          type Layout = (typeof Layout)[keyof typeof Layout];
                          const Representation: {
                            readonly Components: 'components';
                            readonly React: 'react';
                            readonly Media: 'media';
                            readonly Agent: 'agent';
                          };
                          type Representation = (typeof Representation)[keyof typeof Representation];
                          interface Journey {
                            stage: Journey.Stage;
                            instruction: string;
                            action: Journey.Action | null;
                          }
                          namespace Journey {
                            const Stage: {
                              readonly Input: 'input';
                              readonly Review: 'review';
                              readonly Ready: 'ready';
                              readonly Complete: 'complete';
                            };
                            type Stage = (typeof Stage)[keyof typeof Stage];
                            interface Action {
                              kind: Action.Kind;
                              label: string;
                              /** A concrete next-step instruction in plain language. Never an opaque command token such as confirm_criteria. */
                              intent: string;
                              operationId: string | null;
                              argumentsJson: string | null;
                            }
                            namespace Action {
                              const Kind: {
                                readonly Continue: 'continue';
                                readonly Execute: 'execute';
                                readonly Copy: 'copy';
                              };
                              type Kind = (typeof Kind)[keyof typeof Kind];
                            }
                          }
                          interface Design {
                            character: Design.Character;
                            density: Design.Density;
                          }
                          namespace Design {
                            const Character: {
                              readonly Editorial: 'editorial';
                              readonly Research: 'research';
                              readonly Extraction: 'extraction';
                              readonly Directory: 'directory';
                              readonly Storyboard: 'storyboard';
                              readonly Studio: 'studio';
                              readonly Comparison: 'comparison';
                              readonly Planner: 'planner';
                              readonly Estimate: 'estimate';
                              readonly Utility: 'utility';
                            };
                            type Character = (typeof Character)[keyof typeof Character];
                            const Density: {
                              readonly Relaxed: 'relaxed';
                              readonly Compact: 'compact';
                            };
                            type Density = (typeof Density)[keyof typeof Density];
                          }
                          type RuntimeRegions = RuntimeRegions.Item[];
                          namespace RuntimeRegions {
                            interface Item {
                              id: string;
                              sectionId: string;
                              libraryDigest: string;
                              status: Item.Status;
                              artifactId: string | null;
                              tree: Item.Tree | null;
                              inputFields: string[];
                              failure: string | null;
                              model?: string | undefined;
                              inputTokens?: number | undefined;
                              outputTokens?: number | undefined;
                            }
                            namespace Item {
                              const Status: {
                                readonly Generated: 'generated';
                                readonly Ready: 'ready';
                                readonly Unavailable: 'unavailable';
                              };
                              type Status = (typeof Status)[keyof typeof Status];
                              interface Tree {
                                nodes: unknown[];
                              }
                            }
                          }
                          type Sections = Sections.Item[];
                          namespace Sections {
                            interface Item {
                              id: string;
                              kind: Item.Kind;
                              title: string;
                              text: string;
                              items: string[];
                              operationId: string | null;
                            }
                            namespace Item {
                              const Kind: {
                                readonly Message: 'message';
                                readonly List: 'list';
                                readonly Fields: 'fields';
                                readonly Operation: 'operation';
                                readonly Progress: 'progress';
                                readonly Results: 'results';
                                readonly Notice: 'notice';
                              };
                              type Kind = (typeof Kind)[keyof typeof Kind];
                            }
                          }
                          type Next = Next.Item[];
                          namespace Next {
                            interface Item {
                              label: string;
                              intent: string;
                              confidence: number;
                            }
                          }
                        }
                        type RuntimeComponents = RuntimeComponents.Item[];
                        namespace RuntimeComponents {
                          interface Item {
                            id: string;
                            sectionId: string;
                            instructions: string;
                            components: string[];
                            inputFields: string[];
                          }
                        }
                        type ArgumentBindings = ArgumentBindings.Item[];
                        namespace ArgumentBindings {
                          interface Item {
                            field: string;
                            target: string;
                          }
                        }
                        type Bindings = Bindings.Item[];
                        namespace Bindings {
                          interface Item {
                            path: string[];
                            source: Item.Source;
                            field?: string | undefined;
                          }
                          namespace Item {
                            const Source: {
                              readonly Message: 'message';
                              readonly Field: 'field';
                            };
                            type Source = (typeof Source)[keyof typeof Source];
                          }
                        }
                      }
                    }
                  }
                  type Fields = Fields.Item[];
                  namespace Fields {
                    interface Item {
                      name: string;
                      label: string;
                      type: Item.Type;
                      required: boolean;
                      primary?: boolean | undefined;
                      encoding?: Item.Encoding | undefined;
                      options?: string[] | undefined;
                      multiple?: boolean | undefined;
                      description?: string | undefined;
                      minimum?: number | undefined;
                      maximum?: number | undefined;
                      minLength?: number | undefined;
                      maxLength?: number | undefined;
                    }
                    namespace Item {
                      const Type: {
                        readonly Text: 'text';
                        readonly Number: 'number';
                        readonly Select: 'select';
                      };
                      type Type = (typeof Type)[keyof typeof Type];
                      const Encoding: {
                        readonly Json: 'json';
                      };
                      type Encoding = (typeof Encoding)[keyof typeof Encoding];
                    }
                  }
                }
              }
              interface Execution {
                threadId: string | null;
                turnId: string | null;
                status: Execution.Status;
                evidence: Execution.Evidence.Item[];
              }
              namespace Execution {
                const Status: {
                  readonly NotStarted: 'not_started';
                  readonly Queued: 'queued';
                  readonly Running: 'running';
                  readonly Waiting: 'waiting';
                  readonly Completed: 'completed';
                  readonly Failed: 'failed';
                  readonly Cancelled: 'cancelled';
                  readonly Unavailable: 'unavailable';
                };
                type Status = (typeof Status)[keyof typeof Status];
                type Evidence = Evidence.Item[];
                namespace Evidence {
                  interface Item {
                    id: string;
                    text: string;
                    verification: Item.Verification;
                  }
                  namespace Item {
                    const Verification: {
                      readonly ProviderReported: 'provider_reported';
                      readonly CriteriaChecked: 'criteria_checked';
                      readonly Observed: 'observed';
                    };
                    type Verification = (typeof Verification)[keyof typeof Verification];
                  }
                }
              }
            }
            interface Policy {
              id: string;
              version: number;
              probability: number;
              applied?: Policy.Applied.Item[] | undefined;
            }
            namespace Policy {
              type Applied = Applied.Item[];
              namespace Applied {
                interface Item {
                  id: string;
                  version: number;
                  scope: Item.Scope;
                  probability: number;
                }
                namespace Item {
                  const Scope: {
                    readonly Global: 'global';
                    readonly Agent: 'agent';
                    readonly User: 'user';
                  };
                  type Scope = (typeof Scope)[keyof typeof Scope];
                }
              }
            }
            interface Diagnostics {
              model: string;
              generationMs: number;
              inputTokens: number;
              outputTokens: number;
              repairs: number;
              fallback: string | null;
            }
          }
        }
        interface Composer {
          version: Composer.Version;
          selection?: Composer.Selection | undefined;
          decision?: Composer.Decision | undefined;
          experience?: Composer.Experience | undefined;
          runId: string;
          revision: number;
          mode: Composer.Mode;
          request: Composer.Request;
          generated: Composer.Generated;
          facts: Composer.Facts;
          markdown: string;
          artifactId: string | null;
          policy: Composer.Policy;
          diagnostics: Composer.Diagnostics;
          createdAt: string;
        }
        namespace Composer {
          const Version: {
            readonly ComposerV1: 'composer.v1';
            readonly ComposerV2: 'composer.v2';
          };
          type Version = (typeof Version)[keyof typeof Version];
          interface Selection {
            version: Selection.Version;
            catalogRevision: number;
            catalogHash: string;
            operationId: string | null;
            stateId: string;
            variantId: string;
            model: string;
            confidence: number;
            fallback: string | null;
            latencyMs: number;
            inputTokens: number;
          }
          namespace Selection {
            const Version: {
              readonly ComposerSelectionV1: 'composer-selection.v1';
            };
            type Version = (typeof Version)[keyof typeof Version];
          }
          interface Decision {
            id: string;
            model: string;
            questionVersion: string;
            catalogVersion: string;
            mode: Decision.Mode;
            eligible: Decision.Eligible.Item[];
            selected: Decision.Selected;
            audio?: Decision.Audio | undefined;
            audioSelection?: Decision.AudioSelection | undefined;
            supporting: Decision.Supporting.Item[];
            override: Decision.Override | null;
            confidence: number;
            probabilities: Decision.Probabilities.Item[];
            transition: Decision.Transition;
            fallback: string | null;
            latencyMs: number;
            inputTokens: number;
            appliedPolicies: Decision.AppliedPolicies.Item[];
          }
          namespace Decision {
            const Mode: {
              readonly Shadow: 'shadow';
              readonly Active: 'active';
            };
            type Mode = (typeof Mode)[keyof typeof Mode];
            type Eligible = Eligible.Item[];
            namespace Eligible {
              const Item: {
                readonly Markdown: 'markdown';
                readonly Simple: 'simple';
                readonly React: 'react';
                readonly World: 'world';
                readonly Video: 'video';
                readonly Audio: 'audio';
                readonly Game: 'game';
                readonly Image: 'image';
                readonly Model3D: 'model3d';
              };
              type Item = (typeof Item)[keyof typeof Item];
            }
            const Selected: {
              readonly Markdown: 'markdown';
              readonly Simple: 'simple';
              readonly React: 'react';
              readonly World: 'world';
              readonly Video: 'video';
              readonly Audio: 'audio';
              readonly Game: 'game';
              readonly Image: 'image';
              readonly Model3D: 'model3d';
            };
            type Selected = (typeof Selected)[keyof typeof Selected];
            interface Audio {
              kind: Audio.Kind;
              voice: Audio.Voice;
              speed: number;
            }
            namespace Audio {
              const Kind: {
                readonly Speech: 'speech';
                readonly Music: 'music';
              };
              type Kind = (typeof Kind)[keyof typeof Kind];
              const Voice: {
                readonly Rachel: 'Rachel';
                readonly Aria: 'Aria';
              };
              type Voice = (typeof Voice)[keyof typeof Voice];
            }
            interface AudioSelection {
              model: string;
              questionVersion: string;
              latencyMs: number;
              inputTokens: number;
              answers: AudioSelection.Answers.Item[];
            }
            namespace AudioSelection {
              type Answers = Answers.Item[];
              namespace Answers {
                interface Item {
                  name: string;
                  choice: string;
                  confidence: number;
                  probabilities?: Item.Probabilities.Item[] | undefined;
                }
                namespace Item {
                  type Probabilities = Probabilities.Item[];
                  namespace Probabilities {
                    interface Item {
                      value: string;
                      probability: number;
                    }
                  }
                }
              }
            }
            type Supporting = Supporting.Item[];
            namespace Supporting {
              const Item: {
                readonly Markdown: 'markdown';
                readonly Simple: 'simple';
                readonly React: 'react';
                readonly World: 'world';
                readonly Video: 'video';
                readonly Audio: 'audio';
                readonly Game: 'game';
                readonly Image: 'image';
                readonly Model3D: 'model3d';
              };
              type Item = (typeof Item)[keyof typeof Item];
            }
            const Override: {
              readonly Markdown: 'markdown';
              readonly Simple: 'simple';
              readonly React: 'react';
              readonly World: 'world';
              readonly Video: 'video';
              readonly Audio: 'audio';
              readonly Game: 'game';
              readonly Image: 'image';
              readonly Model3D: 'model3d';
            };
            type Override = (typeof Override)[keyof typeof Override];
            type Probabilities = Probabilities.Item[];
            namespace Probabilities {
              interface Item {
                value: Item.Value;
                probability: number;
              }
              namespace Item {
                const Value: {
                  readonly Markdown: 'markdown';
                  readonly Simple: 'simple';
                  readonly React: 'react';
                  readonly World: 'world';
                  readonly Video: 'video';
                  readonly Audio: 'audio';
                  readonly Game: 'game';
                  readonly Image: 'image';
                  readonly Model3D: 'model3d';
                };
                type Value = (typeof Value)[keyof typeof Value];
              }
            }
            const Transition: {
              readonly Retain: 'retain';
              readonly Update: 'update';
              readonly Replace: 'replace';
            };
            type Transition = (typeof Transition)[keyof typeof Transition];
            type AppliedPolicies = AppliedPolicies.Item[];
            namespace AppliedPolicies {
              interface Item {
                id: string;
                version: number;
                scope: string;
                probability: number;
              }
            }
          }
          interface Experience {
            decisionId: string;
            surfaces: Experience.Surfaces.Item[];
          }
          namespace Experience {
            type Surfaces = Surfaces.Item[];
            namespace Surfaces {
              interface Item {
                id: string;
                capability: Item.Capability;
                role: Item.Role;
                status: Item.Status;
                artifactId: string | null;
                sessionId: string | null;
                assetJobId?: string | undefined;
                generated?: Item.Generated | undefined;
                markdown?: string | undefined;
                failure?: (string | null) | undefined;
                actionReferences: string[];
                evidenceReferences: string[];
              }
              namespace Item {
                const Capability: {
                  readonly Markdown: 'markdown';
                  readonly Simple: 'simple';
                  readonly React: 'react';
                  readonly World: 'world';
                  readonly Video: 'video';
                  readonly Audio: 'audio';
                  readonly Game: 'game';
                  readonly Image: 'image';
                  readonly Model3D: 'model3d';
                };
                type Capability = (typeof Capability)[keyof typeof Capability];
                const Role: {
                  readonly Primary: 'primary';
                  readonly Supporting: 'supporting';
                  readonly Fallback: 'fallback';
                };
                type Role = (typeof Role)[keyof typeof Role];
                const Status: {
                  readonly Ready: 'ready';
                  readonly Pending: 'pending';
                  readonly Failed: 'failed';
                  readonly Unavailable: 'unavailable';
                };
                type Status = (typeof Status)[keyof typeof Status];
                interface Generated {
                  title: string;
                  summary: string;
                  layout: Generated.Layout;
                  representation: Generated.Representation;
                  artifact?:
                    | (Darwin.ActV3RequestResponseThreadsItemStateComposerExperienceSurfacesItemGeneratedArtifact | null)
                    | undefined;
                  journey?: (Generated.Journey | null) | undefined;
                  design?: Generated.Design | undefined;
                  runtimeRegions?: Generated.RuntimeRegions.Item[] | undefined;
                  sections: Generated.Sections.Item[];
                  next: Generated.Next.Item[];
                  reactSource: string | null;
                  mediaPrompt: string | null;
                }
                namespace Generated {
                  const Layout: {
                    readonly Stack: 'stack';
                    readonly Columns: 'columns';
                  };
                  type Layout = (typeof Layout)[keyof typeof Layout];
                  const Representation: {
                    readonly Components: 'components';
                    readonly React: 'react';
                    readonly Media: 'media';
                    readonly Agent: 'agent';
                  };
                  type Representation = (typeof Representation)[keyof typeof Representation];
                  interface Journey {
                    stage: Journey.Stage;
                    instruction: string;
                    action: Journey.Action | null;
                  }
                  namespace Journey {
                    const Stage: {
                      readonly Input: 'input';
                      readonly Review: 'review';
                      readonly Ready: 'ready';
                      readonly Complete: 'complete';
                    };
                    type Stage = (typeof Stage)[keyof typeof Stage];
                    interface Action {
                      kind: Action.Kind;
                      label: string;
                      /** A concrete next-step instruction in plain language. Never an opaque command token such as confirm_criteria. */
                      intent: string;
                      operationId: string | null;
                      argumentsJson: string | null;
                    }
                    namespace Action {
                      const Kind: {
                        readonly Continue: 'continue';
                        readonly Execute: 'execute';
                        readonly Copy: 'copy';
                      };
                      type Kind = (typeof Kind)[keyof typeof Kind];
                    }
                  }
                  interface Design {
                    character: Design.Character;
                    density: Design.Density;
                  }
                  namespace Design {
                    const Character: {
                      readonly Editorial: 'editorial';
                      readonly Research: 'research';
                      readonly Extraction: 'extraction';
                      readonly Directory: 'directory';
                      readonly Storyboard: 'storyboard';
                      readonly Studio: 'studio';
                      readonly Comparison: 'comparison';
                      readonly Planner: 'planner';
                      readonly Estimate: 'estimate';
                      readonly Utility: 'utility';
                    };
                    type Character = (typeof Character)[keyof typeof Character];
                    const Density: {
                      readonly Relaxed: 'relaxed';
                      readonly Compact: 'compact';
                    };
                    type Density = (typeof Density)[keyof typeof Density];
                  }
                  type RuntimeRegions = RuntimeRegions.Item[];
                  namespace RuntimeRegions {
                    interface Item {
                      id: string;
                      sectionId: string;
                      libraryDigest: string;
                      status: Item.Status;
                      artifactId: string | null;
                      tree: Item.Tree | null;
                      inputFields: string[];
                      failure: string | null;
                      model?: string | undefined;
                      inputTokens?: number | undefined;
                      outputTokens?: number | undefined;
                    }
                    namespace Item {
                      const Status: {
                        readonly Generated: 'generated';
                        readonly Ready: 'ready';
                        readonly Unavailable: 'unavailable';
                      };
                      type Status = (typeof Status)[keyof typeof Status];
                      interface Tree {
                        nodes: unknown[];
                      }
                    }
                  }
                  type Sections = Sections.Item[];
                  namespace Sections {
                    interface Item {
                      id: string;
                      kind: Item.Kind;
                      title: string;
                      text: string;
                      items: string[];
                      operationId: string | null;
                    }
                    namespace Item {
                      const Kind: {
                        readonly Message: 'message';
                        readonly List: 'list';
                        readonly Fields: 'fields';
                        readonly Operation: 'operation';
                        readonly Progress: 'progress';
                        readonly Results: 'results';
                        readonly Notice: 'notice';
                      };
                      type Kind = (typeof Kind)[keyof typeof Kind];
                    }
                  }
                  type Next = Next.Item[];
                  namespace Next {
                    interface Item {
                      label: string;
                      intent: string;
                      confidence: number;
                    }
                  }
                }
              }
            }
          }
          const Mode: {
            readonly Live: 'live';
            readonly Replay: 'replay';
            readonly Simulation: 'simulation';
          };
          type Mode = (typeof Mode)[keyof typeof Mode];
          interface Request {
            clientRequestId: string;
            agentId: string;
            message: string;
            interaction?: Request.Interaction | undefined;
            operationId?: string | undefined;
            authoring?: Request.Authoring | undefined;
            audio?: Request.Audio | undefined;
            presentationOverride?: Request.PresentationOverride | undefined;
            threadId?: string | undefined;
            threadKind: Request.ThreadKind;
            turnId?: string | undefined;
            previousRunId?: string | undefined;
            expectedRevision?: number | undefined;
            mode: Request.Mode;
            host: Request.Host;
          }
          namespace Request {
            interface Interaction {
              type: Interaction.Type;
              modality?: Interaction.Modality | undefined;
              fields: Record<string, string>;
            }
            namespace Interaction {
              const Type: {
                readonly Edit: 'edit';
                readonly Continue: 'continue';
              };
              type Type = (typeof Type)[keyof typeof Type];
              const Modality: {
                readonly Text: 'text';
                readonly Voice: 'voice';
                readonly Image: 'image';
                readonly Audio: 'audio';
                readonly Video: 'video';
                readonly File: 'file';
              };
              type Modality = (typeof Modality)[keyof typeof Modality];
            }
            interface Authoring {
              draftId: string;
              revision: number;
            }
            interface Audio {
              kind?: Audio.Kind | undefined;
              voice?: Audio.Voice | undefined;
              speed?: number | undefined;
            }
            namespace Audio {
              const Kind: {
                readonly Speech: 'speech';
                readonly Music: 'music';
              };
              type Kind = (typeof Kind)[keyof typeof Kind];
              const Voice: {
                readonly Rachel: 'Rachel';
                readonly Aria: 'Aria';
              };
              type Voice = (typeof Voice)[keyof typeof Voice];
            }
            const PresentationOverride: {
              readonly Markdown: 'markdown';
              readonly Simple: 'simple';
              readonly React: 'react';
              readonly World: 'world';
              readonly Video: 'video';
              readonly Audio: 'audio';
              readonly Game: 'game';
              readonly Image: 'image';
              readonly Model3D: 'model3d';
            };
            type PresentationOverride = (typeof PresentationOverride)[keyof typeof PresentationOverride];
            const ThreadKind: {
              readonly Assist: 'assist';
              readonly Operation: 'operation';
            };
            type ThreadKind = (typeof ThreadKind)[keyof typeof ThreadKind];
            const Mode: {
              readonly Live: 'live';
              readonly Replay: 'replay';
              readonly Simulation: 'simulation';
            };
            type Mode = (typeof Mode)[keyof typeof Mode];
            interface Host {
              /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
              audience: Host.Audience;
              capabilities: Host.Capabilities.Item[];
              viewport: Host.Viewport;
              theme: Host.Theme;
            }
            namespace Host {
              /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
              const Audience: {
                readonly Human: 'human';
                readonly Agent: 'agent';
              };
              type Audience = (typeof Audience)[keyof typeof Audience];
              type Capabilities = Capabilities.Item[];
              namespace Capabilities {
                const Item: {
                  readonly Components: 'components';
                  readonly RuntimeComponents: 'runtime_components';
                  readonly React: 'react';
                  readonly Media: 'media';
                  readonly Markdown: 'markdown';
                  readonly Structured: 'structured';
                };
                type Item = (typeof Item)[keyof typeof Item];
              }
              const Viewport: {
                readonly Mobile: 'mobile';
                readonly Desktop: 'desktop';
              };
              type Viewport = (typeof Viewport)[keyof typeof Viewport];
              const Theme: {
                readonly Light: 'light';
                readonly Dark: 'dark';
              };
              type Theme = (typeof Theme)[keyof typeof Theme];
            }
          }
          interface Generated {
            title: string;
            summary: string;
            layout: Generated.Layout;
            representation: Generated.Representation;
            artifact?: (Darwin.ActV3RequestResponseThreadsItemStateComposerGeneratedArtifact | null) | undefined;
            journey?: (Generated.Journey | null) | undefined;
            design?: Generated.Design | undefined;
            runtimeRegions?: Generated.RuntimeRegions.Item[] | undefined;
            sections: Generated.Sections.Item[];
            next: Generated.Next.Item[];
            reactSource: string | null;
            mediaPrompt: string | null;
          }
          namespace Generated {
            const Layout: {
              readonly Stack: 'stack';
              readonly Columns: 'columns';
            };
            type Layout = (typeof Layout)[keyof typeof Layout];
            const Representation: {
              readonly Components: 'components';
              readonly React: 'react';
              readonly Media: 'media';
              readonly Agent: 'agent';
            };
            type Representation = (typeof Representation)[keyof typeof Representation];
            interface Journey {
              stage: Journey.Stage;
              instruction: string;
              action: Journey.Action | null;
            }
            namespace Journey {
              const Stage: {
                readonly Input: 'input';
                readonly Review: 'review';
                readonly Ready: 'ready';
                readonly Complete: 'complete';
              };
              type Stage = (typeof Stage)[keyof typeof Stage];
              interface Action {
                kind: Action.Kind;
                label: string;
                /** A concrete next-step instruction in plain language. Never an opaque command token such as confirm_criteria. */
                intent: string;
                operationId: string | null;
                argumentsJson: string | null;
              }
              namespace Action {
                const Kind: {
                  readonly Continue: 'continue';
                  readonly Execute: 'execute';
                  readonly Copy: 'copy';
                };
                type Kind = (typeof Kind)[keyof typeof Kind];
              }
            }
            interface Design {
              character: Design.Character;
              density: Design.Density;
            }
            namespace Design {
              const Character: {
                readonly Editorial: 'editorial';
                readonly Research: 'research';
                readonly Extraction: 'extraction';
                readonly Directory: 'directory';
                readonly Storyboard: 'storyboard';
                readonly Studio: 'studio';
                readonly Comparison: 'comparison';
                readonly Planner: 'planner';
                readonly Estimate: 'estimate';
                readonly Utility: 'utility';
              };
              type Character = (typeof Character)[keyof typeof Character];
              const Density: {
                readonly Relaxed: 'relaxed';
                readonly Compact: 'compact';
              };
              type Density = (typeof Density)[keyof typeof Density];
            }
            type RuntimeRegions = RuntimeRegions.Item[];
            namespace RuntimeRegions {
              interface Item {
                id: string;
                sectionId: string;
                libraryDigest: string;
                status: Item.Status;
                artifactId: string | null;
                tree: Item.Tree | null;
                inputFields: string[];
                failure: string | null;
                model?: string | undefined;
                inputTokens?: number | undefined;
                outputTokens?: number | undefined;
              }
              namespace Item {
                const Status: {
                  readonly Generated: 'generated';
                  readonly Ready: 'ready';
                  readonly Unavailable: 'unavailable';
                };
                type Status = (typeof Status)[keyof typeof Status];
                interface Tree {
                  nodes: unknown[];
                }
              }
            }
            type Sections = Sections.Item[];
            namespace Sections {
              interface Item {
                id: string;
                kind: Item.Kind;
                title: string;
                text: string;
                items: string[];
                operationId: string | null;
              }
              namespace Item {
                const Kind: {
                  readonly Message: 'message';
                  readonly List: 'list';
                  readonly Fields: 'fields';
                  readonly Operation: 'operation';
                  readonly Progress: 'progress';
                  readonly Results: 'results';
                  readonly Notice: 'notice';
                };
                type Kind = (typeof Kind)[keyof typeof Kind];
              }
            }
            type Next = Next.Item[];
            namespace Next {
              interface Item {
                label: string;
                intent: string;
                confidence: number;
              }
            }
          }
          interface Facts {
            agent: Facts.Agent;
            sessionContext?: Facts.SessionContext | undefined;
            operations: Facts.Operations.Item[];
            execution: Facts.Execution;
          }
          namespace Facts {
            interface Agent {
              id: string;
              name: string;
              description: string;
              brand?: Agent.Brand | undefined;
              loading?: Agent.Loading | undefined;
              appearance?: Agent.Appearance | undefined;
            }
            namespace Agent {
              interface Brand {
                primary: string;
                secondary: string;
                background: string;
                foreground: string;
                font: Brand.Font;
              }
              namespace Brand {
                const Font: {
                  readonly System: 'system';
                  readonly Serif: 'serif';
                  readonly Mono: 'mono';
                };
                type Font = (typeof Font)[keyof typeof Font];
              }
              interface Loading {
                kind: Loading.Kind;
                asset?: string | undefined;
                poster?: string | undefined;
              }
              namespace Loading {
                const Kind: {
                  readonly Darwin: 'darwin';
                  readonly Pulse: 'pulse';
                  readonly Media: 'media';
                };
                type Kind = (typeof Kind)[keyof typeof Kind];
              }
              interface Appearance {
                instructions: string;
                libraryName?: string | undefined;
                source?: Appearance.Source | undefined;
                library?: Appearance.Library | undefined;
                componentContracts: Appearance.ComponentContracts.Item[];
              }
              namespace Appearance {
                const Source: {
                  readonly DarwinUi: 'darwin_ui';
                  readonly Uploaded: 'uploaded';
                  readonly Generated: 'generated';
                };
                type Source = (typeof Source)[keyof typeof Source];
                interface Library {
                  schemaVersion: number;
                  name: string;
                  version: string;
                  importName: string;
                  entry: string;
                  files: Record<string, string>;
                  components: Library.Components.Item[];
                }
                namespace Library {
                  type Components = Components.Item[];
                  namespace Components {
                    interface Item {
                      export: string;
                      description: string;
                      props: string;
                      example: string;
                      human?: Item.Human | undefined;
                      agent?: Item.Agent | undefined;
                    }
                    namespace Item {
                      interface Human {
                        description: string;
                        states: Human.States.Item[];
                      }
                      namespace Human {
                        type States = States.Item[];
                        namespace States {
                          const Item: {
                            readonly Input: 'input';
                            readonly Running: 'running';
                            readonly NeedsInput: 'needs_input';
                            readonly Approval: 'approval';
                            readonly Success: 'success';
                            readonly Empty: 'empty';
                            readonly Error: 'error';
                          };
                          type Item = (typeof Item)[keyof typeof Item];
                        }
                      }
                      interface Agent {
                        description: string;
                        outputSchema: Record<string, unknown>;
                        example: Record<string, unknown>;
                        instructions: string;
                      }
                    }
                  }
                }
                type ComponentContracts = ComponentContracts.Item[];
                namespace ComponentContracts {
                  interface Item {
                    name: string;
                    description: string;
                  }
                }
              }
            }
            interface SessionContext {
              goal: string;
              brief: string;
              messages: SessionContext.Messages.Item[];
            }
            namespace SessionContext {
              type Messages = Messages.Item[];
              namespace Messages {
                interface Item {
                  role: Item.Role;
                  text: string;
                }
                namespace Item {
                  const Role: {
                    readonly User: 'user';
                    readonly Assistant: 'assistant';
                  };
                  type Role = (typeof Role)[keyof typeof Role];
                }
              }
            }
            type Operations = Operations.Item[];
            namespace Operations {
              interface Item {
                id: string;
                name: string;
                description: string;
                guidance?: Item.Guidance | undefined;
                experience?: Item.Experience | undefined;
                revision?: number | undefined;
                available: boolean;
                reason: string | null;
                fields: Item.Fields.Item[];
                inputSchema?: Record<string, unknown> | undefined;
              }
              namespace Item {
                interface Guidance {
                  openingQuestion: string;
                  primaryAction: string;
                  context: string;
                  afterInput: string;
                  success: string;
                  recovery: string;
                }
                interface Experience {
                  version: number;
                  revision: number;
                  initialState: string;
                  instructions: string;
                  states: Experience.States.Item[];
                  variants: Experience.Variants.Item[];
                }
                namespace Experience {
                  type States = States.Item[];
                  namespace States {
                    interface Item {
                      id: string;
                      description: string;
                      instructions: string;
                      executionStatuses: Item.ExecutionStatuses.Item[];
                      transitions: string[];
                      variants: string[];
                    }
                    namespace Item {
                      type ExecutionStatuses = ExecutionStatuses.Item[];
                      namespace ExecutionStatuses {
                        const Item: {
                          readonly NotStarted: 'not_started';
                          readonly Queued: 'queued';
                          readonly Running: 'running';
                          readonly Waiting: 'waiting';
                          readonly Completed: 'completed';
                          readonly Failed: 'failed';
                          readonly Cancelled: 'cancelled';
                          readonly Unavailable: 'unavailable';
                        };
                        type Item = (typeof Item)[keyof typeof Item];
                      }
                    }
                  }
                  type Variants = Variants.Item[];
                  namespace Variants {
                    interface Item {
                      id: string;
                      description: string;
                      instructions: string;
                      modalities: Item.Modalities.Item[];
                      presentation: Item.Presentation;
                      runtimeComponents?: Item.RuntimeComponents.Item[] | undefined;
                      argumentBindings?: Item.ArgumentBindings.Item[] | undefined;
                      bindings: Item.Bindings.Item[];
                    }
                    namespace Item {
                      type Modalities = Modalities.Item[];
                      namespace Modalities {
                        const Item: {
                          readonly Text: 'text';
                          readonly Voice: 'voice';
                          readonly Image: 'image';
                          readonly Audio: 'audio';
                          readonly Video: 'video';
                          readonly File: 'file';
                        };
                        type Item = (typeof Item)[keyof typeof Item];
                      }
                      interface Presentation {
                        title: string;
                        summary: string;
                        layout: Presentation.Layout;
                        representation: Presentation.Representation;
                        artifact?:
                          | (Darwin.ActV3RequestResponseThreadsItemStateComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact | null)
                          | undefined;
                        journey?: (Presentation.Journey | null) | undefined;
                        design?: Presentation.Design | undefined;
                        runtimeRegions?: Presentation.RuntimeRegions.Item[] | undefined;
                        sections: Presentation.Sections.Item[];
                        next: Presentation.Next.Item[];
                        reactSource: string | null;
                        mediaPrompt: string | null;
                      }
                      namespace Presentation {
                        const Layout: {
                          readonly Stack: 'stack';
                          readonly Columns: 'columns';
                        };
                        type Layout = (typeof Layout)[keyof typeof Layout];
                        const Representation: {
                          readonly Components: 'components';
                          readonly React: 'react';
                          readonly Media: 'media';
                          readonly Agent: 'agent';
                        };
                        type Representation = (typeof Representation)[keyof typeof Representation];
                        interface Journey {
                          stage: Journey.Stage;
                          instruction: string;
                          action: Journey.Action | null;
                        }
                        namespace Journey {
                          const Stage: {
                            readonly Input: 'input';
                            readonly Review: 'review';
                            readonly Ready: 'ready';
                            readonly Complete: 'complete';
                          };
                          type Stage = (typeof Stage)[keyof typeof Stage];
                          interface Action {
                            kind: Action.Kind;
                            label: string;
                            /** A concrete next-step instruction in plain language. Never an opaque command token such as confirm_criteria. */
                            intent: string;
                            operationId: string | null;
                            argumentsJson: string | null;
                          }
                          namespace Action {
                            const Kind: {
                              readonly Continue: 'continue';
                              readonly Execute: 'execute';
                              readonly Copy: 'copy';
                            };
                            type Kind = (typeof Kind)[keyof typeof Kind];
                          }
                        }
                        interface Design {
                          character: Design.Character;
                          density: Design.Density;
                        }
                        namespace Design {
                          const Character: {
                            readonly Editorial: 'editorial';
                            readonly Research: 'research';
                            readonly Extraction: 'extraction';
                            readonly Directory: 'directory';
                            readonly Storyboard: 'storyboard';
                            readonly Studio: 'studio';
                            readonly Comparison: 'comparison';
                            readonly Planner: 'planner';
                            readonly Estimate: 'estimate';
                            readonly Utility: 'utility';
                          };
                          type Character = (typeof Character)[keyof typeof Character];
                          const Density: {
                            readonly Relaxed: 'relaxed';
                            readonly Compact: 'compact';
                          };
                          type Density = (typeof Density)[keyof typeof Density];
                        }
                        type RuntimeRegions = RuntimeRegions.Item[];
                        namespace RuntimeRegions {
                          interface Item {
                            id: string;
                            sectionId: string;
                            libraryDigest: string;
                            status: Item.Status;
                            artifactId: string | null;
                            tree: Item.Tree | null;
                            inputFields: string[];
                            failure: string | null;
                            model?: string | undefined;
                            inputTokens?: number | undefined;
                            outputTokens?: number | undefined;
                          }
                          namespace Item {
                            const Status: {
                              readonly Generated: 'generated';
                              readonly Ready: 'ready';
                              readonly Unavailable: 'unavailable';
                            };
                            type Status = (typeof Status)[keyof typeof Status];
                            interface Tree {
                              nodes: unknown[];
                            }
                          }
                        }
                        type Sections = Sections.Item[];
                        namespace Sections {
                          interface Item {
                            id: string;
                            kind: Item.Kind;
                            title: string;
                            text: string;
                            items: string[];
                            operationId: string | null;
                          }
                          namespace Item {
                            const Kind: {
                              readonly Message: 'message';
                              readonly List: 'list';
                              readonly Fields: 'fields';
                              readonly Operation: 'operation';
                              readonly Progress: 'progress';
                              readonly Results: 'results';
                              readonly Notice: 'notice';
                            };
                            type Kind = (typeof Kind)[keyof typeof Kind];
                          }
                        }
                        type Next = Next.Item[];
                        namespace Next {
                          interface Item {
                            label: string;
                            intent: string;
                            confidence: number;
                          }
                        }
                      }
                      type RuntimeComponents = RuntimeComponents.Item[];
                      namespace RuntimeComponents {
                        interface Item {
                          id: string;
                          sectionId: string;
                          instructions: string;
                          components: string[];
                          inputFields: string[];
                        }
                      }
                      type ArgumentBindings = ArgumentBindings.Item[];
                      namespace ArgumentBindings {
                        interface Item {
                          field: string;
                          target: string;
                        }
                      }
                      type Bindings = Bindings.Item[];
                      namespace Bindings {
                        interface Item {
                          path: string[];
                          source: Item.Source;
                          field?: string | undefined;
                        }
                        namespace Item {
                          const Source: {
                            readonly Message: 'message';
                            readonly Field: 'field';
                          };
                          type Source = (typeof Source)[keyof typeof Source];
                        }
                      }
                    }
                  }
                }
                type Fields = Fields.Item[];
                namespace Fields {
                  interface Item {
                    name: string;
                    label: string;
                    type: Item.Type;
                    required: boolean;
                    primary?: boolean | undefined;
                    encoding?: Item.Encoding | undefined;
                    options?: string[] | undefined;
                    multiple?: boolean | undefined;
                    description?: string | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                  }
                  namespace Item {
                    const Type: {
                      readonly Text: 'text';
                      readonly Number: 'number';
                      readonly Select: 'select';
                    };
                    type Type = (typeof Type)[keyof typeof Type];
                    const Encoding: {
                      readonly Json: 'json';
                    };
                    type Encoding = (typeof Encoding)[keyof typeof Encoding];
                  }
                }
              }
            }
            interface Execution {
              threadId: string | null;
              turnId: string | null;
              status: Execution.Status;
              evidence: Execution.Evidence.Item[];
            }
            namespace Execution {
              const Status: {
                readonly NotStarted: 'not_started';
                readonly Queued: 'queued';
                readonly Running: 'running';
                readonly Waiting: 'waiting';
                readonly Completed: 'completed';
                readonly Failed: 'failed';
                readonly Cancelled: 'cancelled';
                readonly Unavailable: 'unavailable';
              };
              type Status = (typeof Status)[keyof typeof Status];
              type Evidence = Evidence.Item[];
              namespace Evidence {
                interface Item {
                  id: string;
                  text: string;
                  verification: Item.Verification;
                }
                namespace Item {
                  const Verification: {
                    readonly ProviderReported: 'provider_reported';
                    readonly CriteriaChecked: 'criteria_checked';
                    readonly Observed: 'observed';
                  };
                  type Verification = (typeof Verification)[keyof typeof Verification];
                }
              }
            }
          }
          interface Policy {
            id: string;
            version: number;
            probability: number;
            applied?: Policy.Applied.Item[] | undefined;
          }
          namespace Policy {
            type Applied = Applied.Item[];
            namespace Applied {
              interface Item {
                id: string;
                version: number;
                scope: Item.Scope;
                probability: number;
              }
              namespace Item {
                const Scope: {
                  readonly Global: 'global';
                  readonly Agent: 'agent';
                  readonly User: 'user';
                };
                type Scope = (typeof Scope)[keyof typeof Scope];
              }
            }
          }
          interface Diagnostics {
            model: string;
            generationMs: number;
            inputTokens: number;
            outputTokens: number;
            repairs: number;
            fallback: string | null;
          }
        }
        type Errors = Errors.Item[];
        namespace Errors {
          interface Item {
            event: string;
            code: string;
            retryable: boolean;
            action?: string | undefined;
            createdAt: string;
          }
        }
        type Actions = Actions.Item[];
        namespace Actions {
          interface Item {
            action: string;
            capability: string;
            request: string;
            status: Item.Status;
            cancellationRequested: boolean;
            accepted?: boolean | undefined;
          }
          namespace Item {
            const Status: {
              readonly AwaitingConfirmation: 'awaiting_confirmation';
              readonly Queued: 'queued';
              readonly Running: 'running';
              readonly Waiting: 'waiting';
              readonly Reconciling: 'reconciling';
              readonly Succeeded: 'succeeded';
              readonly Failed: 'failed';
              readonly Cancelled: 'cancelled';
              readonly Withdrawn: 'withdrawn';
            };
            type Status = (typeof Status)[keyof typeof Status];
          }
        }
      }
    }
  }
}
