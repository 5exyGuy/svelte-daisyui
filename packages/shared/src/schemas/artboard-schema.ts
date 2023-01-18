import { Alignment, ArtboardSize, PropTypes } from '../enums';
import type { ArtboardProps, ComponentSchema } from '../interfaces';

export const ArtboardSchema = {
    name: 'Artboard',
    data: {
        alignment: {
            responsive: false,
            type: PropTypes.String,
            validate: (value: ArtboardProps['alignment']) => Alignment[value] !== undefined,
            transform: (value: ArtboardProps['alignment']) => Alignment[value],
            default: 'horizontal',
        },
        size: {
            responsive: false,
            type: PropTypes.String,
            validate: (value: ArtboardProps['size']) => ArtboardSize[value] !== undefined,
            transform: (value: ArtboardProps['size']) => ArtboardSize[value],
            default: '320x568',
        },
        demo: {
            responsive: false,
            type: PropTypes.Boolean,
            validate: (value: ArtboardProps['demo']) => typeof value === 'boolean',
            transform: () => 'demo',
            default: false,
        },
    },
} as ComponentSchema<ArtboardProps>;
