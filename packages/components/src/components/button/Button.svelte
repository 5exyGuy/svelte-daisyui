<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { BrandColor, FunctionalColor, Size } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import { ButtonShape } from './button-shape.enum';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLButtonElement>, 'size' | 'loading'> {
        color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'neutral' | 'ghost' | 'link';
        size?: StringKeyOf<typeof Size>;
        shape?: StringKeyOf<typeof ButtonShape>;
        active?: boolean;
        block?: boolean;
        outline?: boolean;
        loading?: boolean;
        disabled?: boolean;
        animate?: boolean;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'color' | 'size' | 'shape' | 'block'> {}
    interface $$ClassProps
        extends Pick<$$Props, 'color' | 'size' | 'shape' | 'active' | 'block' | 'outline' | 'loading' | 'animate'> {}

    interface $$Events {
        click: MouseEvent;
        focus: FocusEvent;
        blur: FocusEvent;
        mouseover: MouseEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
    }

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let color: $$Props['color'] = 'neutral';
    export let size: $$Props['size'] = 'md';
    export let shape: $$Props['shape'] = undefined;
    export let active: $$Props['active'] = false;
    export let block: $$Props['block'] = false;
    export let outline: $$Props['outline'] = false;
    export let loading: $$Props['loading'] = false;
    export let disabled: $$Props['disabled'] = false;
    export let animate: $$Props['animate'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-btn';
    const COLORS = { ...BrandColor, ...FunctionalColor, ...{ neutral: 'neutral', ghost: 'ghost', link: 'link' } };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            {
                active: 'active',
                animate: 'no-animation',
                block: 'block',
                outline: 'outline',
                loading: 'loading',
                color: COLORS,
                shape: ButtonShape,
                size: Size,
            },
            { active, animate, block, outline, loading, color, shape, size },
        ),
        generateResponsiveClasses<$$ResponsiveProps>(
            PREFIX,
            { block: 'block', color: COLORS, shape: ButtonShape, size: Size },
            screen,
            { block: true, color: true, shape: true, size: true },
        ),
        [restClass],
    );
</script>

<button
    class={classNames}
    {disabled}
    {...$$restProps}
    on:click
    on:focus
    on:blur
    on:mouseover
    on:mouseenter
    on:mouseleave
>
    <slot />
</button>

<style lang="scss" global>
    @import 'Button.scss';
</style>
