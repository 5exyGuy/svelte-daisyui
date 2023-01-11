import type { ResponsiveProperty } from '.';

export type ComponentProps<Props, ResponsivePropNames extends keyof Props> = Omit<Props, ResponsivePropNames> & {
    [K in ResponsivePropNames]: ResponsiveProperty<Props[K]> | Props[K];
};

// export type ComponentProps<
//     ResponsiveProps extends {} = {},
//     BreakpointNames extends string = StringKeyOf<typeof BreakpointName>,
// > = {
//     [K in keyof ResponsiveProps]: ResponsiveProps[K] | ResponsiveProperty<ResponsiveProps[K], BreakpointNames>;
// };
