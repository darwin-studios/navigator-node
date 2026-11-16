import type * as Darwin from "../index.mjs";
export type BuildRequestBodyZeroStartDraftInput = Darwin.BuildRequestBodyZeroStartDraftInput.Idea | Darwin.BuildRequestBodyZeroStartDraftInput.Website | Darwin.BuildRequestBodyZeroStartDraftInput.Definition;
export declare namespace BuildRequestBodyZeroStartDraftInput {
    interface Idea {
        kind: "idea";
        description: string;
    }
    interface Website {
        kind: "website";
        url: string;
    }
    interface Definition {
        kind: "definition";
        format?: BuildRequestBodyZeroStartDraftInputDefinition.Format | undefined;
        filename: string;
        source: string;
    }
    namespace BuildRequestBodyZeroStartDraftInputDefinition {
        const Format: {
            readonly Auto: "auto";
            readonly Openapi: "openapi";
            readonly Mcp: "mcp";
            readonly A2A: "a2a";
            readonly Openai: "openai";
            readonly Claude: "claude";
            readonly Pap: "pap";
            readonly Ucp: "ucp";
            readonly Acp: "acp";
            readonly Webmcp: "webmcp";
            readonly Ard: "ard";
            readonly X402: "x402";
            readonly Mpp: "mpp";
            readonly Ap2: "ap2";
            readonly Markdown: "markdown";
        };
        type Format = (typeof Format)[keyof typeof Format];
    }
}
