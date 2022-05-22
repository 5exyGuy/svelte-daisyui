/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ScreenProps {
  spin?: boolean;
}

export interface Screen {
  sm?: ScreenProps;
  md?: ScreenProps;
  lg?: ScreenProps;
  xl?: ScreenProps;
  "2xl"?: ScreenProps;
}

export interface IconProps {
  /**
   * @default undefined
   */
  component: typeof import("svelte").SvelteComponent;

  /**
   * @default undefined
   */
  size: number;

  /**
   * @default 1
   */
  height?: number;

  /**
   * @default 1
   */
  width?: number;

  /**
   * @default false
   */
  spin?: boolean;

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class Icon extends SvelteComponentTyped<
  IconProps,
  {},
  { default: {} }
> {}
