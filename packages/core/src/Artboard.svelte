<script lang="ts">
    import {
        ArtboardSchema,
        generateComponentClasses,
        joinClasses,
        type ArtboardComponentProps,
        type Nullable,
    } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let size: ArtboardComponentProps['size'] = '320x568';
    export let alignment: ArtboardComponentProps['alignment'] = 'horizontal';
    export let demo: ArtboardComponentProps['demo'] = false;
    let restClass: Nullable<string> = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = joinClasses(
        ArtboardSchema.name.toLowerCase(),
        generateComponentClasses<ArtboardComponentProps>(ArtboardSchema, { alignment, size, demo }),
        restClass ?? '',
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @use '@svelte-daisyui/styles/_artboard.scss';

    @include artboard.default();
</style>
