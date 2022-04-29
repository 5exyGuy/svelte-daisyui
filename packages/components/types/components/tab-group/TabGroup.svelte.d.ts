/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TabGroupProps {
  /**
   * @default undefined
   */
  type?: "bordered" | "lifted" | "boxed";

  /**
   * @default 'medium'
   */
  size?: "tiny" | "small" | "medium" | "large";

  /**
   * @default undefined
   */
  class?: string;
}

export default class TabGroup extends SvelteComponentTyped<
  TabGroupProps,
  {},
  { default: {} }
> {}
