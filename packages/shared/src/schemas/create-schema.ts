import { BreakpointName, PropTypes } from '../enums';
import type { ComponentSchema } from '../interfaces';
import type { BreakpointNames, ResponsiveProperty } from '../types';
import joi, { type Schema } from 'joi';

export function createSchema<Props>(schema: Omit<ComponentSchema<Props>, 'validate' | 'transform' | 'setBreakpoints'>) {
    let validationSchema = joi.object<Props>();

    function validateBreakpointNames<CustomBreakpointNames extends string = string>(
        breakpointNames: Array<BreakpointNames | CustomBreakpointNames>,
    ) {
        const breakpointNamesSchema = joi
            .array<typeof breakpointNames>()
            .items(joi.string<(typeof breakpointNames)[number]>())
            .unique()
            .has(joi.string<BreakpointNames>().valid(...Object.values(BreakpointName)));
        const { error, value } = breakpointNamesSchema.validate(breakpointNames);
        if (error) throw error;
        return value;
    }

    function transformValue(value: any) {
        return (Object.keys(schema.propData) as Array<keyof Props>).reduce((transformed, propName) => {
            const propData = schema.propData[propName]!;

            const propValue = value[propName];
            if (!propValue) {
                transformed[propName] = propData.default;
                return transformed;
            }

            if (propData.responsive) {
                try {
                    const sanitizedPropValue = propValue
                        .replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2":')
                        .replace(/'/g, '"');
                    transformed[propName] = JSON.parse(sanitizedPropValue) as Props[keyof Props];
                } catch (e) {
                    transformed[propName] = propValue as Props[keyof Props];
                }
                return transformed;
            }

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

            return transformed;
        }, {} as Props);
    }

    return {
        ...schema,
        // Schema validation
        validate(value) {
            if (typeof value !== 'object') throw new Error(`Expected an object, got ${typeof value}`);
            return validationSchema.validate(value);
        },
        // Schema transformation
        transform(value) {
            if (typeof value !== 'object') throw new Error(`Expected an object, got ${typeof value}`);
            return transformValue(value);
        },
        setBreakpoints(customBreakpoints) {
            customBreakpoints = validateBreakpointNames(customBreakpoints);

            validationSchema = joi.object<Props>(
                (Object.keys(schema.propData) as Array<keyof Props>).reduce((partialSchema, propName) => {
                    const propData = schema.propData[propName]!;
                    const propValidation = schema.validationMap[propName]!;
                    if (!propData.responsive) {
                        partialSchema[propName] = propValidation.default(propData.default!);
                        return partialSchema;
                    }

                    partialSchema[propName] = joi.alternatives(
                        joi.object<ResponsiveProperty<Props[typeof propName]>>({
                            default: propValidation.default(propData.default!),
                            ...customBreakpoints.reduce((partialSchema, breakpointName) => {
                                partialSchema[breakpointName] = propValidation;
                                return partialSchema;
                            }, {} as { [BreakpointName in (typeof customBreakpoints)[number]]: Schema }),
                        }),
                        propValidation,
                    );

                    return partialSchema;
                }, {} as { [PropName in keyof Props]: Schema }),
            );
        },
    } as ComponentSchema<Props>;
}
