/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CarouselItemProps {
  /**
   * @default undefined
   */
  class?: string;
}

export default class CarouselItem extends SvelteComponentTyped<
  CarouselItemProps,
  {},
  { default: {} }
> {}
