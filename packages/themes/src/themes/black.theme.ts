import type { PartialDeep } from 'type-fest';
import type { Theme } from '@svelte-daisyui/shared';

export const BlackTheme: PartialDeep<Theme> = {
    name: 'black',
    colors: {
        primary: '#343232',
        secondary: '#343232',
        accent: '#343232',
        'base-100': '#000000',
        'base-200': '#0D0D0D',
        'base-300': '#1A1919',
        neutral: '#272626',
        'neutral-focus': '#343232',
        info: '#0000ff',
        success: '#008000',
        warning: '#ffff00',
        error: '#ff0000',
    },
    variables: {
        box: {
            'border-radius': '0',
        },
        button: {
            'border-radius': '0',
            'animation-duration': '0',
            'text-transform': 'lowercase',
            'focus-scale': '1',
        },
        badge: {
            'border-radius': '0',
        },
        input: {
            'animation-duration': '0',
        },
        tab: {
            'border-radius': '0',
        },
    },
};
