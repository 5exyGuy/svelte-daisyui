/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface StepItemProps {
  /**
   * @default undefined
   */
  color:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "neutral";

  /**
   * @default undefined
   */
  class?: string;
}

export default class StepItem extends SvelteComponentTyped<
  StepItemProps,
  {},
  { default: {} }
> {}
