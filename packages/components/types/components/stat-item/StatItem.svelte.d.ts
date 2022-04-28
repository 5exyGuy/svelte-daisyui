/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface StatItemProps {
  /**
   * @default undefined
   */
  title?: string | undefined;

  /**
   * @default undefined
   */
  value?: string | undefined;

  /**
   * @default undefined
   */
  description?: string | undefined;

  /**
   * @default undefined
   */
  background?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | undefined;

  /**
   * @default undefined
   */
  class?: string | undefined;
}

export default class StatItem extends SvelteComponentTyped<
  StatItemProps,
  {},
  { actions: {}; description: {}; figure: {}; title: {}; value: {} }
> {}
