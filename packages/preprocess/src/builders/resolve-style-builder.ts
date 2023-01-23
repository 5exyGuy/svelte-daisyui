import { AlertStyleBuilder, ArtboardStyleBuilder } from './components';
import { AvatarStyleBuilder } from './components/avatar-style-builder';
import { BadgeStyleBuilder } from './components/badge-style-builder';

export function resolveStyleBuilder(componentName: string) {
    switch (componentName) {
        case 'Alert':
            return AlertStyleBuilder;
        case 'Artboard':
            return ArtboardStyleBuilder;
        case 'Avatar':
            return AvatarStyleBuilder;
        case 'Badge':
            return BadgeStyleBuilder;
    }

    throw new Error(`Style builder for component "${componentName}" not found`);
}
