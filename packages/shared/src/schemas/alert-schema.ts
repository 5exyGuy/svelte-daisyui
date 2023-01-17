import { PropTypes } from '../enums';
import type { AlertProps, ComponentSchema } from '../interfaces';

export const AlertSchema = {
    name: 'Alert',
    data: {
        color: {
            responsive: true,
            type: PropTypes.String,
            validation: {
                validator: (value: AlertProps['color']) =>
                    ['base', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'].includes(value),
            },
            default: 'base',
        },
    },
} as ComponentSchema<AlertProps>;
