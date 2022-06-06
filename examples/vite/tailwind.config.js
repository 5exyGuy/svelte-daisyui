/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
    content: ['./src/**/*.{svelte,js,ts}'],
    theme: {
        main: 'mano-tema-1',
        dark: 'dark',
        included: ['dark', 'light', 'mano-tema-1', 'mano-tema-2'],
        excluded: ['mano-tema-2'],
        custom: [
            {
                name: 'mano-tema-1',
                colors: {
                    primary: '#845EC2',
                    secondary: '#D65DB1',
                    accent: '#FF6F91',
                    info: '#3596B5',
                    success: '#00C9A7',
                    warning: '#FF8066',
                    error: '#D53624',
                },
            },
            {
                name: 'mano-tema-2',
                colors: {
                    primary: '#79C25E',
                    secondary: '#845EC2',
                    accent: '#FFC75F',
                    info: '#2C73D2',
                    success: '#00C9A7',
                    warning: '#FF8066',
                    error: '#C34A36',
                },
            },
        ],
    },
    plugins: [require('@svelte-daisyui/plugin')],
};
