/**
 * @example
 *     {
 *         fileId: "fileId",
 *         id: "id",
 *         name: "name",
 *         type: "type",
 *         size: 1,
 *         modified: 1.1,
 *         key: "key",
 *         iv: "iv"
 *     }
 */
export interface ThreadContextUpload {
  fileId: string;
  id: string;
  name: string;
  type: string;
  size: number;
  modified: number;
  /** Per-file AES-256 key; keep out of logs and analytics. */
  key: string;
  iv: string;
}
