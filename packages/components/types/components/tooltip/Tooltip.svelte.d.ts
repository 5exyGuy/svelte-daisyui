/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TooltipProps {
  /**
   * @default false
   */
  open?: boolean;

  /**
   * @default 'top'
   */
  position?: "top" | "bottom" | "left" | "right";

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
   * @default undefined
   */
  class?: string | undefined;
}

export default class Tooltip extends SvelteComponentTyped<
  TooltipProps,
  {},
  { default: {}; content: {} }
> {}
