/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CarouselGroupProps {
  /**
   * @default 'start'
   */
  snap?: "start" | "center" | "end";

  /**
   * @default 'horizontal'
   */
  alignment?: "horizontal" | "vertical";

  /**
   * @default undefined
   */
  class: string;
}

export default class CarouselGroup extends SvelteComponentTyped<
  CarouselGroupProps,
  {},
  { default: {} }
> {}
