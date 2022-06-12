/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TabGroupProps {
  /**
   * @default undefined
   */
  type?: "bordered" | "lifted" | "boxed";

  /**
   * @default 'md'
   */
  size?: "xs" | "sm" | "md" | "lg";

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
