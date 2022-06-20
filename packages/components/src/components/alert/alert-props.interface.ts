import type { Screen } from '../../types';
import type { SvelteComponent } from 'svelte';
import type { BrandColor, FunctionalColor } from '../../enums';
import type { StringKeyOf } from 'type-fest';

export interface AlertProps extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
    /**
     * Background color of component. Functional colors such as `info`, `success`, `warning` and `error` add a default icon on the left.
     * @default undefined
     */
    color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;

    /**
     * Show an icon defaulted to the functional colors, e.g. `info`, `success`, `warning` and `error`.
     * @default true
     */
    showIcon?: boolean;

    /**
     * The icon that will appear before the content.
     * @default undefined
     */
    icon?: typeof SvelteComponent;

    /**
     * The message that will be visible inside the Alert container.
     * @default undefined
     */
    message?: string;

    /**
     * A space-separated list of the classes of the element.
     * @default undefined
     */
    class?: string;

    /**
     * Responsive properties based on minimum screen widths.
     * @default undefined
     */
    screen?: Screen<AlertResponsiveProps>;
}

export interface AlertResponsiveProps extends Pick<AlertProps, 'color'> {}

export interface AlertClassProps extends Pick<AlertProps, 'color'> {}
