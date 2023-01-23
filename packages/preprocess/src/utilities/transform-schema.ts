import {
    convertToEntries,
    convertToKeys,
    PropTypes,
    type ComponentSchema,
    type ResponsiveProperty,
} from '@svelte-daisyui/shared';
import type { PreprocessorOptions } from '../interfaces';

export function transformSchema<Props>(
    options: PreprocessorOptions,
    componentSchema: ComponentSchema<Props>,
    value: any,
) {
    if (typeof value !== 'object') throw new Error(`Expected an object, got ${typeof value}`);

    return convertToKeys(componentSchema.data).reduce((transformed, propName) => {
        const propData = componentSchema.data[propName]!;

        const propValue = value[propName];
        if (typeof propValue === 'undefined') return transformed;

        if (propData.responsive) {
            try {
                const sanitizedPropValue = JSON.parse(
                    propValue.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2":').replace(/'/g, '"'),
                ) as ResponsiveProperty<Props[keyof Props]>;

                const responsiveProp = convertToEntries(sanitizedPropValue).reduce(
                    (responsiveProp, [breakpointName, breakpointValue]) => {
                        if (options.breakpoints[breakpointName]) responsiveProp[breakpointName] = breakpointValue;
                        return responsiveProp;
                    },
                    {} as ResponsiveProperty<Props[keyof Props]>,
                );

                transformed[propName] = responsiveProp as Props[keyof Props];
            } catch (e) {
                transformed[propName] = propValue as Props[keyof Props];
            }
            return transformed;
        }

        if (propValue) {
            switch (propData.type) {
                case PropTypes.Boolean:
                    transformed[propName] = Boolean(propValue) as Props[keyof Props];
                    break;
                case PropTypes.Number:
                    transformed[propName] = Number(propValue) as Props[keyof Props];
                    break;
                case PropTypes.Object:
                    transformed[propName] = JSON.parse(propValue) as Props[keyof Props];
                    break;
                case PropTypes.String:
                    transformed[propName] = String(propValue) as Props[keyof Props];
                    break;
            }
        }

        return transformed;
    }, {} as Props);
}
