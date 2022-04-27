var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_plugin = __toESM(require("tailwindcss/plugin"));
var import_themes = require("@svelte-daisyui/themes");
var import_shared = require("@svelte-daisyui/shared");
var tailwindFunction = ({ config, addBase }) => {
  const mainTheme = config("daisyui.mainTheme");
  const darkTheme = config("daisyui.darkTheme");
  const enabledDefaultThemes = config("daisyui.enabledDefaultThemes");
  const customThemes = config("daisyui.customThemes");
  const themeProcessor = new import_themes.ThemeProcessor(mainTheme, darkTheme, enabledDefaultThemes, customThemes);
  const generatedJsStyles = themeProcessor.generate();
  addBase(generatedJsStyles);
  console.log("DaisyUI: TailwindCSS plugin loaded");
};
var src_default = (0, import_plugin.default)(tailwindFunction, import_shared.TAILWIND_CONFIG);
//# sourceMappingURL=index.js.map