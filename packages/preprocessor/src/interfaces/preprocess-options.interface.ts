import type { CSSUnit, ScreenSizeNames } from '@svelte-daisyui/shared';

export interface PreprocessorOptions<T extends Record<keyof T, CSSUnit> = Record<string, CSSUnit>> {
    includeDefaults?: boolean;
    screenSizes?: Partial<Record<ScreenSizeNames, CSSUnit>> & Partial<T>;
    includeAsGlobal?: boolean;
}
