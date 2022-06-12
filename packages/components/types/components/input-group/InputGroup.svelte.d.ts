/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface InputGroupProps {
  /**
   * @default 'horizontal'
   */
  alignment?: "horizontal" | "vertical";

  /**
   * @default 'md'
   */
  size?: "xs" | "sm" | "md" | "lg";

  /**
   * @default undefined
   */
  class: string;
}

export default class InputGroup extends SvelteComponentTyped<
  InputGroupProps,
  {},
  { default: {} }
> {}
