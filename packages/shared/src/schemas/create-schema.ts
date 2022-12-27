import { PropTypes } from '../enums';
import type { ComponentPropData, ComponentSchema, ComponentsProps } from '../interfaces';
import type { BreakpointNames } from '../types';
import joi, { type ObjectSchema } from 'joi';

export function createSchema<Props extends ComponentsProps>(
    schema: Omit<ComponentSchema<Props>, 'validate' | 'transform' | 'setBreakpoints'>,
) {
    let breakpoints: Array<BreakpointNames | string>;

    function validateValue(value: any) {
        const valueSchema = joi.object();
        const { error, value: validatedValue } = valueSchema.validate(value);
        if (error) throw error;
        return validatedValue;
    }

    function validateBreakpointNames<CustomBreakpointNames extends string = string>(
        breakpointNames: Array<BreakpointNames | CustomBreakpointNames>,
    ) {
        const breakpointNamesSchema = joi.array<typeof breakpointNames>().items(joi.string()).min(1).unique();
        const { error, value } = breakpointNamesSchema.validate(breakpointNames);
        if (error) throw error;
        return value;
    }

    function transformValue(value: any) {
        return Object.entries(schema.propData).reduce<Props>((transformed, entry) => {
            const [propName, propData] = entry as [keyof Props, ComponentPropData<Props, keyof Props>];
            const propValue = value[propName];
            if (!propValue) {
                transformed[propName] = schema.propData[propName]!.default;
                return transformed;
            }

            switch (type) {
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

            const schema = this.hasBreakpoint
                ? this.map.default.append({
                      breakpoint: breakpoints.reduce((acc, breakpointName) => {
                          acc[breakpointName] = this.map.breakpoint!;
                          return acc;
                      }, {} as Record<typeof breakpoints[number], ObjectSchema<Props>>),
                  })
                : this.map.default;

            return schema.validate(value);
        },
        // Schema transformation
        transform(value) {
            value = validateValue(value);

            // Transform the given value into a schema object
            const transformed = transformValue(value);

            if (this.hasBreakpoint && value.breakpoint) {
                const componentBreakpoint = JSON.parse(value.breakpoint);

                Object.keys(breakpoints).forEach((breakpointName) => {
                    const breakpointValue = componentBreakpoint[breakpointName];
                    if (!breakpointValue) return;
                    transformed.breakpoint = transformed.breakpoint ?? {};
                    transformed.breakpoint![breakpointName] = transformValue(breakpointValue);
                });
            }

            return this.validate(transformed);
        },
        setBreakpoints(customBreakpoints) {
            breakpoints = validateBreakpointNames(customBreakpoints);
            return this;
        },
    } as ComponentSchema<Props>;
}
