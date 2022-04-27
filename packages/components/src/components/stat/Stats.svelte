<script lang="ts">
    import {
        Alignment,
        BrandColor,
        FunctionalColor,
        type AlignmentKey,
        type BrandColorKey,
        type FunctionalColorKey,
    } from '$enums';
    import type { Nullable } from '@eztrip/types';

    // Props
    export let alignment: AlignmentKey = 'Horizontal';
    export let background: Nullable<BrandColorKey | FunctionalColorKey> = null;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('stats');
    if (alignment) classes.push(`stats-${Alignment[alignment]}`);
    if (background) {
        const color = { ...BrandColor, ...FunctionalColor };
        classes.push(`stats-${color[background]}`);
    }

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass}>
    <slot />
</div>

<style global lang="less">
    @import 'Stats.less';
</style>
