<script lang="ts">
    import type { Nullable } from '@eztrip/types';
    import { MaskHalfType, type MaskHalfTypeKey } from './mask-half-type.enum';
    import { MaskType, type MaskTypeKey } from './mask-type.enum';

    // Props
    export let half: Nullable<MaskHalfTypeKey> = null;
    export let type: MaskTypeKey = 'Circle';
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('mask');
    classes.push(`mask-${MaskType[type]}`);
    if (half) classes.push(`mask-${MaskHalfType[half]}`);

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass}>
    <slot />
</div>

<style lang="less">
    @import 'Mask.less';
</style>
