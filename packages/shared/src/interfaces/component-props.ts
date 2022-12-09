import type { Breakpoint } from '../types';

export interface ComponentsProps<ResponsiveProps = {}> {
    breakpoint?: Breakpoint<ResponsiveProps>;
}
