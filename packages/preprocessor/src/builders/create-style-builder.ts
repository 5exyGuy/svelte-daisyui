import type { PreprocessorOptions, StyleBuilder } from '../interfaces';
import { createAlertStyleBuilder } from './alert/create-alert-style-builder';

export function createStyleBuilder(options: PreprocessorOptions, componentName: string) {
    let styleBuilder: StyleBuilder;

    switch (componentName) {
        case 'Alert':
            styleBuilder = createAlertStyleBuilder(options);
            break;
        default:
            throw new Error(`No style builder found for component ${componentName}`);
    }

    return styleBuilder;
}
