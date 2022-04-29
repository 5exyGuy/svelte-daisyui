/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface RadioProps {
  /**
   * @default 'medium'
   */
  size?: "tiny" | "small" | "medium" | "large";

  /**
   * @default undefined
   */
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";

  /**
   * @default undefined
   */
  name?: string;

  /**
   * @default false
   */
  checked?: boolean;

  /**
   * @default undefined
   */
  class?: string;
}

export default class Radio extends SvelteComponentTyped<
  RadioProps,
  { change: WindowEventMap["change"] },
  {}
> {}
