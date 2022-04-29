/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface InputGroupProps {
  /**
   * @default 'horizontal'
   */
  alignment?: "horizontal" | "vertical";

  /**
   * @default 'medium'
   */
  size?: "tiny" | "small" | "medium" | "large";

  /**
   * @default undefined
   */
  class?: string;
}

export default class InputGroup extends SvelteComponentTyped<
  InputGroupProps,
  {},
  { default: {} }
> {}
