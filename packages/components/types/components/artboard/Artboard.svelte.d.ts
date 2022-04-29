/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ArtboardProps {
  /**
   * @default '1'
   */
  size?: "1" | "2" | "3" | "4" | "5" | "6" | 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * @default false
   */
  demo?: boolean;

  /**
   * @default false
   */
  horizontal?: boolean;

  /**
   * @default undefined
   */
  class?: string;
}

export default class Artboard extends SvelteComponentTyped<
  ArtboardProps,
  {},
  { default: {} }
> {}
