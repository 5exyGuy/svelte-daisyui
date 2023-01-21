<script lang="ts">
    import {
        AvatarSchema,
        generateComponentClasses,
        joinClasses,
        type AvatarClassPropNames,
        type AvatarComponentProps,
        type AvatarProps,
        type AvatarResponsivePropNames,
        type Undefinedable,
    } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let status: Undefinedable<AvatarComponentProps['status']> = undefined;
    // export let size: AvatarComponentProps['size'] = '6rem';
    export let placeholder: AvatarComponentProps['placeholder'] = false;
    let restClass: Undefinedable<string> = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes
    // -----------------------------------------------------------

    $: classNames = joinClasses(
        AvatarSchema.name.toLowerCase(),
        generateComponentClasses<AvatarProps, AvatarClassPropNames, AvatarResponsivePropNames>(AvatarSchema, {
            placeholder,
            status,
        }),
        restClass,
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
