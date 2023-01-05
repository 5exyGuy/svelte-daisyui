import { AlertSchema } from '@svelte-daisyui/shared';
import type { PreprocessorOptions, StyleBuilder } from '../interfaces';
import { parseComponents } from '../markup';

export function createAlertStyleBuilder(options: PreprocessorOptions): StyleBuilder {
    const alertSchema = AlertSchema.create();
    const breakpointNames = Object.keys(options.breakpoints);
    alertSchema.setBreakpoints(breakpointNames);

    const build = (aliases: Array<string>, code: string) => {
        const alertUniqueProperties = parseComponents(alertSchema, aliases, code);

        console.log(alertUniqueProperties);

        return '';
    };

    return { build };
}
