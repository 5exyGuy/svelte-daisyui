import { AlertSchema, convertToEntries, type AlertProps, type AlertResponsivePropNames } from '@svelte-daisyui/shared';
import { createStyleBuilder } from '../create-style-builder';

export const AlertStyleBuilder = createStyleBuilder<AlertProps, AlertResponsivePropNames>(AlertSchema, (context) => {
    context.useLib('alert');

    convertToEntries(context.uniqueProps.color).forEach(([breakpointName, breakpointValues]) =>
        breakpointValues!.forEach((color) => {
            breakpointName === 'default'
                ? context.includeMixin('alert', 'color', color)
                : context.includeMixin(
                      'alert',
                      'responsive-color',
                      color,
                      breakpointName,
                      context.options.breakpoints[breakpointName] as string,
                  );
        }),
    );
});
