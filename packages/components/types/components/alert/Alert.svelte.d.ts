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

export interface Properties {
  color?: Color;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface AlertProps {
  /**
   * @default undefined
   */
  color?: Properties["color"];

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
  { default: {}; actions: {}; icon: {} }
> {}
