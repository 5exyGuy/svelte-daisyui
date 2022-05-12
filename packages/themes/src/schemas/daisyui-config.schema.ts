import type { DaisyUIConfig } from '@svelte-daisyui/shared';
import { DEFAULT_DARK_THEME, DEFAULT_MAIN_THEME } from '../constants';
import { DEFAULT_THEMES } from '../themes';
import { CUSTOM_THEME_SCHEMA } from './custom-theme.schema';
import joi from 'joi';

export const DAISYUI_CONFIG_SCHEMA = joi.object<DaisyUIConfig>({
    mainTheme: joi.string().default(DEFAULT_MAIN_THEME),
    darkTheme: joi.string().default(DEFAULT_DARK_THEME),
    includedThemes: joi
        .array()
        .items(joi.string())
        .default(DEFAULT_THEMES.map((theme) => theme.name)),
    excludedThemes: joi.array().items(joi.string()).default([]),
    customThemes: joi.array().items(CUSTOM_THEME_SCHEMA).default([]),
});
