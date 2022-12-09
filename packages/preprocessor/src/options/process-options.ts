import { ScreenSizeMinWidth } from '@svelte-daisyui/shared';
import type { PreprocessorOptions } from '../interfaces';

export function processOptions(options?: Partial<PreprocessorOptions>) {
    options = (options as Required<PreprocessorOptions>) ?? {};
    options.includeDefaults = options.includeDefaults ?? false;
    options.screenSizes = options.screenSizes ? { ...ScreenSizeMinWidth, ...options.screenSizes } : ScreenSizeMinWidth;
    return options as PreprocessorOptions;
}
