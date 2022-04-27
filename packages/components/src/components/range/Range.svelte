<script lang="ts">
    import { Maybe } from '../utils/maybe.type';
    import { Size, SizeKey } from '../utils/size.enum';

    // Props
    export let min: number = 0;
    export let max: number = 100;
    export let value: number = 0;
    export let step: number = 1;
    export let size: Maybe<SizeKey> = null;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('range');
    if (size) classes.push(`range-${Size[size]}`);

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<input class={finalClass} type="range" {min} {max} {step} {value} />

<style global lang="less">
    @import 'Range.less';
</style>
