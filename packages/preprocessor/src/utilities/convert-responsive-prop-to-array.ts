import type { ResponsiveProperty } from '@svelte-daisyui/shared';

export function convertResponsivePropToArray<PropType, Prop extends ResponsiveProperty<PropType>>(prop?: Prop) {
    return Object.entries(prop ?? {}) as Array<[keyof Prop, Set<PropType>]>;
}
