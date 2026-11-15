import type * as core from "../../../../core/index.mjs";
import * as errors from "../../../../errors/index.mjs";
import type * as Darwin from "../../../index.mjs";
export declare class ConflictError extends errors.DarwinError {
    readonly body: Darwin.ActPostFailure;
    constructor(body: Darwin.ActPostFailure, rawResponse?: core.RawResponse);
}
