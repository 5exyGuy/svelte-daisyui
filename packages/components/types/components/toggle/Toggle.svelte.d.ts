/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ToggleProps {
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
   * @default 'medium'
   */
  size?: "tiny" | "small" | "medium" | "large";

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default false
   */
  checked?: boolean;

  /**
   * @default undefined
   */
  class?: string;
}

export default class Toggle extends SvelteComponentTyped<ToggleProps, {}, {}> {}
