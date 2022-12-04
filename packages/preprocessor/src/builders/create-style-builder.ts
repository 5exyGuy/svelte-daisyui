import type { PreprocessorOptions } from '../interfaces/preprocess-options';
import { createAlertStyleBuilder } from './alert.style-builder';

export function createStyleBuilder(options: PreprocessorOptions, componentName: string) {
    switch (componentName) {
        case 'Alert':
            return createAlertStyleBuilder(options);
    }
}
