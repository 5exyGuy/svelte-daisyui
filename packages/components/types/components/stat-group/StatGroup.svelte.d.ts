/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface StatGroupProps {
  /**
   * @default 'horizontal'
   */
  alignment?: "horizontal" | "vertical";

  /**
   * @default undefined
   */
  background?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | undefined;

  /**
   * @default undefined
   */
  class?: string | undefined;
}

export default class StatGroup extends SvelteComponentTyped<
  StatGroupProps,
  {},
  { default: {} }
> {}