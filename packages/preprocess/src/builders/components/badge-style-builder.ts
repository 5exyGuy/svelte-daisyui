import {
    AvatarStatus,
    BadgeSchema,
    convertToEntries,
    type BadgeProps,
    type BadgeResponsivePropNames,
} from '@svelte-daisyui/shared';
import { createStyleBuilder } from '../create-style-builder';

export const BadgeStyleBuilder = createStyleBuilder<BadgeProps, BadgeResponsivePropNames>(BadgeSchema, (context) => {
    context.useLib('badge');

    // Colors
    convertToEntries(context.uniqueProps.color).forEach(([breakpointName, breakpointValues]) => {});
    // Outline
    context.uniqueProps.outline?.forEach((outline) => outline && context.includeMixin('badge', 'outline'));
    // Size
    convertToEntries(context.uniqueProps.size).forEach(([breakpointName, breakpointValues]) => {});
});
