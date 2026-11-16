import type * as Darwin from '../index.js';

export type BuildRequestBodyZero =
  | Darwin.BuildRequestBodyZero.ListTemplates
  | Darwin.BuildRequestBodyZero.GetTemplate
  | Darwin.BuildRequestBodyZero.BillingSummary
  | Darwin.BuildRequestBodyZero.SearchIndex
  | Darwin.BuildRequestBodyZero.ImportIndex
  | Darwin.BuildRequestBodyZero.ListNodes
  | Darwin.BuildRequestBodyZero.GetNode
  | Darwin.BuildRequestBodyZero.ValidateExecutionPlan
  | Darwin.BuildRequestBodyZero.StartDraft
  | Darwin.BuildRequestBodyZero.GenerateDraft
  | Darwin.BuildRequestBodyZero.ImportPackage
  | Darwin.BuildRequestBodyZero.ImportSource
  | Darwin.BuildRequestBodyZero.SaveDraft
  | Darwin.BuildRequestBodyZero.GetDraft
  | Darwin.BuildRequestBodyZero.ListDrafts
  | Darwin.BuildRequestBodyZero.StartTest
  | Darwin.BuildRequestBodyZero.GetJob
  | Darwin.BuildRequestBodyZero.ResumeJob
  | Darwin.BuildRequestBodyZero.CancelJob
  | Darwin.BuildRequestBodyZero.CheckSlug
  | Darwin.BuildRequestBodyZero.ValidateDraft
  | Darwin.BuildRequestBodyZero.ExportDestination
  | Darwin.BuildRequestBodyZero.ExportDraft;
