import type * as Darwin from "../index.mjs";
export type ActV3GetThreadResponseMessagesItemInputResponseContentItem = Darwin.ActV3GetThreadResponseMessagesItemInputResponseContentItem.Text | Darwin.ActV3GetThreadResponseMessagesItemInputResponseContentItem.Image | Darwin.ActV3GetThreadResponseMessagesItemInputResponseContentItem.Audio | Darwin.ActV3GetThreadResponseMessagesItemInputResponseContentItem.Video | Darwin.ActV3GetThreadResponseMessagesItemInputResponseContentItem.File;
export declare namespace ActV3GetThreadResponseMessagesItemInputResponseContentItem {
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
