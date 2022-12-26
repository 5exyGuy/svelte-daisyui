import type { PreprocessorOptions } from '../interfaces';
import { createAlertStyleBuilder } from './alert.style-builder';

export function createStyleBuilder(options: PreprocessorOptions, componentName: string) {
    switch (componentName) {
        case 'Alert':
            return createAlertStyleBuilder(options);
    }

    throw new Error(`No style builder found for component ${componentName}`);
}
