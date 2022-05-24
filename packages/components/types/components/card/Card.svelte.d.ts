/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Padding = "normal" | "compact";

export interface Properties {
  padding?: Padding;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface CardProps {
  /**
   * @default undefined
   */
  padding?: Properties["padding"];

  /**
   * @default false
   */
  bordered?: boolean;

  /**
   * @default false
   */
  fullImage?: boolean;

  /**
   * @default false
   */
  side?: boolean;

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class Card extends SvelteComponentTyped<
  CardProps,
  {},
  { actions: {}; body: {}; lower: {}; title: {}; upper: {} }
> {}
