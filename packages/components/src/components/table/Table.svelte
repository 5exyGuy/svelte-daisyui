<script>
    import { classes, TablePadding } from '@svelte-daisyui/shared';
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
     * @typedef {{ insertNumbering?: boolean, header?: Array<string>, rows?: Array<Array<string>>, footer?: Array<string> }} Data
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
     * @type {Data}
     */
    export let data = undefined;

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

    let currentNumber = 1;

    const getNewNumber = () => {
        return currentNumber++;
    };
</script>

<table class={classNames}>
    {#if $$slots.default}
        <slot />
    {:else if data}
        {#if data.header && Array.isArray(data.header)}
            <TableHeader>
                <TableRow>
                    {#if data.insertNumbering}
                        <TableHeaderCell />
                    {/if}
                    {#each data.header as value}
                        <TableHeaderCell>{value}</TableHeaderCell>
                    {/each}
                </TableRow>
            </TableHeader>
        {/if}
        {#if data.rows && Array.isArray(data.rows)}
            <TableBody>
                {#each data.rows as row}
                    <TableRow>
                        {#if data.insertNumbering}
                            <TableHeaderCell>{getNewNumber()}</TableHeaderCell>
                        {/if}
                        {#each row as value}
                            <TableCell>{value}</TableCell>
                        {/each}
                    </TableRow>
                {/each}
            </TableBody>
        {/if}
        {#if data.footer && Array.isArray(data.footer)}
            <TableFooter>
                <TableRow>
                    {#each data.footer as value}
                        <TableHeaderCell>{value}</TableHeaderCell>
                    {/each}
                </TableRow>
            </TableFooter>
        {/if}
    {/if}
</table>

<style global lang="scss">
    @import 'Table.scss';
</style>
