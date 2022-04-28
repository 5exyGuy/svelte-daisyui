/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CodeProps {
  /**
   * @default undefined
   */
  class?: string | undefined;
}

export default class Code extends SvelteComponentTyped<
  CodeProps,
  {},
  { default: {} }
> {}
