import { parseComponents } from '../utilities/component-parser.utility';
import type { AlertProps, AlertResponsiveProps, ScreenSizeNames, StringKeyOf } from '@svelte-daisyui/shared';
import type { PreprocessorOptions } from '../interfaces/preprocess-options.interface';
import { ALERT } from '../constants/alert.constants';

export function buildAlertStyles(code: string, options: Required<PreprocessorOptions>) {
    const components = parseComponents<AlertProps>(ALERT.COMPONENT_NAME, code);

    const colors = new Set<Required<AlertProps>['color']>(options.includeDefaults ? ALERT.COLORS : []);
    const screenSizes = {} as {
        [SizeName in ScreenSizeNames]?: {
            [Prop in StringKeyOf<AlertResponsiveProps>]?: Set<Exclude<AlertResponsiveProps[Prop], undefined>>;
        };
    };

    components.forEach((component) => {
        // Include onl
        if (!options.includeDefaults) {
            const compColor = component.color as Exclude<AlertProps['color'], undefined>;
            const color = compColor && ALERT.COLORS.includes(compColor) ? compColor : ALERT.DEFAULT_COLOR;
            colors.add(color);
        }
        if (!component.screen) return;

        // Parsed component's screen attribute's value
        const parsedScreen = JSON.parse(component.screen) as Exclude<AlertProps['screen'], undefined>;
        Object.entries(parsedScreen).forEach((entry) => {
            const [screenSize, screenSizeProps] = entry as [ScreenSizeNames, AlertResponsiveProps];
            if (!options.screenSizes[screenSize]) return;
            if (!screenSizeProps || typeof screenSizeProps !== 'object') return;

            screenSizes[screenSize] = screenSizes[screenSize] || {};
            const color = screenSizeProps?.color;

            if (color && ALERT.COLORS.includes(color)) {
                screenSizes![screenSize]!.color = screenSizes![screenSize]!.color || new Set();
                screenSizes![screenSize]!.color!.add(color);
            }
        });
    });

    const colorStyles = options.includeDefaults
        ? '@include colors();\n'
        : Array.from(colors)
              .map((color) => `@include color(${color});`)
              .join('\n');
    const screenStyles = Object.entries(screenSizes)
        .map((entry) => {
            const [screenSize, screenSizeProps] = entry as [
                ScreenSizeNames,
                { [Prop in StringKeyOf<AlertResponsiveProps>]?: Set<Exclude<AlertResponsiveProps[Prop], undefined>> },
            ];
            const color = screenSizeProps?.color;
            return color
                ? Array.from(color)
                      .map(
                          (color) =>
                              `@include responsive-color(${color}, ${screenSize}, ${options.screenSizes[screenSize]});`,
                      )
                      .join('\n')
                : '';
        })
        .join('\n');

    return colorStyles + screenStyles;
}
