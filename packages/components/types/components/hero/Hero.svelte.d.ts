/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface HeroProps {
  /**
   * @default undefined
   */
  class: string;

  /**
   * @default undefined
   */
  style: string;
}

export default class Hero extends SvelteComponentTyped<
  HeroProps,
  {},
  { default: {}; content: {}; overlay: {} }
> {}
