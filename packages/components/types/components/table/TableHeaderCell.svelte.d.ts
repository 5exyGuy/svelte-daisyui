/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TableHeaderCellProps {
  /**
   * @default undefined
   */
  class?: string;
}

export default class TableHeaderCell extends SvelteComponentTyped<
  TableHeaderCellProps,
  {},
  { default: {} }
> {}
