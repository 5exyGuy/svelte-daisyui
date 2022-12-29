import type { BreakpointName } from '../enums';
import type { ResponsiveProperty } from './responsive-property';
import type { StringKeyOf } from './string-key-of';

export type ResponsiveProperties<Props, BreakpointNames extends string = StringKeyOf<typeof BreakpointName>> = {
    [K in keyof Props]: ResponsiveProperty<Props[K], BreakpointNames>;
};
