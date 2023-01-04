import { BreakpointSize } from '@svelte-daisyui/shared';
import { MAIN_MODULE_NAME } from '../constants';
import type { PreprocessorOptions } from '../interfaces';

export function processOptions(options?: Partial<PreprocessorOptions>) {
    options = (options as Required<PreprocessorOptions>) ?? {};
    options.modulePath = options.modulePath ?? MAIN_MODULE_NAME;
    options.breakpoints = options.breakpoints ? { ...BreakpointSize, ...options.breakpoints } : BreakpointSize;
    return options as PreprocessorOptions;
}
