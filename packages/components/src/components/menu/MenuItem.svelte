<script lang="ts">
    import type { Nullable } from '@eztrip/types';

    export let href: Nullable<string> = null;
    export let active: boolean = false;
    export let disabled: boolean = false;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('menu-item');
    // if (active) classes.push('menu-');

    $: classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<li class={finalClass}>
    <a {href}>
        <slot />
    </a>
</li>
