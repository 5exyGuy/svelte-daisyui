<script lang="ts">
    import { BrandColor, FunctionalColor, type BrandColorKey, type FunctionalColorKey } from '$enums';
    import type { Nullable } from '@eztrip/types';

    // Props
    export let type: Nullable<BrandColorKey | FunctionalColorKey> = null;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('step');
    if (type) {
        const colors = { ...BrandColor, ...FunctionalColor };
        classes.push(`step-${colors[type]}`);
    }

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass}>
    <slot />
</div>
