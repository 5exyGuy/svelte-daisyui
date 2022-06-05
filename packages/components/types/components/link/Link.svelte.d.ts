/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "neutral";

export interface Properties {
  color?: Color;
  hover?: boolean;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface LinkProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  /**
   * @default undefined
   */
  color?: Color;

  /**
   * @default false
   */
  hover?: boolean;

  /**
   * @default '#'
   */
  href?: string;

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;

  /**
   * SvelteKit attribute to enable data prefetching
   * if a link is hovered over or touched on mobile.
   * @see https://kit.svelte.dev/docs/a-options#sveltekit-prefetch
   * @default false
   */
  "sveltekit:prefetch"?: boolean;

  /**
   * SvelteKit attribute to trigger a full page
   * reload after the link is clicked.
   * @see https://kit.svelte.dev/docs/a-options#sveltekit-reload
   * @default false
   */
  "sveltekit:reload"?: boolean;

  /**
   * SvelteKit attribute to prevent scrolling
   * after the link is clicked.
   * @see https://kit.svelte.dev/docs/a-options#sveltekit-noscroll
   * @default false
   */
  "sveltekit:noscroll"?: boolean;
}

export default class Link extends SvelteComponentTyped<
  LinkProps,
  {},
  { default: {} }
> {}
