<script lang="ts">
    import {
        BrandColor,
        FunctionalColor,
        Position,
        type BrandColorKey,
        type FunctionalColorKey,
        type PositionKey,
    } from '$enums';
    import type { Nullable } from '@eztrip/types';

    // Props
    export let forceOpen: Nullable<boolean> = null;
    export let position: PositionKey = 'Top';
    export let type: Nullable<BrandColorKey | FunctionalColorKey> = null;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('tooltip');
    if (forceOpen) classes.push('tooltip-open');
    classes.push(Position[position]);
    if (type) {
        const colors = { ...BrandColor, ...FunctionalColor };
        classes.push(`tooltip-${colors[type]}`);
    }

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass}>
    <div class="tooltip-content">
        <slot name="content" />
    </div>
    <slot />
</div>

<style lang="less">
    @import 'Tooltip.less';
</style>
