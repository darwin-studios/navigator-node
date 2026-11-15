import type * as core from '../../../../core/index.js';
import * as errors from '../../../../errors/index.js';
import type * as Darwin from '../../../index.js';

export declare class ConflictError extends errors.DarwinError {
  readonly body: Darwin.ActPostFailure;
  constructor(body: Darwin.ActPostFailure, rawResponse?: core.RawResponse);
}
