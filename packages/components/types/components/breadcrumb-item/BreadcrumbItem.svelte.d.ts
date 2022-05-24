/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface BreadcrumbItemProps {
  /**
   * @default undefined
   */
  href?: string;

  /**
   * @default undefined
   */
  class?: string;
}

export default class BreadcrumbItem extends SvelteComponentTyped<
  BreadcrumbItemProps,
  {},
  { default: {} }
> {}
