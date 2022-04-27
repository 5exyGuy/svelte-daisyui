<script lang="ts">
    import { BrandColor, BrandColorKey } from '../utils/brand-color.enum';
    import { FunctionalColor, FunctionalColorKey } from '../utils/functional-color.enum';

    import { Maybe } from '../utils/maybe.type';
    import { Size, SizeKey } from '../utils/size.enum';

    // Props
    export let color: Maybe<BrandColorKey | FunctionalColorKey | 'Ghost'> = null;
    export let size: Maybe<SizeKey> = null;
    export let bordered: boolean = false;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('select');
    if (color) classes.push(`select-${{ ...BrandColor, ...FunctionalColor, ...{ Ghost: 'ghost' } }[color]}`);
    if (size) classes.push(`select-${Size[size]}`);
    if (bordered) classes.push('select-bordered');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<select class={finalClass}>
    <slot />
</select>

<style global lang="less">
    @import 'Select.less';
</style>
