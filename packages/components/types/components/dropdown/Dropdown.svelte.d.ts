/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface DropdownProps {
  /**
   * @default 'bottom'
   */
  position?: "top" | "bottom" | "left" | "right";

  /**
   * @default false
   */
  end?: boolean;

  /**
   * @default undefined
   */
  class?: string;
}

export default class Dropdown extends SvelteComponentTyped<
  DropdownProps,
  {},
  { default: {}; focus: { tabindex: 0 } }
> {}
