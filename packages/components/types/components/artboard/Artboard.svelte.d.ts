/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Size = 1 | 2 | 3 | 4 | 5 | 6;

export type Alignment = "horizontal" | "vertical";

export interface ArtboardProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  size?: Size;

  /**
   * @default false
   */
  demo?: boolean;

  /**
   * @default undefined
   */
  alignment?: Alignment;

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
