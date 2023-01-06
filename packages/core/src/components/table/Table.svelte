<script lang="ts">
    import type { Primitive, StringKeyOf } from 'type-fest';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import type { ITableHeader } from './table-header.interface';
    import { TablePadding } from './table-padding.enum';
    import TableBody from './TableBody.svelte';
    import TableCell from './TableCell.svelte';
    import TableHeader from './TableHeader.svelte';
    import TableHeaderCell from './TableHeaderCell.svelte';
    import TableRow from './TableRow.svelte';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLTableElement>, 'headers'> {
        overflowX?: boolean;
        padding?: StringKeyOf<typeof TablePadding>;
        zebra?: boolean;
        headers?: Array<ITableHeader>;
        items?: Array<Record<string, Primitive>>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'padding' | 'zebra'> {}
    interface $$ClassProps extends Pick<$$Props, 'padding' | 'zebra'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
        header: {
            header: ITableHeader;
        };
        item: {
            item: Record<string, Primitive>;
            header: ITableHeader;
        };
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let overflowX: $$Props['overflowX'] = true;
    export let padding: $$Props['padding'] = 'normal';
    export let zebra: $$Props['zebra'] = false;
    export let headers: $$Props['headers'] = undefined;
    export let items: $$Props['items'] = undefined;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-table';

    const classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { padding: TablePadding, zebra: 'zebra' }, { padding, zebra }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { padding: TablePadding, zebra: 'zebra' }, screen, {
            padding: true,
            zebra: true,
        }),
        [restClass],
    );

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    export function addRow() {}
    export function deleteRow() {}
</script>

{#if overflowX}
    <div class="dui-table-overflow-x">
        <table class={classNames} {...$$restProps}>
            {#if $$slots.default}
                <slot />
            {:else if items && Array.isArray(items)}
                {#if headers && Array.isArray(headers)}
                    <TableHeader>
                        <TableRow>
                            {#each headers as header}
                                <slot name="header" {header}>
                                    <TableHeaderCell>
                                        {header.text}
                                    </TableHeaderCell>
                                </slot>
                            {/each}
                        </TableRow>
                    </TableHeader>
                {/if}
                <TableBody>
                    {#each items as item}
                        <TableRow>
                            {#each headers ?? [] as header}
                                <slot name="item" {item} {header}>
                                    <TableCell alignment={header.alignment}>
                                        {item[header.value]}
                                    </TableCell>
                                </slot>
                            {/each}
                        </TableRow>
                    {/each}
                </TableBody>
            {/if}
        </table>
    </div>
{:else}
    <table class={classNames} {...$$restProps}>
        {#if $$slots.default}
            <slot />
        {:else if items && Array.isArray(items)}
            {#if headers && Array.isArray(headers)}
                <TableHeader>
                    <TableRow>
                        {#each headers as header}
                            <slot name="header" {header}>
                                <TableHeaderCell>
                                    {header.text}
                                </TableHeaderCell>
                            </slot>
                        {/each}
                    </TableRow>
                </TableHeader>
            {/if}
            <TableBody>
                {#each items as item}
                    <TableRow>
                        {#each headers ?? [] as header}
                            <slot name="item" {item} {header}>
                                <TableCell alignment={header.alignment}>
                                    {item[header.value]}
                                </TableCell>
                            </slot>
                        {/each}
                    </TableRow>
                {/each}
            </TableBody>
        {/if}
    </table>
{/if}

<style lang="scss" global>
    @import 'Table.scss';
</style>
