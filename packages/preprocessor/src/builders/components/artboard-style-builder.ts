import {
    ArtboardSchema,
    ArtboardSize,
    type ArtboardProps,
    type ArtboardResponsivePropNames,
} from '@svelte-daisyui/shared';
import type { TemplateNode } from 'svelte/types/compiler/interfaces';
import type { PreprocessorOptions, StyleBuilder } from '../../interfaces';
import { parseComponents } from '../../markup';

export function createArtboardStyleBuilder(_options: PreprocessorOptions): StyleBuilder {
    const build = (aliases: Set<string>, template: TemplateNode, html: string) => {
        const uniqueProperties = parseComponents<ArtboardProps, ArtboardResponsivePropNames>(
            ArtboardSchema,
            aliases,
            template,
            html,
        );

        let styles = '@use "artboard";';

        uniqueProperties.alignment?.forEach((alignment) =>
            uniqueProperties.size?.forEach(
                (size) => (styles += `@include artboard.size-and-alignment(${ArtboardSize[size]}, ${alignment});`),
            ),
        );
        uniqueProperties.demo?.forEach((demo) => demo && (styles += `@include artboard.demo();`));

        console.log(styles);

        return styles;
    };

    return { build };
}
