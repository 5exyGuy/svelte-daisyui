<script lang="ts">
    import type { CSSUnit } from '@svelte-daisyui/shared';
    import { getContext, onMount } from 'svelte';
    import type { StringKeyOf } from 'type-fest';
    import type { BrandColor, FunctionalColor } from '../../enums';
    import type { Screen } from '../../types';
    import { createResponsiveProperties, generateDefaultClasses, joinClasses } from '../../utilities/component.utility';
    import type { AvatarGroupContext } from './avatar-group-context.interface';
    import { AvatarStatus } from './avatar-status.enum';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLDivElement>, 'size' | 'placeholder'> {
        status?: StringKeyOf<typeof AvatarStatus>;
        size?: CSSUnit;
        placeholder?: boolean;
        ring?: {
            color: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;
            offsetColor?: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;
            offsetSize?: CSSUnit;
        };
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'size'> {}
    interface $$ClassProps extends Pick<$$Props, 'status' | 'placeholder'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let status: $$Props['status'] = undefined;
    export let size: $$Props['size'] = '6rem';
    export let placeholder: $$Props['placeholder'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes
    // -----------------------------------------------------------

    const PREFIX = 'dui-avatar';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            { status: AvatarStatus, placeholder: 'placeholder' },
            { status, placeholder },
        ),
        [restClass],
    );

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    const { update, size: _size } = createResponsiveProperties<$$ResponsiveProps>({ size }, screen, { size: true });
    $: size && screen && update({ size }, screen);

    let ref: HTMLDivElement;

    const avatarGroup = getContext<AvatarGroupContext>('AvatarGroup');

    onMount(() => avatarGroup && avatarGroup.add(ref));
</script>

<div class={classNames} style:width={$_size} style:height={$_size} bind:this={ref} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Avatar.scss';
</style>
