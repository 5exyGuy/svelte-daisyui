/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface BreadcrumbGroupProps {
  /**
   * @default undefined
   */
  class?: string | undefined;
}

export default class BreadcrumbGroup extends SvelteComponentTyped<
  BreadcrumbGroupProps,
  {},
  { default: {} }
> {}
