<script lang="ts">
    import type { CSSUnit } from '@svelte-daisyui/shared';
    import { setContext } from 'svelte';
    import type { Screen } from '../../types';
    import { createResponsiveProperties, joinClasses } from '../../utilities';
    import type { AvatarGroupContext } from './avatar-group-context.interface';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        space?: CSSUnit;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'space'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let space: $$Props['space'] = '-1.5rem';
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-avatar-group';

    $: classNames = joinClasses([PREFIX], [restClass]);

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    const { update, space: _space } = createResponsiveProperties<$$ResponsiveProps>({ space }, screen, {
        space: true,
    });

    $: space && screen && update({ space }, screen);

    const avatars = [] as Array<HTMLDivElement>;
    setContext<AvatarGroupContext>('AvatarGroup', {
        add: (ref: HTMLDivElement) => {
            avatars.push(ref);

            avatars.forEach((avatarRef, index) => {
                // avatarRef.style.zIndex = String(avatars.length - 1 - index);
                avatarRef.style.zIndex = String(index);
            });
        },
    });
</script>

<div class={classNames} style:--avatar-group-x-space={$_space} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'AvatarGroup.scss';
</style>
