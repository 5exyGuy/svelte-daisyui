module.exports = {
    content: ['./src/**/*.{svelte,js,ts}'],
    daisyui: {
        mainTheme: 'light',
        darkTheme: 'dark',
        includedThemes: ['light', 'dark', 'acid', 'cmyk'],
        exludeThemes: ['acid', 'cmyk'],
        customThemes: [...]
    },
    plugins: [require('@svelte-daisyui/plugin')],
};
