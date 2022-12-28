import { BreakpointName, PropTypes } from '../enums';
import type { ComponentSchema, ComponentsProps } from '../interfaces';
import type { BreakpointNames } from '../types';
import joi, { type Schema } from 'joi';

export function createSchema<Props extends ComponentsProps>(
    schema: Omit<ComponentSchema<Props>, 'validate' | 'transform' | 'setBreakpoints'>,
) {
    let validationSchema = joi.object();

    function validateValue(value: any) {
        const valueSchema = joi.object();
        const { error, value: validatedValue } = valueSchema.validate(value);
        if (error) throw error;
        return validatedValue;
    }

    function validateBreakpointNames<CustomBreakpointNames extends string = string>(
        breakpointNames: Array<BreakpointNames | CustomBreakpointNames>,
    ) {
        const breakpointNamesSchema = joi
            .array<typeof breakpointNames>()
            .items(joi.string())
            .unique()
            .has(joi.string().valid(...Object.values(BreakpointName)));
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
                transformed[propName] = JSON.parse(propValue) as Props[keyof Props];
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
            value = validateValue(value);
            return validationSchema.validate(value);
        },
        // Schema transformation
        transform(value) {
            value = validateValue(value);
            return transformValue(value);
        },
        setBreakpoints(customBreakpoints) {
            customBreakpoints = validateBreakpointNames(customBreakpoints);

            validationSchema = joi.object(
                (Object.keys(schema.propData) as Array<keyof Props>).reduce((validationSchema, propName) => {
                    const propData = schema.propData[propName]!;
                    const propValidation = schema.validationMap[propName]!;
                    if (!propData.responsive) {
                        validationSchema[propName] = propValidation;
                        return validationSchema;
                    }

                    validationSchema[propName] = joi.alternatives(
                        joi.object(
                            customBreakpoints.reduce((breakpointValidationSchema, breakpointName) => {
                                breakpointValidationSchema[breakpointName] = propValidation;
                                return breakpointValidationSchema;
                            }, {} as { [BreakpointName in typeof customBreakpoints[number]]: Schema }),
                        ),
                        propValidation,
                    );

                    return validationSchema;
                }, {} as { [PropName in keyof Props]: Schema }),
            );

            return this;
        },
    } as ComponentSchema<Props>;
}
