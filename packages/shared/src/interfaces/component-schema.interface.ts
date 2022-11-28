import type { ObjectSchema, ValidationResult } from 'joi';
import type { PropTypes } from '../enums';

interface ComponentPropData<T, K extends keyof T> {
    readonly type: PropTypes;
    readonly validValues: Array<T[K]>;
    readonly default: T[K];
}

export interface ComponentSchema<T> {
    readonly name: string;
    readonly propData: { [K in keyof T]: ComponentPropData<T, K> };
    readonly objectSchema: ObjectSchema<T>;
    readonly validate: (value: any) => ValidationResult<T>;
    readonly transform: (value: any) => ValidationResult<T>;
}
