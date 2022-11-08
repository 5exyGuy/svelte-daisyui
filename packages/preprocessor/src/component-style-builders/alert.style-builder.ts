import { parseComponents } from './component-parser';
import type { AlertProps } from '@svelte-daisyui/shared';
import type { PreprocessorOptions } from '../interfaces/preprocess-options.interface';

const COMPONENT_NAME = 'Alert';
const COLORS = ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'base'] as const;

export function buildAlertStyles(code: string, options: PreprocessorOptions) {
    const componentAttributes = parseComponents<AlertProps>(COMPONENT_NAME, code);

    const colors = new Set<Required<AlertProps>['color']>(options.includeDefaults ? COLORS : []);

    componentAttributes.forEach((attributes) => {
        if (options.includeDefaults && attributes.color) colors.add(attributes.color);
    });

    const colorStyles = options.includeDefaults
        ? '@include colors();\n'
        : Array.from(colors)
              .map((color) => `@include color(${color});`)
              .join('\n');

    return colorStyles;
}
