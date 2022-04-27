// src/index.ts
import tailwindPlugin from "tailwindcss/plugin";
import { ThemeProcessor } from "@svelte-daisyui/themes";
import { TAILWIND_CONFIG } from "@svelte-daisyui/shared";
var tailwindFunction = ({ config, addBase }) => {
  const mainTheme = config("daisyui.mainTheme");
  const darkTheme = config("daisyui.darkTheme");
  const enabledDefaultThemes = config("daisyui.enabledDefaultThemes");
  const customThemes = config("daisyui.customThemes");
  const themeProcessor = new ThemeProcessor(mainTheme, darkTheme, enabledDefaultThemes, customThemes);
  const generatedJsStyles = themeProcessor.generate();
  addBase(generatedJsStyles);
  console.log("DaisyUI: TailwindCSS plugin loaded");
};
var src_default = tailwindPlugin(tailwindFunction, TAILWIND_CONFIG);
export {
  src_default as default
};
//# sourceMappingURL=index.mjs.map