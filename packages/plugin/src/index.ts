import tailwindPlugin, { type TailwindPluginFn } from 'tailwindcss/plugin';
import { type Theme, ThemeProcessor } from '@svelte-daisyui/themes';
import { TAILWIND_CONFIG } from '@svelte-daisyui/shared';

const tailwindFunction: TailwindPluginFn = ({ config, addBase }) => {
    const mainTheme = config('daisyui.mainTheme') as string;
    const darkTheme = config('daisyui.darkTheme') as string;
    const includedThemes = config('daisyui.includedThemes') as Array<string>;
    const excludedThemes = config('daisyui.excludedThemes') as Array<string>;
    const customThemes = config('daisyui.customThemes') as Array<Theme>;

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
