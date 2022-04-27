<script lang="ts">
    import { BrandColor, BrandColorKey } from '../utils/brand-color.enum';
    import { FunctionalColor, FunctionalColorKey } from '../utils/functional-color.enum';
    import { Maybe } from '../utils/maybe.type';
    import { Size, SizeKey } from '../utils/size.enum';

    // Props
    export let type: Maybe<string> = null;
    export let placeholder: Maybe<string> = null;
    export let size: Maybe<SizeKey> = null;
    export let color: Maybe<BrandColorKey | FunctionalColorKey> = null;
    export let disabled: boolean = false;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('input');
    if (color) classes.push(`input-${{ ...BrandColor, ...FunctionalColor }[color]}`);
    if (size) classes.push(`input-${Size[size]}`);

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<input class={finalClass} {type} {placeholder} {disabled} />

<style global lang="less">
    @import 'TextInput.less';
</style>
