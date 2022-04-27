<script lang="ts">
    import type { Nullable } from '@eztrip/types';
    import { SwapAnim, type SwapAnimKey } from './swap-anim.enum';

    // Props
    export let anim: Nullable<SwapAnimKey> = null;
    // export let onSwap: Maybe<(state: boolean) => void> = null;
    export let state: boolean = false;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('swap');
    if (anim) classes.push(`swap-${SwapAnim[anim]}`);

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass} on:click data-state={state}>
    <slot name="swap-on" />
    <slot name="swap-off" />
</div>

<style lang="less">
    @import 'Swap.less';
</style>
