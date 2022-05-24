/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Size = "xs" | "sm" | "md" | "lg";

export type Status = "online" | "offline";

export interface Properties {
  size?: Size;
  status: Status;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface AvatarProps {
  /**
   * @default undefined
   */
  size?: Properties["size"];

  /**
   * @default undefined
   */
  status?: Properties["status"];

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
