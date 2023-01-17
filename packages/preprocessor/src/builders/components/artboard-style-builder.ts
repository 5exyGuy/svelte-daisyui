import {
    ArtboardSchema,
    convertToEntries,
    type ArtboardProps,
    type ArtboardResponsivePropNames,
} from '@svelte-daisyui/shared';
import type { TemplateNode } from 'svelte/types/compiler/interfaces';
import type { PreprocessorOptions, StyleBuilder } from '../../interfaces';
import { parseComponents } from '../../markup';

export function createArtboardStyleBuilder(options: PreprocessorOptions): StyleBuilder {
    const build = (aliases: Set<string>, template: TemplateNode, html: string) => {
        const uniqueProperties = parseComponents<ArtboardProps, ArtboardResponsivePropNames>(
            ArtboardSchema,
            aliases,
            template,
            html,
        );

        let styles = '@use "artboard";';

        convertToEntries(uniqueProperties.demo).forEach(([breakpointName, breakpointValues]) => {
            breakpointValues!.forEach((demo) =>
                breakpointName === 'default'
                    ? (styles += `@include artboard.demo(${demo});`)
                    : (styles += `@include artboard.responsive-demo(${demo}, ${breakpointName}, ${options.breakpoints[breakpointName]});`),
            );
        });

        // TODO: Add support for orientation and size
        // { default: 'horizontal', sm: 'vertical', md: 'horizontal' }
        // { default: '320x568', sm: '375x812', lg: '414x736' }

        return styles;
    };

    return { build };
}
