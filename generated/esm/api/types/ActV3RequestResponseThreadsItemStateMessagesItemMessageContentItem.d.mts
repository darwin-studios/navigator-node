import type * as Darwin from "../index.mjs";
export type ActV3RequestResponseThreadsItemStateMessagesItemMessageContentItem = Darwin.ActV3RequestResponseThreadsItemStateMessagesItemMessageContentItem.Text | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemMessageContentItem.Image | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemMessageContentItem.Audio | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemMessageContentItem.Video | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemMessageContentItem.File | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemMessageContentItem.OwnerFile;
export declare namespace ActV3RequestResponseThreadsItemStateMessagesItemMessageContentItem {
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
    interface OwnerFile {
        type: "owner_file";
        inputRef: string;
    }
}
