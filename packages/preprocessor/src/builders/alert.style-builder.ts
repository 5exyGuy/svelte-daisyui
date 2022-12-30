import { AlertSchema } from '@svelte-daisyui/shared';
import type { PreprocessorOptions, StyleBuilder } from '../interfaces';
import { parseComponents } from '../markup';

export function createAlertStyleBuilder(options: PreprocessorOptions): StyleBuilder {
    AlertSchema.setBreakpoints(Object.keys(options.breakpoints));

    const build = (aliases: Array<string>, code: string) => {
        const alertUniqueProperties = parseComponents(aliases, code, AlertSchema);

        console.log(alertUniqueProperties);

        return '';
    };

    return { build };
}
