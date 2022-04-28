import { COLOR_NAMES, DEFAULT_THEME } from '../constants';
import type { Theme } from '../interfaces';
import joi, { type PartialSchemaMap } from 'joi';

const colorSchemaMap: PartialSchemaMap = {};
const colorRegex =
    /(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^\)]*\)/;

for (const colorName in COLOR_NAMES) {
    colorSchemaMap[`${colorName}`] = joi.string().regex(colorRegex);
    if (COLOR_NAMES[colorName]?.content)
        colorSchemaMap[`${colorName}-content`] = joi.string().regex(colorRegex);
    if (COLOR_NAMES[colorName]?.focus)
        colorSchemaMap[`${colorName}-focus`] = joi.string().regex(colorRegex);
}

for (let i = 100; i <= 300; i += 100)
    colorSchemaMap[`base-${i}`] = joi.string().regex(colorRegex);
colorSchemaMap[`base-content`] = joi.string().regex(colorRegex);

export const CUSTOM_THEME_SCHEMA = joi.object<Theme>({
    name: joi.string().required(),
    'font-family': joi.string(),
    colors: joi.object(colorSchemaMap).required(),
    variables: joi
        .object({
            box: joi
                .object({
                    'border-radius': joi
                        .string()
                        .default(DEFAULT_THEME.variables.box['border-radius']),
                })
                .default(DEFAULT_THEME.variables.box),
            button: joi
                .object({
                    'border-radius': joi
                        .string()
                        .default(
                            DEFAULT_THEME.variables.button['border-radius'],
                        ),
                    'border-width': joi
                        .string()
                        .default(
                            DEFAULT_THEME.variables.button['border-width'],
                        ),
                    'text-transform': joi
                        .string()
                        .valid('lowercase', 'uppercase')
                        .default(
                            DEFAULT_THEME.variables.button['text-transform'],
                        ),
                    'focus-scale': joi
                        .string()
                        .default(DEFAULT_THEME.variables.button['focus-scale']),
                    'animation-duration': joi
                        .string()
                        .default(
                            DEFAULT_THEME.variables.button[
                                'animation-duration'
                            ],
                        ),
                })
                .default(DEFAULT_THEME.variables.button),
            input: joi
                .object({
                    'animation-duration': joi
                        .string()
                        .default(
                            DEFAULT_THEME.variables.input['animation-duration'],
                        ),
                })
                .default(DEFAULT_THEME.variables.input),
            badge: joi
                .object({
                    'border-radius': joi
                        .string()
                        .default(
                            DEFAULT_THEME.variables.badge['border-radius'],
                        ),
                })
                .default(DEFAULT_THEME.variables.badge),
            tab: joi
                .object({
                    border: joi
                        .string()
                        .default(DEFAULT_THEME.variables.tab['border']),
                    radius: joi
                        .string()
                        .default(DEFAULT_THEME.variables.tab['radius']),
                })
                .default(DEFAULT_THEME.variables.tab),
        })
        .default(DEFAULT_THEME.variables),
});
