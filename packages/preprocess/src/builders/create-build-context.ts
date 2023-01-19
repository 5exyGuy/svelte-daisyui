import type { BuildContext, PreprocessorOptions } from '../interfaces';
import type { UniqueComponentProps } from '../types';

export function createBuildContext<Props, ResponsivePropNames extends keyof Props = never>(
    options: PreprocessorOptions,
    uniqueProps: UniqueComponentProps<Props, ResponsivePropNames>,
) {
    let libraries = '';
    let components = '';

    return {
        options,
        uniqueProps,
        useLib(name) {
            libraries += `@use "${name}";\n`;
        },
        includeMixin(lib, fn, ...args) {
            components += `@include ${lib}.${fn}(${args.join(', ')});\n`;
        },
        toString() {
            return { libraries, components };
        },
    } as BuildContext<Props, ResponsivePropNames>;
}
