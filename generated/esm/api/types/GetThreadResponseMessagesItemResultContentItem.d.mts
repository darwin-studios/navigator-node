import type * as Darwin from "../index.mjs";
export type GetThreadResponseMessagesItemResultContentItem = Darwin.GetThreadResponseMessagesItemResultContentItem.Text | Darwin.GetThreadResponseMessagesItemResultContentItem.Image | Darwin.GetThreadResponseMessagesItemResultContentItem.Audio | Darwin.GetThreadResponseMessagesItemResultContentItem.Video | Darwin.GetThreadResponseMessagesItemResultContentItem.File;
export declare namespace GetThreadResponseMessagesItemResultContentItem {
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
