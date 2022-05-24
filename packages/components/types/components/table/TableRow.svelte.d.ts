/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface Properties {
  active?: boolean;
  hover?: boolean;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface TableRowProps {
  /**
   * @default false
   */
  active?: Properties["active"];

  /**
   * @default false
   */
  hover?: Properties["hover"];

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class TableRow extends SvelteComponentTyped<
  TableRowProps,
  {},
  { default: {} }
> {}
