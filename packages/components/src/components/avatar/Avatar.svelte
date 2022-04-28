<script>
    import { Size } from '../../enums';
    import { classes } from '../../utils';
    import { AvatarStatus } from './avatar-status.enum';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {string | undefined}
     */
    export let src;

    /**
     * @type {string}
     */
    export let alt;

    /**
     * @type {'tiny' | 'small' | 'medium' | 'large' | number | string | undefined}
     */
    export let size = 'medium';

    /**
     * @type {'online' | 'offline' | undefined}
     */
    export let status;

    let className;
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    const classNames = classes(
        'avatar',
        {
            size: {
                condition: size && typeof size !== 'number' && Size[size],
                key: size,
                value: Size,
            },
            status: {
                condition: !!status,
                key: status,
                value: AvatarStatus,
            },
        },
        className,
    );

    const style =
        typeof size === 'number' ? `width:${size}rem;height:${size}rem;` : null;
</script>

<div class={classNames} {style}>
    {#if src}
        <img {alt} {src} />
    {:else}
        <slot />
    {/if}
</div>

<style lang="scss">
    @import 'AvatarStyled.scss';
    @import 'AvatarUnstyled.scss';
</style>
