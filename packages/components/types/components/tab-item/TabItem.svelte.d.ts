/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TabItemProps {
  /**
   * @default false
   */
  active?: boolean;

  /**
   * @default ''
   */
  class?: string | undefined;
}

export default class TabItem extends SvelteComponentTyped<
  TabItemProps,
  {},
  { default: {} }
> {}
