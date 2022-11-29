import type { Screen } from '../types';

export interface ComponentsProps<ResponsiveProps = {}> {
    screen?: Screen<ResponsiveProps>;
}
