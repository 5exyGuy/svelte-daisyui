import type { ComponentSchema } from '@svelte-daisyui/shared';
import type { BuildContext } from './build-context';

export interface StyleBuilder<Props = unknown, ResponsivePropNames extends keyof Props = never> {
    componentSchema: ComponentSchema<Props>;
    build: (context: BuildContext<Props, ResponsivePropNames>) => void;
}
