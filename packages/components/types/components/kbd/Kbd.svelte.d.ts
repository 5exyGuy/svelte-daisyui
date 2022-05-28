/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Size = "xs" | "sm" | "md" | "lg";

export interface Properties {
  size?: Size;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface KbdProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["kbd"]> {
  /**
   * @default undefined
   */
  size?: Size;

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class Kbd extends SvelteComponentTyped<
  KbdProps,
  {},
  { default: { props: { [key: string]: any } } }
> {}
