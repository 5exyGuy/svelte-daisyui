import { PropTypes } from '../enums';
import type { AlertProps, ComponentSchema } from '../interfaces';
import { Type } from '@sinclair/typebox';

const propData = {
    color: {
        responsive: true,
        type: PropTypes.String,
        validValues: ['base', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'base',
    },
} as ComponentSchema<AlertProps>['propData'];

export const AlertSchema = {
    name: 'Alert',
    propData,
    validationMap: {
        color: Type.Union(propData.color!.validValues!.map((value) => Type.Literal(value))),
    },
} as ComponentSchema<AlertProps>;
