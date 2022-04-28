import type { PartialDeep } from 'type-fest';
import type { Theme } from '@svelte-daisyui/shared';

export const HalloweenTheme: PartialDeep<Theme> = {
    name: 'halloween',
    colors: {
        primary: '#f28c18',
        'primary-content': '#131616',
        secondary: '#6d3a9c',
        accent: '#51a800',
        neutral: '#1b1d1d',
        'base-100': '#212121',
        info: '#2563eb',
        success: '#16a34a',
        warning: '#d97706',
        error: '#dc2626',
    },
};
