import type { ComponentSchema } from '@svelte-daisyui/shared';

export function createStyleBuilder<Props, ResponsivePropNames>(
    componentSchema: ComponentSchema<Props>,
    build: (context: BuildContext<Props, ResponsivePropNames>) => void,
) {
    return { build };
}
