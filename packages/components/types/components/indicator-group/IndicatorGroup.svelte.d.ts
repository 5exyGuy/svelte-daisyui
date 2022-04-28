/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface IndicatorGroupProps {
  /**
   * @default undefined
   */
  class?: string | undefined;
}

export default class IndicatorGroup extends SvelteComponentTyped<
  IndicatorGroupProps,
  {},
  { default: {} }
> {}
