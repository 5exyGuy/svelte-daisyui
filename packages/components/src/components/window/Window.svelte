<script lang="ts">
    import { generateDefaultClasses, joinClasses } from '../../utilities';
    import type { WindowClassProps, WindowsProps } from './windows-props.interface';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     *
     */
    export let bordered: WindowsProps['bordered'] = false;

    /**
     *
     */
    let restClass: WindowsProps['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-window';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<WindowClassProps>(PREFIX, { bordered: 'bordered' }, { bordered }),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Window.scss';
</style>
