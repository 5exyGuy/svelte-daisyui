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

export interface Data {
  insertNumbering?: boolean;
  header?: Array<string>;
  rows?: Array<Array<string>>;
  footer?: Array<string>;
}

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
  data?: Data;

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class Table extends SvelteComponentTyped<
  TableProps,
  {},
  { default: {} }
> {}
