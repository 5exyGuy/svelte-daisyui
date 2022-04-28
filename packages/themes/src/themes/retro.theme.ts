import type { PartialDeep } from 'type-fest';
import type { Theme } from '@svelte-daisyui/shared';

export const RetroTheme: PartialDeep<Theme> = {
    name: 'retro',
    colors: {
        primary: '#ef9995',
        'primary-content': '#282425',
        secondary: '#a4cbb4',
        'secondary-content': '#282425',
        accent: '#ebdc99',
        'accent-content': '#282425',
        neutral: '#7d7259',
        'neutral-content': '#e4d8b4',
        'base-100': '#e4d8b4',
        'base-200': '#d2c59d',
        'base-300': '#c6b386',
        'base-content': '#282425',
        info: '#2563eb',
        success: '#16a34a',
        warning: '#d97706',
        error: '#dc2626',
    },
    variables: {
        box: {
            'border-radius': '0.4rem',
        },
        badge: {
            'border-radius': '0.4rem',
        },
        button: {
            'border-radius': '0.4rem',
        },
    },
};
