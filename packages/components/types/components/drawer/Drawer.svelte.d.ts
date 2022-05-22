/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface DrawerProps {
  /**
   * @default false
   */
  visible?: boolean;

  /**
   * @default false
   */
  mobile?: boolean;

  /**
   * @default false
   */
  end?: boolean;

  /**
   * @default undefined
   */
  class: string;
}

export default class Drawer extends SvelteComponentTyped<
  DrawerProps,
  {},
  { default: {}; content: {}; side: {} }
> {}
