/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface RatingProps {
  /**
   * @default 'medium'
   */
  size?: "tiny" | "small" | "medium" | "large";

  /**
   * @default false
   */
  half?: boolean;

  /**
   * @default undefined
   */
  class: string;
}

export default class Rating extends SvelteComponentTyped<
  RatingProps,
  {},
  { default: {} }
> {}
