import type { ObjectSchema, ValidationResult } from 'joi';
import type { PropTypes } from '../enums';
import type { ScreenSizeNames } from '../types';

interface ComponentPropData<Props, PropName extends keyof Props> {
    readonly type: PropTypes;
    readonly validValues: Array<Props[PropName]>;
    readonly default: Props[PropName];
}

export interface ComponentSchema<Props> {
    readonly name: string;
    readonly hasScreen: boolean;
    readonly propData: { [PropName in keyof Props]?: ComponentPropData<Props, PropName> };
    readonly objectSchema: ObjectSchema<Props>;
    readonly validate: <CustomScreenSizeNames extends string = string>(
        value: any,
        screenSizes: Array<ScreenSizeNames | CustomScreenSizeNames>,
    ) => ValidationResult<Props>;
    readonly transform: <CustomScreenSizeNames extends string = string>(
        value: any,
        screenSizes: Array<ScreenSizeNames | CustomScreenSizeNames>,
    ) => ValidationResult<Props>;
}
