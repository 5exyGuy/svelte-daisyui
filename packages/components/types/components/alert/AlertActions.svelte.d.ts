/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface AlertActionsProps {
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
