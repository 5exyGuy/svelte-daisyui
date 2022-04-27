<script lang="ts">
    import { Size, type SizeKey } from '$enums';
    import type { Nullable } from '@eztrip/types';

    // Props
    export let size: Nullable<SizeKey> = null;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('kbd');
    if (size) classes.push(`kbd-${Size[size]}`);

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<kbd class={finalClass}>
    <slot />
</kbd>

<style global lang="less">
    @import 'Kbd.less';
</style>
