<script>
    import { classes } from '@svelte-daisyui/shared';
    import { StackDirection } from './stack-direction.enum';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     *  @type {'up' | 'down' | 'left' | 'right' | 'upleft' | 'upright' | 'downleft' | 'downright'}
     */
    export let direction = 'down';

    let restClass;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes({
        prefix: 'stack',
        classProps: { direction: { value: StackDirection } },
        props: { direction },
        restClass,
    });
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss">
    @import 'Stack.scss';
</style>
