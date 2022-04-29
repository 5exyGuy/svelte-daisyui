/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface AlertProps {
  /**
   * @default undefined
   */
  message?: string;

  /**
   * @default undefined
   */
  icon?: { component: typeof import("svelte").SvelteComponent; size: number };

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

export default class Alert extends SvelteComponentTyped<
  AlertProps,
  {},
  { actions: {}; content: {} }
> {}
