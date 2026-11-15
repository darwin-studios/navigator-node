/**
 * @example
 *     {
 *         thread: "thread-id"
 *     }
 */
export interface ArchiveThreadBody {
  /** The thread to hide from the active list. */
  thread: string;
  /** Optional agent whose side of the thread you want to archive. */
  agent?: string;
}
