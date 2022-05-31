/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface StackProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default 'down'
   */
  direction?:
    | "up"
    | "down"
    | "left"
    | "right"
    | "upleft"
    | "upright"
    | "downleft"
    | "downright";

  /**
   * @default undefined
   */
  class: string;
}

export default class Stack extends SvelteComponentTyped<
  StackProps,
  {},
  { default: {} }
> {}
