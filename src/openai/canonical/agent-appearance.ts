import { z } from 'zod';

const hex = z.string().regex(/^#[0-9a-fA-F]{6}$/, 'Use a six-digit hex color, such as #0071E3.');
export const agentBrandSchema = z.object({
  primary: hex.default('#0071E3'), secondary: hex.default('#AF52DE'),
  background: hex.default('#FFFFFF'), foreground: hex.default('#171717'),
  font: z.enum(['system', 'serif', 'mono']).default('system'),
}).strict();
// Local, bounded media only: animation cannot execute code or fetch a remote resource.
const animation = z.string().max(1_400_000).regex(/^data:(image\/(gif|webp)|video\/(mp4|webm));base64,[A-Za-z0-9+/]+=*$/);
const poster = z.string().max(700_000).regex(/^data:image\/(png|jpeg);base64,[A-Za-z0-9+/]+=*$/);
export const agentLoadingSchema = z.object({
  kind: z.enum(['darwin', 'pulse', 'media']).default('darwin'),
  asset: animation.optional(), poster: poster.optional(),
}).strict();
export type AgentBrand = z.infer<typeof agentBrandSchema>;
export type AgentLoading = z.infer<typeof agentLoadingSchema>;
/** Darwin-authored fallback accents, not claims about a provider's official branding. */
export function agentPresentationFallback(identity: string): AgentBrand {
  const slug = identity.trim().replace(/^@|^darwin-/g, '').toLowerCase();
  const accents = ['#315DB5', '#93603B', '#557442', '#8058A1', '#A54F6A', '#286F78'];
  const hash = Array.from(slug).reduce((value, character) => (value * 31 + character.charCodeAt(0)) >>> 0, 0);
  const authored: Record<string, string> = {exa:'#315DB5',firecrawl:'#B94D2E',apollo:'#817021',elevenlabs:'#4E4944',runway:'#4A5063',ideogram:'#74549B'};
  return {primary:authored[slug] ?? accents[hash % accents.length]!,secondary:accents[(hash+1)%accents.length]!,background:'#FFFFFF',foreground:'#171717',font:'system'};
}
export const agentFonts = { system: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', serif: 'Georgia, serif', mono: 'ui-monospace, SFMono-Regular, monospace' } as const;
