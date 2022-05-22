/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface LinkProps {
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
    | "neutral";

  /**
   * @default false
   */
  hover?: boolean;

  /**
   * @default '#'
   */
  href?: string;

  /**
   * @default undefined
   */
  class: string;
}

export default class Link extends SvelteComponentTyped<
  LinkProps,
  {},
  { default: {} }
> {}
