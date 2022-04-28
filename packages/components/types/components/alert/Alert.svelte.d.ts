/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface AlertProps {
  /**
   * @default undefined
   */
  message?: string | undefined;

  /**
   * @default undefined
   */
  icon?:
    | { component: typeof import("svelte").SvelteComponent; size: number }
    | undefined;

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
    | undefined;

  /**
   * @default undefined
   */
  class?: string | undefined;
}

export default class Alert extends SvelteComponentTyped<
  AlertProps,
  {},
  { actions: {}; content: {} }
> {}
