import { AlertSchema } from '@svelte-daisyui/shared';
import type { PreprocessorOptions, StyleBuilder } from '../interfaces';
import { parseComponents } from '../markup';

export function createAlertStyleBuilder(options: PreprocessorOptions): StyleBuilder {
    AlertSchema.setBreakpoints(Object.keys(options.breakpoints));

    const build = (aliases: Set<string>, code: string) => {
        parseComponents(aliases, code, AlertSchema, options);
        return '';
    };

    return { build };
}
