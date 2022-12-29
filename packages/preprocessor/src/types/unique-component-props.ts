import type { ResponsiveProperty, StringKeyOf } from '@svelte-daisyui/shared';
import type { PreprocessorOptions } from '../interfaces';

export type UniqueComponentProps<Props, Options extends PreprocessorOptions = PreprocessorOptions> = {
    [PropName in keyof Props]:
        | Set<Props[PropName]>
        | ResponsiveProperty<Set<Props[PropName]>, StringKeyOf<Options['breakpoints']>>;
};
