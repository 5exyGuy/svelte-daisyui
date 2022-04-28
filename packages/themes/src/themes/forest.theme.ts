import type { PartialDeep } from 'type-fest';
import type { Theme } from '@svelte-daisyui/shared';

export const ForestTheme: PartialDeep<Theme> = {
    name: 'forest',
    colors: {
        primary: '#1eb854',
        secondary: '#1fd65f',
        accent: '#d99330',
        neutral: '#110e0e',
        'base-100': '#171212',
    },
    variables: {
        button: {
            'border-radius': '1.9rem',
        },
    },
};
