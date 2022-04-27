<script lang="ts">
    import { Maybe } from '../utils/maybe.type';
    import { Size, SizeKey } from '../utils/size.enum';

    // Props
    export let size: Maybe<SizeKey> = null;
    export let checked: boolean = false;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('radio');
    if (size) classes.push(`input-${Size[size]}`);

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<input type="radio" class={finalClass} {name} {checked} />

<style global lang="less">
    @import 'Radio.less';
</style>
