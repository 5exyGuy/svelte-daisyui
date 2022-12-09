import type { BreakpointName } from '../enums';
import type { StringKeyOf } from './string-key-of';

export type BreakpointNames = StringKeyOf<typeof BreakpointName>;
