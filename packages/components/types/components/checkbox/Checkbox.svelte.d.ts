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

export interface CheckboxProps {
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
  checked?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

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

export default class Checkbox extends SvelteComponentTyped<
  CheckboxProps,
  { change: WindowEventMap["change"] },
  {}
> {}
