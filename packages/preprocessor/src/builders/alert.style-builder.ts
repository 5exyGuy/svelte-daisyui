import type { PreprocessorOptions, StyleBuilder } from '../interfaces';

export function createAlertStyleBuilder(options: PreprocessorOptions): StyleBuilder {
    const build = (aliases: Set<string>, code: string) => {
        return '';
    };

    return { build };
}
