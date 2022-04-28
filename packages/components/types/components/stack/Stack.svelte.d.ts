/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface StackProps {
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
   * @default ''
   */
  class?: string | undefined;
}

export default class Stack extends SvelteComponentTyped<
  StackProps,
  {},
  { default: {} }
> {}
