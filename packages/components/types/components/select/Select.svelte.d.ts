/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SelectProps {
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
    | "ghost"
    | undefined;

  /**
   * @default 'medium'
   */
  size?: "tiny" | "small" | "medium" | "large";

  /**
   * @default false
   */
  bordered?: boolean;

  /**
   * @default undefined
   */
  class?: string | undefined;
}

export default class Select extends SvelteComponentTyped<
  SelectProps,
  {},
  { default: {} }
> {}
