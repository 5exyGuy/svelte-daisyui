<script>
    import { classes } from '@svelte-daisyui/shared';

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

    const classNames = classes({ prefix: 'table-body', restClass });
</script>

<tbody class={classNames}>
    <slot />
</tbody>
