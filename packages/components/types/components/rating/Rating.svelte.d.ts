/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface RatingProps {
  /**
   * @default 'md'
   */
  size?: "xs" | "sm" | "md" | "lg";

  /**
   * @default false
   */
  half?: boolean;

  /**
   * @default undefined
   */
  class?: string;
}

export default class Rating extends SvelteComponentTyped<
  RatingProps,
  {},
  { default: {} }
> {}
