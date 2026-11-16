import type * as Darwin from '../index.js';

export type BuildRequestBody =
  | Darwin.BuildRequestBodyZero
  | Darwin.BuildRequestBodyOne
  | {
      action: 'prepare_release';
      draftId: string;
      revision: number;
    }
  | Darwin.BuildRequestBodyThree;
