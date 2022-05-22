/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface IndicatorGroupProps {
  /**
   * @default undefined
   */
  class: string;
}

export default class IndicatorGroup extends SvelteComponentTyped<
  IndicatorGroupProps,
  {},
  { default: {} }
> {}
