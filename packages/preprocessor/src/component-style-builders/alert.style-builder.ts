import { parseComponents } from './component-parser';
import type { AlertProps, AlertResponsiveProps, ScreenSizeNames } from '@svelte-daisyui/shared';
import type { PreprocessorOptions } from '../interfaces/preprocess-options.interface';
import { ALERT } from '../constants/alert.constants';

export function buildAlertStyles(code: string, options: Required<PreprocessorOptions>) {
    const components = parseComponents<AlertProps>(ALERT.COMPONENT_NAME, code);

    const colors = new Set<Required<AlertProps>['color']>(options.includeDefaults ? ALERT.COLORS : []);
    const screenSizes = {} as Record<
        ScreenSizeNames,
        { [P in keyof AlertResponsiveProps]: Set<Exclude<AlertResponsiveProps[P], undefined>> }
    >;

    components.forEach((component) => {
        if (!options.includeDefaults) {
            const compColor = component.color as Exclude<AlertProps['color'], undefined>;
            const color = compColor && ALERT.COLORS.includes(compColor) ? compColor : ALERT.DEFAULT_COLOR;
            colors.add(color);
        }
        if (!component.screen) return;

        const parsedScreen = JSON.parse(component.screen) as Exclude<AlertProps['screen'], undefined>;

        Object.entries(parsedScreen).forEach((entry) => {
            const [screenSize, screenSizeProps] = entry as [ScreenSizeNames, AlertResponsiveProps];
            if (!options.screenSizes[screenSize]) return;

            screenSizes[screenSize] = screenSizes[screenSize] ?? {};
            const parsedScreenColor = screenSizeProps?.color;
            if (parsedScreenColor && ALERT.COLORS.includes(parsedScreenColor)) {
                screenSizes[screenSize].color = screenSizes[screenSize].color ?? new Set();
                screenSizes[screenSize].color!.add(parsedScreenColor);
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
