import { parseComponents } from './component-parser';
import type { AlertProps } from '@svelte-daisyui/shared';

const COMPONENT_NAME = 'Alert';

export function buildAlertStyles(code: string) {
    const componentAttributes = parseComponents<AlertProps>(COMPONENT_NAME, code);

    const colors = new Set<Required<AlertProps>['color']>();
    // const screenSizes = new Set<Required<AlertProps>['screenSize']>();

    // const test = {
    //     sm: { colors: [] },
    //     md: { colors: [] },
    //     lg: { colors: [] },
    //     xl: { colors: [] },
    //     '2xl': { colors: [] },
    // };

    componentAttributes.forEach((attributes) => {
        if (attributes.color) colors.add(attributes.color);
    });
}
