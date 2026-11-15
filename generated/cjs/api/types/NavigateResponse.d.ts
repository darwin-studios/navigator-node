import type * as Darwin from '../index.js';

export interface NavigateResponse {
  /** Deprecated alias for sessionId. */
  threadId?: string | undefined;
  conversationId: string;
  delivery?: NavigateResponse.Delivery | undefined;
  sessionId?: string | undefined;
  status: NavigateResponse.Status;
  goal: string;
  threadBrief?: string | undefined;
  threadTitle?: string | undefined;
  messages: NavigateResponse.Messages.Item[];
  revisions: NavigateResponse.Revisions.Item[];
  latestRevisionId: string | null;
  quote: NavigateResponse.Quote | null;
  funding: NavigateResponse.Funding | null;
  run: NavigateResponse.Run | null;
  previousRuns: NavigateResponse.PreviousRuns.Item[];
  createdAt: string;
  updatedAt: string;
  conversation?: NavigateResponse.Conversation | undefined;
  agents?: NavigateResponse.Agents.Item[] | undefined;
  /** Private guest token. Send as X-Assist-Token for subsequent requests. */
  conversationToken?: string | undefined;
}
export declare namespace NavigateResponse {
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
                | (Darwin.NavigateResponseDeliveryPresentationExperienceSurfacesItemGeneratedArtifact | null)
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
        artifact?: (Darwin.NavigateResponseDeliveryPresentationGeneratedArtifact | null) | undefined;
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
                      | (Darwin.NavigateResponseDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact | null)
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
  const Status: {
    readonly Planning: 'planning';
    readonly Ready: 'ready';
    readonly Running: 'running';
    readonly Paused: 'paused';
    readonly Completed: 'completed';
    readonly Cancelled: 'cancelled';
  };
  type Status = (typeof Status)[keyof typeof Status];
  type Messages = Messages.Item[];
  namespace Messages {
    interface Item {
      role: Item.Role;
      text: string;
      at: string;
    }
    namespace Item {
      const Role: {
        readonly User: 'user';
        readonly Assist: 'assist';
      };
      type Role = (typeof Role)[keyof typeof Role];
    }
  }
  type Revisions = Revisions.Item[];
  namespace Revisions {
    interface Item {
      revisionId: string;
      createdAt: string;
      searchId: string | null;
      summary: string;
      plan: Item.Plan | null;
      agents: Item.Agents.Item[];
    }
    namespace Item {
      interface Plan {
        goal: string;
        successCriteria: string[];
        steps: Plan.Steps.Item[];
        stoppingPoints: string[];
      }
      namespace Plan {
        type Steps = Steps.Item[];
        namespace Steps {
          interface Item {
            stepId: string;
            objective: string;
            agentId: string;
            operationId: string;
            operationRevision: number;
            alternativeAgentIds: string[];
            dependsOn: string[];
            evidenceRequired: string;
            accessRequired: string[];
            approvalRequired: boolean;
          }
        }
      }
      type Agents = Agents.Item[];
      namespace Agents {
        interface Item {
          agentId: string;
          operationId: string;
          operationRevision: number;
          name: string;
          description: string | null;
          canStartThread: boolean;
          canAttemptThread?: boolean | undefined;
          readiness: Item.Readiness;
        }
        namespace Item {
          const Readiness: {
            readonly Ready: 'ready';
            readonly AuthenticationRequired: 'authentication_required';
            readonly RecheckRequired: 'recheck_required';
            readonly Unavailable: 'unavailable';
          };
          type Readiness = (typeof Readiness)[keyof typeof Readiness];
        }
      }
    }
  }
  interface Quote {
    quoteId: string;
    revisionId: string;
    currency: Quote.Currency;
    totalBudgetMinor: number;
    rateBps: number;
    rateBasis: string;
    maximumExecutionMinor: number;
    maximumFeeMinor: number;
    unallocatedMinor: number;
    createdAt: string;
    expiresAt: string;
    fundingStatus: Quote.FundingStatus;
    cancellationTerms: string;
  }
  namespace Quote {
    const Currency: {
      readonly Usd: 'USD';
    };
    type Currency = (typeof Currency)[keyof typeof Currency];
    const FundingStatus: {
      readonly NotAuthorized: 'not_authorized';
      readonly Authorized: 'authorized';
    };
    type FundingStatus = (typeof FundingStatus)[keyof typeof FundingStatus];
  }
  interface Funding {
    fundingAuthorizationId: string;
    quoteId: string;
    revisionId: string;
    totalBudgetMinor: number;
    currency: Funding.Currency;
    status: Funding.Status;
    createdAt: string;
  }
  namespace Funding {
    const Currency: {
      readonly Usd: 'USD';
    };
    type Currency = (typeof Currency)[keyof typeof Currency];
    const Status: {
      readonly Reserving: 'reserving';
      readonly Reserved: 'reserved';
      readonly Releasing: 'releasing';
      readonly Released: 'released';
    };
    type Status = (typeof Status)[keyof typeof Status];
  }
  interface Run {
    runId: string;
    revisionId: string;
    quoteId: string;
    actingAiId: string | null;
    status: Run.Status;
    startedAt: string;
    settlement: Run.Settlement | null;
    steps: Run.Steps.Item[];
  }
  namespace Run {
    const Status: {
      readonly Starting: 'starting';
      readonly Running: 'running';
      readonly Paused: 'paused';
      readonly Completed: 'completed';
      readonly Cancelled: 'cancelled';
    };
    type Status = (typeof Status)[keyof typeof Status];
    interface Settlement {
      currency: Settlement.Currency;
      executionSpendMinor: number;
      outcomeFeeMinor: number;
      returnedMinor: number;
    }
    namespace Settlement {
      const Currency: {
        readonly Usd: 'USD';
      };
      type Currency = (typeof Currency)[keyof typeof Currency];
    }
    type Steps = Steps.Item[];
    namespace Steps {
      interface Item {
        stepId: string;
        agentId: string;
        operationId: string;
        operationRevision: number;
        status: Item.Status;
        threadId: string | null;
        actRequestId?: string | undefined;
        errorCode: string | null;
        acceptedMessageId?: string | undefined;
        observation?: Item.Observation | undefined;
      }
      namespace Item {
        const Status: {
          readonly Pending: 'pending';
          readonly Starting: 'starting';
          readonly ThreadOpen: 'thread_open';
          readonly Waiting: 'waiting';
          readonly Completed: 'completed';
          readonly Failed: 'failed';
        };
        type Status = (typeof Status)[keyof typeof Status];
        interface Observation {
          readStatus: Observation.ReadStatus;
          needsAttention: boolean;
          pendingRequestIds: string[];
          confirmedResultIds: string[];
        }
        namespace Observation {
          const ReadStatus: {
            readonly Available: 'available';
            readonly Unavailable: 'unavailable';
          };
          type ReadStatus = (typeof ReadStatus)[keyof typeof ReadStatus];
        }
      }
    }
  }
  type PreviousRuns = PreviousRuns.Item[];
  namespace PreviousRuns {
    interface Item {
      run: Item.Run;
      quote: Item.Quote;
    }
    namespace Item {
      interface Run {
        runId: string;
        revisionId: string;
        quoteId: string;
        actingAiId: string | null;
        status: Run.Status;
        startedAt: string;
        settlement: Run.Settlement | null;
        steps: Run.Steps.Item[];
      }
      namespace Run {
        const Status: {
          readonly Starting: 'starting';
          readonly Running: 'running';
          readonly Paused: 'paused';
          readonly Completed: 'completed';
          readonly Cancelled: 'cancelled';
        };
        type Status = (typeof Status)[keyof typeof Status];
        interface Settlement {
          currency: Settlement.Currency;
          executionSpendMinor: number;
          outcomeFeeMinor: number;
          returnedMinor: number;
        }
        namespace Settlement {
          const Currency: {
            readonly Usd: 'USD';
          };
          type Currency = (typeof Currency)[keyof typeof Currency];
        }
        type Steps = Steps.Item[];
        namespace Steps {
          interface Item {
            stepId: string;
            agentId: string;
            operationId: string;
            operationRevision: number;
            status: Item.Status;
            threadId: string | null;
            actRequestId?: string | undefined;
            errorCode: string | null;
            acceptedMessageId?: string | undefined;
            observation?: Item.Observation | undefined;
          }
          namespace Item {
            const Status: {
              readonly Pending: 'pending';
              readonly Starting: 'starting';
              readonly ThreadOpen: 'thread_open';
              readonly Waiting: 'waiting';
              readonly Completed: 'completed';
              readonly Failed: 'failed';
            };
            type Status = (typeof Status)[keyof typeof Status];
            interface Observation {
              readStatus: Observation.ReadStatus;
              needsAttention: boolean;
              pendingRequestIds: string[];
              confirmedResultIds: string[];
            }
            namespace Observation {
              const ReadStatus: {
                readonly Available: 'available';
                readonly Unavailable: 'unavailable';
              };
              type ReadStatus = (typeof ReadStatus)[keyof typeof ReadStatus];
            }
          }
        }
      }
      interface Quote {
        quoteId: string;
        revisionId: string;
        currency: Quote.Currency;
        totalBudgetMinor: number;
        rateBps: number;
        rateBasis: string;
        maximumExecutionMinor: number;
        maximumFeeMinor: number;
        unallocatedMinor: number;
        createdAt: string;
        expiresAt: string;
        fundingStatus: Quote.FundingStatus;
        cancellationTerms: string;
      }
      namespace Quote {
        const Currency: {
          readonly Usd: 'USD';
        };
        type Currency = (typeof Currency)[keyof typeof Currency];
        const FundingStatus: {
          readonly NotAuthorized: 'not_authorized';
          readonly Authorized: 'authorized';
        };
        type FundingStatus = (typeof FundingStatus)[keyof typeof FundingStatus];
      }
    }
  }
  interface Conversation {
    turns: Conversation.Turns.Item[];
    nextBefore: string | null;
    eventCursor: string;
  }
  namespace Conversation {
    type Turns = Turns.Item[];
    namespace Turns {
      interface Item {
        turnId: string;
        presentation?: Item.Presentation | undefined;
        composer?: Item.Composer | undefined;
        target?: Item.Target | undefined;
        clientMessageId: string;
        message: string;
        author?: Item.Author | undefined;
        attachments?: Item.Attachments.Item[] | undefined;
        contextSummary?: string[] | undefined;
        status: Item.Status;
        blocks: Darwin.NavigateResponseConversationTurnsItemBlocksItem[];
        searchResult?: Item.SearchResult | undefined;
        agentCalls?: Item.AgentCalls.Item[] | undefined;
        dataTransfers?: Item.DataTransfers.Item[] | undefined;
        createdAt: string;
        updatedAt: string;
      }
      namespace Item {
        const Presentation: {
          readonly Chat: 'chat';
          readonly Operation: 'operation';
        };
        type Presentation = (typeof Presentation)[keyof typeof Presentation];
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
                    | (Darwin.NavigateResponseConversationTurnsItemComposerExperienceSurfacesItemGeneratedArtifact | null)
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
            artifact?: (Darwin.NavigateResponseConversationTurnsItemComposerGeneratedArtifact | null) | undefined;
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
                          | (Darwin.NavigateResponseConversationTurnsItemComposerFactsOperationsItemExperienceVariantsItemPresentationArtifact | null)
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
        interface Target {
          agentId: string;
          operationId?: string | undefined;
        }
        interface Author {
          type: Author.Type;
          id: string;
          name?: string | undefined;
          via?: Author.Via | undefined;
          viaAgent?: Author.ViaAgent | undefined;
        }
        namespace Author {
          const Type: {
            readonly Human: 'human';
            readonly Agent: 'agent';
            readonly Application: 'application';
          };
          type Type = (typeof Type)[keyof typeof Type];
          const Via: {
            readonly Darwin: 'darwin';
          };
          type Via = (typeof Via)[keyof typeof Via];
          interface ViaAgent {
            id: string;
            name: string;
            handle?: (string | null) | undefined;
          }
        }
        type Attachments = Attachments.Item[];
        namespace Attachments {
          interface Item {
            name: string;
            mimeType: string;
          }
        }
        const Status: {
          readonly Queued: 'queued';
          readonly Running: 'running';
          readonly Waiting: 'waiting';
          readonly Completed: 'completed';
          readonly Failed: 'failed';
          readonly Cancelled: 'cancelled';
        };
        type Status = (typeof Status)[keyof typeof Status];
        interface SearchResult {
          delivery?: SearchResult.Delivery | undefined;
          searchId: string;
          responseId: string;
          previousResponseId: string | null;
          contractVersion: SearchResult.ContractVersion;
          status: SearchResult.Status;
          response: SearchResult.Response;
          searchToken?: string | undefined;
        }
        namespace SearchResult {
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
                        | (Darwin.NavigateResponseConversationTurnsItemSearchResultDeliveryPresentationExperienceSurfacesItemGeneratedArtifact | null)
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
                  | (Darwin.NavigateResponseConversationTurnsItemSearchResultDeliveryPresentationGeneratedArtifact | null)
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
                              | (Darwin.NavigateResponseConversationTurnsItemSearchResultDeliveryPresentationFactsOperationsItemExperienceVariantsItemPresentationArtifact | null)
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
          const ContractVersion: {
            readonly SearchV30: 'search-v3.0';
          };
          type ContractVersion = (typeof ContractVersion)[keyof typeof ContractVersion];
          const Status: {
            readonly Completed: 'completed';
            readonly NeedsInput: 'needs_input';
            readonly NoMatch: 'no_match';
          };
          type Status = (typeof Status)[keyof typeof Status];
          interface Response {
            agents: Response.Agents.Item[];
            assessment?: Response.Assessment | undefined;
            relatedSearches: Response.RelatedSearches.Item[];
            plan?: (Response.Plan | null) | undefined;
            question: string | null;
            noMatchReason: string | null;
            overview?: (string | null) | undefined;
          }
          namespace Response {
            type Agents = Agents.Item[];
            namespace Agents {
              interface Item {
                agentId: string;
                agentSlug: string | null;
                operationId: string;
                operationRevision: number;
                providerFamilyRef: string | null;
                rank: number;
                selected: boolean;
                name: string;
                description: string | null;
                imageUrl?: (string | null) | undefined;
                avatarUrl?: (string | null) | undefined;
                requiredSetup: Item.RequiredSetup | null;
                executionRequirements: Item.ExecutionRequirements | null;
                executionGuidance: Item.ExecutionGuidance | null;
                readiness: Item.Readiness;
                canStartThread: boolean;
                canAttemptThread?: boolean | undefined;
                reasons: string[];
                uncertainties: string[];
                inquiry?: Item.Inquiry | undefined;
                providerCheck: Item.ProviderCheck;
                connectionMethods: Item.ConnectionMethods.Item[];
                connectionPrompt: string;
              }
              namespace Item {
                interface RequiredSetup {
                  kind: RequiredSetup.Kind;
                  suppliedBy: RequiredSetup.SuppliedBy;
                  description: string;
                }
                namespace RequiredSetup {
                  const Kind: {
                    readonly Credential: 'credential';
                    readonly Installation: 'installation';
                    readonly ProviderConfiguration: 'provider_configuration';
                  };
                  type Kind = (typeof Kind)[keyof typeof Kind];
                  const SuppliedBy: {
                    readonly User: 'user';
                    readonly Provider: 'provider';
                    readonly Runtime: 'runtime';
                  };
                  type SuppliedBy = (typeof SuppliedBy)[keyof typeof SuppliedBy];
                }
                interface ExecutionRequirements {
                  contractVersion: ExecutionRequirements.ContractVersion;
                  providerAuthentication: ExecutionRequirements.ProviderAuthentication;
                  operationCredentials: ExecutionRequirements.OperationCredentials;
                  runtime: ExecutionRequirements.Runtime;
                  payment: ExecutionRequirements.Payment;
                  browser: ExecutionRequirements.Browser;
                  providerContract: ExecutionRequirements.ProviderContract;
                  providerBlockers: ExecutionRequirements.ProviderBlockers.Item[];
                  derivation: ExecutionRequirements.Derivation;
                }
                namespace ExecutionRequirements {
                  const ContractVersion: {
                    readonly One00: '1.0.0';
                  };
                  type ContractVersion = (typeof ContractVersion)[keyof typeof ContractVersion];
                  interface ProviderAuthentication {
                    state: ProviderAuthentication.State;
                    mechanisms: ProviderAuthentication.Mechanisms.Item[];
                    placements: ProviderAuthentication.Placements.Item[];
                    scopes: string[];
                    evidence: ProviderAuthentication.Evidence;
                  }
                  namespace ProviderAuthentication {
                    const State: {
                      readonly Required: 'REQUIRED';
                      readonly NotRequired: 'NOT_REQUIRED';
                      readonly Unknown: 'UNKNOWN';
                      readonly NotApplicable: 'NOT_APPLICABLE';
                    };
                    type State = (typeof State)[keyof typeof State];
                    type Mechanisms = Mechanisms.Item[];
                    namespace Mechanisms {
                      const Item: {
                        readonly Bearer: 'BEARER';
                        readonly ApiKey: 'API_KEY';
                        readonly Oauth2: 'OAUTH2';
                        readonly HttpBasic: 'HTTP_BASIC';
                        readonly MutualTls: 'MUTUAL_TLS';
                        readonly SignedRequest: 'SIGNED_REQUEST';
                        readonly SessionCookie: 'SESSION_COOKIE';
                        readonly OperationSecretInput: 'OPERATION_SECRET_INPUT';
                        readonly Unspecified: 'UNSPECIFIED';
                      };
                      type Item = (typeof Item)[keyof typeof Item];
                    }
                    type Placements = Placements.Item[];
                    namespace Placements {
                      const Item: {
                        readonly Header: 'HEADER';
                        readonly Query: 'QUERY';
                        readonly Cookie: 'COOKIE';
                        readonly Body: 'BODY';
                        readonly ToolArgument: 'TOOL_ARGUMENT';
                        readonly Environment: 'ENVIRONMENT';
                        readonly AuthContinuation: 'AUTH_CONTINUATION';
                      };
                      type Item = (typeof Item)[keyof typeof Item];
                    }
                    const Evidence: {
                      readonly ProviderDeclared: 'PROVIDER_DECLARED';
                      readonly ProviderObserved: 'PROVIDER_OBSERVED';
                      readonly DerivedFromVerifiedReceipt: 'DERIVED_FROM_VERIFIED_RECEIPT';
                      readonly Unknown: 'UNKNOWN';
                    };
                    type Evidence = (typeof Evidence)[keyof typeof Evidence];
                  }
                  interface OperationCredentials {
                    state: OperationCredentials.State;
                    sensitiveInputNames: string[];
                  }
                  namespace OperationCredentials {
                    const State: {
                      readonly Required: 'REQUIRED';
                      readonly NotRequired: 'NOT_REQUIRED';
                      readonly Unknown: 'UNKNOWN';
                      readonly NotApplicable: 'NOT_APPLICABLE';
                    };
                    type State = (typeof State)[keyof typeof State];
                  }
                  interface Runtime {
                    kind: Runtime.Kind;
                    package: Runtime.Package | null;
                    requiredEnvironmentNames: string[];
                  }
                  namespace Runtime {
                    const Kind: {
                      readonly RemoteMcp: 'REMOTE_MCP';
                      readonly LocalStdio: 'LOCAL_STDIO';
                      readonly A2AJsonrpc: 'A2A_JSONRPC';
                      readonly HttpJson: 'HTTP_JSON';
                      readonly OpenapiHttp: 'OPENAPI_HTTP';
                      readonly BoundedFetch: 'BOUNDED_FETCH';
                      readonly Browser: 'BROWSER';
                      readonly X402Payment: 'X402_PAYMENT';
                      readonly Commerce: 'COMMERCE';
                      readonly Unsupported: 'UNSUPPORTED';
                    };
                    type Kind = (typeof Kind)[keyof typeof Kind];
                    interface Package {
                      ecosystem: string;
                      identifier: string;
                      version: string;
                      runtimeProfile: string;
                    }
                  }
                  interface Payment {
                    state: Payment.State;
                    termsDigest: string | null;
                  }
                  namespace Payment {
                    const State: {
                      readonly Required: 'REQUIRED';
                      readonly NotRequired: 'NOT_REQUIRED';
                      readonly Unknown: 'UNKNOWN';
                      readonly NotApplicable: 'NOT_APPLICABLE';
                    };
                    type State = (typeof State)[keyof typeof State];
                  }
                  interface Browser {
                    state: Browser.State;
                    sessionKind: Browser.SessionKind | null;
                  }
                  namespace Browser {
                    const State: {
                      readonly Required: 'REQUIRED';
                      readonly NotRequired: 'NOT_REQUIRED';
                      readonly Unknown: 'UNKNOWN';
                      readonly NotApplicable: 'NOT_APPLICABLE';
                    };
                    type State = (typeof State)[keyof typeof State];
                    const SessionKind: {
                      readonly Anonymous: 'ANONYMOUS';
                      readonly ProviderSession: 'PROVIDER_SESSION';
                      readonly Unknown: 'UNKNOWN';
                    };
                    type SessionKind = (typeof SessionKind)[keyof typeof SessionKind];
                  }
                  interface ProviderContract {
                    route: ProviderContract.Route;
                    inputSchema: ProviderContract.InputSchema;
                    outputSchema: ProviderContract.OutputSchema;
                  }
                  namespace ProviderContract {
                    const Route: {
                      readonly Resolved: 'RESOLVED';
                      readonly Missing: 'MISSING';
                      readonly Ambiguous: 'AMBIGUOUS';
                      readonly Unsafe: 'UNSAFE';
                      readonly Unsupported: 'UNSUPPORTED';
                      readonly Unknown: 'UNKNOWN';
                    };
                    type Route = (typeof Route)[keyof typeof Route];
                    const InputSchema: {
                      readonly Concrete: 'CONCRETE';
                      readonly DigestOnly: 'DIGEST_ONLY';
                      readonly Missing: 'MISSING';
                      readonly Unknown: 'UNKNOWN';
                    };
                    type InputSchema = (typeof InputSchema)[keyof typeof InputSchema];
                    const OutputSchema: {
                      readonly Concrete: 'CONCRETE';
                      readonly DigestOnly: 'DIGEST_ONLY';
                      readonly Missing: 'MISSING';
                      readonly Unknown: 'UNKNOWN';
                    };
                    type OutputSchema = (typeof OutputSchema)[keyof typeof OutputSchema];
                  }
                  type ProviderBlockers = ProviderBlockers.Item[];
                  namespace ProviderBlockers {
                    interface Item {
                      code: Item.Code;
                      owner: Item.Owner;
                    }
                    namespace Item {
                      const Code: {
                        readonly ProviderRouteUnsupported: 'PROVIDER_ROUTE_UNSUPPORTED';
                        readonly ProviderSchemaMissing: 'PROVIDER_SCHEMA_MISSING';
                        readonly ProviderAuthSchemeUnspecified: 'PROVIDER_AUTH_SCHEME_UNSPECIFIED';
                        readonly ProviderMetadataIncomplete: 'PROVIDER_METADATA_INCOMPLETE';
                        readonly DarwinAdapterUnavailable: 'DARWIN_ADAPTER_UNAVAILABLE';
                        readonly DarwinRouteNotApproved: 'DARWIN_ROUTE_NOT_APPROVED';
                        readonly DarwinLocalRuntimeUnavailable: 'DARWIN_LOCAL_RUNTIME_UNAVAILABLE';
                        readonly DarwinBrowserRuntimeUnavailable: 'DARWIN_BROWSER_RUNTIME_UNAVAILABLE';
                        readonly DarwinPaymentRuntimeUnavailable: 'DARWIN_PAYMENT_RUNTIME_UNAVAILABLE';
                      };
                      type Code = (typeof Code)[keyof typeof Code];
                      const Owner: {
                        readonly Provider: 'PROVIDER';
                        readonly Darwin: 'DARWIN';
                      };
                      type Owner = (typeof Owner)[keyof typeof Owner];
                    }
                  }
                  interface Derivation {
                    normalizerVersion: Derivation.NormalizerVersion;
                    sourceRevision: string;
                    sourceReceiptDigest: string | null;
                    completeness: Derivation.Completeness;
                    derivationKey: string;
                  }
                  namespace Derivation {
                    const NormalizerVersion: {
                      readonly ExecutionRequirementsV1: 'execution-requirements-v1';
                    };
                    type NormalizerVersion = (typeof NormalizerVersion)[keyof typeof NormalizerVersion];
                    const Completeness: {
                      readonly Complete: 'COMPLETE';
                      readonly Partial: 'PARTIAL';
                    };
                    type Completeness = (typeof Completeness)[keyof typeof Completeness];
                  }
                }
                interface ExecutionGuidance {
                  credentialSummaryCode: string;
                  credentialSummary: string;
                  setupSummaryCode: string;
                  setupSummary: string;
                  recordBlockers: ExecutionGuidance.RecordBlockers.Item[];
                  primaryBlockerCode: ExecutionGuidance.PrimaryBlockerCode | null;
                  rendererVersion: ExecutionGuidance.RendererVersion;
                }
                namespace ExecutionGuidance {
                  type RecordBlockers = RecordBlockers.Item[];
                  namespace RecordBlockers {
                    interface Item {
                      code: Item.Code;
                      owner: Item.Owner;
                    }
                    namespace Item {
                      const Code: {
                        readonly ProviderRouteUnsupported: 'PROVIDER_ROUTE_UNSUPPORTED';
                        readonly ProviderSchemaMissing: 'PROVIDER_SCHEMA_MISSING';
                        readonly ProviderAuthSchemeUnspecified: 'PROVIDER_AUTH_SCHEME_UNSPECIFIED';
                        readonly ProviderMetadataIncomplete: 'PROVIDER_METADATA_INCOMPLETE';
                        readonly DarwinAdapterUnavailable: 'DARWIN_ADAPTER_UNAVAILABLE';
                        readonly DarwinRouteNotApproved: 'DARWIN_ROUTE_NOT_APPROVED';
                        readonly DarwinLocalRuntimeUnavailable: 'DARWIN_LOCAL_RUNTIME_UNAVAILABLE';
                        readonly DarwinBrowserRuntimeUnavailable: 'DARWIN_BROWSER_RUNTIME_UNAVAILABLE';
                        readonly DarwinPaymentRuntimeUnavailable: 'DARWIN_PAYMENT_RUNTIME_UNAVAILABLE';
                      };
                      type Code = (typeof Code)[keyof typeof Code];
                      const Owner: {
                        readonly Provider: 'PROVIDER';
                        readonly Darwin: 'DARWIN';
                      };
                      type Owner = (typeof Owner)[keyof typeof Owner];
                    }
                  }
                  const PrimaryBlockerCode: {
                    readonly ProviderRouteUnsupported: 'PROVIDER_ROUTE_UNSUPPORTED';
                    readonly ProviderSchemaMissing: 'PROVIDER_SCHEMA_MISSING';
                    readonly ProviderAuthSchemeUnspecified: 'PROVIDER_AUTH_SCHEME_UNSPECIFIED';
                    readonly ProviderMetadataIncomplete: 'PROVIDER_METADATA_INCOMPLETE';
                    readonly DarwinAdapterUnavailable: 'DARWIN_ADAPTER_UNAVAILABLE';
                    readonly DarwinRouteNotApproved: 'DARWIN_ROUTE_NOT_APPROVED';
                    readonly DarwinLocalRuntimeUnavailable: 'DARWIN_LOCAL_RUNTIME_UNAVAILABLE';
                    readonly DarwinBrowserRuntimeUnavailable: 'DARWIN_BROWSER_RUNTIME_UNAVAILABLE';
                    readonly DarwinPaymentRuntimeUnavailable: 'DARWIN_PAYMENT_RUNTIME_UNAVAILABLE';
                  };
                  type PrimaryBlockerCode = (typeof PrimaryBlockerCode)[keyof typeof PrimaryBlockerCode];
                  const RendererVersion: {
                    readonly ExecutionGuidanceV1: 'execution-guidance-v1';
                  };
                  type RendererVersion = (typeof RendererVersion)[keyof typeof RendererVersion];
                }
                const Readiness: {
                  readonly Ready: 'ready';
                  readonly AuthenticationRequired: 'authentication_required';
                  readonly RecheckRequired: 'recheck_required';
                  readonly Unavailable: 'unavailable';
                };
                type Readiness = (typeof Readiness)[keyof typeof Readiness];
                interface Inquiry {
                  status: Inquiry.Status;
                  fit?: Inquiry.Fit | undefined;
                  expiresAt?: string | undefined;
                  threadId?: string | undefined;
                  question: string;
                  replies: Inquiry.Replies.Item[];
                  description?: string | undefined;
                  reason?: string | undefined;
                }
                namespace Inquiry {
                  const Status: {
                    readonly Contacting: 'contacting';
                    readonly Waiting: 'waiting';
                    readonly FollowingUp: 'following_up';
                    readonly Replied: 'replied';
                    readonly NeedsInput: 'needs_input';
                    readonly NoReply: 'no_reply';
                    readonly NotContacted: 'not_contacted';
                    readonly OutcomeUnknown: 'outcome_unknown';
                  };
                  type Status = (typeof Status)[keyof typeof Status];
                  const Fit: {
                    readonly Matches: 'matches';
                    readonly Partial: 'partial';
                    readonly NotFit: 'not_fit';
                    readonly Unknown: 'unknown';
                  };
                  type Fit = (typeof Fit)[keyof typeof Fit];
                  type Replies = Replies.Item[];
                  namespace Replies {
                    interface Item {
                      messageId: string;
                      text: string;
                      at: string;
                    }
                  }
                }
                const ProviderCheck: {
                  readonly NotAttempted: 'not_attempted';
                  readonly Confirmed: 'confirmed';
                  readonly Unconfirmed: 'unconfirmed';
                  readonly Unavailable: 'unavailable';
                };
                type ProviderCheck = (typeof ProviderCheck)[keyof typeof ProviderCheck];
                type ConnectionMethods = ConnectionMethods.Item[];
                namespace ConnectionMethods {
                  interface Item {
                    protocol: Item.Protocol;
                    environment: Item.Environment;
                    endpointUrl: string | null;
                    endpointStatus: Item.EndpointStatus;
                    documentationUrl: string;
                  }
                  namespace Item {
                    const Protocol: {
                      readonly Mcp: 'MCP';
                      readonly A2A: 'A2A';
                      readonly Webmcp: 'WEBMCP';
                    };
                    type Protocol = (typeof Protocol)[keyof typeof Protocol];
                    const Environment: {
                      readonly RemoteClient: 'remote_client';
                      readonly BrowserSession: 'browser_session';
                    };
                    type Environment = (typeof Environment)[keyof typeof Environment];
                    const EndpointStatus: {
                      readonly NotPublished: 'not_published';
                      readonly Verified: 'verified';
                    };
                    type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];
                  }
                }
              }
            }
            interface Assessment {
              outcome: Assessment.Outcome;
              explanation: string;
            }
            namespace Assessment {
              const Outcome: {
                readonly Strong: 'strong';
                readonly Partial: 'partial';
                readonly Clarify: 'clarify';
                readonly NoMatch: 'no_match';
                readonly Unverified: 'unverified';
              };
              type Outcome = (typeof Outcome)[keyof typeof Outcome];
            }
            type RelatedSearches = RelatedSearches.Item[];
            namespace RelatedSearches {
              interface Item {
                query: string;
                reason: string;
              }
            }
            interface Plan {
              steps: Plan.Steps.Item[];
            }
            namespace Plan {
              type Steps = Steps.Item[];
              namespace Steps {
                interface Item {
                  stepId: string;
                  agentId: string;
                  operationId: string;
                  objective: string;
                  dependsOn: string[];
                  alternatives?: Item.Alternatives.Item[] | undefined;
                }
                namespace Item {
                  type Alternatives = Alternatives.Item[];
                  namespace Alternatives {
                    interface Item {
                      agentId: string;
                      operationId: string;
                    }
                  }
                }
              }
            }
          }
        }
        type AgentCalls = AgentCalls.Item[];
        namespace AgentCalls {
          interface Item {
            id: string;
            agentId: string;
            name: string;
            operationId: string;
            status: Item.Status;
            stepId?: string | undefined;
            threadId?: string | undefined;
            dependsOn?: string[] | undefined;
            searchId?: string | undefined;
            matchCount?: number | undefined;
          }
          namespace Item {
            const Status: {
              readonly Ready: 'ready';
              readonly Running: 'running';
              readonly Waiting: 'waiting';
              readonly Completed: 'completed';
              readonly Failed: 'failed';
              readonly Cancelled: 'cancelled';
            };
            type Status = (typeof Status)[keyof typeof Status];
          }
        }
        type DataTransfers = DataTransfers.Item[];
        namespace DataTransfers {
          interface Item {
            id: string;
            stepId: string;
            digest: string;
            agentId: string;
            operationId: string;
            name: string;
            reason: Item.Reason;
            status: Item.Status;
            sourceStepIds: string[];
          }
          namespace Item {
            const Reason: {
              readonly PrivateContext: 'private_context';
              readonly NewRecipient: 'new_recipient';
            };
            type Reason = (typeof Reason)[keyof typeof Reason];
            const Status: {
              readonly Pending: 'pending';
              readonly Approved: 'approved';
              readonly Denied: 'denied';
              readonly Superseded: 'superseded';
            };
            type Status = (typeof Status)[keyof typeof Status];
          }
        }
      }
    }
  }
  type Agents = Agents.Item[];
  namespace Agents {
    interface Item {
      agentId: string;
      name: string;
      imageUrl?: (string | null) | undefined;
      status: Item.Status;
      operationThreadIds: string[];
    }
    namespace Item {
      const Status: {
        readonly Working: 'working';
        readonly Queued: 'queued';
        readonly Waiting: 'waiting';
        readonly Idle: 'idle';
        readonly Failed: 'failed';
        readonly Cancelled: 'cancelled';
        readonly Connected: 'connected';
        readonly Unknown: 'unknown';
      };
      type Status = (typeof Status)[keyof typeof Status];
    }
  }
}
