import { AlertStyleBuilder, ArtboardStyleBuilder } from './components';

export function resolveStyleBuilder(componentName: string) {
    switch (componentName) {
        case 'Alert':
            return AlertStyleBuilder;
        case 'Artboard':
            return ArtboardStyleBuilder;
    }

    throw new Error(`Style builder for component "${componentName}" not found`);
}
