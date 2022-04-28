/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ProgressProps {
  /**
   * @default undefined
   */
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | undefined;

  /**
   * @default 'medium'
   */
  size?: "tiny" | "small" | "medium" | "large";

  /**
   * @default 0
   */
  value?: number;

  /**
   * @default 100
   */
  max?: number;

  /**
   * @default undefined
   */
  class?: string | undefined;
}

export default class Progress extends SvelteComponentTyped<
  ProgressProps,
  {},
  {}
> {}
