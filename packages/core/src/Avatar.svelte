<script lang="ts">
    import {
        generateComponentClasses,
        joinClasses,
        type AvatarComponentProps,
        type Nullable,
    } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let status: Nullable<AvatarComponentProps['status']> = undefined;
    export let size: AvatarComponentProps['size'] = '6rem';
    export let placeholder: AvatarComponentProps['placeholder'] = false;
    let restClass: Nullable<string> = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes
    // -----------------------------------------------------------

    $: classNames = joinClasses(
        AvatarSchema.name.toLowerCase(),
        generateComponentClasses<AvatarComponentProps>(AvatarSchema, { status, size, placeholder }),
        restClass ?? '',
    );

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    // let ref: HTMLDivElement;

    // const avatarGroup = getContext<AvatarGroupContext>('AvatarGroup');

    // onMount(() => avatarGroup && avatarGroup.add(ref));
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @use '@svelte-daisyui/styles/_avatar.scss';

    @include avatar.default();
</style>
