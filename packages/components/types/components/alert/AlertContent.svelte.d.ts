/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface AlertContentProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  class?: string;
}

export default class AlertContent extends SvelteComponentTyped<
  AlertContentProps,
  {},
  { default: {} }
> {}
