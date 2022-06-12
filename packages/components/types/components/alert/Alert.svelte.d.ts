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

export interface ResponsiveProperties {
  color?: Color;
}

export interface Screen {
  sm?: ResponsiveProperties;
  md?: ResponsiveProperties;
  lg?: ResponsiveProperties;
  xl?: ResponsiveProperties;
  "2xl"?: ResponsiveProperties;
}

export interface AlertProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  color?: Color;

  /**
   * @default true
   */
  showIcon?: boolean;

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class Alert extends SvelteComponentTyped<
  AlertProps,
  {},
  { default: {} }
> {}
