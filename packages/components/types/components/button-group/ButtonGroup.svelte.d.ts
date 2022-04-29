/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ButtonGroupProps {
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
