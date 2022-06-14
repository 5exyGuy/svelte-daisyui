/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface AlertIconProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
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
