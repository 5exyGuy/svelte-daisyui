import type { CSSUnit, BreakpointNames } from '@svelte-daisyui/shared';

export interface PreprocessorOptions<T extends Record<keyof T, CSSUnit> = Record<string, CSSUnit>> {
    breakpoints: Partial<Record<BreakpointNames, CSSUnit>> & Partial<T>;
}
