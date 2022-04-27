<script lang="ts">
    import {
        HorizontalAlignment,
        VerticalAlignment,
        type HorizontalAlignmentKey,
        type VerticalAlignmentKey,
    } from '$enums';

    // Props
    export let horizontalAlign: HorizontalAlignmentKey = 'End';
    export let verticalAlign: VerticalAlignmentKey = 'Top';
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('indicator-item');
    classes.push(`indicator-${HorizontalAlignment[horizontalAlign]}`);
    classes.push(`indicator-${VerticalAlignment[verticalAlign]}`);

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<span class={finalClass}>
    <slot />
</span>

<style global lang="less">
    @import 'IndicatorItem.less';
</style>
