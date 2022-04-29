/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface AvatarProps {
  /**
   * @default undefined
   */
  src?: string;

  /**
   * @default undefined
   */
  alt?: string;

  /**
   * @default 'medium'
   */
  size?: "tiny" | "small" | "medium" | "large" | number | string;

  /**
   * @default undefined
   */
  status?: "online" | "offline";

  /**
   * @default undefined
   */
  class?: string;
}

export default class Avatar extends SvelteComponentTyped<
  AvatarProps,
  {},
  { default: {} }
> {}
