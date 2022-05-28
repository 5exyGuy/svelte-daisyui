/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface AlertIconProps {
  /**
   * @default undefined
   */
  class?: string;
}

export default class AlertIcon extends SvelteComponentTyped<
  AlertIconProps,
  {},
  { default: {} }
> {}
