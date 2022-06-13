import type { Config } from 'tailwindcss';

export const TAILWIND_CONFIG: Config = {
    content: ['./src/**/*.{svelte,js,ts}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: 'hsl(var(--primary) / <alpha-value>)',
                'primary-content':
                    'hsl(var(--primary-content) / <alpha-value>)',
                'primary-focus': 'hsl(var(--primary-focus) / <alpha-value>)',
                secondary: 'hsl(var(--secondary) / <alpha-value>)',
                'secondary-content':
                    'hsl(var(--secondary-content) / <alpha-value>)',
                'secondary-focus':
                    'hsl(var(--secondary-focus) / <alpha-value>)',
                accent: 'hsl(var(--accent) / <alpha-value>)',
                'accent-content': 'hsl(var(--accent-content) / <alpha-value>)',
                'accent-focus': 'hsl(var(--accent-focus) / <alpha-value>)',
                neutral: 'hsl(var(--neutral) / <alpha-value>)',
                'neutral-content':
                    'hsl(var(--neutral-content) / <alpha-value>)',
                'neutral-focus': 'hsl(var(--neutral-focus) / <alpha-value>)',
                'base-100': 'hsl(var(--base-100) / <alpha-value>)',
                'base-200': 'hsl(var(--base-200) / <alpha-value>)',
                'base-300': 'hsl(var(--base-300) / <alpha-value>)',
                'base-content': 'hsl(var(--base-content) / <alpha-value>)',
                info: 'hsl(var(--info) / <alpha-value>)',
                'info-content': 'hsl(var(--info-content) / <alpha-value>)',
                'info-focus': 'hsl(var(--info-focus) / <alpha-value>)',
                success: 'hsl(var(--success) / <alpha-value>)',
                'success-content':
                    'hsl(var(--success-content) / <alpha-value>)',
                'success-focus': 'hsl(var(--success-focus) / <alpha-value>)',
                warning: 'hsl(var(--warning) / <alpha-value>)',
                'warning-content':
                    'hsl(var(--warning-content) / <alpha-value>)',
                'warning-focus': 'hsl(var(--warning-focus) / <alpha-value>)',
                error: 'hsl(var(--error) / <alpha-value>)',
                'error-content': 'hsl(var(--error-content) / <alpha-value>)',
                'error-focus': 'hsl(var(--error-focus) / <alpha-value>)',
            },
        },
    },
};
