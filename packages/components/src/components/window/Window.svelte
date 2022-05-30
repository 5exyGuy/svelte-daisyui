<script>
    import { classes } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @slot {{ [key: string]: any }}
     * @restProps {div}
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes({ prefix: 'window', restClass });
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss">
    @import 'Window.scss';
</style>
