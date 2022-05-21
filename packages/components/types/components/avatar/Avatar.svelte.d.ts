/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Size = "tiny" | "small" | "medium" | "large";

export type Status = "online" | "offline";

export interface ScreenProps {
  size?: Size;
  status: Status;
}

export interface Screen {
  sm?: ScreenProps;
  md?: ScreenProps;
  lg?: ScreenProps;
  xl?: ScreenProps;
  "2xl"?: ScreenProps;
}

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
   * @default undefined
   */
  size?: "tiny" | "small" | "medium" | "large";

  /**
   * @default undefined
   */
  status?: "online" | "offline";

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
