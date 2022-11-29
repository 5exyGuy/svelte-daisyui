import type { ComponentsProps } from '@svelte-daisyui/shared';
import type { PreprocessorOptions } from '../interfaces';

export type UniqueComponentProps<
    Props extends ComponentsProps,
    Options extends PreprocessorOptions = PreprocessorOptions,
> = {
    [PropName in keyof Props]: Set<Props[PropName]>;
} & {
    screen?: {
        [ScreenSize in keyof Options['screenSizes']]: { [PropName in keyof Props]: Set<Props[PropName]> };
    };
};
