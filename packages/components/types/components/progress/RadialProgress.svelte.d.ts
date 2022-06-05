/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface RadialProgressProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default 0
   */
  value?: number;

  /**
   * @default undefined
   */
  class?: string;
}

export default class RadialProgress extends SvelteComponentTyped<
  RadialProgressProps,
  {},
  { default: { value: number } }
> {}
