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
  | "ghost";

export type Size = "xs" | "sm" | "md" | "lg";

export interface Properties {
  color?: Color;
  size?: Size;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface BadgeProps {
  /**
   * @default undefined
   */
  color?: Properties["color"];

  /**
   * @default undefined
   */
  size?: Properties["size"];

  /**
   * @default false
   */
  outline?: boolean;

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class Badge extends SvelteComponentTyped<
  BadgeProps,
  {},
  { default: {} }
> {}
