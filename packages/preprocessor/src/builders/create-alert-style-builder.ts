import { AlertSchema, type AlertProps, type AlertResponsivePropNames } from '@svelte-daisyui/shared';
import type { PreprocessorOptions, StyleBuilder } from '../interfaces';
import { parseComponents } from '../markup';
import { convertResponsivePropToArray } from '../utilities';

export function createAlertStyleBuilder(options: PreprocessorOptions): StyleBuilder {
    const alertSchema = AlertSchema.create();
    const breakpointNames = Object.keys(options.breakpoints);
    alertSchema.setBreakpoints(breakpointNames);

    const build = (aliases: Array<string>, code: string) => {
        const alertUniqueProperties = parseComponents<AlertProps, AlertResponsivePropNames>(alertSchema, aliases, code);

        let alertStyles = '@use "alert";';

        convertResponsivePropToArray(alertUniqueProperties.color).forEach(([breakpointName, breakpointValues]) =>
            breakpointValues.forEach((color) => {
                if (breakpointName === 'default') alertStyles += `@include alert.color("${color}");`;
                else
                    alertStyles += `@include alert.responsive-color("${color}", ${breakpointName}, ${options.breakpoints[breakpointName]});`;
            }),
        );

        return alertStyles;
    };

    return { build };
}
