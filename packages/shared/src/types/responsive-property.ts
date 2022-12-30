import type { BreakpointName } from '../enums';
import type { StringKeyOf } from './string-key-of';

export type ResponsiveProperty<PropType, BreakpointNames extends string = StringKeyOf<typeof BreakpointName>> = {
    [K in BreakpointNames]?: PropType;
} & { default?: PropType };
