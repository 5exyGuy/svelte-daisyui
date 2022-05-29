/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Size = 1 | 2 | 3 | 4 | 5 | 6;

export type Alignment = "horizontal" | "vertical";

export interface Properties {
  size?: Size;
  demo?: boolean;
  alignment?: Alignment;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface ArtboardProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  size?: Size;

  /**
   * @default false
   */
  demo?: boolean;

  /**
   * @default undefined
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

export default class Artboard extends SvelteComponentTyped<
  ArtboardProps,
  {},
  { default: { props: { [key: string]: any } } }
> {}
