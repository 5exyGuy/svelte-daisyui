import type { PartialDeep } from 'type-fest';
import type { Theme } from '@svelte-daisyui/shared';

export const LofiTheme: PartialDeep<Theme> = {
    name: 'lofi',
    colors: {
        primary: '#0d0d0d',
        'primary-content': '#ffffff',
        secondary: '#1a1919',
        'secondary-content': '#ffffff',
        accent: '#262626',
        'accent-content': '#ffffff',
        neutral: '#000000',
        'neutral-content': '#ffffff',
        'base-100': '#ffffff',
        'base-200': '#f2f2f2',
        'base-300': '#e6e5e5',
        'base-content': '#000000',
        info: '#0070f3',
        'info-content': '#ffffff',
        success: '#21cc51',
        'success-content': '#ffffff',
        warning: '#ff6154',
        'warning-content': '#ffffff',
        error: '#de1c8d',
        'error-content': '#ffffff',
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
        tab: {
            radius: '0',
        },
    },
};
