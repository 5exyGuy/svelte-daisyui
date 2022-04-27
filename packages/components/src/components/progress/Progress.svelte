<script lang="ts">
    import {
        BrandColor,
        FunctionalColor,
        Size,
        type BrandColorKey,
        type FunctionalColorKey,
        type SizeKey,
    } from '$enums';

    import type { Nullable } from '@eztrip/types';

    // Props
    export let type: Nullable<BrandColorKey | FunctionalColorKey> = null;
    export let size: Nullable<SizeKey> = null;
    export let value: number = 0;
    export let max: number = 100;
    export let min: number = 0;
    export let showPercentage: boolean = false;
    let className: string = '';
    export { className as class };

    //
    $: progressbarWidth = ((value - min) * 100) / (max - min);

    // Classes
    const classes: string[] = [];

    classes.push('progress');
    if (type) {
        const colors = { ...BrandColor, ...FunctionalColor };
        classes.push(`progress-${colors[type]}`);
    }
    if (size) classes.push(`progress-${Size[size]}`);

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass}>
    <div class="progress-bar" role="progressbar" style="width:{progressbarWidth}%;">
        {#if $$slots.default}
            <slot />
        {:else if showPercentage}
            {progressbarWidth}%
        {/if}
    </div>
</div>

<style global lang="less">
    @import 'Progress.less';
</style>
