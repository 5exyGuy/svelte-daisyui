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

export interface ToggleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["input"]> {
  /**
   * @default undefined
   */
  color?: Color;

  /**
   * @default undefined
   */
  size?: Size;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default false
   */
  checked?: boolean;

  /**
   * @default false
   */
  indeterminate?: boolean;

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class Toggle extends SvelteComponentTyped<ToggleProps, {}, {}> {}
