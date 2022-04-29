/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface WindowProps {
  /**
   * @default undefined
   */
  class?: string;
}

export default class Window extends SvelteComponentTyped<
  WindowProps,
  {},
  { default: {} }
> {}
