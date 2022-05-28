/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type Padding = "normal" | "compact";

export interface Properties {
  padding?: Padding;
  zebra?: boolean;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export type HorizontalAlignment = "start" | "center" | "end";

export interface Header {
  text?: string;
  value?: string;
  alignment?: HorizontalAlignment;
}

export interface Footer {
  text?: string;
  value?: string;
  alignment?: HorizontalAlignment;
}

export type Item = Record<string, import("type-fest").Primitive>;

export interface TableProps {
  /**
   * @default undefined
   */
  padding?: Properties["padding"];

  /**
   * @default false
   */
  zebra?: Properties["zebra"];

  /**
   * @default undefined
   */
  headers?: Array<Header>;

  /**
   * @default undefined
   */
  footers?: Array<Footer>;

  /**
   * @default undefined
   */
  items?: Array<Item>;

  /**
   * @default undefined
   */
  class?: string;

  /**
   *
   *
   * @default undefined
   */
  screen?: Screen;
}

export default class Table extends SvelteComponentTyped<
  TableProps,
  {},
  {
    default: {};
    footer: { footer: any };
    header: { header: any };
    item: { item: any; header: any };
  }
> {}
