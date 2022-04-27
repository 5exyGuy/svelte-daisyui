/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type BrandColor = "primary" | "secondary" | "accent";

export type FunctionalColor = "info" | "success" | "warning" | "error";

export type AdditionalColor = "ghost" | "link";

export type Size = "tiny" | "small" | "medium" | "large";

export type Shape = "square" | "circle";

export interface ButtonProps {
  /**
   * @default null
   */
  color?: BrandColor | FunctionalColor | AdditionalColor | undefined;

  /**
   * @default null
   */
  size?: Size | undefined;

  /**
   * @default null
   */
  shape?: Shape | undefined;

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
