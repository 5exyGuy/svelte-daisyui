import { BreakpointSize } from '@svelte-daisyui/shared';
import type { PreprocessorOptions } from '../interfaces';

export function processOptions(options?: Partial<PreprocessorOptions>) {
    options = (options as Required<PreprocessorOptions>) ?? {};
    options.breakpoints = options.breakpoints ? { ...BreakpointSize, ...options.breakpoints } : BreakpointSize;
    return options as PreprocessorOptions;
}
