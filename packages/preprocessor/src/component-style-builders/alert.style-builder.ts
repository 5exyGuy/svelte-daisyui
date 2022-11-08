import { parseComponents } from './component-parser';
import { AlertProps, AlertResponsiveProps, ScreenSize, ScreenSizeMinWidth } from '@svelte-daisyui/shared';
import type { PreprocessorOptions } from '../interfaces/preprocess-options.interface';
import type { StringKeyOf } from 'type-fest';

const COMPONENT_NAME = 'Alert';
const COLORS = ['base', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'] as const;
const DEFAULT_COLOR = 'base';

export function buildAlertStyles(code: string, options: PreprocessorOptions) {
    const components = parseComponents<AlertProps>(COMPONENT_NAME, code);

    const colors = new Set<Required<AlertProps>['color']>(options.includeDefaults ? COLORS : []);
    options.screenSizes = options.screenSizes ? { ...ScreenSizeMinWidth, ...options.screenSizes } : ScreenSizeMinWidth;

    const screenSizes = {} as Record<
        StringKeyOf<typeof ScreenSize>,
        { [P in keyof AlertResponsiveProps]: Set<AlertResponsiveProps[P]> }
    >;

    components.forEach((component) => {
        if (options.includeDefaults && component.color && !COLORS.includes(component.color))
            colors.add(component.color);

        if (!component.screen) return;
        const parsedScreen = JSON.parse(component.screen) as AlertResponsiveProps;

        (Object.keys(parsedScreen) as Array<StringKeyOf<typeof ScreenSize>>).forEach((screen) => {
            if (!ScreenSize[screen]) return;

            screenSizes[screen] = screenSizes[screen] ?? {};
            if (component.screen[screen].color) {
                screenSizes[screen].color = screenSizes[screen].color ?? new Set();
                screenSizes[screen].color.add(component.screen[screen].color);
            }
        });
    });

    const colorStyles = options.includeDefaults
        ? '@include colors();\n'
        : Array.from(colors)
              .map((color) => `@include color(${color});`)
              .join('\n');

    return colorStyles;
}
