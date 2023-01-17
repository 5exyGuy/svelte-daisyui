import type { PropTypes } from '../enums';

export interface ComponentPropData<Props, PropName extends keyof Props> {
    readonly responsive: boolean;
    readonly type: PropTypes;
    readonly validation: {
        readonly validator: (value?: Props[PropName]) => boolean;
    };
    readonly default: Props[PropName];
}

export interface ComponentSchema<Props> {
    readonly name: string;
    readonly data: { [PropName in keyof Props]: ComponentPropData<Props, PropName> };
}
