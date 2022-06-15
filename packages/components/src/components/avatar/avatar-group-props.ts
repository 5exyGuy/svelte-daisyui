import type { CSSUnit } from '@svelte-daisyui/shared';

export interface AvatarGroupProps extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
    /**
     * @default '-1.5rem'
     */
    space?: CSSUnit;
}
