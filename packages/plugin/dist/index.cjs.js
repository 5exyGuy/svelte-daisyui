'use strict';
var e = require('tailwindcss/plugin'),
    s = require('@svelte-daisyui/themes'),
    i = require('@svelte-daisyui/shared');
function d(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
var u = d(e).default(({ config: e, addBase: i }) => {
    const d = e('daisyui.mainTheme'),
        u = e('daisyui.darkTheme'),
        a = e('daisyui.includedThemes'),
        t = e('daisyui.excludedThemes'),
        r = e('daisyui.customThemes'),
        l = new s.ThemeProcessor();
    l.setMainTheme(d)
        .setDarkTheme(u)
        .setIncludedThemes(a)
        .setExcludedThemes(t)
        .setCustomThemes(r);
    i(l.generate()), console.log('DaisyUI: TailwindCSS plugin loaded');
}, i.TAILWIND_CONFIG);
module.exports = u;
//# sourceMappingURL=index.cjs.js.map
