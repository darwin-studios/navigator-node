import type * as Darwin from "../index.mjs";
export type ActV3ResponseRequestThreadsItemStateMessagesItemResultContentItem = Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemResultContentItem.Text | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemResultContentItem.Image | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemResultContentItem.Audio | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemResultContentItem.Video | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemResultContentItem.File;
export declare namespace ActV3ResponseRequestThreadsItemStateMessagesItemResultContentItem {
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
