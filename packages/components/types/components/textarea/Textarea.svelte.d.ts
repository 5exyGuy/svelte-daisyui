/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TextAreaProps {
  /**
   * @default undefined
   */
  placeholder: string;

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
  class: string;
}

export default class TextArea extends SvelteComponentTyped<
  TextAreaProps,
  {},
  {}
> {}
