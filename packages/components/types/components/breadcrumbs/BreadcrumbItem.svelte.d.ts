/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface BreadcrumbItemProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["li"]> {
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
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
