export interface RunTurnRequest {
    type?: RunTurnRequest.Type | undefined;
    /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
    audience?: RunTurnRequest.Audience | undefined;
    /** Explicit agent target. Bypasses Darwin discovery; it never grants execution authority. */
    target?: RunTurnRequest.Target | undefined;
    /** A unique ID for this message. Reuse it only when retrying the same request. */
    clientMessageId: string;
    /** What you want to find, do, or discuss. */
    message: string;
    /** Session to continue. Omit to start a new session. */
    sessionId?: string | undefined;
    /** Deprecated alias for sessionId. */
    threadId?: string | undefined;
    /** Omit to start a conversation; return this ID on follow-ups. */
    conversationId?: string | undefined;
    mode?: RunTurnRequest.Mode | undefined;
    context?: RunTurnRequest.Context | undefined;
    /** Read memory for an account agent you belong to. Does not change the acting identity. Cannot be combined with userId or user_memory. */
    memoryAgentId?: string | undefined;
    /** Your application-scoped user ID, or your own Darwin user ID with a user credential. Reuses memory previously supplied for this user; never grants account access. */
    userId?: string | undefined;
    /** Markdown preferences to personalize this request. Read a .md file and pass its text, not a path or URL. With userId, saves these preferences for later requests; empty text clears them. */
    user_memory?: string | undefined;
    /** Optional attribution check. Must match the application attached to your API credential; inferred when omitted. */
    applicationId?: string | undefined;
}
export declare namespace RunTurnRequest {
    const Type: {
        readonly Turn: "turn";
    };
    type Type = (typeof Type)[keyof typeof Type];
    /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
    const Audience: {
        readonly Human: "human";
        readonly Agent: "agent";
    };
    type Audience = (typeof Audience)[keyof typeof Audience];
    /**
     * Explicit agent target. Bypasses Darwin discovery; it never grants execution authority.
     */
    interface Target {
        agentId: string;
        operationId?: string | undefined;
    }
    const Mode: {
        readonly Execute: "execute";
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
                    readonly ApplicationPdf: "application/pdf";
                    readonly ImagePng: "image/png";
                    readonly ImageJpeg: "image/jpeg";
                    readonly ImageWebp: "image/webp";
                };
                type MimeType = (typeof MimeType)[keyof typeof MimeType];
            }
        }
    }
}
