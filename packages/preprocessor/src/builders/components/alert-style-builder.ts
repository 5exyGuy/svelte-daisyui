import { AlertSchema, convertToEntries, type AlertProps, type AlertResponsivePropNames } from '@svelte-daisyui/shared';
import type { TemplateNode } from 'svelte/types/compiler/interfaces';
import type { PreprocessorOptions, StyleBuilder } from '../../interfaces';
import { parseComponents } from '../../markup';

export function createAlertStyleBuilder(options: PreprocessorOptions): StyleBuilder {
    const build = (aliases: Set<string>, template: TemplateNode, html: string) => {
        const uniqueProperties = parseComponents<AlertProps, AlertResponsivePropNames>(
            AlertSchema,
            aliases,
            template,
            html,
        );

        let styles = '@use "alert";';

        convertToEntries(uniqueProperties.color).forEach(([breakpointName, breakpointValues]) =>
            breakpointValues!.forEach((color) => {
                breakpointName === 'default'
                    ? (styles += `@include alert.color("${color}");`)
                    : (styles += `@include alert.responsive-color("${color}", ${breakpointName}, ${options.breakpoints[breakpointName]});`);
            }),
        );

        return styles;
    };

    return { build };
}
