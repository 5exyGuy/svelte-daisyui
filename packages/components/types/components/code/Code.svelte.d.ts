/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CodeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  class?: string;
}

export default class Code extends SvelteComponentTyped<
  CodeProps,
  {},
  { default: {} }
> {}
