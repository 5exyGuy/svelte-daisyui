/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface Properties {
  spin?: boolean;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface IconProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
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
  { default: { props: { [key: string]: any } } }
> {}
