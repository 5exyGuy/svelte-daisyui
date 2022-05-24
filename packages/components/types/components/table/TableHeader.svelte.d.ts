/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TableHeaderProps {
  /**
   * @default undefined
   */
  class?: string;
}

export default class TableHeader extends SvelteComponentTyped<
  TableHeaderProps,
  {},
  { default: {} }
> {}
