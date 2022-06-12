/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface RangeProps {
  /**
   * @default 0
   */
  min?: number;

  /**
   * @default 100
   */
  max?: number;

  /**
   * @default 0
   */
  value?: number;

  /**
   * @default 1
   */
  step?: number;

  /**
   * @default 'md'
   */
  size?: "xs" | "sm" | "md" | "lg";

  /**
   * @default undefined
   */
  class?: string;
}

export default class Range extends SvelteComponentTyped<RangeProps, {}, {}> {}
