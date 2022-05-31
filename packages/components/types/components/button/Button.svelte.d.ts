/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost"
  | "link";

export type Size = "xs" | "sm" | "md" | "lg";

export type Shape = "square" | "circle";

export interface Properties {
  color?: Color;
  size?: Size;
  shape?: Shape;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface ButtonProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> {
  /**
   * @default undefined
   */
  color?: Color;

  /**
   * @default undefined
   */
  size?: Size;

  /**
   * @default undefined
   */
  shape?: Shape;

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
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class Button extends SvelteComponentTyped<
  ButtonProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
