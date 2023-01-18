import {
    ArtboardSchema,
    ArtboardSize,
    type ArtboardProps,
    type ArtboardResponsivePropNames,
} from '@svelte-daisyui/shared';
import { createStyleBuilder } from '../create-style-builder';

export const ArtboardStyleBuilder = createStyleBuilder<ArtboardProps, ArtboardResponsivePropNames>(
    ArtboardSchema,
    (context) => {
        context.useLib('artboard');

        context.uniqueProps.alignment?.forEach((alignment) =>
            context.uniqueProps.size?.forEach((size) =>
                context.includeMixin('artboard', 'size-and-alignment', ArtboardSize[size], alignment),
            ),
        );
        context.uniqueProps.demo?.forEach((demo) => demo && context.includeMixin('artboard', 'demo'));
    },
);
