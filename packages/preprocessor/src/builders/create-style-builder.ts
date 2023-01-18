import type { PreprocessorOptions, StyleBuilder } from '../interfaces';
import { createAlertStyleBuilder, createArtboardStyleBuilder } from './components';

export function createStyleBuilder(options: PreprocessorOptions, componentName: string) {
    let styleBuilder: StyleBuilder;

    switch (componentName) {
        case 'Alert':
            styleBuilder = createAlertStyleBuilder(options);
            break;
        case 'Artboard':
            styleBuilder = createArtboardStyleBuilder(options);
            break;
        default:
            throw new Error(`No style builder found for component ${componentName}`);
    }

    return styleBuilder;
}
