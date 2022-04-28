/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface MaskProps {
  /**
   * @default undefined
   */
  half?: "1" | "2" | 1 | 2 | undefined;

  /**
   * @default 'circle'
   */
  type?:
    | "squircle"
    | "heart"
    | "hexagon"
    | "hexagon2"
    | "decagon"
    | "pentagon"
    | "diamond"
    | "square"
    | "circle"
    | "parallelogram"
    | "parallelogram2"
    | "parallelogram3"
    | "parallelogram4"
    | "star"
    | "star2"
    | "triangle"
    | "triangle2"
    | "triangle3"
    | "triangle4";

  /**
   * @default ''
   */
  class?: string;
}

export default class Mask extends SvelteComponentTyped<
  MaskProps,
  {},
  { default: {} }
> {}
