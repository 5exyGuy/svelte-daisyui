/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Status = "online" | "offline";

export interface Properties {
  status: Status;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface AvatarProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default undefined
   */
  status?: Status;

  /**
   * @default undefined
   */
  src?: string;

  /**
   * @default undefined
   */
  alt?: string;

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class Avatar extends SvelteComponentTyped<
  AvatarProps,
  {},
  { default: {} }
> {}
