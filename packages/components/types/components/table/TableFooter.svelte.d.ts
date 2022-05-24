/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TableFooterProps {
  /**
   * @default undefined
   */
  class?: string;
}

export default class TableFooter extends SvelteComponentTyped<
  TableFooterProps,
  {},
  { default: {} }
> {}
