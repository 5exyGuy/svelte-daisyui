/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TextAreaProps {
  /**
   * @default undefined
   */
  placeholder?: string | undefined;

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

export default class TextArea extends SvelteComponentTyped<
  TextAreaProps,
  {},
  {}
> {}