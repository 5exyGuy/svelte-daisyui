/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export type HorizontalAlignment = "start" | "center" | "end";

export interface Properties {
  alignment?: HorizontalAlignment;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export interface TableCellProps {
  /**
   * @default undefined
   */
  alignment?: Properties["alignment"];

  /**
   * @default undefined
   */
  class?: string;

  /**
   * @default undefined
   */
  screen?: Screen;
}

export default class TableCell extends SvelteComponentTyped<
  TableCellProps,
  {},
  { default: {} }
> {}
