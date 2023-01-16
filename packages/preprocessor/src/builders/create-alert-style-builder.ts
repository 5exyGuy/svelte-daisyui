import { AlertSchema, convertToEntries, type AlertProps, type AlertResponsivePropNames } from '@svelte-daisyui/shared';
import type { TemplateNode } from 'svelte/types/compiler/interfaces';
import type { PreprocessorOptions, StyleBuilder } from '../interfaces';
import { parseComponents } from '../markup';

export function createAlertStyleBuilder(options: PreprocessorOptions): StyleBuilder {
    const build = (aliases: Set<string>, template: TemplateNode, html: string) => {
        const alertUniqueProperties = parseComponents<AlertProps, AlertResponsivePropNames>(
            AlertSchema,
            aliases,
            template,
            html,
        );

        let alertStyles = '@use "alert";';

        convertToEntries(alertUniqueProperties.color).forEach(([breakpointName, breakpointValues]) =>
            breakpointValues!.forEach((color) => {
                if (breakpointName === 'default') alertStyles += `@include alert.color("${color}");`;
                else
                    alertStyles += `@include alert.responsive-color("${color}", ${breakpointName}, ${options.breakpoints[breakpointName]});`;
            }),
        );

        return alertStyles;
    };

    return { build };
}
