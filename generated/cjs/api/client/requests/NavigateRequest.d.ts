import type * as Darwin from '../../index.js';

/**
 * @example
 *     {
 *         type: "turn",
 *         clientMessageId: "message-001",
 *         message: "Find agents that can summarize research papers."
 *     }
 */
export interface NavigateRequest {
  'X-Assist-Token'?: string;
  'Idempotency-Key'?: string;
  type?: NavigateRequest.Type;
  /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
  audience?: NavigateRequest.Audience;
  /** Explicit agent target. Bypasses Darwin discovery; it never grants execution authority. */
  target?: NavigateRequest.Target;
  /** A unique ID for this message. Reuse it only when retrying the same request. */
  clientMessageId: string;
  /** What you want to find, do, or discuss. */
  message: string;
  /** Session to continue. Omit to start a new session. */
  sessionId?: string;
  /** Deprecated alias for sessionId. */
  threadId?: string;
  /** Omit to start a conversation; return this ID on follow-ups. */
  conversationId?: string;
  /** Omit for Auto. Search returns indexed matches; live_search asks providers for current task fit; execute coordinates work; route opens primed agent threads for direct interaction; chat discusses. Approvals still apply. */
  mode?: NavigateRequest.Mode;
  context?: NavigateRequest.Context;
  /** Owner-reviewed provider-contact consent or a control for an existing durable session. Omit to review indexed choices without contacting providers. */
  liveSearch?: Darwin.NavigateRequestLiveSearch;
  /** Read memory for an account agent you belong to. Does not change the acting identity. Cannot be combined with userId or user_memory. */
  memoryAgentId?: string;
  /** Your application-scoped user ID, or your own Darwin user ID with a user credential. Reuses memory previously supplied for this user; never grants account access. */
  userId?: string;
  /** Markdown preferences to personalize this request. Read a .md file and pass its text, not a path or URL. With userId, saves these preferences for later requests; empty text clears them. */
  user_memory?: string;
  /** Optional attribution check. Must match the application attached to your API credential; inferred when omitted. */
  applicationId?: string;
}
export declare namespace NavigateRequest {
  const Type: {
    readonly Turn: 'turn';
  };
  type Type = (typeof Type)[keyof typeof Type];
  /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
  const Audience: {
    readonly Human: 'human';
    readonly Agent: 'agent';
  };
  type Audience = (typeof Audience)[keyof typeof Audience];
  /**
   * Explicit agent target. Bypasses Darwin discovery; it never grants execution authority.
   */
  interface Target {
    agentId: string;
    operationId?: string | undefined;
  }
  /** Omit for Auto. Search returns indexed matches; live_search asks providers for current task fit; execute coordinates work; route opens primed agent threads for direct interaction; chat discusses. Approvals still apply. */
  const Mode: {
    readonly Search: 'search';
    readonly LiveSearch: 'live_search';
    readonly Execute: 'execute';
    readonly Route: 'route';
    readonly Chat: 'chat';
  };
  type Mode = (typeof Mode)[keyof typeof Mode];
  interface Context {
    /** Additional text context blocks. Text blocks and files share a ten-item limit. */
    texts?: string[] | undefined;
    /** Task details, constraints, budget, or deadline. This is not permission to spend. */
    text?: string | undefined;
    /** PDFs or images, with base64 contents. Put Markdown text in context.text or user_memory. */
    files?: Context.Files.Item[] | undefined;
  }
  namespace Context {
    type Files = Files.Item[];
    namespace Files {
      interface Item {
        name: string;
        mimeType: Item.MimeType;
        data: string;
      }
      namespace Item {
        const MimeType: {
          readonly ApplicationPdf: 'application/pdf';
          readonly ImagePng: 'image/png';
          readonly ImageJpeg: 'image/jpeg';
          readonly ImageWebp: 'image/webp';
        };
        type MimeType = (typeof MimeType)[keyof typeof MimeType];
      }
    }
  }
}
