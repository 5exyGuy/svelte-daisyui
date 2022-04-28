/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface InputProps {
  /**
   * @default undefined
   */
  placeholder?: string | undefined;

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
    | "ghost"
    | undefined;

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
  class?: string | undefined;
}

export default class Input extends SvelteComponentTyped<InputProps, {}, {}> {}
