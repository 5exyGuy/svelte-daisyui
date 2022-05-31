/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ButtonGroupProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  class?: string;
}

export default class ButtonGroup extends SvelteComponentTyped<
  ButtonGroupProps,
  {},
  { default: {} }
> {}
