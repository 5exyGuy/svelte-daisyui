import type { ResponsiveProperty } from '@svelte-daisyui/shared';

export type UniqueComponentProps<Props, ResponsivePropertyNames extends keyof Props = never> = {
    [PropName in keyof Props]?: PropName extends ResponsivePropertyNames
        ? ResponsiveProperty<Set<Props[PropName]>>
        : Set<Props[PropName]>;
};
