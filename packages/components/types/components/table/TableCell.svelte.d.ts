/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TableCellProps {
  /**
   * @default undefined
   */
  class?: string;
}

export default class TableCell extends SvelteComponentTyped<
  TableCellProps,
  {},
  { default: {} }
> {}
