/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Size = 1 | 2 | 3 | 4 | 5 | 6;

export interface Properties {
  size?: Size;
  demo?: boolean;
  horizontal?: boolean;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface ArtboardProps {
  /**
   * @default 1
   */
  size?: Size;

  /**
   * @default false
   */
  demo?: boolean;

  /**
   * @default false
   */
  horizontal?: boolean;

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
  { default: {} }
> {}
