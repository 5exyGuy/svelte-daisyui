/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TabItemProps {
  /**
   * @default false
   */
  active?: boolean;

  /**
   * @default undefined
   */
  class?: string;
}

export default class TabItem extends SvelteComponentTyped<
  TabItemProps,
  {},
  { default: {} }
> {}
