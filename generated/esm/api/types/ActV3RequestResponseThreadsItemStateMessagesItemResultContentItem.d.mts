import type * as Darwin from "../index.mjs";
export type ActV3RequestResponseThreadsItemStateMessagesItemResultContentItem = Darwin.ActV3RequestResponseThreadsItemStateMessagesItemResultContentItem.Text | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemResultContentItem.Image | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemResultContentItem.Audio | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemResultContentItem.Video | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemResultContentItem.File;
export declare namespace ActV3RequestResponseThreadsItemStateMessagesItemResultContentItem {
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
