import { agentViewSchema } from './agent-view.js';
import { z } from 'zod';

import { agentBrandSchema, agentLoadingSchema } from './agent-appearance.js';

import { agentComponentLibrarySchema } from './agent-component-library.js';
import {
  composerRuntimeComponentSchema,
  composerRuntimeRegionSchema,
  type ComposerRuntimeComponent,
} from './composer-runtime.js';
import { operationGuidanceSchema } from './operation-guidance.js';

export { createAgentView, renderAgentView } from './agent-view.js';

const id = z
  .string()
  .min(1)
  .max(200)
  .regex(/^[A-Za-z0-9][A-Za-z0-9_.:-]*$/);
export const composerAudienceSchema = z
  .enum(['human', 'agent'])
  .describe('Who consumes this response. Controls presentation only; never identity, permissions, or approval.');
export type ComposerAudience = z.infer<typeof composerAudienceSchema>;
export function composerDeliveryHost(audience: ComposerAudience = 'agent') {
  return composerHostSchema.parse({
    audience,
    capabilities: audience === 'human' ? ['components', 'markdown', 'structured'] : ['markdown', 'structured'],
  });
}
export const composerHostSchema = z
  .object({
    audience: composerAudienceSchema.default('human'),
    capabilities: z
      .array(z.enum(['components', 'runtime_components', 'react', 'media', 'markdown', 'structured']))
      .min(1)
      .max(6)
      .default(['components', 'markdown', 'structured']),
    viewport: z.enum(['mobile', 'desktop']).default('desktop'),
    theme: z.enum(['light', 'dark']).default('light'),
  })
  .strict()
  .refine(
    (host) => host.capabilities.includes('markdown') || host.capabilities.includes('structured'),
    'Hosts must support a structured or Markdown fallback',
  );
export const composerAudioPlanSchema = z
  .object({
    kind: z.enum(['speech', 'music']),
    voice: z.enum(['Rachel', 'Aria']),
    speed: z.number().min(0.7).max(1.2),
  })
  .strict();
export type ComposerAudioPlan = z.infer<typeof composerAudioPlanSchema>;
export const composerRequestInteractionSchema = z
  .object({
    type: z.enum(['edit', 'continue']),
    modality: z.enum(['text', 'voice', 'image', 'audio', 'video', 'file']).optional(),
    fields: z
      .record(z.string().min(1).max(120), z.string().max(5000))
      .refine((fields) => Object.keys(fields).length <= 64, 'Too many interaction fields'),
  })
  .strict();
export type ComposerRequestInteraction = z.infer<typeof composerRequestInteractionSchema>;
export const composerRequestSchema = z
  .object({
    clientRequestId: z.string().uuid(),
    agentId: id,
    message: z.string().trim().min(1).max(8000),
    interaction: composerRequestInteractionSchema.optional(),
    operationId: id.optional(),
    authoring: z.object({ draftId: z.string().uuid(), revision: z.number().int().positive() }).strict().optional(),
    audio: composerAudioPlanSchema.partial().optional(),
    presentationOverride: z
      .enum(['markdown', 'simple', 'react', 'world', 'video', 'audio', 'game', 'image', 'model3d'])
      .optional(),
    threadId: id.optional(),
    threadKind: z.enum(['assist', 'operation']).default('assist'),
    turnId: id.optional(),
    previousRunId: z.string().uuid().optional(),
    expectedRevision: z.number().int().nonnegative().optional(),
    mode: z.enum(['live', 'replay', 'simulation']).default('live'),
    host: composerHostSchema.default({
      audience: 'human',
      capabilities: ['components', 'markdown', 'structured'],
      viewport: 'desktop',
      theme: 'light',
    }),
  })
  .strict()
  .refine(
    (v) => !v.previousRunId || v.expectedRevision !== undefined,
    'A presentation revision is required when adapting existing work',
  )
  .refine((v) => !v.authoring || v.mode === 'simulation', 'Authored draft previews must use simulation mode');
export const composerSectionSchema = z
  .object({
    id: z.string().regex(/^[a-z][a-z0-9_-]{0,63}$/),
    kind: z.enum(['message', 'list', 'fields', 'operation', 'progress', 'results', 'notice']),
    title: z.string().max(160),
    text: z.string().max(4000),
    items: z.array(z.string().max(800)).max(20),
    operationId: z.string().max(200).nullable(),
  })
  .strict();
