/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface BreadcrumbItem {
  text?: string;
  href?: string;
}

export interface BreadcrumbGroupProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  items?: Array<BreadcrumbItem>;

  /**
   * @default undefined
   */
  class?: string;
}

export default class BreadcrumbGroup extends SvelteComponentTyped<
  BreadcrumbGroupProps,
  {},
  { default: {}; item: { item: BreadcrumbItem } }
> {}
