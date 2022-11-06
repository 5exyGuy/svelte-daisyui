import { parseComponents } from './component-parser';
import type { AlertProps } from '@svelte-daisyui/shared';
import type { PreprocessorOptions } from '../interfaces/preprocess-options.interface';

const COMPONENT_NAME = 'Alert';

export function buildAlertStyles(code: string, options: PreprocessorOptions) {
    const componentAttributes = parseComponents<AlertProps>(COMPONENT_NAME, code);

    const colors = new Set<Required<AlertProps>['color']>();
    const screenSizes = new Set<Required<AlertProps>['screenSize']>();

    componentAttributes.forEach((attributes) => {
        if (attributes.color) colors.add(attributes.color);
    });

    return '';
}
