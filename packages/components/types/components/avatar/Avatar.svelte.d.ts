/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface AvatarProps {
  /**
   * @default undefined
   */
  src?: string | undefined;

  /**
   * @default undefined
   */
  alt?: string;

  /**
   * @default 'medium'
   */
  size?: "tiny" | "small" | "medium" | "large" | number | string | undefined;

  /**
   * @default undefined
   */
  status?: "online" | "offline" | undefined;

  /**
   * @default undefined
   */
  class?: string | undefined;
}

export default class Avatar extends SvelteComponentTyped<
  AvatarProps,
  {},
  { default: {} }
> {}
