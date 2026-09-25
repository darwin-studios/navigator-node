import type * as Darwin from '../index.js';

/**
 * Give an action more information, submit bounded completion feedback, or report a safety issue. No variant implicitly approves anything.
 */
export type ActUpdateRequest =
  | {
      message?: string | undefined;
      attachments?: Darwin.ActionAttachment[] | undefined;
      requestId: string;
    }
  | {
      kind: 'feedback';
      interactionId: string;
      expectedRevision: number;
      completion: 'YES' | 'PARTIAL' | 'NO' | 'UNKNOWN';
      correctness: 'YES' | 'PARTIAL' | 'NO' | 'UNKNOWN';
      timeliness: 'YES' | 'PARTIAL' | 'NO' | 'UNKNOWN';
      cooperation: 'YES' | 'PARTIAL' | 'NO' | 'UNKNOWN';
      safety: 'YES' | 'PARTIAL' | 'NO' | 'UNKNOWN';
      reasonCodes: string[];
      note?: string | undefined;
      requestId: string;
    }
  | {
      kind: 'safety_report';
      reasonCode:
        | 'PROMPT_INJECTION'
        | 'UNAUTHORIZED_ACTION'
        | 'DATA_EXPOSURE'
        | 'DECEPTIVE_COMPLETION'
        | 'COST_ABUSE'
        | 'OTHER';
      subjectRole?: ('REQUESTER' | 'FULFILLER') | undefined;
      note?: string | undefined;
      requestId: string;
    };
