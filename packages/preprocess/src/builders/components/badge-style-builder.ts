import { BadgeSchema, convertToEntries, type BadgeProps, type BadgeResponsivePropNames } from '@svelte-daisyui/shared';
import { createStyleBuilder } from '../create-style-builder';

export const BadgeStyleBuilder = createStyleBuilder<BadgeProps, BadgeResponsivePropNames>(BadgeSchema, (context) => {
    context.useLib('badge');

    // Colors
    convertToEntries(context.uniqueProps.color).forEach(([breakpointName, breakpointValues]) => {
        breakpointValues!.forEach((color) => {
            breakpointName === 'default'
                ? context.includeMixin('badge', 'color', color)
                : context.includeMixin(
                      'badge',
                      'responsive-color',
                      color,
                      breakpointName,
                      context.options.breakpoints[breakpointName] as string,
                  );
        });
    });
    // Outline
    context.uniqueProps.outline?.forEach((outline) => outline && context.includeMixin('badge', 'outline'));
    // Size
    convertToEntries(context.uniqueProps.size).forEach(([breakpointName, breakpointValues]) => {
        breakpointValues!.forEach((size) => {
            breakpointName === 'default'
                ? context.includeMixin('badge', 'size', size)
                : context.includeMixin(
                      'badge',
                      'responsive-size',
                      size,
                      breakpointName,
                      context.options.breakpoints[breakpointName] as string,
                  );
        });
    });
});
