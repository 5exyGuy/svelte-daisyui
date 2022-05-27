module.exports = {
    content: ['./src/**/*.{svelte,js,ts}'],
    daisyui: {
        mainTheme: 'mano-tema',
        darkTheme: 'dark',
        includedThemes: ['dark', 'light', 'mano-tema'],
        excludedThemes: ['mano-tema'],
        customThemes: [
            {
                name: 'mano-tema',
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
        ],
    },
    plugins: [require('@svelte-daisyui/plugin')],
};
