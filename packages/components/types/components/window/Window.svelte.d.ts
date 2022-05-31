/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface WindowProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  class?: string;
}

export default class Window extends SvelteComponentTyped<
  WindowProps,
  {},
  { default: { [key: string]: any } }
> {}
