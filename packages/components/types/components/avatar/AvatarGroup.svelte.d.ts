/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface AvatarGroupProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default '1.5rem'
   */
  space?: string;

  /**
   * @default undefined
   */
  class?: string;
}

export default class AvatarGroup extends SvelteComponentTyped<
  AvatarGroupProps,
  {},
  { default: { props: { [key: string]: any } } }
> {}
