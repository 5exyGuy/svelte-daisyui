const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {},
    },

    plugins: [require('@svelte-daisyui/plugin')],
};

module.exports = config;
