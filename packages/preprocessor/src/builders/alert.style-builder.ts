import type { PreprocessorOptions, StyleBuilder } from '../interfaces';

export default function createAlertStyleBuilder(options: PreprocessorOptions): StyleBuilder {
    return { build: (aliases: string[], code: string) => code };
}
