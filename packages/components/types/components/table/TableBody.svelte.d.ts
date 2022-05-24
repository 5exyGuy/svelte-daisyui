/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TableBodyProps {
  /**
   * @default undefined
   */
  class?: string;
}

export default class TableBody extends SvelteComponentTyped<
  TableBodyProps,
  {},
  { default: {} }
> {}
