<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { CheckboxType } from './checkbox-type.enum';

    // Props
    export let autofocus: boolean = false;
    export let checked: boolean = false;
    export let defaultChecked: boolean = false;
    export let disabled: boolean = false;
    export let indeterminate: boolean = false;
    export let onChange: ((value: boolean) => void) | null = null;
    export let type: CheckboxType | null = null;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('checkbox');
    if (type) classes.push(type);

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    // Events and callbacks
    const dispatch = createEventDispatcher();

    const onCheckboxChange = (event: Event) => {
        if (disabled) return;
        if (onChange) onChange((event.target as HTMLInputElement).checked);
        dispatch('change', event);
    };
</script>

<input
    class={classes.join(' ')}
    type="checkbox"
    {checked}
    on:change={onCheckboxChange}
    {disabled}
    {autofocus}
    {indeterminate}
/>

<style lang="less">
    @import 'Checkbox.less';
</style>
