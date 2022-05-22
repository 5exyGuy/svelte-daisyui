/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface StatItemProps {
  /**
   * @default undefined
   */
  title: string;

  /**
   * @default undefined
   */
  value: string;

  /**
   * @default undefined
   */
  description: string;

  /**
   * @default undefined
   */
  background:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";

  /**
   * @default undefined
   */
  class: string;
}

export default class StatItem extends SvelteComponentTyped<
  StatItemProps,
  {},
  { actions: {}; description: {}; figure: {}; title: {}; value: {} }
> {}
