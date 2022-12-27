import type { ObjectSchema, ValidationResult } from 'joi';
import type { PropTypes } from '../enums';
import type { BreakpointNames } from '../types';

export interface ComponentPropData<Props, PropName extends keyof Props> {
    readonly responsive: boolean;
    readonly type: PropTypes;
    readonly validValues: Array<Props[PropName]>;
    readonly default: Props[PropName];
}

export interface ComponentSchemaMap<Props> {
    default: ObjectSchema<Props>;
    breakpoint?: ObjectSchema<Props>;
}

export interface ComponentSchema<Props> {
    readonly name: string;
    readonly hasBreakpoint: boolean;
    readonly propData: { [PropName in keyof Props]?: ComponentPropData<Props, PropName> };
    readonly map: ComponentSchemaMap<Props>;
    validate(value: any): ValidationResult<Props>;
    transform(value: any): ValidationResult<Props>;
    setBreakpoints<CustomBreakpointNames extends string = string>(
        customBreakpoints: Array<BreakpointNames | CustomBreakpointNames>,
    ): this;
}
