/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CheckboxProps {
  /**
   * @default false
   */
  checked?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default false
   */
  indeterminate?: boolean;

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
  class?: string;
}

export default class Checkbox extends SvelteComponentTyped<
  CheckboxProps,
  { change: WindowEventMap["change"] },
  {}
> {}
