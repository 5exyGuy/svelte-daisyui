/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TooltipContentProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  class?: string;
}

export default class TooltipContent extends SvelteComponentTyped<
  TooltipContentProps,
  {},
  { default: {} }
> {}
