/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CardProps {
  /**
   * @default false
   */
  bordered?: boolean;

  /**
   * @default false
   */
  fullImage?: boolean;

  /**
   * @default undefined
   */
  padding?: "normal" | "compact";

  /**
   * @default false
   */
  side?: boolean;

  /**
   * @default undefined
   */
  class?: string;
}

export default class Card extends SvelteComponentTyped<
  CardProps,
  {},
  { actions: {}; body: {}; lower: {}; title: {}; upper: {} }
> {}
