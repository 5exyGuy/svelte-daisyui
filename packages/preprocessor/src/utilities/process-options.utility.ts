import { ScreenSizeMinWidth } from '../../../shared/src';
import type { PreprocessorOptions } from '../interfaces/preprocess-options.interface';

export function processOptions(options?: Partial<PreprocessorOptions>) {
    options = (options as Required<PreprocessorOptions>) ?? {};
    options.includeDefaults = options.includeDefaults ?? false;
    options.screenSizes = options.screenSizes ? { ...ScreenSizeMinWidth, ...options.screenSizes } : ScreenSizeMinWidth;
    return options as Required<PreprocessorOptions>;
}
