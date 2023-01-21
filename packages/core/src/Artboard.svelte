<script lang="ts">
    import {
        ArtboardSchema,
        generateComponentClasses,
        joinClasses,
        type ArtboardClassPropNames,
        type ArtboardComponentProps,
        type ArtboardProps,
        type ArtboardResponsivePropNames,
        type Undefinedable,
    } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let size: ArtboardComponentProps['size'] = '320x568';
    export let alignment: ArtboardComponentProps['alignment'] = 'horizontal';
    export let demo: ArtboardComponentProps['demo'] = false;
    let restClass: Undefinedable<string> = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = joinClasses(
        ArtboardSchema.name.toLowerCase(),
        generateComponentClasses<ArtboardProps, ArtboardClassPropNames, ArtboardResponsivePropNames>(ArtboardSchema, {
            alignment,
            demo,
            size,
        }),
        restClass,
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @use '@svelte-daisyui/styles/_artboard.scss';

    @include artboard.default();
</style>
