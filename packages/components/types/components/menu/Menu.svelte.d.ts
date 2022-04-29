/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface MenuProps {
  /**
   * @default 'horizontal'
   */
  alignment?: "horizontal" | "vertical";

  /**
   * @default undefined
   */
  class?: string;
}

export default class Menu extends SvelteComponentTyped<
  MenuProps,
  {},
  { default: {} }
> {}
