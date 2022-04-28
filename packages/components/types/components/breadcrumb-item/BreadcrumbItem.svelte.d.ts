/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface BreadcrumbItemProps {
  /**
   * @default undefined
   */
  href?: string | undefined;

  /**
   * @default ''
   */
  class?: string | undefined;
}

export default class BreadcrumbItem extends SvelteComponentTyped<
  BreadcrumbItemProps,
  {},
  { default: {} }
> {}
