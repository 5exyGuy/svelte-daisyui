/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Alignment = "vertical" | "horizontal";

export interface Properties {
  alignment?: Alignment;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface DividerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default 'vertical'
   */
  alignment?: Alignment;

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class Divider extends SvelteComponentTyped<
  DividerProps,
  {},
  { default: {} }
> {}
