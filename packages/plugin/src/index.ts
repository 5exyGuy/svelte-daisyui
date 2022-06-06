import tailwindPlugin, { type TailwindPluginFn } from 'tailwindcss/plugin';
import { type Theme, ThemeProcessor } from '@svelte-daisyui/themes';
import { TAILWIND_CONFIG } from '@svelte-daisyui/shared';

const tailwindFunction: TailwindPluginFn = ({ config, addBase }) => {
    const mainTheme = config('theme.main') as string;
    const darkTheme = config('theme.dark') as string;
    const includedThemes = config('theme.included') as Array<string>;
    const excludedThemes = config('theme.excluded') as Array<string>;
    const customThemes = config('theme.custom') as Array<Theme>;

    const themeProcessor = new ThemeProcessor();
    themeProcessor
        .setMainTheme(mainTheme)
        .setDarkTheme(darkTheme)
        .setIncludedThemes(includedThemes)
        .setExcludedThemes(excludedThemes)
        .setCustomThemes(customThemes);
    const generatedJsStyles = themeProcessor.generate();
    addBase(generatedJsStyles);

    console.log('DaisyUI: TailwindCSS plugin loaded');
};

export default tailwindPlugin(tailwindFunction, TAILWIND_CONFIG);
