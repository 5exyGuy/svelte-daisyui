/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface DividerProps {
  /**
   * @default 'vertical'
   */
  alignment?: "vertical" | "horizontal";

  /**
   * @default undefined
   */
  class: string;
}

export default class Divider extends SvelteComponentTyped<
  DividerProps,
  {},
  { default: {} }
> {}
