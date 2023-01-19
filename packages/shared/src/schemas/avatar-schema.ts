import { AvatarStatus, PropTypes } from '../enums';
import type { AvatarProps, ComponentSchema } from '../interfaces';

export const AvatarSchema = {
    name: 'Avatar',
    data: {
        placeholder: {
            responsive: false,
            type: PropTypes.Boolean,
            validate: (value) => typeof value === 'boolean',
            transform: () => 'placeholder',
            default: false,
        },
        size: {
            responsive: true,
            type: PropTypes.String,
            validate: (value) => typeof value === 'string',
            default: '6rem',
        },
        // ring: {
        //     responsive: false,
        //     type: PropTypes.Object,
        //     validate: (value: AvatarProps['ring']) => typeof value === 'object',
        //     transform: () => 'ring',
        //     default: {
        //         color: 'primary',
        //         offsetColor: 'primary',
        //         offsetSize: '0px',
        //     },
        // },
        status: {
            responsive: false,
            type: PropTypes.String,
            validate: (value) => AvatarStatus[value!] !== undefined,
            transform: (value) => AvatarStatus[value!],
        },
    },
} as ComponentSchema<AvatarProps>;
