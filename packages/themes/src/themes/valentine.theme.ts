import type { PartialDeep } from 'type-fest';
import type { Theme } from '@svelte-daisyui/shared';

export const ValentineTheme: PartialDeep<Theme> = {
    name: 'valentine',
    colors: {
        primary: '#e96d7b',
        secondary: '#a991f7',
        accent: '#88dbdd',
        neutral: '#af4670',
        'neutral-content': '#f0d6e8',
        'base-100': '#f0d6e8',
        'base-content': '#632c3b',
        info: '#2563eb',
        success: '#16a34a',
        warning: '#d97706',
        error: '#dc2626',
    },
    variables: {
        button: {
            'border-radius': '1.9rem',
        },
    },
};
