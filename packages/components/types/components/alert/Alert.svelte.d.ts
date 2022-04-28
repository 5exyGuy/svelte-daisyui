/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type BrandColor = "primary" | "secondary" | "accent";

export type FunctionalColor = "info" | "success" | "warning" | "error";

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
  color?: BrandColor | FunctionalColor | undefined;

  /**
   * @default ''
   */
  class?: string | undefined;
}

export default class Alert extends SvelteComponentTyped<
  AlertProps,
  {},
  { actions: {}; content: {} }
> {}
