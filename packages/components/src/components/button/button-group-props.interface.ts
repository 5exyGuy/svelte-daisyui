import type { StringKeyOf } from 'type-fest';
import type { Alignment } from '../../enums';

export interface ButtonGroupProps extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
    /**
     * @default 'horizontal'
     */
    alignment?: StringKeyOf<typeof Alignment>;
}
