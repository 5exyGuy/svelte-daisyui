<script lang="ts">
    import {
        BaseColor,
        BrandColor,
        FunctionalColor,
        type BaseColorKey,
        type BrandColorKey,
        type FunctionalColorKey,
    } from '$enums';

    // Props
    export let background: BrandColorKey | FunctionalColorKey | BaseColorKey = 'Base-100';
    export let rounded: boolean = false;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('navbar');
    classes.push(`navbar-${{ ...BrandColor, ...FunctionalColor, ...BaseColor }[background]}`);
    classes.push('navbar-rounded');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass}>
    {#if $$slots.start}
        <div class="navbar-start">
            <slot name="start" />
        </div>
    {/if}
    {#if $$slots.center}
        <div class="navbar-center">
            <slot name="center" />
        </div>
    {/if}
    {#if $$slots.end}
        <div class="navbar-end">
            <slot name="end" />
        </div>
    {/if}
</div>

<style global lang="less">
    @import 'Navbar.less';
</style>
