import type { BreakpointName } from '../enums';
import type { ResponsiveProperty, StringKeyOf } from '.';

export type ComponentProps<
    ResponsiveProps extends {} = {},
    BreakpointNames extends string = StringKeyOf<typeof BreakpointName>,
> = {
    [K in keyof ResponsiveProps]: ResponsiveProps[K] | ResponsiveProperty<ResponsiveProps[K], BreakpointNames>;
} & { [key: string]: unknown };
