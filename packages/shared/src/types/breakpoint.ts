import type { BreakpointNames } from './breakpoint-names';

export type Breakpoint<T> = Partial<Record<BreakpointNames, Partial<T>> & Record<string, Partial<T>>>;
