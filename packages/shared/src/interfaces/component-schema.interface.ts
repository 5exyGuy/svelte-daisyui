import type { ObjectSchema, ValidationResult } from 'joi';
import type { PropTypes } from '../enums';

export interface ComponentSchema<Props> {
    readonly name: string;
    readonly propValues: { [K in keyof Props]: { values: Array<Props[K]>; default: Props[K] } };
    readonly propTypes: { [K in keyof Props]: PropTypes };
    readonly objectSchema: ObjectSchema<Props>;
    readonly validate: (value: any) => ValidationResult<Props>;
    readonly transform: (value: any) => ValidationResult<Props>;
}
