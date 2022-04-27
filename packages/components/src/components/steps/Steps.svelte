<script lang="ts">
    import { Alignment, type AlignmentKey } from '$enums/alignment.enum';

    // Props
    export let alignment: AlignmentKey = 'Horizontal';
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('steps');
    classes.push(`steps-${Alignment[alignment]}`);

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass}>
    <slot />
</div>

<style global lang="less">
    @import 'Steps.less';
</style>
