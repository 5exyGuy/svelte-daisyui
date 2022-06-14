/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface AlertActionsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  class?: string;
}

export default class AlertActions extends SvelteComponentTyped<
  AlertActionsProps,
  {},
  { default: {} }
> {}
