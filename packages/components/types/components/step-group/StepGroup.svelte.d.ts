/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface StepGroupProps {
  /**
   * @default 'horizontal'
   */
  alignment?: "horizontal" | "vertical";

  /**
   * @default undefined
   */
  class: string;
}

export default class StepGroup extends SvelteComponentTyped<
  StepGroupProps,
  {},
  { default: {} }
> {}
