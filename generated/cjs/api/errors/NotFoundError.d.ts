import type * as core from '../../core/index.js';
import * as errors from '../../errors/index.js';
import type * as Darwin from '../index.js';

export declare class NotFoundError extends errors.DarwinError {
  readonly body: Darwin.Error_;
  constructor(body: Darwin.Error_, rawResponse?: core.RawResponse);
}