const shortText = z.string().min(1).max(240);
export const composerArtifactSchemas = {
  comparison: z
    .object({
      kind: z.literal('comparison'),
      question: z
        .string()
        .min(1)
        .max(90)
        .describe('A concise decision question in 4-10 words, not a restatement of the entire brief.'),
      criteria: z.array(z.string().min(1).max(50)).min(2).max(4),
      options: z
        .array(
          z.object({ name: z.string().min(1).max(42), values: z.array(z.string().max(120)).min(2).max(4) }).strict(),
        )
        .min(2)
        .max(4),
      basis: z
        .string()
        .min(1)
        .max(240)
        .describe(
          'State whether these are proposed approaches, supplied facts, or verified evidence. Never invent product features or scores.',
        ),
    })
    .strict(),
  planner: z
    .object({
      kind: z.literal('planner'),
      title: z.string().min(1).max(80),
      steps: z
        .array(
          z
            .object({
              title: z.string().min(1).max(80),
              detail: z.string().min(1).max(240),
              durationMinutes: z.number().int().min(1).max(10080).nullable(),
            })
            .strict(),
        )
        .min(2)
        .max(6),
    })
    .strict(),
  estimate: z
    .object({
      kind: z.literal('estimate'),
      title: z.string().min(1).max(80),
      currency: z.enum(['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'INR', 'JPY']),
      items: z
        .array(
          z
            .object({
              label: z
                .string()
                .min(1)
                .max(60)
                .describe(
                  'Item name only. Never duplicate quantities, currency amounts or unit costs in this label; the user can edit those independently.',
                ),
              quantity: z.number().min(0).max(1000000),
              unitCost: z.number().min(0).max(100000000),
            })
            .strict(),
        )
        .min(1)
        .max(6),
      contingencyPercent: z.number().min(0).max(100),
      assumptions: z
        .string()
        .min(1)
        .max(300)
        .describe(
          'Explicitly identify any assumed prices, quantities and currency. These are editable estimates, not provider quotes.',
        ),
    })
    .strict(),
  research: z
    .object({
      kind: z.literal('research'),
      question: z.string().min(1).max(160).describe('One focused research question in 10-18 words.'),
      focus: z.array(shortText).min(2).max(4),
      sourceTypes: z.array(shortText).max(3),
    })
    .strict(),
  extraction: z
    .object({
      kind: z.literal('extraction'),
      url: z.string().max(2048).nullable(),
      purpose: z.string().min(1).max(160),
      fields: z
        .array(z.object({ name: shortText, description: z.string().min(1).max(110) }).strict())
        .min(2)
        .max(4),
    })
    .strict(),
  directory: z
    .object({
      kind: z.literal('directory'),
      audience: shortText.describe(
        'The target prospect audience, e.g. independent fitness studios. Never the role of the person using this interface.',
      ),
      criteria: z
        .array(z.object({ label: shortText, value: shortText }).strict())
        .min(2)
        .max(4),
      columns: z.array(shortText).min(2).max(5),
      questions: z.array(shortText).max(3),
    })
    .strict(),
  studio: z
    .object({
      kind: z.literal('studio'),
      headline: z.string().min(1).max(60),
      direction: z.string().min(1).max(140),
      palette: z
        .array(z.object({ name: shortText, color: z.string().regex(/^#[0-9a-fA-F]{6}$/) }).strict())
        .min(2)
        .max(5),
      imageBrief: z.string().min(1).max(420),
    })
    .strict(),
  storyboard: z
    .object({
      kind: z.literal('storyboard'),
      durationSeconds: z.number().min(1).max(600),
      aspectRatio: z.enum(['9:16', '16:9', '1:1', '4:5']),
      scenes: z
        .array(
          z
            .object({
              title: shortText,
              start: z.number().min(0),
              end: z.number().positive(),
              visual: z.string().min(1).max(350),
              caption: z.string().max(150),
            })
            .strict(),
        )
        .min(2)
        .max(5),
    })
    .strict(),
  editorial: z
    .object({
      kind: z.literal('editorial'),
      script: z.string().min(1).max(3000),
      tone: shortText,
      targetSeconds: z.number().min(1).max(1800).nullable(),
    })
    .strict(),
};
export const composerArtifactSchema = z.union([
  composerArtifactSchemas.research,
  composerArtifactSchemas.extraction,
  composerArtifactSchemas.directory,
  composerArtifactSchemas.studio,
  composerArtifactSchemas.storyboard,
  composerArtifactSchemas.editorial,
  composerArtifactSchemas.comparison,
  composerArtifactSchemas.planner,
  composerArtifactSchemas.estimate,
]);
export type ComposerArtifact = z.infer<typeof composerArtifactSchema>;
export const composerJourneySchema = z
  .object({
    stage: z.enum(['input', 'review', 'ready', 'complete']),
    instruction: z.string().min(1).max(160),
    action: z
      .object({
        kind: z.enum(['continue', 'execute', 'copy']).default('continue'),
        label: z.string().min(1).max(60),
        intent: z
          .string()
          .min(1)
          .max(800)
          .describe(
            'A concrete next-step instruction in plain language. Never an opaque command token such as confirm_criteria.',
          ),
        operationId: z.string().max(200).nullable(),
        argumentsJson: z.string().max(16000).nullable(),
      })
      .strict()
      .nullable(),
  })
  .strict();
export type ComposerJourney = z.infer<typeof composerJourneySchema>;
/** Strict model output requires every property; saved older journeys still default kind above. */
export const composerJourneyOutputSchema = composerJourneySchema.extend({
  action: composerJourneySchema.shape.action
    .unwrap()
    .extend({ kind: z.enum(['continue', 'execute', 'copy']) })
    .nullable(),
});
export const composerGenerationSchema = z
  .object({
    title: z.string().min(1).max(160),
    summary: z.string().max(3000),
    layout: z.enum(['stack', 'columns']),
    representation: z.enum(['components', 'react', 'media', 'agent']),
    artifact: composerArtifactSchema.nullable().optional(),
    journey: composerJourneySchema.nullable().optional(),
    design: z
      .object({
        character: z.enum([
          'editorial',
          'research',
          'extraction',
          'directory',
          'storyboard',
          'studio',
          'comparison',
          'planner',
          'estimate',
          'utility',
        ]),
        density: z.enum(['relaxed', 'compact']),
      })
      .strict()
      .optional(),
    runtimeRegions: z.array(composerRuntimeRegionSchema).max(4).optional(),
    sections: z.array(composerSectionSchema).min(1).max(12),
    next: z
      .array(
        z
          .object({ label: z.string().max(100), intent: z.string().max(500), confidence: z.number().min(0).max(1) })
          .strict(),
      )
      .max(3),
    reactSource: z.string().max(50000).nullable(),
    mediaPrompt: z.string().max(4000).nullable(),
  })
  .strict();
/** Authored by Agent Builder, validated by Compiler; never supplied by a runtime caller. */
export type ComposerOperationExperience = {
  version: 1;
  revision: number;
  initialState: string;
  instructions: string;
  states: Array<{
    id: string;
    description: string;
    instructions: string;
    executionStatuses: Array<
      'not_started' | 'queued' | 'running' | 'waiting' | 'completed' | 'failed' | 'cancelled' | 'unavailable'
    >;
    transitions: string[];
    variants: string[];
  }>;
  variants: Array<{
    id: string;
    description: string;
    instructions: string;
    modalities: Array<'text' | 'voice' | 'image' | 'audio' | 'video' | 'file'>;
    presentation: ComposerGeneration;
    runtimeComponents?: ComposerRuntimeComponent[];
    bindings: Array<{ path: string[]; source: 'message' | 'field'; field?: string }>;
    argumentBindings?: Array<{ field: string; target: string }>;
  }>;
};
// An explicit contract prevents deeply expanding the UI schema through every Builder/API type.
export const composerOperationExperienceSchema: z.ZodType<ComposerOperationExperience, unknown> = z
  .object({
    version: z.literal(1),
    revision: z.number().int().positive(),
    initialState: id,
    instructions: z.string().max(4000).default(''),
    states: z
      .array(
        z
          .object({
            id,
            description: z.string().max(1000),
            instructions: z.string().max(2000).default(''),
            executionStatuses: z
              .array(
                z.enum([
                  'not_started',
                  'queued',
                  'running',
                  'waiting',
                  'completed',
                  'failed',
                  'cancelled',
                  'unavailable',
                ]),
              )
              .min(1),
            transitions: z.array(id).max(64),
            variants: z.array(id).min(1).max(1000),
          })
          .strict(),
      )
      .min(1)
      .max(64),
    variants: z
      .array(
        z
          .object({
            id,
            description: z.string().max(1000),
            instructions: z.string().max(2000).default(''),
            modalities: z
              .array(z.enum(['text', 'voice', 'image', 'audio', 'video', 'file']))
              .min(1)
              .default(['text', 'voice']),
            presentation: composerGenerationSchema.refine(
              (p) => ['components', 'agent'].includes(p.representation) && !p.reactSource && !p.mediaPrompt,
              'Runtime experiences use validated component or structured presentations, not generated code or media jobs',
            ),
            runtimeComponents: z.array(composerRuntimeComponentSchema).max(4).optional(),
            argumentBindings: z
              .array(z.object({ field: z.string().min(1).max(120), target: z.string().min(1).max(200) }).strict())
              .max(50)
              .optional(),
            bindings: z
              .array(
                z
                  .object({
                    // Bind user data only into existing artifact text, never action IDs, code or authority.
                    path: z
                      .array(z.string().regex(/^[A-Za-z0-9_-]+$/))
                      .min(2)
                      .max(8),
                    source: z.enum(['message', 'field']),
                    field: z.string().max(120).optional(),
                  })
                  .strict(),
              )
              .max(64)
              .default([]),
          })
          .strict(),
      )
      .min(1)
      .max(1000),
  })
  .strict()
  .superRefine((value, context) => {
    if (JSON.stringify(value).length > 4_000_000)
      context.addIssue({ code: 'custom', message: 'Experience catalog exceeds the 4 MB authoring budget' });
    const states = new Set(value.states.map((s) => s.id));
    const variants = new Set(value.variants.map((v) => v.id));
    if (
      states.size !== value.states.length ||
      variants.size !== value.variants.length ||
      !states.has(value.initialState)
    )
      context.addIssue({ code: 'custom', message: 'Experience IDs must be unique and initialState must exist' });
    for (const state of value.states) {
      if (
        new Set(state.variants).size !== state.variants.length ||
        state.transitions.some((id) => !states.has(id)) ||
        state.variants.some((id) => !variants.has(id))
      )
        context.addIssue({
          code: 'custom',
          message: 'State transitions and variants must reference existing unique IDs',
        });
    }
    if (value.states.reduce((sum, s) => sum + s.variants.length, 0) > 4000)
      context.addIssue({ code: 'custom', message: 'An operation supports at most 4000 authored combinations' });
    for (const variant of value.variants)
      for (const binding of variant.bindings) {
        if (
          binding.path[0] !== 'artifact' ||
          binding.path[1] === 'kind' ||
          binding.path.some((p) => ['__proto__', 'prototype', 'constructor'].includes(p)) ||
          (binding.source === 'field' && !binding.field)
        )
          context.addIssue({
            code: 'custom',
            message: 'Bindings must target artifact text and name their input field',
          });
      }
    for (const variant of value.variants) {
      const regions = variant.runtimeComponents ?? [];
      if (
        new Set(regions.map((r) => r.id)).size !== regions.length ||
        new Set(regions.map((r) => r.sectionId)).size !== regions.length
      )
        context.addIssue({ code: 'custom', message: 'Runtime components require unique IDs and section targets' });
      for (const region of regions) {
        const section = variant.presentation.sections.find((s) => s.id === region.sectionId);
        if (!section || !['message', 'list', 'notice'].includes(section.kind))
          context.addIssue({
            code: 'custom',
            message:
              'Runtime components must replace an existing content section, never operation, result or progress controls',
          });
      }
      if (variant.presentation.runtimeRegions?.length)
        context.addIssue({ code: 'custom', message: 'Authored presentations cannot inject runtime artifacts' });
      const targets = variant.argumentBindings?.map((b) => b.target) ?? [];
      if (
        new Set(targets).size !== targets.length ||
        targets.some((t) => t.split('.').some((k) => !k || ['__proto__', 'prototype', 'constructor'].includes(k)))
      )
        context.addIssue({ code: 'custom', message: 'Argument bindings require unique safe canonical targets' });
    }
  });
export const composerSelectionSchema = z
  .object({
    version: z.literal('composer-selection.v1'),
    catalogRevision: z.number().int().positive(),
    catalogHash: z.string(),
    operationId: id.nullable(),
    stateId: id,
    variantId: id,
    model: z.string(),
    confidence: z.number().min(0).max(1),
    fallback: z.string().nullable(),
    latencyMs: z.number().nonnegative(),
    inputTokens: z.number().nonnegative(),
  })
  .strict();
export type ComposerSelection = z.infer<typeof composerSelectionSchema>;

export const composerFieldSchema = z
  .object({
    name: z.string(),
    label: z.string(),
    type: z.enum(['text', 'number', 'select']),
    required: z.boolean(),
    primary: z.boolean().optional(),
    encoding: z.literal('json').optional(),
    options: z.array(z.string()).optional(),
    multiple: z.boolean().optional(),
    description: z.string().optional(),
    minimum: z.number().optional(),
    maximum: z.number().optional(),
    minLength: z.number().int().nonnegative().optional(),
    maxLength: z.number().int().nonnegative().optional(),
  })
  .strict();
export const composerOperationSchema = z
  .object({
    id,
    name: z.string(),
    description: z.string(),
    guidance: operationGuidanceSchema.optional(),
    experience: composerOperationExperienceSchema.optional(),
    revision: z.number().int().positive().optional(),
    available: z.boolean(),
    reason: z.string().nullable(),
    fields: z.array(composerFieldSchema).max(50),
    inputSchema: z.record(z.string(), z.unknown()).optional(),
  })
  .strict();
export const composerFactsSchema = z
  .object({
    agent: z
      .object({
        id,
        name: z.string(),
        description: z.string(),
        brand: agentBrandSchema.optional(),
        loading: agentLoadingSchema.optional(),
        appearance: z
          .object({
            instructions: z.string().max(4000),
            libraryName: z.string().max(100).optional(),
            source: z.enum(['darwin_ui', 'uploaded', 'generated']).optional(),
            library: agentComponentLibrarySchema.optional(),
            componentContracts: z
              .array(z.object({ name: z.string(), description: z.string().max(2000) }).strict())
              .max(20),
          })
          .strict()
          .optional(),
      })
      .strict(),
    sessionContext: z
      .object({
        goal: z.string().max(4000),
        brief: z.string().max(8000),
        messages: z
          .array(z.object({ role: z.enum(['user', 'assistant']), text: z.string().max(2000) }).strict())
          .max(12),
      })
      .strict()
      .optional(),
    operations: z.array(composerOperationSchema).max(500),
    execution: z
      .object({
        threadId: z.string().nullable(),
        turnId: z.string().nullable(),
        status: z.enum([
          'not_started',
          'queued',
          'running',
          'waiting',
          'completed',
          'failed',
          'cancelled',
          'unavailable',
        ]),
        evidence: z
          .array(
            z
              .object({
                id: z.string(),
                text: z.string(),
                verification: z.enum(['provider_reported', 'criteria_checked', 'observed']),
              })
              .strict(),
          )
          .max(30),
      })
      .strict(),
  })
  .strict();
/** Selection records contain observable answers, never hidden reasoning. */
export const composerCapabilityIdSchema = z.enum([
  'markdown',
  'simple',
  'react',
  'world',
  'video',
  'audio',
  'game',
  'image',
  'model3d',
]);
export const composerDecisionSchema = z
  .object({
    id: z.string().uuid(),
    model: z.string(),
    questionVersion: z.string(),
    catalogVersion: z.string(),
    mode: z.enum(['shadow', 'active']),
    eligible: z.array(composerCapabilityIdSchema),
    selected: composerCapabilityIdSchema,
    audio: composerAudioPlanSchema.optional(),
    audioSelection: z
      .object({
        model: z.string(),
        questionVersion: z.string(),
        latencyMs: z.number().nonnegative(),
        inputTokens: z.number().nonnegative().default(0),
        answers: z.array(
          z.object({
            name: z.string(),
            choice: z.string(),
            confidence: z.number().min(0).max(1),
            probabilities: z.array(z.object({ value: z.string(), probability: z.number().min(0).max(1) })).optional(),
          }),
        ),
      })
      .optional(),
    supporting: z.array(composerCapabilityIdSchema).max(2).default([]),
    override: composerCapabilityIdSchema.nullable(),
    confidence: z.number().min(0).max(1),
    probabilities: z.array(
      z.object({ value: composerCapabilityIdSchema, probability: z.number().min(0).max(1) }).strict(),
    ),
    transition: z.enum(['retain', 'update', 'replace']),
    fallback: z.string().nullable(),
    latencyMs: z.number().nonnegative(),
    inputTokens: z.number().nonnegative(),
    appliedPolicies: z.array(
      z
        .object({ id: z.string(), version: z.number(), scope: z.string(), probability: z.number().min(0).max(1) })
        .strict(),
    ),
  })
  .strict();
export type ComposerDecision = z.infer<typeof composerDecisionSchema>;
export type ComposerCapabilityId = z.infer<typeof composerCapabilityIdSchema>;

export const composerExperienceSchema = z
  .object({
    decisionId: z.string().uuid(),
    surfaces: z
      .array(
        z
          .object({
            id: id,
            capability: composerCapabilityIdSchema,
            role: z.enum(['primary', 'supporting', 'fallback']),
            status: z.enum(['ready', 'pending', 'failed', 'unavailable']),
            artifactId: z.string().uuid().nullable(),
            sessionId: z.string().nullable(),
            assetJobId: z.string().uuid().optional(),
            generated: composerGenerationSchema.optional(),
            markdown: z.string().max(20000).optional(),
            failure: z.string().nullable().optional(),
            actionReferences: z.array(z.string()),
            evidenceReferences: z.array(z.string()),
          })
          .strict(),
      )
      .min(1)
      .max(12),
  })
  .strict();

export const composerPresentationSchema = z
  .object({
    version: z.enum(['composer.v1', 'composer.v2']),
    selection: composerSelectionSchema.optional(),
    decision: composerDecisionSchema.optional(),
    experience: composerExperienceSchema.optional(),
    runId: z.string().uuid(),
    revision: z.number().int().positive(),
    mode: z.enum(['live', 'replay', 'simulation']),
    request: composerRequestSchema,
    generated: composerGenerationSchema,
    facts: composerFactsSchema,
    markdown: z.string().max(20000),
    artifactId: z.string().uuid().nullable(),
    policy: z
      .object({
        id: z.string(),
        version: z.number().int(),
        probability: z.number().min(0).max(1),
        applied: z
          .array(
            z
              .object({
                id: z.string(),
                version: z.number().int(),
                scope: z.enum(['global', 'agent', 'user']),
                probability: z.number().min(0).max(1),
              })
              .strict(),
          )
          .max(3)
          .optional(),
      })
      .strict(),
    diagnostics: z
      .object({
        model: z.string(),
        generationMs: z.number(),
        inputTokens: z.number(),
        outputTokens: z.number(),
        repairs: z.number(),
        fallback: z.string().nullable(),
      })
      .strict(),
    createdAt: z.string(),
  })
  .strict()
  .superRefine((value, context) => {
    if (value.version === 'composer.v2' && (!value.decision || !value.experience))
      context.addIssue({ code: 'custom', message: 'Composer v2 requires a decision and experience plan' });
    if (value.experience && value.decision && value.experience.decisionId !== value.decision.id)
      context.addIssue({ code: 'custom', message: 'Experience decision reference does not match' });
    if (
      value.experience &&
      new Set(value.experience.surfaces.map((s) => s.id)).size !== value.experience.surfaces.length
    )
      context.addIssue({ code: 'custom', message: 'Surface identities must be unique' });
  });
export const composerFeedbackSchema = z
  .object({
    eventId: z.string().uuid(),
    runId: z.string().uuid(),
    revision: z.number().int().positive(),
    type: z.enum([
      'rendered',
      'helpful',
      'unhelpful',
      'correction',
      'action',
      'abandoned',
      'render_error',
      'next_intent',
    ]),
    value: z.string().max(1000).optional(),
    durationMs: z.number().int().min(0).max(86400000).optional(),
    learn: z.boolean().default(false),
  })
  .strict();
export const composerActionSchema = z
  .object({
    clientRequestId: z.string().uuid(),
    runId: z.string().uuid(),
    revision: z.number().int().positive(),
    operationId: id,
    arguments: z.record(z.string(), z.json()),
  })
  .strict();
export type ComposerRequest = z.infer<typeof composerRequestSchema>;
export type ComposerHost = z.infer<typeof composerHostSchema>;
export type ComposerGeneration = z.infer<typeof composerGenerationSchema>;
export type ComposerPresentation = z.infer<typeof composerPresentationSchema>;
export type ComposerFacts = z.infer<typeof composerFactsSchema>;
export type ComposerFeedback = z.infer<typeof composerFeedbackSchema>;

export const composerInteractionSchema = z
  .object({
    fields: z
      .record(
        z.string().max(240),
        z
          .object({
            value: z.string().max(8000),
            checked: z.boolean().optional(),
            start: z.number().int().nonnegative().nullable().optional(),
            end: z.number().int().nonnegative().nullable().optional(),
          })
          .strict(),
      )
      .refine((v) => Object.keys(v).length <= 100),
    data: z.record(z.string().max(120), z.json()).default({}),
    focus: z.string().max(240).nullable().default(null),
    scroll: z
      .object({ x: z.number().min(0).max(1000000), y: z.number().min(0).max(1000000) })
      .strict()
      .default({ x: 0, y: 0 }),
  })
  .strict()
  .refine((v) => JSON.stringify(v).length <= 64000, 'Interaction state is too large');
export const composerStateWriteSchema = z
  .object({
    eventId: z.string().uuid(),
    revision: z.number().int().positive(),
    baseVersion: z.number().int().nonnegative(),
    state: composerInteractionSchema,
  })
  .strict();
export type ComposerInteraction = z.infer<typeof composerInteractionSchema>;

export const EXPERIENCE_CATALOG_VERSION = 'composer-capabilities.2';
export const experienceCapabilities = [
  {
    id: 'markdown',
    representation: 'agent',
    description: 'Concise Markdown with authoritative structured facts and actions.',
  },
  {
    id: 'simple',
    representation: 'components',
    description: 'Accessible DarwinUI forms, comparisons, progress, and results.',
  },
  {
    id: 'react',
    representation: 'react',
    description: 'Custom interactive layouts compiled in an isolated environment.',
  },
  { id: 'world', representation: 'media', description: 'Interactive spatial exploration with accessible controls.' },
  {
    id: 'video',
    representation: 'media',
    description: 'Video playback or generation, with captions and playback controls.',
  },
  {
    id: 'audio',
    representation: 'media',
    description: 'Spoken response with a chosen voice and transcript, or instrumental music when explicitly requested.',
  },
  { id: 'game', representation: 'media', description: 'Interactive game scene with keyboard controls.' },
  { id: 'image', representation: 'media', description: 'Image artifact with accessible description.' },
  {
    id: 'model3d',
    representation: 'media',
    description: 'Interactive 3D object with accessible controls and a static fallback.',
  },
] as const;

/** Content family and rendering technology are distinct; these describe existing implementations. */
export const composerCapabilityImplementations = {
  markdown: {
    renderer: 'ComposerWorkspace.markdown',
    generator: 'generateComposer',
    output: 'text',
    technology: 'semantic-html',
    host: 'markdown',
    lifecycle: ['generate', 'persist', 'replay'],
    fallback: 'markdown',
    requirements: [],
    accessibility: ['Readable text', 'Structured facts and action schemas'],
  },
  simple: {
    renderer: 'ComposerComposition',
    generator: 'generateComposer',
    output: 'components',
    technology: 'darwinui-react',
    host: 'components',
    lifecycle: ['generate', 'validate', 'persist', 'replay'],
    fallback: 'markdown',
    requirements: [],
    accessibility: ['Labeled controls', 'Stable input identities', 'Keyboard navigation'],
  },
  react: {
    renderer: 'ComposerWorkspace.frame',
    generator: 'generateComposer+runCompiler',
    output: 'artifact',
    technology: 'sandboxed-react',
    host: 'react',
    lifecycle: ['generate', 'compile', 'validate', 'persist', 'replay'],
    fallback: 'simple',
    requirements: ['Pinned compiler', 'Private artifact storage', 'Action bridge'],
    accessibility: ['Labeled controls', 'Responsive layout', 'Keyboard navigation'],
  },
  image: {
    renderer: 'ComposerAsset',
    generator: 'startComposerAsset',
    output: 'artifact',
    technology: 'html-image',
    host: 'media',
    lifecycle: ['reserve', 'submit', 'poll', 'persist', 'replay'],
    fallback: 'simple',
    requirements: ['FAL', 'Durable asset ledger', 'Presentation budget'],
    accessibility: ['Text alternative', 'No execution-success claims'],
  },
  model3d: {
    renderer: 'ModelPreview',
    generator: 'startComposerAsset',
    output: 'artifact',
    technology: 'model-viewer',
    host: 'media',
    lifecycle: ['reserve', 'submit', 'poll', 'persist', 'replay'],
    fallback: 'simple',
    requirements: ['FAL', 'Durable asset ledger', 'Presentation budget'],
    accessibility: ['Text alternative', 'Static fallback', 'Camera controls'],
  },
  audio: {
    renderer: 'ComposerAsset',
    generator: 'startComposerAsset',
    output: 'artifact',
    technology: 'html-audio',
    host: 'media',
    lifecycle: ['reserve', 'submit', 'poll', 'persist', 'replay'],
    fallback: 'simple',
    requirements: ['FAL', 'Durable asset ledger', 'Presentation budget'],
    accessibility: ['Native playback controls', 'Text alternative', 'No autoplay'],
  },
  world: {
    renderer: 'ComposerMedia',
    generator: 'provisionComposerMedia',
    output: 'session',
    technology: 'interactive-video',
    host: 'media',
    lifecycle: ['provision', 'connect', 'disconnect', 'stop'],
    fallback: 'simple',
    requirements: ['Odyssey', 'Session lifecycle integration', 'Live validation deferred'],
    accessibility: ['Accessible controls', 'Authoritative operation status outside media'],
  },
  video: {
    renderer: 'HarnessLiveVideo',
    generator: 'Harness provider adapter',
    output: 'session',
    technology: 'interactive-video',
    host: 'media',
    lifecycle: ['provision', 'connect', 'disconnect', 'stop'],
    fallback: 'simple',
    requirements: ['Shared session integration pending', 'Live validation deferred'],
    accessibility: ['Playback controls', 'Text alternative', 'No autoplay'],
  },
  game: {
    renderer: 'HarnessGame',
    generator: 'Harness provider adapter',
    output: 'session',
    technology: 'interactive-video',
    host: 'media',
    lifecycle: ['provision', 'connect', 'disconnect', 'stop'],
    fallback: 'simple',
    requirements: ['Shared session integration pending', 'Live validation deferred'],
    accessibility: ['Keyboard controls', 'Reduced motion', 'Text alternative'],
  },
} as const satisfies Record<
  ComposerCapabilityId,
  {
    renderer: string;
    generator: string;
    output: string;
    technology: string;
    host: string;
    lifecycle: readonly string[];
    fallback: ComposerCapabilityId;
    requirements: readonly string[];
    accessibility: readonly string[];
  }
>;

/** Additive delivery contract; execution state remains in the parent response. */
export const composerDeliverySchema = z
  .object({
    version: z.literal('composer.delivery.v1'),
    audience: composerAudienceSchema,
    status: z.enum(['composed', 'fallback']),
    markdown: z.string(),
    ui: agentViewSchema.optional(),
    presentation: composerPresentationSchema.optional(),
    runId: z.string().optional(),
  })
  .strict();

export function withoutComposerAudience<T extends { audience?: ComposerAudience }>(input: T): Omit<T, 'audience'> {
  const { audience: _audience, ...command } = input;
  return command;
}
