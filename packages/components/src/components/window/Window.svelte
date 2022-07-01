<script lang="ts">
    import type { WindowsProps } from './windows-props.interface';

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

    $: classNames = '';
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Window.scss';
</style>
