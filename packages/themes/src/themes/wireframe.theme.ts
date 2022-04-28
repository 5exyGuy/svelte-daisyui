import type { PartialDeep } from 'type-fest';
import type { Theme } from '@svelte-daisyui/shared';

export const WireframeTheme: PartialDeep<Theme> = {
    name: 'wireframe',
    'font-family': 'Chalkboard,comic sans ms,"sanssecondaryerif"',
    colors: {
        primary: '#b8b8b8',
        secondary: '#b8b8b8',
        accent: '#b8b8b8',
        neutral: '#ebebeb',
        'base-100': '#ffffff',
        'base-200': '#eeeeee',
        'base-300': '#dddddd',
        info: '#0000ff',
        success: '#008000',
        warning: '#a6a659',
        error: '#ff0000',
    },
    variables: {
        box: {
            'border-radius': '0.2rem',
        },
        button: {
            'border-radius': '0.2rem',
        },
        badge: {
            'border-radius': '0.2rem',
        },
        tab: {
            radius: '0.2rem',
        },
    },
};
