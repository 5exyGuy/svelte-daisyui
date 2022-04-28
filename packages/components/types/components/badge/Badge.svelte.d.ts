/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface BadgeProps {
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
   * @default false
   */
  outline?: boolean;

  /**
   * @default ''
   */
  class?: string | undefined;
}

export default class Badge extends SvelteComponentTyped<
  BadgeProps,
  {},
  { default: {} }
> {}
