import { PropTypes, Size } from '../enums';
import type { BadgeProps, ComponentSchema } from '../interfaces';

export const BadgeSchema = {
    name: 'Badge',
    data: {
        color: {
            required: true,
            responsive: true,
            type: PropTypes.String,
            validate: (value) =>
                ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'neutral', 'ghost'].includes(
                    value!,
                ),
            transform: (value) => value,
            default: 'neutral',
        },
        outline: {
            required: false,
            responsive: false,
            type: PropTypes.Boolean,
            validate: (value) => typeof value === 'boolean',
            transform: () => 'outline',
            default: false,
        },
        size: {
            required: true,
            responsive: true,
            type: PropTypes.String,
            validate: (value) => Size[value!] !== undefined,
            transform: (value) => Size[value!],
            default: 'md',
        },
    },
} as ComponentSchema<BadgeProps>;
