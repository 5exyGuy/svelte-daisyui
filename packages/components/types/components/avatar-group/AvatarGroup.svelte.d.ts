/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface AvatarGroupProps {
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
  { default: {} }
> {}
