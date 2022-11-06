import type { CSSUnit, ScreenSize } from '@svelte-daisyui/shared';
import type { StringKeyOf } from 'type-fest';

export interface PreprocessorOptions<T extends Record<keyof T, CSSUnit> = Record<string, CSSUnit>> {
    includeDefaults?: boolean;
    screenSizes?: Partial<Record<StringKeyOf<typeof ScreenSize>, CSSUnit>> & Partial<T>;
}
