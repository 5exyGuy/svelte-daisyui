import type { PreprocessorOptions } from '../interfaces/preprocess-options';
import type { StyleBuilder } from '../interfaces/style-builder';

export function createAlertStyleBuilder(options: PreprocessorOptions): StyleBuilder {
    const build = (aliases: Set<string>, code: string) => {
        return '';
    };

    return { build };
}
