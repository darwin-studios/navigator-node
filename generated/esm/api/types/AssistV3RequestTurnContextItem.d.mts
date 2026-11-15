import type * as Darwin from "../index.mjs";
export type AssistV3RequestTurnContextItem = Darwin.AssistV3RequestTurnContextItem.File | Darwin.AssistV3RequestTurnContextItem.Text | Darwin.AssistV3RequestTurnContextItem.Budget | Darwin.AssistV3RequestTurnContextItem.Deadline | Darwin.AssistV3RequestTurnContextItem.Custom;
export declare namespace AssistV3RequestTurnContextItem {
    interface File {
        type: "file";
        name: string;
        mimeType: AssistV3RequestTurnContextItemFile.MimeType;
        data: string;
    }
    namespace AssistV3RequestTurnContextItemFile {
        const MimeType: {
            readonly ApplicationPdf: "application/pdf";
            readonly ImagePng: "image/png";
            readonly ImageJpeg: "image/jpeg";
            readonly ImageWebp: "image/webp";
        };
        type MimeType = (typeof MimeType)[keyof typeof MimeType];
    }
    interface Text {
        type: "text";
        text: string;
    }
    interface Budget {
        type: "budget";
        amountMinor: number;
        currency: string;
    }
    interface Deadline {
        type: "deadline";
        at: string;
    }
    interface Custom {
        type: "custom";
        data: Record<string, unknown>;
    }
}
