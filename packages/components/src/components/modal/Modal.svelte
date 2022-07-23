<script lang="ts" context="module">
</script>

<script lang="ts">
    import { joinClasses } from '../../utilities';

    import Portal from '../portal/Portal.svelte';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLUListElement> {
        title?: string;
        centered?: boolean;
        overflow?: boolean;
        opened?: boolean;
        withCloseButton?: boolean;
        closeOnBlur?: boolean;
        closeOnEscape?: boolean;
        // screen?: Screen<$$ResponsiveProps>;
    }
    // interface $$ResponsiveProps extends Pick<$$Props, > {}
    // interface $$ClassProps extends Pick<$$Props, > {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    // export let closeOnBlur: boolean = false; // Close modal on blur
    // export let closeOnEscape = true;
    // export let title: string = undefined; // Show default header title
    // export let showCloseButton: boolean = true; // Show close button on header
    // export let closeIcon: typeof SvelteComponent = MdClose;
    // export let visible: boolean = false;
    let restClass: string = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-modal';

    $: classNames = joinClasses([PREFIX], [restClass]);

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    // let modalRef: HTMLElement;

    // const focusBox = () => {
    //     if (visible) modalRef.focus();
    // };

    // const boxBlur = () => {
    //     if (closeOnBlur && visible) toggleVisibility();
    // };

    // const toggleVisibility = () => {
    //     visible = !visible;
    //     focusBox();
    // };

    // onMount(() => focusBox());
    // afterUpdate(() => focusBox());
</script>

<Portal>
    <div data-visible={visible} {...$$restProps}>
        <div tabindex="0" class={classes.join(' ')} on:blur={boxBlur} bind:this={modalRef}>
            {#if showHeader}
                <div class="modal-header">
                    {#if title || showCustomTitle}
                        <div class="modal-header-title">
                            {#if title && !showCustomTitle}
                                <h2 class="text-xl font-semibold">{title}</h2>
                            {:else if showCustomTitle}
                                <slot name="header-title" />
                            {/if}
                        </div>
                    {/if}
                    {#if showCloseButton}
                        <div class="modal-header-close">
                            <Button type="Ghost" shape="Square" onClick={toggleVisibility}>
                                <Icon size={2}>
                                    <svelte:component this={closeIcon} />
                                </Icon>
                            </Button>
                        </div>
                    {/if}
                </div>
            {/if}
            <slot />
        </div>
    </div>
</Portal>

<style lang="scss" global>
    @import 'Modal.scss';
</style>
