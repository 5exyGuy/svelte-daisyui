import type { PartialDeep } from 'type-fest';
import type { Theme } from '@svelte-daisyui/shared';

export const CorporateTheme: PartialDeep<Theme> = {
    name: 'corporate',
    colors: {
        primary: '#4b6bfb',
        secondary: '#7b92b2',
        accent: '#67cba0',
        neutral: '#181a2a',
        'neutral-content': '#edf2f7',
        'base-100': '#ffffff',
        'base-content': '#181a2a',
    },
    variables: {
        box: {
            'border-radius': '0.25rem',
        },
        button: {
            'border-radius': '0.125rem',
            'animation-duration': '0',
            'focus-scale': '1',
        },
        badge: {
            'border-radius': '0.125rem',
        },
        input: {
            'animation-duration': '0',
        },
    },
};
