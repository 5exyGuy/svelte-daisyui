import type { PreprocessorOptions } from '../interfaces/preprocess-options';
import type { StyleBuilder } from '../interfaces/style-builder';

export function createAlertStyleBuilder(options: PreprocessorOptions): StyleBuilder {
    return { build: (aliases: Set<string>, code: string) => code };
}
