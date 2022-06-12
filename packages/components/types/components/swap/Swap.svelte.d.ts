/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SwapProps {
  /**
   * @default undefined
   */
  animation?: "rotate" | "flip";

  /**
   * @default false
   */
  state?: boolean;

  /**
   * @default undefined
   */
  class?: string;
}

export default class Swap extends SvelteComponentTyped<
  SwapProps,
  { click: WindowEventMap["click"] },
  { off: {}; on: {} }
> {}
