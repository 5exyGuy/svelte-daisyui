import type { TailwindConfig } from 'tailwindcss/tailwind-config';

function withOpacityValue(variable: string) {
    return ({
        opacityValue,
    }: {
        opacityVariable: string;
        opacityValue: string;
    }) => {
        if (!opacityValue) return `hsl(var(${variable}))`;
        return `hsl(var(${variable}) / ${opacityValue})`;
    };
}

export const TAILWIND_CONFIG: TailwindConfig = {
    content: ['./src/**/*.{js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: withOpacityValue('--primary'),
                'primary-content': withOpacityValue('--primary-content'),
                'primary-focus': withOpacityValue('--primary-focus'),
                secondary: withOpacityValue('--secondary'),
                'secondary-content': withOpacityValue('--secondary-content'),
                'secondary-focus': withOpacityValue('--secondary-focus'),
                accent: withOpacityValue('--accent'),
                'accent-content': withOpacityValue('--accent-content'),
                'accent-focus': withOpacityValue('--accent-focus'),
                neutral: withOpacityValue('--neutral'),
                'neutral-content': withOpacityValue('--neutral-content'),
                'neutral-focus': withOpacityValue('--neutral-focus'),
                'base-100': withOpacityValue('--base-100'),
                'base-200': withOpacityValue('--base-200'),
                'base-300': withOpacityValue('--base-300'),
                'base-content': withOpacityValue('--base-content'),
                info: withOpacityValue('--info'),
                'info-content': withOpacityValue('--info-content'),
                'info-focus': withOpacityValue('--info-focus'),
                success: withOpacityValue('--success'),
                'success-content': withOpacityValue('--success-content'),
                'success-focus': withOpacityValue('--success-focus'),
                warning: withOpacityValue('--warning'),
                'warning-content': withOpacityValue('--warning-content'),
                'warning-focus': withOpacityValue('--warning-focus'),
                error: withOpacityValue('--error'),
                'error-content': withOpacityValue('--error-content'),
                'error-focus': withOpacityValue('--error-focus'),
            },
        },
    },
};
