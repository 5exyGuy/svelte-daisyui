import type { PreprocessorOptions } from '../interfaces';

export type UniqueComponentProps<Props, Options extends PreprocessorOptions = PreprocessorOptions> = {
    [PropName in keyof Props]: Set<Props[PropName]>;
} & {
    screen?: {
        [ScreenSize in keyof Options['screenSizes']]: { [PropName in keyof Props]: Set<Props[PropName]> };
    };
};
