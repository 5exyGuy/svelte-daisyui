/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CollapseProps {
  /**
   * @default undefined
   */
  icon?: "arrow" | "plus";

  /**
   * @default false
   */
  open?: boolean;

  /**
   * @default false
   */
  close?: boolean;

  /**
   * @default undefined
   */
  class?: string;
}

export default class Collapse extends SvelteComponentTyped<
  CollapseProps,
  {},
  { default: {}; title: {} }
> {}
