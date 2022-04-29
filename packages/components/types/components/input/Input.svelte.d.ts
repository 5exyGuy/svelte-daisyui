/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface InputProps {
  /**
   * @default undefined
   */
  placeholder?: string;

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
    | "error"
    | "ghost";

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default false
   */
  bordered?: boolean;

  /**
   * @default undefined
   */
  class?: string;
}

export default class Input extends SvelteComponentTyped<InputProps, {}, {}> {}
