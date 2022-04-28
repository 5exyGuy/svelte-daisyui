/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CodeProps {
  /**
   * @default ''
   */
  class?: string | undefined;
}

export default class Code extends SvelteComponentTyped<
  CodeProps,
  {},
  { default: {} }
> {}
