import { Alignment, ArtboardSize, PropTypes } from '../enums';
import type { ArtboardProps, ComponentSchema } from '../interfaces';

export const ArtboardSchema = {
    name: 'Artboard',
    data: {
        alignment: {
            responsive: false,
            type: PropTypes.String,
            validation: {
                validator: (value: ArtboardProps['alignment']) => Alignment[value] !== undefined,
            },
            default: 'horizontal',
        },
        size: {
            responsive: false,
            type: PropTypes.String,
            validation: {
                validator: (value: ArtboardProps['size']) => ArtboardSize[value] !== undefined,
            },
            default: '320x568',
        },
        demo: {
            responsive: false,
            type: PropTypes.Boolean,
            validation: {
                validator: (value: ArtboardProps['demo']) => typeof value === 'boolean',
            },
            default: false,
        },
    },
} as ComponentSchema<ArtboardProps>;
