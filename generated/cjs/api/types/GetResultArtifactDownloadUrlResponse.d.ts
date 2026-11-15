export interface GetResultArtifactDownloadUrlResponse {
  url: string;
  expiresAt: string;
  disposition: GetResultArtifactDownloadUrlResponse.Disposition;
  mediaType: string;
  fileName: string | null;
  sizeBytes: number;
  sha256: string;
}
export declare namespace GetResultArtifactDownloadUrlResponse {
  const Disposition: {
    readonly Attachment: 'attachment';
  };
  type Disposition = (typeof Disposition)[keyof typeof Disposition];
}
