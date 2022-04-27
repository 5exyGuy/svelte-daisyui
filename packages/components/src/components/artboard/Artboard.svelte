<script lang="ts">
    import { ArtboardSize, ArtboardSizeKey } from './artboard-size.enum';

    // Props
    export let size: ArtboardSizeKey = 'Phone1';
    export let horizontal: boolean = false;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('alert');
    classes.push(`artboard-${ArtboardSize[size]}`);
    if (horizontal) classes.push('artboard-horizontal');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass}>
    <slot />
</div>

<style global lang="less">
    @import 'Artboard.less';
</style>
