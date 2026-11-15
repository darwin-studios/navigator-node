import { z } from 'zod';


/** Semantic output for an agent caller. Transport and caller identity are independent. */
export const agentComponentSchema = z.object({
  id: z.string().min(1),
  kind: z.string().min(1),
  title: z.string(),
  data: z.json(),
  text: z.string().optional(),
  actions: z
    .array(
      z.object({
        label: z.string(),
        available: z.boolean(),
        requiredInputs: z.array(z.string()),
        approval: z.string(),
        binding: z.object({ name: z.string(), arguments: z.record(z.string(), z.json()) }).optional(),
        reason: z.string().optional(),
      }),
    )
    .default([]),
});
export const agentViewSchema = z.object({
  version: z.literal('darwinui-agent-v1'),
  components: z.array(agentComponentSchema),
  incomplete: z.array(z.string()).default([]),
});
export type AgentComponent = z.infer<typeof agentComponentSchema>;
export type AgentView = z.infer<typeof agentViewSchema>;

/** No HTML, React props, hidden UI state, or inferred permission enters this view. */
export function createAgentView(components: AgentComponent[], incomplete: string[] = []): AgentView {
  return agentViewSchema.parse({ version: 'darwinui-agent-v1', components, incomplete });
}
export function renderAgentView(view: AgentView, format: 'json' | 'text' = 'json'): string {
  const parsed = agentViewSchema.parse(view);
  if (format === 'text')
    return [...parsed.components.map((c) => c.text ?? JSON.stringify(c.data)), ...parsed.incomplete].join('\n');
  // JSON is the lossless agent representation; visual summaries never replace evidence.
  return JSON.stringify(parsed, null, 2);
}
