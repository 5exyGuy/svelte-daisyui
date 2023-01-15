import type { PropTypes } from '../enums';
import type { TAnySchema } from '@sinclair/typebox';

export interface ComponentPropData<Props, PropName extends keyof Props> {
    readonly responsive: boolean;
    readonly type: PropTypes;
    readonly validValues: Array<Props[PropName]>;
    readonly default: Props[PropName];
}

export interface ComponentSchema<Props> {
    readonly name: string;
    readonly propData: { [PropName in keyof Props]?: ComponentPropData<Props, PropName> };
    readonly validationMap: { [PropName in keyof Props]?: TAnySchema };
}
