/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface IndicatorItemProps {
  /**
   * @default 'end'
   */
  horizontal?: "start" | "center" | "end";

  /**
   * @default 'top'
   */
  vertical?: "top" | "middle" | "bottom";

  /**
   * @default undefined
   */
  class: string;
}

export default class IndicatorItem extends SvelteComponentTyped<
  IndicatorItemProps,
  {},
  { default: {} }
> {}
