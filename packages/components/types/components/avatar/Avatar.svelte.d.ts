/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Status = "online" | "offline";

export interface AvatarProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  status?: Status;

  /**
   * @default undefined
   */
  imgProps?: svelte.JSX.HTMLAttributes<HTMLImageElement>;

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
