/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type BrandColor = "primary" | "secondary" | "accent" | "info";

export type FunctionalColor = "info" | "success" | "warning" | "error";

export type Size = "tiny" | "small" | "medium" | "large";

export interface BadgeProps {
  /**
   * @default undefined
   */
  color?: BrandColor | FunctionalColor;

  /**
   * @default 'medium'
   */
  size?: Size;

  /**
   * @default false
   */
  outline?: boolean;

  /**
   * @default undefined
   */
  class?: string;
}

export default class Badge extends SvelteComponentTyped<
  BadgeProps,
  {},
  { default: {} }
> {}
