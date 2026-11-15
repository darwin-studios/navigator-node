import type * as Darwin from "../index.mjs";
export type ActV3GetThreadResponseMessagesItemResultContentItem = Darwin.ActV3GetThreadResponseMessagesItemResultContentItem.Text | Darwin.ActV3GetThreadResponseMessagesItemResultContentItem.Image | Darwin.ActV3GetThreadResponseMessagesItemResultContentItem.Audio | Darwin.ActV3GetThreadResponseMessagesItemResultContentItem.Video | Darwin.ActV3GetThreadResponseMessagesItemResultContentItem.File;
export declare namespace ActV3GetThreadResponseMessagesItemResultContentItem {
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
