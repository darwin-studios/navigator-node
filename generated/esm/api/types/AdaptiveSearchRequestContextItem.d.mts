import type * as Darwin from "../index.mjs";
export type AdaptiveSearchRequestContextItem = Darwin.AdaptiveSearchRequestContextItem.File | Darwin.AdaptiveSearchRequestContextItem.Text | Darwin.AdaptiveSearchRequestContextItem.Budget | Darwin.AdaptiveSearchRequestContextItem.Deadline | Darwin.AdaptiveSearchRequestContextItem.Custom;
export declare namespace AdaptiveSearchRequestContextItem {
    interface File {
        type: "file";
        name: string;
        mimeType: AdaptiveSearchRequestContextItemFile.MimeType;
        data: string;
    }
    namespace AdaptiveSearchRequestContextItemFile {
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
