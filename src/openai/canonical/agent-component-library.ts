import { z } from 'zod';

/** Portable authoring input. Source is data until the registration pipeline validates and builds it. */
export const agentComponentLibrarySchema = z
  .object({
    schemaVersion: z.literal(1),
    name: z.string().min(1).max(100),
    version: z.string().regex(/^\d+\.\d+\.\d+(?:-[a-zA-Z0-9.-]+)?$/),
    importName: z
      .string()
      .regex(/^@[a-z0-9-]+\/[a-z0-9-]+$/)
      .refine(
        (name) => !name.startsWith('@darwinui/'),
        'Use your own package name; Darwin UI is reserved for first-party agents.',
      ),
    entry: z.string().min(1),
    files: z.record(z.string(), z.string().max(500_000)),
    components: z
      .array(
        z
          .object({
            export: z.string().regex(/^[A-Z][A-Za-z0-9]*$/),
            description: z.string().min(1).max(2000),
            props: z.string().min(1).max(10000),
            example: z.string().min(1).max(20000),
            human: z
              .object({
                description: z.string().min(1).max(2000),
                states: z
                  .array(z.enum(['input', 'running', 'needs_input', 'approval', 'success', 'empty', 'error']))
                  .min(1),
              })
              .strict()
              .optional(),
            agent: z
              .object({
                description: z.string().min(1).max(2000),
                outputSchema: z.record(z.string(), z.unknown()),
                example: z.record(z.string(), z.unknown()),
                instructions: z.string().max(10000).default(''),
              })
              .strict()
              .optional(),
          })
          .strict(),
      )
      .min(1)
      .max(100),
  })
  .strict()
  .superRefine((library, context) => {
    const paths = Object.keys(library.files);
    if (paths.length > 100 || !paths.length)
      context.addIssue({ code: 'custom', message: 'Include 1–100 source files.' });
    for (const path of paths) {
      if (
        !/^[A-Za-z0-9_./-]+\.(tsx?|jsx?|css|json)$/.test(path) ||
        path.startsWith('/') ||
        path.split('/').some((part) => part === '..' || part === '.' || !part)
      )
        context.addIssue({ code: 'custom', message: `Invalid source path: ${path}` });
    }
    if (!Object.hasOwn(library.files, library.entry))
      context.addIssue({ code: 'custom', message: 'The entry file must be included.' });
    if (new Set(library.components.map((component) => component.export)).size !== library.components.length)
      context.addIssue({ code: 'custom', message: 'Component export names must be unique.' });
  });
export type AgentComponentLibrary = z.infer<typeof agentComponentLibrarySchema>;
export function readAgentComponentLibrary(source: string): AgentComponentLibrary {
  if (new TextEncoder().encode(source).length > 2_000_000)
    throw new Error('Use a component-library package under 2 MB.');
  return agentComponentLibrarySchema.parse(JSON.parse(source));
}
export const COMPONENT_LIBRARY_TEMPLATE: AgentComponentLibrary = {
  schemaVersion: 1,
  name: 'Research Desk UI',
  version: '1.0.0',
  importName: '@research-desk/ui',
  entry: 'src/index.tsx',
  files: {
    'src/index.tsx':
      "import React from 'react';\nexport function Summary({ title, children }) { return <section><h2>{title}</h2>{children}</section>; }\n",
  },
  components: [
    {
      export: 'Summary',
      description: 'A research summary with a heading and supporting content.',
      props: '{ title: string; children?: React.ReactNode }',
      example: '<Summary title="Research summary">{facts.execution.status}</Summary>',
      human: {
        description: 'Accessible summary of operation state and results.',
        states: ['input', 'running', 'needs_input', 'approval', 'success', 'empty', 'error'],
      },
      agent: {
        description: 'Structured summary for an agent consumer.',
        outputSchema: {
          type: 'object',
          properties: { title: { type: 'string' }, status: { type: 'string' } },
          required: ['title', 'status'],
        },
        example: { title: 'Research summary', status: 'success' },
        instructions: 'Preserve action identifiers and approval state; never infer approval.',
      },
    },
  ],
};

export function componentPresentationCoverage(library: AgentComponentLibrary) {
  const states = ['input', 'running', 'needs_input', 'approval', 'success', 'empty', 'error'] as const;
  return library.components.map((component) => ({
    export: component.export,
    human: !!component.human,
    agent: !!component.agent,
    missingStates: states.filter((state) => !component.human?.states.includes(state)),
  }));
}
