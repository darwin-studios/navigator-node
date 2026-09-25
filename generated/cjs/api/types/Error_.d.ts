export interface Error_ {
  error?: string | undefined;
  message?: string | undefined;
  fields?: Record<string, unknown>[] | undefined;
  /** Accepts any additional properties */
  [key: string]: any;
}
