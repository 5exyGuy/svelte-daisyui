import type { ComponentSchema } from '@svelte-daisyui/shared';
import type { BuildContext, StyleBuilder } from '../interfaces';

export function createStyleBuilder<Props, ResponsivePropNames extends keyof Props = never>(
    componentSchema: ComponentSchema<Props>,
    build: (context: BuildContext<Props, ResponsivePropNames>) => void,
) {
    return { componentSchema, build } as StyleBuilder<Props, ResponsivePropNames>;
}
