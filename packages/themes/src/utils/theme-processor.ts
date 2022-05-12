import type { Theme } from '@svelte-daisyui/shared';
import type { StringKeyOf } from 'type-fest';
import { DEFAULT_THEMES } from '../themes';
import { DAISYUI_CONFIG_SCHEMA, CUSTOM_THEME_SCHEMA } from '../schemas';
import {
    COLOR_NAMES,
    DEFAULT_DARK_THEME,
    DEFAULT_MAIN_THEME,
    DEFAULT_THEME,
} from '../constants';
import color from 'color';

export class ThemeProcessor {
    public mainTheme?: string;
    public darkTheme?: string;
    public includedThemes?: Array<string>;
    public excludedThemes?: Array<string>;
    public customThemes?: Array<Theme>;

    public setMainTheme(mainTheme: string): ThemeProcessor {
        this.mainTheme = mainTheme;
        return this;
    }

    public setDarkTheme(darkTheme: string): ThemeProcessor {
        this.darkTheme = darkTheme;
        return this;
    }

    public setIncludedThemes(includedThemes: Array<string>): ThemeProcessor {
        this.includedThemes = includedThemes;
        return this;
    }

    public setExcludedThemes(excludedThemes: Array<string>): ThemeProcessor {
        this.excludedThemes = excludedThemes;
        return this;
    }

    public setCustomThemes(customThemes: Array<Theme>): ThemeProcessor {
        this.customThemes = customThemes;
        return this;
    }

    private formatHsl(hsl: Array<number>): string {
        return `${hsl[0]} ${hsl[1]}% ${hsl[2]}%`;
    }

    private process(theme: Theme): Record<string, string> {
        const processedTheme = {} as Record<string, string>;

        for (const colorName in COLOR_NAMES) {
            // Main color
            const mainColor = color(
                theme.colors[colorName as StringKeyOf<Theme['colors']>] ??
                    DEFAULT_THEME.colors[
                        colorName as StringKeyOf<Theme['colors']>
                    ],
            );
            processedTheme[`--${colorName}`] = this.formatHsl(
                mainColor.hsl().round().array(),
            );

            // Content color
            if (COLOR_NAMES[colorName]?.content) {
                let colorContent = color(
                    theme.colors[
                        `${colorName}-content` as StringKeyOf<Theme['colors']>
                    ] ??
                        (mainColor.isDark()
                            ? mainColor.mix(color('white'), 0.8).saturate(10)
                            : mainColor.mix(color('black'), 0.8).saturate(10)),
                );
                processedTheme[`--${colorName}-content`] = this.formatHsl(
                    colorContent.hsl().round().array(),
                );
            }
            // Focus color
            if (COLOR_NAMES[colorName]?.focus) {
                const colorFocus = theme.colors[
                    `${colorName}-focus` as StringKeyOf<Theme['colors']>
                ]
                    ? color(
                          theme.colors[
                              `${colorName}-focus` as StringKeyOf<
                                  Theme['colors']
                              >
                          ],
                      )
                    : mainColor.darken(0.2);
                processedTheme[`--${colorName}-focus`] = this.formatHsl(
                    colorFocus.hsl().round().array(),
                );
            }
        }

        // Base color
        const baseColor = color(
            theme.colors['base-100'] ?? DEFAULT_THEME.colors['base-100'],
        );
        processedTheme['--base-100'] = this.formatHsl(
            baseColor.hsl().round().array(),
        );
        processedTheme['--base-200'] = this.formatHsl(
            baseColor.darken(0.1).hsl().round().array(),
        );
        processedTheme['--base-300'] = this.formatHsl(
            baseColor.darken(0.1).darken(0.1).hsl().round().array(),
        );

        processedTheme['--base-content'] = this.formatHsl(
            color(
                theme.colors['base-content'] ??
                    (baseColor.isDark()
                        ? baseColor.mix(color('white'), 0.8).saturate(10)
                        : baseColor.mix(color('black'), 0.8).saturate(10)),
            )
                .hsl()
                .round()
                .array(),
        );

        // Variables
        for (const [section, sectionVars] of Object.entries(theme.variables))
            for (const [key, value] of Object.entries(sectionVars))
                processedTheme[`--${section}-${key}`] = value;

        return processedTheme;
    }

    public generate(): Object {
        const includedThemes = [] as Array<Theme>;

        // Validating the config
        const { error, value: validatedConfig } =
            DAISYUI_CONFIG_SCHEMA.validate({
                mainTheme: this.mainTheme,
                darkTheme: this.darkTheme,
                includedThemes: this.includedThemes,
                excludedThemes: this.excludedThemes,
                customThemes: this.customThemes,
            });
        if (error) throw new Error(error.message);
        if (!validatedConfig) throw new Error('Invalid config');

        validatedConfig.includedThemes = validatedConfig.includedThemes.filter(
            (themeName) => !validatedConfig.excludedThemes.includes(themeName),
        );

        // Including default themes
        for (const defaultThemeName of validatedConfig.includedThemes) {
            const defaultTheme = DEFAULT_THEMES.find(
                (theme) => theme.name === defaultThemeName,
            );
            if (!defaultTheme) continue;

            const validatedTheme = CUSTOM_THEME_SCHEMA.validate(defaultTheme);
            if (validatedTheme.error) continue;

            includedThemes.push(validatedTheme.value);
        }
        // Including custom themes
        includedThemes.push(
            ...validatedConfig.customThemes.filter((customTheme) => {
                const validatedTheme =
                    CUSTOM_THEME_SCHEMA.validate(customTheme);
                if (validatedTheme.error) return false;
                if (!validatedConfig.includedThemes.includes(customTheme.name))
                    return false;
                return true;
            }),
        );
        // Finding the main and dark themes
        let mainTheme = includedThemes.find(
            (theme) => theme.name === validatedConfig.mainTheme,
        ) as Theme;
        let darkTheme = includedThemes.find(
            (theme) => theme.name === validatedConfig.darkTheme,
        ) as Theme;

        if (!mainTheme) {
            validatedConfig.mainTheme = DEFAULT_MAIN_THEME;
            mainTheme = includedThemes.find(
                (theme) => theme.name === validatedConfig.mainTheme,
            ) as Theme;
            if (!mainTheme) return {};
        }
        if (!darkTheme) {
            validatedConfig.darkTheme = DEFAULT_DARK_THEME;
            darkTheme = includedThemes.find(
                (theme) => theme.name === validatedConfig.darkTheme,
            ) as Theme;
            if (!darkTheme) return {};
        }

        this.mainTheme = mainTheme.name;
        this.darkTheme = darkTheme.name;

        // Processing the included themes
        const generatedStyles = {} as any;

        generatedStyles[':root'] = this.process(mainTheme);
        generatedStyles['@media (prefers-color-scheme: dark)'] = {
            [':root']: this.process(darkTheme),
        };
        for (const theme of includedThemes)
            generatedStyles[`[data-theme="${theme.name}"]`] =
                this.process(theme);

        return generatedStyles;
    }
}
