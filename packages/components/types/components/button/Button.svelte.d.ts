/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ButtonProps {
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
    | "link"
    | undefined;

  /**
   * @default undefined
   */
  size?: "tiny" | "small" | "medium" | "large" | undefined;

  /**
   * @default undefined
   */
  shape?: "square" | "circle" | undefined;

  /**
   * @default false
   */
  active?: boolean;

  /**
   * @default false
   */
  block?: boolean;

  /**
   * @default false
   */
  outline?: boolean;

  /**
   * @default false
   */
  loading?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default false
   */
  noAnim?: boolean;

  /**
   * @default null
   */
  class?: string | undefined;
}

export default class Button extends SvelteComponentTyped<
  ButtonProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
