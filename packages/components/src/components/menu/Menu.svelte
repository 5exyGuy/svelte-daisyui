<script lang="ts">
    import type { AlignmentKey, BrandColorKey, FunctionalColorKey } from '$enums';

    import type { Nullable } from '@eztrip/types';

    // Props
    export let background: Nullable<BrandColorKey | FunctionalColorKey> = null;
    export let alignment: AlignmentKey = 'Vertical';
    export let compact: boolean = false;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('menu');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<ul class={finalClass}>
    <slot />
</ul>
