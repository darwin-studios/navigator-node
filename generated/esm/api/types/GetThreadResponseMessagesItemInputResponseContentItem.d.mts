import type * as Darwin from "../index.mjs";
export type GetThreadResponseMessagesItemInputResponseContentItem = Darwin.GetThreadResponseMessagesItemInputResponseContentItem.Text | Darwin.GetThreadResponseMessagesItemInputResponseContentItem.Image | Darwin.GetThreadResponseMessagesItemInputResponseContentItem.Audio | Darwin.GetThreadResponseMessagesItemInputResponseContentItem.Video | Darwin.GetThreadResponseMessagesItemInputResponseContentItem.File;
export declare namespace GetThreadResponseMessagesItemInputResponseContentItem {
    interface Text {
        type: "text";
        text: string;
    }
    interface Image {
        type: "image";
        assetId: string;
    }
    interface Audio {
        type: "audio";
        assetId: string;
    }
    interface Video {
        type: "video";
        assetId: string;
    }
    interface File {
        type: "file";
        assetId: string;
    }
}
