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

export interface Icon {
  component: typeof import("svelte").SvelteComponent;
  size: number;
}

export interface ScreenProps {
  color?: Color;
}

export interface Screen {
  sm?: ScreenProps;
  md?: ScreenProps;
  lg?: ScreenProps;
  xl?: ScreenProps;
  "2xl"?: ScreenProps;
}

export interface AlertProps {
  /**
   * @default undefined
   */
  icon?: Icon;

  /**
   * @default undefined
   */
  color?: Color;

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
  { default: {}; actions: {} }
> {}
