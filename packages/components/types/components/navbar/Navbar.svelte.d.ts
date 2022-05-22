/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface NavbarProps {
  /**
   * @default false
   */
  rounded?: boolean;

  /**
   * @default undefined
   */
  class: string;
}

export default class Navbar extends SvelteComponentTyped<
  NavbarProps,
  {},
  { default: {}; center: {}; end: {}; start: {} }
> {}
