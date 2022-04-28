/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface WindowProps {
  /**
   * @default ''
   */
  class?: string | undefined;
}

export default class Window extends SvelteComponentTyped<
  WindowProps,
  {},
  { default: {} }
> {}
