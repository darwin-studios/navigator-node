import type * as Darwin from "../index.mjs";
export type GetThreadResponseMessagesItemMessageContentItem = Darwin.GetThreadResponseMessagesItemMessageContentItem.Text | Darwin.GetThreadResponseMessagesItemMessageContentItem.Image | Darwin.GetThreadResponseMessagesItemMessageContentItem.Audio | Darwin.GetThreadResponseMessagesItemMessageContentItem.Video | Darwin.GetThreadResponseMessagesItemMessageContentItem.File | Darwin.GetThreadResponseMessagesItemMessageContentItem.OwnerFile;
export declare namespace GetThreadResponseMessagesItemMessageContentItem {
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
