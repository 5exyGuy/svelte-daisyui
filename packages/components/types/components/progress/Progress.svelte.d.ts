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

export interface ProgressProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["progress"]> {
  /**
   * @default undefined
   */
  color?: Color;

  /**
   * @default 'md'
   */
  size?: Size;

  /**
   * @default 0
   */
  value?: number;

  /**
   * @default 100
   */
  max?: number;

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class Progress extends SvelteComponentTyped<
  ProgressProps,
  {},
  {}
> {}
