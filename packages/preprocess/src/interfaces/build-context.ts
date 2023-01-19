import type { UniqueComponentProps } from '../types';
import type { PreprocessorOptions } from './preprocess-options';

export interface BuildContext<Props, ResponsivePropNames extends keyof Props = never> {
    options: PreprocessorOptions;
    uniqueProps: UniqueComponentProps<Props, ResponsivePropNames>;
    useLib(name: string): void;
    includeMixin(lib: string, fn: string, ...args: Array<string>): void;
    toString(): { libraries: string; components: string };
}
