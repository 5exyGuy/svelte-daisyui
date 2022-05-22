/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CountdownProps {
  /**
   * @default undefined
   */
  class: string;
}

export default class Countdown extends SvelteComponentTyped<
  CountdownProps,
  {},
  {}
> {}
