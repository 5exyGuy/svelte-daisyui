<script>
    import {
        classes,
        TablePadding,
        HorizontalAlignment,
    } from '@svelte-daisyui/shared';
    import TableBody from './TableBody.svelte';
    import TableCell from './TableCell.svelte';
    import TableFooter from './TableFooter.svelte';
    import TableHeader from './TableHeader.svelte';
    import TableHeaderCell from './TableHeaderCell.svelte';
    import TableRow from './TableRow.svelte';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @typedef {'normal' | 'compact'} Padding
     * @typedef {{ padding?: Padding, zebra?: boolean }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     *
     * @typedef {'start' | 'center' | 'end'} HorizontalAlignment
     * @typedef {{ text?: string, value?: string, alignment?: HorizontalAlignment}} Header
     * @typedef {{ text?: string, value?: string, alignment?: HorizontalAlignment}} Footer
     * @typedef {Record<string, import('type-fest').Primitive>} Item
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Properties['padding']}
     */
    export let padding = undefined;

    /**
     * @type {Properties['zebra']}
     */
    export let zebra = false;

    /**
     * @type {Array<Header>}
     */
    export let headers = undefined;

    /**
     * @type {Array<Footer>}
     */
    export let footers = undefined;

    /**
     * @type {Array<Item>}
     */
    export let items = undefined;

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     * @type {Screen}
     */
    export let screen = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const classNames = classes({
        prefix: 'table',
        classProps: {
            padding: { value: TablePadding },
            zebra: { value: 'zebra' },
        },
        props: {
            padding,
            zebra,
        },
        screen,
        restClass,
    });

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------
</script>

<table class={classNames}>
    {#if $$slots.default}
        <slot />
    {:else if items}
        {#if headers && Array.isArray(headers)}
            <TableHeader>
                <TableRow>
                    {#each headers as header}
                        <TableHeaderCell>{header.text}</TableHeaderCell>
                    {/each}
                </TableRow>
            </TableHeader>
        {/if}
        <TableBody>
            {#each items as item}
                <TableRow>
                    {#each headers ?? footers ?? [] as header}
                        <TableCell alignment={header.alignment}>
                            {item[header.value]}
                        </TableCell>
                    {/each}
                </TableRow>
            {/each}
        </TableBody>
        {#if footers && Array.isArray(footers)}
            <TableFooter>
                <TableRow>
                    {#each footers as footer}
                        <TableHeaderCell>{footer.text}</TableHeaderCell>
                    {/each}
                </TableRow>
            </TableFooter>
        {/if}
    {/if}
</table>

<style global lang="scss">
    @import 'Table.scss';
</style>
