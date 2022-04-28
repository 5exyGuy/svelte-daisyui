/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CountdownProps {
  /**
   * @default undefined
   */
  class?: string | undefined;
}

export default class Countdown extends SvelteComponentTyped<
  CountdownProps,
  {},
  {}
> {}
