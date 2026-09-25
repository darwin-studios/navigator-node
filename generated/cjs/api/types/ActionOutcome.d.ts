/** A bounded terminal classification. Unknown and censored outcomes are never silently relabeled as failures. */
export declare const ActionOutcome: {
  readonly Succeeded: 'succeeded';
  readonly Failed: 'failed';
  readonly Canceled: 'canceled';
  readonly Unknown: 'unknown';
};
export type ActionOutcome = (typeof ActionOutcome)[keyof typeof ActionOutcome];
