/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface KbdProps {
  /**
   * @default undefined
   */
  size?: "tiny" | "small" | "medium" | "large";

  /**
   * @default ''
   */
  class?: string | undefined;
}

export default class Kbd extends SvelteComponentTyped<
  KbdProps,
  {},
  { default: {} }
> {}
