/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface LinkProps {
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
    | "neutral"
    | undefined;

  /**
   * @default false
   */
  hover?: boolean;

  /**
   * @default '#'
   */
  href?: string | undefined;

  /**
   * @default undefined
   */
  class?: string | undefined;
}

export default class Link extends SvelteComponentTyped<
  LinkProps,
  {},
  { default: {} }
> {}