export declare namespace BuildRequestBodyZero {
  interface ListTemplates {
    action: 'list_templates';
  }
  interface GetTemplate {
    action: 'get_template';
    slug: string;
  }
  interface BillingSummary {
    action: 'billing_summary';
  }
  interface SearchIndex {
    action: 'search_index';
    query: string;
  }
  interface ImportIndex {
    action: 'import_index';
    agentId: string;
  }
  interface ListNodes {
    action: 'list_nodes';
    query?: string | undefined;
    offset?: number | undefined;
  }
  interface GetNode {
    action: 'get_node';
    nodeId: string;
  }
  interface ValidateExecutionPlan {
    action: 'validate_execution_plan';
    draftId: string;
    revision: number;
    operationId: string;
  }
  interface StartDraft {
    action: 'start_draft';
    input: Darwin.BuildRequestBodyZeroStartDraftInput;
  }
  interface GenerateDraft {
    action: 'generate_draft';
    message: string;
    draft: BuildRequestBodyZeroGenerateDraft.Draft;
  }
  namespace BuildRequestBodyZeroGenerateDraft {
    interface Draft {
      schemaVersion: number;
      technicalLevel?: Draft.TechnicalLevel | undefined;
      identity: Draft.Identity;
      visibility?: Draft.Visibility | undefined;
      hosting?: Draft.Hosting | undefined;
      sources?: Draft.Sources.Item[] | undefined;
      files?: Draft.Files.Item[] | undefined;
      operations?: Draft.Operations.Item[] | undefined;
      appearance?: Draft.Appearance | undefined;
      authentication?: Draft.Authentication | undefined;
      billing?: Draft.Billing | undefined;
      advertising?: Draft.Advertising | undefined;
      analytics?: Draft.Analytics | undefined;
      connections?: Draft.Connections.Item[] | undefined;
      distribution?: Draft.Distribution.Item[] | undefined;
      messages?: Draft.Messages.Item[] | undefined;
    }
    namespace Draft {
      const TechnicalLevel: {
        readonly Unspecified: 'unspecified';
        readonly Guided: 'guided';
        readonly Standard: 'standard';
        readonly Advanced: 'advanced';
      };
      type TechnicalLevel = (typeof TechnicalLevel)[keyof typeof TechnicalLevel];
      interface Identity {
        name?: string | undefined;
        slug?: string | undefined;
        description?: string | undefined;
        purpose?: string | undefined;
        creationContext?: Identity.CreationContext | undefined;
        logo?: string | undefined;
        sphere?: string | undefined;
        audience?: Identity.Audience | undefined;
        humanIcp?: string | undefined;
        agentIcp?: string | undefined;
        intendedUses?: string | undefined;
        exclusions?: string | undefined;
        publisher?: string | undefined;
        website?: string | undefined;
        support?: string | undefined;
        languages?: string[] | undefined;
        regions?: string[] | undefined;
        category?: Identity.Category | undefined;
        secondaryCategories?: Identity.SecondaryCategories.Item[] | undefined;
        privacyUrl?: string | undefined;
        termsUrl?: string | undefined;
      }
      namespace Identity {
        const CreationContext: {
          readonly Unspecified: 'unspecified';
          readonly Personal: 'personal';
          readonly BusinessIdea: 'business_idea';
          readonly DigitalProduct: 'digital_product';
          readonly PhysicalService: 'physical_service';
        };
        type CreationContext = (typeof CreationContext)[keyof typeof CreationContext];
        const Audience: {
          readonly Humans: 'humans';
          readonly Agents: 'agents';
          readonly Both: 'both';
        };
        type Audience = (typeof Audience)[keyof typeof Audience];
        const Category: {
          readonly BusinessProductivity: 'Business & Productivity';
          readonly ResearchData: 'Research & Data';
          readonly DeveloperTools: 'Developer Tools';
          readonly SalesMarketing: 'Sales & Marketing';
          readonly ShoppingCommerce: 'Shopping & Commerce';
          readonly LocalServicesBooking: 'Local Services & Booking';
          readonly FinanceAdministration: 'Finance & Administration';
          readonly CreativeMedia: 'Creative & Media';
          readonly Education: 'Education';
          readonly HealthWellness: 'Health & Wellness';
          readonly TravelHospitality: 'Travel & Hospitality';
          readonly PersonalLifestyle: 'Personal & Lifestyle';
          readonly CommunicationCommunity: 'Communication & Community';
          readonly Other: 'Other';
        };
        type Category = (typeof Category)[keyof typeof Category];
        type SecondaryCategories = SecondaryCategories.Item[];
        namespace SecondaryCategories {
          const Item: {
            readonly BusinessProductivity: 'Business & Productivity';
            readonly ResearchData: 'Research & Data';
            readonly DeveloperTools: 'Developer Tools';
            readonly SalesMarketing: 'Sales & Marketing';
            readonly ShoppingCommerce: 'Shopping & Commerce';
            readonly LocalServicesBooking: 'Local Services & Booking';
            readonly FinanceAdministration: 'Finance & Administration';
            readonly CreativeMedia: 'Creative & Media';
            readonly Education: 'Education';
            readonly HealthWellness: 'Health & Wellness';
            readonly TravelHospitality: 'Travel & Hospitality';
            readonly PersonalLifestyle: 'Personal & Lifestyle';
            readonly CommunicationCommunity: 'Communication & Community';
            readonly Other: 'Other';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
      }
      const Visibility: {
        readonly Private: 'private';
      };
      type Visibility = (typeof Visibility)[keyof typeof Visibility];
      const Hosting: {
        readonly Existing: 'existing';
        readonly Darwin: 'darwin';
        readonly Custom: 'custom';
      };
      type Hosting = (typeof Hosting)[keyof typeof Hosting];
      type Sources = Sources.Item[];
      namespace Sources {
        interface Item {
          id: string;
          kind: string;
          locator: string;
          evidence: string;
          assumptions: string[];
        }
      }
      type Files = Files.Item[];
      namespace Files {
        interface Item {
          path: string;
          content: string;
          mediaType?: string | undefined;
        }
      }
      type Operations = Operations.Item[];
      namespace Operations {
        interface Item {
          id: string;
          name: string;
          description?: string | undefined;
          examples?: string[] | undefined;
          guidance?: Item.Guidance | undefined;
          experience?: Item.Experience | undefined;
          customer?: Item.Customer | undefined;
          inputSchema?: Record<string, unknown> | undefined;
          outputSchema?: Record<string, unknown> | undefined;
          acceptsFiles?: boolean | undefined;
          executionPlan?: Item.ExecutionPlan | undefined;
          implementation: Item.Implementation;
          connectionIds?: string[] | undefined;
          secretRefs?: string[] | undefined;
          effects?: Item.Effects | undefined;
          permissions?: string[] | undefined;
          approval?: Item.Approval | undefined;
          limits?: Item.Limits | undefined;
          pricing?: Darwin.BuildRequestBodyZeroGenerateDraftDraftOperationsItemPricing | undefined;
          tests?: Item.Tests.Item[] | undefined;
        }
        namespace Item {
          interface Guidance {
            openingQuestion?: string | undefined;
            primaryAction?: string | undefined;
            context?: string | undefined;
            afterInput?: string | undefined;
            success?: string | undefined;
            recovery?: string | undefined;
          }
          interface Experience {
            version: number;
            revision: number;
            initialState: string;
            instructions?: string | undefined;
            states: Experience.States.Item[];
            variants: Experience.Variants.Item[];
          }
          namespace Experience {
            type States = States.Item[];
            namespace States {
              interface Item {
                id: string;
                description: string;
                instructions?: string | undefined;
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
                instructions?: string | undefined;
                modalities?: Item.Modalities.Item[] | undefined;
                presentation: Item.Presentation;
                runtimeComponents?: Item.RuntimeComponents.Item[] | undefined;
                argumentBindings?: Item.ArgumentBindings.Item[] | undefined;
                bindings?: Item.Bindings.Item[] | undefined;
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
                    | (Darwin.BuildRequestBodyZeroGenerateDraftDraftOperationsItemExperienceVariantsItemPresentationArtifact | null)
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
                      kind?: Action.Kind | undefined;
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
                    components?: string[] | undefined;
                    inputFields?: string[] | undefined;
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
          const Customer: {
            readonly Humans: 'humans';
            readonly Agents: 'agents';
            readonly Both: 'both';
          };
          type Customer = (typeof Customer)[keyof typeof Customer];
          interface ExecutionPlan {
            version: number;
            authoring?: ExecutionPlan.Authoring | undefined;
            runtime?: ExecutionPlan.Runtime | undefined;
            nodes?: ExecutionPlan.Nodes.Item[] | undefined;
          }
          namespace ExecutionPlan {
            const Authoring: {
              readonly Guided: 'guided';
              readonly Nodes: 'nodes';
              readonly Code: 'code';
              readonly Endpoint: 'endpoint';
            };
            type Authoring = (typeof Authoring)[keyof typeof Authoring];
            interface Runtime {
              language?: Runtime.Language | undefined;
              entrypoint?: string | undefined;
              dockerfile?: string | undefined;
            }
            namespace Runtime {
              const Language: {
                readonly Typescript: 'typescript';
                readonly Python: 'python';
                readonly Docker: 'docker';
              };
              type Language = (typeof Language)[keyof typeof Language];
            }
            type Nodes = Nodes.Item[];
            namespace Nodes {
              interface Item {
                id: string;
                nodeId: string;
                nodeVersion: string;
                group: string;
                input?: Record<string, unknown> | undefined;
              }
            }
          }
          interface Implementation {
            kind: Implementation.Kind;
            source?: string | undefined;
            endpoint?: string | undefined;
            method?: Implementation.Method | undefined;
            language?: string | undefined;
            steps?: Implementation.Steps.Item[] | undefined;
            dependencies?: string[] | undefined;
          }
          namespace Implementation {
            const Kind: {
              readonly Api: 'api';
              readonly Tool: 'tool';
              readonly Workflow: 'workflow';
              readonly Typescript: 'typescript';
              readonly Model: 'model';
              readonly Data: 'data';
              readonly File: 'file';
              readonly Human: 'human';
              readonly Browser: 'browser';
            };
            type Kind = (typeof Kind)[keyof typeof Kind];
            const Method: {
              readonly Get: 'GET';
              readonly Post: 'POST';
              readonly Put: 'PUT';
              readonly Patch: 'PATCH';
              readonly Delete: 'DELETE';
            };
            type Method = (typeof Method)[keyof typeof Method];
            type Steps = Steps.Item[];
            namespace Steps {
              interface Item {
                id: string;
                name: string;
                kind: string;
                configuration: Record<string, unknown>;
              }
            }
          }
          const Effects: {
            readonly Read: 'read';
            readonly Write: 'write';
            readonly Mixed: 'mixed';
          };
          type Effects = (typeof Effects)[keyof typeof Effects];
          const Approval: {
            readonly Always: 'always';
            readonly Writes: 'writes';
            readonly None: 'none';
          };
          type Approval = (typeof Approval)[keyof typeof Approval];
          interface Limits {
            timeoutSeconds?: number | undefined;
            retries?: number | undefined;
          }
          type Tests = Tests.Item[];
          namespace Tests {
            interface Item {
              id: string;
              name: string;
              input: Record<string, unknown>;
              expected?: unknown | undefined;
            }
          }
        }
      }
      interface Appearance {
        source?: Appearance.Source | undefined;
        library?: Appearance.Library | undefined;
        instructions?: string | undefined;
        generationBrief?: string | undefined;
        brand?: Appearance.Brand | undefined;
        loading?: Appearance.Loading | undefined;
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
                instructions?: string | undefined;
              }
            }
          }
        }
        interface Brand {
          primary?: string | undefined;
          secondary?: string | undefined;
          background?: string | undefined;
          foreground?: string | undefined;
          font?: Brand.Font | undefined;
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
          kind?: Loading.Kind | undefined;
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
      }
      interface Authentication {
        mode?: Authentication.Mode | undefined;
        humanProviders?: Authentication.HumanProviders.Item[] | undefined;
        agentCredentials?: Authentication.AgentCredentials.Item[] | undefined;
      }
      namespace Authentication {
        const Mode: {
          readonly Optional: 'optional';
          readonly Required: 'required';
        };
        type Mode = (typeof Mode)[keyof typeof Mode];
        type HumanProviders = HumanProviders.Item[];
        namespace HumanProviders {
          const Item: {
            readonly Darwin: 'darwin';
            readonly Google: 'google';
            readonly Apple: 'apple';
            readonly Email: 'email';
            readonly Phone: 'phone';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
        type AgentCredentials = AgentCredentials.Item[];
        namespace AgentCredentials {
          const Item: {
            readonly Oauth: 'oauth';
            readonly ServiceAccount: 'service_account';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
      }
      interface Billing {
        acceptedMethods?: Billing.AcceptedMethods.Item[] | undefined;
        processor?: Billing.Processor | undefined;
        provider?: string | undefined;
        connectionRef?: string | undefined;
        checkoutUrl?: string | undefined;
        existingSystem?: Billing.ExistingSystem | undefined;
      }
      namespace Billing {
        type AcceptedMethods = AcceptedMethods.Item[];
        namespace AcceptedMethods {
          const Item: {
            readonly Card: 'card';
            readonly Bank: 'bank';
            readonly Link: 'link';
            readonly ApplePay: 'apple_pay';
            readonly GooglePay: 'google_pay';
            readonly DarwinWallet: 'darwin_wallet';
            readonly Mpp: 'mpp';
            readonly X402: 'x402';
            readonly Spt: 'spt';
            readonly Ucp: 'ucp';
            readonly Acp: 'acp';
            readonly StripeDynamic: 'stripe_dynamic';
            readonly HostedCheckout: 'hosted_checkout';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
        const Processor: {
          readonly Unconfigured: 'unconfigured';
          readonly Darwin: 'darwin';
          readonly Existing: 'existing';
        };
        type Processor = (typeof Processor)[keyof typeof Processor];
        const ExistingSystem: {
          readonly OnlineCheckout: 'online_checkout';
          readonly PointOfSale: 'point_of_sale';
          readonly CommercePlatform: 'commerce_platform';
          readonly Invoicing: 'invoicing';
          readonly Custom: 'custom';
        };
        type ExistingSystem = (typeof ExistingSystem)[keyof typeof ExistingSystem];
      }
      interface Advertising {
        enabled?: boolean | undefined;
        audience?: string | undefined;
        regions?: string | undefined;
        languages?: string | undefined;
        keywords?: string[] | undefined;
        negativeKeywords?: string[] | undefined;
        match?: Advertising.Match | undefined;
        objective?: Advertising.Objective | undefined;
        bidModel?: Advertising.BidModel | undefined;
        bidCredits?: (number | null) | undefined;
        dailyBudgetCredits?: (number | null) | undefined;
        totalBudgetCredits?: (number | null) | undefined;
        conversion?: Advertising.Conversion | undefined;
        operationId?: string | undefined;
        economics?: Advertising.Economics | undefined;
        externalChannels?: Advertising.ExternalChannels.Item[] | undefined;
        otherChannel?: string | undefined;
        externalMonthlyBudgetCredits?: (number | null) | undefined;
      }
      namespace Advertising {
        const Match: {
          readonly Exact: 'exact';
          readonly Phrase: 'phrase';
          readonly Broad: 'broad';
        };
        type Match = (typeof Match)[keyof typeof Match];
        const Objective: {
          readonly Awareness: 'awareness';
          readonly Visits: 'visits';
          readonly Conversions: 'conversions';
        };
        type Objective = (typeof Objective)[keyof typeof Objective];
        const BidModel: {
          readonly Cpm: 'cpm';
          readonly Cpc: 'cpc';
          readonly Cpa: 'cpa';
        };
        type BidModel = (typeof BidModel)[keyof typeof BidModel];
        const Conversion: {
          readonly OperationCompleted: 'operation_completed';
          readonly PaymentCompleted: 'payment_completed';
        };
        type Conversion = (typeof Conversion)[keyof typeof Conversion];
        interface Economics {
          profitCredits?: (number | null) | undefined;
          acquisitionPercent?: (number | null) | undefined;
          conversionPercent?: (number | null) | undefined;
          clickThroughPercent?: (number | null) | undefined;
        }
        type ExternalChannels = ExternalChannels.Item[];
        namespace ExternalChannels {
          const Item: {
            readonly GoogleSearch: 'google_search';
            readonly Meta: 'meta';
            readonly Other: 'other';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
      }
      interface Analytics {
        navigator?: boolean | undefined;
        destinations?: Analytics.Destinations.Item[] | undefined;
        identityMode?: Analytics.IdentityMode | undefined;
        events?: Analytics.Events.Item[] | undefined;
      }
      namespace Analytics {
        type Destinations = Destinations.Item[];
        namespace Destinations {
          interface Item {
            id: string;
            provider: Item.Provider;
            enabled?: boolean | undefined;
            connectionRef?: string | undefined;
            projectRef?: string | undefined;
          }
          namespace Item {
            const Provider: {
              readonly Posthog: 'posthog';
              readonly Segment: 'segment';
              readonly Amplitude: 'amplitude';
              readonly Mixpanel: 'mixpanel';
              readonly Ga4: 'ga4';
              readonly Webhook: 'webhook';
              readonly Other: 'other';
            };
            type Provider = (typeof Provider)[keyof typeof Provider];
          }
        }
        const IdentityMode: {
          readonly Anonymous: 'anonymous';
          readonly Pseudonymous: 'pseudonymous';
        };
        type IdentityMode = (typeof IdentityMode)[keyof typeof IdentityMode];
        type Events = Events.Item[];
        namespace Events {
          const Item: {
            readonly OperationStarted: 'operation_started';
            readonly OperationCompleted: 'operation_completed';
            readonly OperationFailed: 'operation_failed';
            readonly ApprovalRequested: 'approval_requested';
            readonly ApprovalResolved: 'approval_resolved';
            readonly PaymentCompleted: 'payment_completed';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
      }
      type Connections = Connections.Item[];
      namespace Connections {
        interface Item {
          id: string;
          kind: Item.Kind;
          mode: Item.Mode;
          reference?: string | undefined;
          requirement?: string | undefined;
        }
        namespace Item {
          const Kind: {
            readonly Database: 'database';
            readonly Storage: 'storage';
            readonly Model: 'model';
            readonly Payments: 'payments';
            readonly Messaging: 'messaging';
            readonly Browser: 'browser';
            readonly Other: 'other';
          };
          type Kind = (typeof Kind)[keyof typeof Kind];
          const Mode: {
            readonly Test: 'test';
            readonly Existing: 'existing';
            readonly Managed: 'managed';
          };
          type Mode = (typeof Mode)[keyof typeof Mode];
        }
      }
      type Distribution = Distribution.Item[];
      namespace Distribution {
        interface Item {
          destination: Item.Destination;
          selected: boolean;
          autoSelected?: boolean | undefined;
          metadata?: Record<string, string> | undefined;
        }
        namespace Item {
          const Destination: {
            readonly Navigator: 'navigator';
            readonly Web: 'web';
            readonly Chatgpt: 'chatgpt';
            readonly Claude: 'claude';
            readonly Gemini: 'gemini';
            readonly Muse: 'muse';
            readonly Instinct: 'instinct';
            readonly Mcp: 'mcp';
            readonly A2A: 'a2a';
            readonly Poppy: 'poppy';
            readonly Ucp: 'ucp';
            readonly Acp: 'acp';
            readonly Webmcp: 'webmcp';
            readonly Openapi: 'openapi';
            readonly Imessage: 'imessage';
            readonly Whatsapp: 'whatsapp';
            readonly Slack: 'slack';
            readonly Telegram: 'telegram';
            readonly Discord: 'discord';
          };
          type Destination = (typeof Destination)[keyof typeof Destination];
        }
      }
      type Messages = Messages.Item[];
      namespace Messages {
        interface Item {
          id: string;
          role: Item.Role;
          text: string;
          operationId?: string | undefined;
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
  }
  interface ImportPackage {
    action: 'import_package';
    data: string;
  }
  interface ImportSource {
    action: 'import_source';
    filename: string;
    source: string;
  }
  interface SaveDraft {
    action: 'save_draft';
    draftId?: string | undefined;
    expectedRevision: number;
    draft: BuildRequestBodyZeroSaveDraft.Draft;
  }
  namespace BuildRequestBodyZeroSaveDraft {
    interface Draft {
      schemaVersion: number;
      technicalLevel?: Draft.TechnicalLevel | undefined;
      identity: Draft.Identity;
      visibility?: Draft.Visibility | undefined;
      hosting?: Draft.Hosting | undefined;
      sources?: Draft.Sources.Item[] | undefined;
      files?: Draft.Files.Item[] | undefined;
      operations?: Draft.Operations.Item[] | undefined;
      appearance?: Draft.Appearance | undefined;
      authentication?: Draft.Authentication | undefined;
      billing?: Draft.Billing | undefined;
      advertising?: Draft.Advertising | undefined;
      analytics?: Draft.Analytics | undefined;
      connections?: Draft.Connections.Item[] | undefined;
      distribution?: Draft.Distribution.Item[] | undefined;
      messages?: Draft.Messages.Item[] | undefined;
    }
    namespace Draft {
      const TechnicalLevel: {
        readonly Unspecified: 'unspecified';
        readonly Guided: 'guided';
        readonly Standard: 'standard';
        readonly Advanced: 'advanced';
      };
      type TechnicalLevel = (typeof TechnicalLevel)[keyof typeof TechnicalLevel];
      interface Identity {
        name?: string | undefined;
        slug?: string | undefined;
        description?: string | undefined;
        purpose?: string | undefined;
        creationContext?: Identity.CreationContext | undefined;
        logo?: string | undefined;
        sphere?: string | undefined;
        audience?: Identity.Audience | undefined;
        humanIcp?: string | undefined;
        agentIcp?: string | undefined;
        intendedUses?: string | undefined;
        exclusions?: string | undefined;
        publisher?: string | undefined;
        website?: string | undefined;
        support?: string | undefined;
        languages?: string[] | undefined;
        regions?: string[] | undefined;
        category?: Identity.Category | undefined;
        secondaryCategories?: Identity.SecondaryCategories.Item[] | undefined;
        privacyUrl?: string | undefined;
        termsUrl?: string | undefined;
      }
      namespace Identity {
        const CreationContext: {
          readonly Unspecified: 'unspecified';
          readonly Personal: 'personal';
          readonly BusinessIdea: 'business_idea';
          readonly DigitalProduct: 'digital_product';
          readonly PhysicalService: 'physical_service';
        };
        type CreationContext = (typeof CreationContext)[keyof typeof CreationContext];
        const Audience: {
          readonly Humans: 'humans';
          readonly Agents: 'agents';
          readonly Both: 'both';
        };
        type Audience = (typeof Audience)[keyof typeof Audience];
        const Category: {
          readonly BusinessProductivity: 'Business & Productivity';
          readonly ResearchData: 'Research & Data';
          readonly DeveloperTools: 'Developer Tools';
          readonly SalesMarketing: 'Sales & Marketing';
          readonly ShoppingCommerce: 'Shopping & Commerce';
          readonly LocalServicesBooking: 'Local Services & Booking';
          readonly FinanceAdministration: 'Finance & Administration';
          readonly CreativeMedia: 'Creative & Media';
          readonly Education: 'Education';
          readonly HealthWellness: 'Health & Wellness';
          readonly TravelHospitality: 'Travel & Hospitality';
          readonly PersonalLifestyle: 'Personal & Lifestyle';
          readonly CommunicationCommunity: 'Communication & Community';
          readonly Other: 'Other';
        };
        type Category = (typeof Category)[keyof typeof Category];
        type SecondaryCategories = SecondaryCategories.Item[];
        namespace SecondaryCategories {
          const Item: {
            readonly BusinessProductivity: 'Business & Productivity';
            readonly ResearchData: 'Research & Data';
            readonly DeveloperTools: 'Developer Tools';
            readonly SalesMarketing: 'Sales & Marketing';
            readonly ShoppingCommerce: 'Shopping & Commerce';
            readonly LocalServicesBooking: 'Local Services & Booking';
            readonly FinanceAdministration: 'Finance & Administration';
            readonly CreativeMedia: 'Creative & Media';
            readonly Education: 'Education';
            readonly HealthWellness: 'Health & Wellness';
            readonly TravelHospitality: 'Travel & Hospitality';
            readonly PersonalLifestyle: 'Personal & Lifestyle';
            readonly CommunicationCommunity: 'Communication & Community';
            readonly Other: 'Other';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
      }
      const Visibility: {
        readonly Private: 'private';
      };
      type Visibility = (typeof Visibility)[keyof typeof Visibility];
      const Hosting: {
        readonly Existing: 'existing';
        readonly Darwin: 'darwin';
        readonly Custom: 'custom';
      };
      type Hosting = (typeof Hosting)[keyof typeof Hosting];
      type Sources = Sources.Item[];
      namespace Sources {
        interface Item {
          id: string;
          kind: string;
          locator: string;
          evidence: string;
          assumptions: string[];
        }
      }
      type Files = Files.Item[];
      namespace Files {
        interface Item {
          path: string;
          content: string;
          mediaType?: string | undefined;
        }
      }
      type Operations = Operations.Item[];
      namespace Operations {
        interface Item {
          id: string;
          name: string;
          description?: string | undefined;
          examples?: string[] | undefined;
          guidance?: Item.Guidance | undefined;
          experience?: Item.Experience | undefined;
          customer?: Item.Customer | undefined;
          inputSchema?: Record<string, unknown> | undefined;
          outputSchema?: Record<string, unknown> | undefined;
          acceptsFiles?: boolean | undefined;
          executionPlan?: Item.ExecutionPlan | undefined;
          implementation: Item.Implementation;
          connectionIds?: string[] | undefined;
          secretRefs?: string[] | undefined;
          effects?: Item.Effects | undefined;
          permissions?: string[] | undefined;
          approval?: Item.Approval | undefined;
          limits?: Item.Limits | undefined;
          pricing?: Darwin.BuildRequestBodyZeroSaveDraftDraftOperationsItemPricing | undefined;
          tests?: Item.Tests.Item[] | undefined;
        }
        namespace Item {
          interface Guidance {
            openingQuestion?: string | undefined;
            primaryAction?: string | undefined;
            context?: string | undefined;
            afterInput?: string | undefined;
            success?: string | undefined;
            recovery?: string | undefined;
          }
          interface Experience {
            version: number;
            revision: number;
            initialState: string;
            instructions?: string | undefined;
            states: Experience.States.Item[];
            variants: Experience.Variants.Item[];
          }
          namespace Experience {
            type States = States.Item[];
            namespace States {
              interface Item {
                id: string;
                description: string;
                instructions?: string | undefined;
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
                instructions?: string | undefined;
                modalities?: Item.Modalities.Item[] | undefined;
                presentation: Item.Presentation;
                runtimeComponents?: Item.RuntimeComponents.Item[] | undefined;
                argumentBindings?: Item.ArgumentBindings.Item[] | undefined;
                bindings?: Item.Bindings.Item[] | undefined;
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
                    | (Darwin.BuildRequestBodyZeroSaveDraftDraftOperationsItemExperienceVariantsItemPresentationArtifact | null)
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
                      kind?: Action.Kind | undefined;
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
                    components?: string[] | undefined;
                    inputFields?: string[] | undefined;
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
          const Customer: {
            readonly Humans: 'humans';
            readonly Agents: 'agents';
            readonly Both: 'both';
          };
          type Customer = (typeof Customer)[keyof typeof Customer];
          interface ExecutionPlan {
            version: number;
            authoring?: ExecutionPlan.Authoring | undefined;
            runtime?: ExecutionPlan.Runtime | undefined;
            nodes?: ExecutionPlan.Nodes.Item[] | undefined;
          }
          namespace ExecutionPlan {
            const Authoring: {
              readonly Guided: 'guided';
              readonly Nodes: 'nodes';
              readonly Code: 'code';
              readonly Endpoint: 'endpoint';
            };
            type Authoring = (typeof Authoring)[keyof typeof Authoring];
            interface Runtime {
              language?: Runtime.Language | undefined;
              entrypoint?: string | undefined;
              dockerfile?: string | undefined;
            }
            namespace Runtime {
              const Language: {
                readonly Typescript: 'typescript';
                readonly Python: 'python';
                readonly Docker: 'docker';
              };
              type Language = (typeof Language)[keyof typeof Language];
            }
            type Nodes = Nodes.Item[];
            namespace Nodes {
              interface Item {
                id: string;
                nodeId: string;
                nodeVersion: string;
                group: string;
                input?: Record<string, unknown> | undefined;
              }
            }
          }
          interface Implementation {
            kind: Implementation.Kind;
            source?: string | undefined;
            endpoint?: string | undefined;
            method?: Implementation.Method | undefined;
            language?: string | undefined;
            steps?: Implementation.Steps.Item[] | undefined;
            dependencies?: string[] | undefined;
          }
          namespace Implementation {
            const Kind: {
              readonly Api: 'api';
              readonly Tool: 'tool';
              readonly Workflow: 'workflow';
              readonly Typescript: 'typescript';
              readonly Model: 'model';
              readonly Data: 'data';
              readonly File: 'file';
              readonly Human: 'human';
              readonly Browser: 'browser';
            };
            type Kind = (typeof Kind)[keyof typeof Kind];
            const Method: {
              readonly Get: 'GET';
              readonly Post: 'POST';
              readonly Put: 'PUT';
              readonly Patch: 'PATCH';
              readonly Delete: 'DELETE';
            };
            type Method = (typeof Method)[keyof typeof Method];
            type Steps = Steps.Item[];
            namespace Steps {
              interface Item {
                id: string;
                name: string;
                kind: string;
                configuration: Record<string, unknown>;
              }
            }
          }
          const Effects: {
            readonly Read: 'read';
            readonly Write: 'write';
            readonly Mixed: 'mixed';
          };
          type Effects = (typeof Effects)[keyof typeof Effects];
          const Approval: {
            readonly Always: 'always';
            readonly Writes: 'writes';
            readonly None: 'none';
          };
          type Approval = (typeof Approval)[keyof typeof Approval];
          interface Limits {
            timeoutSeconds?: number | undefined;
            retries?: number | undefined;
          }
          type Tests = Tests.Item[];
          namespace Tests {
            interface Item {
              id: string;
              name: string;
              input: Record<string, unknown>;
              expected?: unknown | undefined;
            }
          }
        }
      }
      interface Appearance {
        source?: Appearance.Source | undefined;
        library?: Appearance.Library | undefined;
        instructions?: string | undefined;
        generationBrief?: string | undefined;
        brand?: Appearance.Brand | undefined;
        loading?: Appearance.Loading | undefined;
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
                instructions?: string | undefined;
              }
            }
          }
        }
        interface Brand {
          primary?: string | undefined;
          secondary?: string | undefined;
          background?: string | undefined;
          foreground?: string | undefined;
          font?: Brand.Font | undefined;
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
          kind?: Loading.Kind | undefined;
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
      }
      interface Authentication {
        mode?: Authentication.Mode | undefined;
        humanProviders?: Authentication.HumanProviders.Item[] | undefined;
        agentCredentials?: Authentication.AgentCredentials.Item[] | undefined;
      }
      namespace Authentication {
        const Mode: {
          readonly Optional: 'optional';
          readonly Required: 'required';
        };
        type Mode = (typeof Mode)[keyof typeof Mode];
        type HumanProviders = HumanProviders.Item[];
        namespace HumanProviders {
          const Item: {
            readonly Darwin: 'darwin';
            readonly Google: 'google';
            readonly Apple: 'apple';
            readonly Email: 'email';
            readonly Phone: 'phone';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
        type AgentCredentials = AgentCredentials.Item[];
        namespace AgentCredentials {
          const Item: {
            readonly Oauth: 'oauth';
            readonly ServiceAccount: 'service_account';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
      }
      interface Billing {
        acceptedMethods?: Billing.AcceptedMethods.Item[] | undefined;
        processor?: Billing.Processor | undefined;
        provider?: string | undefined;
        connectionRef?: string | undefined;
        checkoutUrl?: string | undefined;
        existingSystem?: Billing.ExistingSystem | undefined;
      }
      namespace Billing {
        type AcceptedMethods = AcceptedMethods.Item[];
        namespace AcceptedMethods {
          const Item: {
            readonly Card: 'card';
            readonly Bank: 'bank';
            readonly Link: 'link';
            readonly ApplePay: 'apple_pay';
            readonly GooglePay: 'google_pay';
            readonly DarwinWallet: 'darwin_wallet';
            readonly Mpp: 'mpp';
            readonly X402: 'x402';
            readonly Spt: 'spt';
            readonly Ucp: 'ucp';
            readonly Acp: 'acp';
            readonly StripeDynamic: 'stripe_dynamic';
            readonly HostedCheckout: 'hosted_checkout';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
        const Processor: {
          readonly Unconfigured: 'unconfigured';
          readonly Darwin: 'darwin';
          readonly Existing: 'existing';
        };
        type Processor = (typeof Processor)[keyof typeof Processor];
        const ExistingSystem: {
          readonly OnlineCheckout: 'online_checkout';
          readonly PointOfSale: 'point_of_sale';
          readonly CommercePlatform: 'commerce_platform';
          readonly Invoicing: 'invoicing';
          readonly Custom: 'custom';
        };
        type ExistingSystem = (typeof ExistingSystem)[keyof typeof ExistingSystem];
      }
      interface Advertising {
        enabled?: boolean | undefined;
        audience?: string | undefined;
        regions?: string | undefined;
        languages?: string | undefined;
        keywords?: string[] | undefined;
        negativeKeywords?: string[] | undefined;
        match?: Advertising.Match | undefined;
        objective?: Advertising.Objective | undefined;
        bidModel?: Advertising.BidModel | undefined;
        bidCredits?: (number | null) | undefined;
        dailyBudgetCredits?: (number | null) | undefined;
        totalBudgetCredits?: (number | null) | undefined;
        conversion?: Advertising.Conversion | undefined;
        operationId?: string | undefined;
        economics?: Advertising.Economics | undefined;
        externalChannels?: Advertising.ExternalChannels.Item[] | undefined;
        otherChannel?: string | undefined;
        externalMonthlyBudgetCredits?: (number | null) | undefined;
      }
      namespace Advertising {
        const Match: {
          readonly Exact: 'exact';
          readonly Phrase: 'phrase';
          readonly Broad: 'broad';
        };
        type Match = (typeof Match)[keyof typeof Match];
        const Objective: {
          readonly Awareness: 'awareness';
          readonly Visits: 'visits';
          readonly Conversions: 'conversions';
        };
        type Objective = (typeof Objective)[keyof typeof Objective];
        const BidModel: {
          readonly Cpm: 'cpm';
          readonly Cpc: 'cpc';
          readonly Cpa: 'cpa';
        };
        type BidModel = (typeof BidModel)[keyof typeof BidModel];
        const Conversion: {
          readonly OperationCompleted: 'operation_completed';
          readonly PaymentCompleted: 'payment_completed';
        };
        type Conversion = (typeof Conversion)[keyof typeof Conversion];
        interface Economics {
          profitCredits?: (number | null) | undefined;
          acquisitionPercent?: (number | null) | undefined;
          conversionPercent?: (number | null) | undefined;
          clickThroughPercent?: (number | null) | undefined;
        }
        type ExternalChannels = ExternalChannels.Item[];
        namespace ExternalChannels {
          const Item: {
            readonly GoogleSearch: 'google_search';
            readonly Meta: 'meta';
            readonly Other: 'other';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
      }
      interface Analytics {
        navigator?: boolean | undefined;
        destinations?: Analytics.Destinations.Item[] | undefined;
        identityMode?: Analytics.IdentityMode | undefined;
        events?: Analytics.Events.Item[] | undefined;
      }
      namespace Analytics {
        type Destinations = Destinations.Item[];
        namespace Destinations {
          interface Item {
            id: string;
            provider: Item.Provider;
            enabled?: boolean | undefined;
            connectionRef?: string | undefined;
            projectRef?: string | undefined;
          }
          namespace Item {
            const Provider: {
              readonly Posthog: 'posthog';
              readonly Segment: 'segment';
              readonly Amplitude: 'amplitude';
              readonly Mixpanel: 'mixpanel';
              readonly Ga4: 'ga4';
              readonly Webhook: 'webhook';
              readonly Other: 'other';
            };
            type Provider = (typeof Provider)[keyof typeof Provider];
          }
        }
        const IdentityMode: {
          readonly Anonymous: 'anonymous';
          readonly Pseudonymous: 'pseudonymous';
        };
        type IdentityMode = (typeof IdentityMode)[keyof typeof IdentityMode];
        type Events = Events.Item[];
        namespace Events {
          const Item: {
            readonly OperationStarted: 'operation_started';
            readonly OperationCompleted: 'operation_completed';
            readonly OperationFailed: 'operation_failed';
            readonly ApprovalRequested: 'approval_requested';
            readonly ApprovalResolved: 'approval_resolved';
            readonly PaymentCompleted: 'payment_completed';
          };
          type Item = (typeof Item)[keyof typeof Item];
        }
      }
      type Connections = Connections.Item[];
      namespace Connections {
        interface Item {
          id: string;
          kind: Item.Kind;
          mode: Item.Mode;
          reference?: string | undefined;
          requirement?: string | undefined;
        }
        namespace Item {
          const Kind: {
            readonly Database: 'database';
            readonly Storage: 'storage';
            readonly Model: 'model';
            readonly Payments: 'payments';
            readonly Messaging: 'messaging';
            readonly Browser: 'browser';
            readonly Other: 'other';
          };
          type Kind = (typeof Kind)[keyof typeof Kind];
          const Mode: {
            readonly Test: 'test';
            readonly Existing: 'existing';
            readonly Managed: 'managed';
          };
          type Mode = (typeof Mode)[keyof typeof Mode];
        }
      }
      type Distribution = Distribution.Item[];
      namespace Distribution {
        interface Item {
          destination: Item.Destination;
          selected: boolean;
          autoSelected?: boolean | undefined;
          metadata?: Record<string, string> | undefined;
        }
        namespace Item {
          const Destination: {
            readonly Navigator: 'navigator';
            readonly Web: 'web';
            readonly Chatgpt: 'chatgpt';
            readonly Claude: 'claude';
            readonly Gemini: 'gemini';
            readonly Muse: 'muse';
            readonly Instinct: 'instinct';
            readonly Mcp: 'mcp';
            readonly A2A: 'a2a';
            readonly Poppy: 'poppy';
            readonly Ucp: 'ucp';
            readonly Acp: 'acp';
            readonly Webmcp: 'webmcp';
            readonly Openapi: 'openapi';
            readonly Imessage: 'imessage';
            readonly Whatsapp: 'whatsapp';
            readonly Slack: 'slack';
            readonly Telegram: 'telegram';
            readonly Discord: 'discord';
          };
          type Destination = (typeof Destination)[keyof typeof Destination];
        }
      }
      type Messages = Messages.Item[];
      namespace Messages {
        interface Item {
          id: string;
          role: Item.Role;
          text: string;
          operationId?: string | undefined;
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
  }
  interface GetDraft {
    action: 'get_draft';
    draftId: string;
    revision?: number | undefined;
  }
  interface ListDrafts {
    action: 'list_drafts';
  }
  interface StartTest {
    action: 'start_test';
    draftId: string;
    revision: number;
    operationId: string;
    input: Record<string, unknown>;
  }
  interface GetJob {
    action: 'get_job';
    jobId: string;
  }
  interface ResumeJob {
    action: 'resume_job';
    jobId: string;
  }
  interface CancelJob {
    action: 'cancel_job';
    jobId: string;
  }
  interface CheckSlug {
    action: 'check_slug';
    slug: string;
    draftId?: string | undefined;
  }
  interface ValidateDraft {
    action: 'validate_draft';
    draftId: string;
    revision: number;
  }
  interface ExportDestination {
    action: 'export_destination';
    draftId: string;
    revision: number;
    destination: BuildRequestBodyZeroExportDestination.Destination;
  }
  namespace BuildRequestBodyZeroExportDestination {
    const Destination: {
      readonly Navigator: 'navigator';
      readonly Web: 'web';
      readonly Chatgpt: 'chatgpt';
      readonly Claude: 'claude';
      readonly Gemini: 'gemini';
      readonly Muse: 'muse';
      readonly Instinct: 'instinct';
      readonly Mcp: 'mcp';
      readonly A2A: 'a2a';
      readonly Poppy: 'poppy';
      readonly Ucp: 'ucp';
      readonly Acp: 'acp';
      readonly Webmcp: 'webmcp';
      readonly Openapi: 'openapi';
      readonly Imessage: 'imessage';
      readonly Whatsapp: 'whatsapp';
      readonly Slack: 'slack';
      readonly Telegram: 'telegram';
      readonly Discord: 'discord';
    };
    type Destination = (typeof Destination)[keyof typeof Destination];
  }
  interface ExportDraft {
    action: 'export_draft';
    draftId: string;
    revision: number;
  }
}
