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

export interface AlertProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * Background color of component. Functional colors such as `info`, `success`, `warning` and `error` add a default icon on the left.
   * @default undefined
   */
  color?: Color;

  /**
   * Show an icon defaulted to the functional colors, e.g. `info`, `success`, `warning` and `error`.
   * @default true
   */
  showIcon?: boolean;

  /**
   * A space-separated list of the classes of the element.
   * @default undefined
   */
  class?: string;

  /**
   * Responsive properties based on minimum screen widths.
   * @default undefined
   */
  screen?: Screen;
}

export default class Alert extends SvelteComponentTyped<
  AlertProps,
  {},
  { default: {} }
> {}
