import type * as Darwin from '../index.js';

export type ActV3Request =
  | {
      searchId: string;
      agentIds?: string[] | undefined;
      arguments?: Record<string, Record<string, unknown>> | undefined;
      audience?: ('human' | 'agent') | undefined;
      message: string;
      context?:
        | {
            text: string;
          }
        | undefined;
    }
  | {
      targets: {
        agentId: string;
        operationId?: string | undefined;
        operationRevision?: number | undefined;
        arguments?: Record<string, unknown> | undefined;
      }[];
      audience?: ('human' | 'agent') | undefined;
      message: string;
      context?:
        | {
            text: string;
          }
        | undefined;
    }
  | {
      audience?: ('human' | 'agent') | undefined;
      threadId: string;
      message: Darwin.ActV3RequestAudienceMessage;
    };
