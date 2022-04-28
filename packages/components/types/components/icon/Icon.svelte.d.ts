/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface IconProps {
  /**
   * @default undefined
   */
  component?: typeof import("svelte").SvelteComponent | undefined;

  /**
   * @default undefined
   */
  size?: number | undefined;

  /**
   * @default 1
   */
  height?: number;

  /**
   * @default 1
   */
  width?: number;

  /**
   * @default false
   */
  spin?: boolean;

  /**
   * @default ''
   */
  class?: string | undefined;
}

export default class Icon extends SvelteComponentTyped<
  IconProps,
  {},
  { default: {} }
> {}
