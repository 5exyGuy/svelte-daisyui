<script lang="ts">
    import {
        BadgeSchema,
        generateComponentClasses,
        joinClasses,
        type BadgeClassPropNames,
        type BadgeComponentProps,
        type BadgeProps,
        type BadgeResponsivePropNames,
        type Undefinedable,
    } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let color: BadgeComponentProps['color'] = 'neutral';
    export let size: BadgeComponentProps['size'] = 'md';
    export let outline: BadgeComponentProps['outline'] = false;
    let restClass: Undefinedable<string> = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = joinClasses(
        BadgeSchema.name.toLowerCase(),
        generateComponentClasses<BadgeProps, BadgeClassPropNames, BadgeResponsivePropNames>(BadgeSchema, {
            color,
            outline,
            size,
        }),
        restClass,
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @use '@svelte-daisyui/styles/_badge.scss';

    @include badge.default();
</style>
