/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface MenuItemProps {
  /**
   * @default undefined
   */
  class?: string;
}

export default class MenuItem extends SvelteComponentTyped<
  MenuItemProps,
  {},
  { default: {} }
> {}
