import { z } from 'zod';

const instruction = z.string().max(1200);
export const operationGuidanceSchema = z
  .object({
    openingQuestion: instruction.default(''),
    primaryAction: z.string().max(80).default(''),
    context: instruction.default(''),
    afterInput: instruction.default(''),
    success: instruction.default(''),
    recovery: instruction.default(''),
  })
  .strict();
export type OperationGuidance = z.infer<typeof operationGuidanceSchema>;

/** Authoring hints describe the interaction, never authority to run an operation. */
export function operationGuidance(operation: {
  name: string;
  description?: string;
  guidance?: OperationGuidance;
}): OperationGuidance {
  const name = operation.name.toLowerCase();
  const question = /search|find|discover/.test(name)
    ? 'What would you like to find?'
    : /enrich|person|contact|company/.test(name)
      ? 'Which person or company should we look up?'
      : /image|illustrat|design/.test(name)
        ? 'What would you like to create?'
        : /video|storyboard/.test(name)
          ? 'What should happen in the video?'
          : /speech|voice|audio/.test(name)
            ? 'What should the voice say?'
            : /build|create.*agent/.test(name)
              ? 'What should your agent help people do?'
              : /publish|release/.test(name)
                ? 'Which agent would you like to publish?'
                : `What would you like to do with ${operation.name}?`;
  const defaults: OperationGuidance = {
    openingQuestion: question,
    primaryAction: operation.name.slice(0, 80),
    context:
      'Use the current session goal, user edits and supplied files. Ask only for essential missing inputs; never invent them.',
    afterInput:
      'Reflect edits in the draft. Keep the current step while typing; advance after Enter or the primary action. Show one useful next action. Prepare canonical inputs before proposing execution.',
    success:
      'Show the actual returned result, then one relevant next action. Mark complete only when Runtime records completion and evidence.',
    recovery:
      'Preserve inputs. Explain what needs attention in plain language and offer a concrete correction or retry. Missing access must not block draft preparation.',
  };
  for (const [key, value] of Object.entries(operation.guidance ?? {}))
    if (value.trim()) defaults[key as keyof OperationGuidance] = value;
  return defaults;
}
