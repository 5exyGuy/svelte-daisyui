import type { PartialDeep } from 'type-fest';
import type { Theme } from '@svelte-daisyui/shared';

export const LuxuryTheme: PartialDeep<Theme> = {
    name: 'luxury',
    colors: {
        primary: '#ffffff',
        secondary: '#152747',
        accent: '#513448',
        neutral: '#171618',
        'neutral-content': '#dca54c',
        'base-100': '#09090b',
        'base-200': '#171618',
        'base-300': '#2e2d2f',
        'base-content': '#dca54c',
        info: '#66c6ff',
        success: '#87d039',
        warning: '#e2d562',
        error: '#ff6f6f',
    },
};
