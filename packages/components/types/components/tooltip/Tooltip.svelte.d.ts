/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export type Position = "top" | "bottom" | "left" | "right";

export interface Properties {
  color?: Color;
  position?: Position;
  open?: boolean;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface TooltipProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  color?: Color;

  /**
   * @default false
   */
  open?: boolean;

  /**
   * @default undefined
   */
  position?: Position;

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class Tooltip extends SvelteComponentTyped<
  TooltipProps,
  {},
  { default: {}; content: {} }
> {}
