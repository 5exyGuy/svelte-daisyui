/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type BrandColor = "primary" | "secondary" | "accent" | "info";

export type FunctionalColor = "info" | "success" | "warning" | "error";

export type Size = "tiny" | "small" | "medium" | "large";

export interface Props {
  color?: BrandColor | FunctionalColor | "ghost";
  size?: Size;
}

export interface Screen {
  sm?: Props;
  md?: Props;
  lg?: Props;
  xl?: Props;
  "2xl"?: Props;
}

export interface BadgeProps {
  /**
   * @default undefined
   */
  color?: Props["color"];

  /**
   * @default 'medium'
   */
  size?: Props["size"];

  /**
   * @default false
   */
  outline?: boolean;

  /**
   * @default undefined
   */
  class: string;

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
