<script lang="ts" context="module">
</script>

<script lang="ts">
    import Button from '../button/Button.svelte';
    import Icon from '../../icon/Icon.svelte';
    import MdClose from 'svelte-icons/md/MdClose.svelte';
    import { afterUpdate, onMount, SvelteComponent } from 'svelte';
    // import { ModalClosePosition } from './modal-close-position.enum';
    import { ModalActionsPosition } from './modal-actions-position.enum';
    import Portal from '../portal/Portal.svelte';

    // Props
    export let closeOnBlur: boolean = false; // Close modal on blur
    export let showHeader: boolean = true; // Show header
    export let showCustomTitle: boolean = false; // Show custom header title
    export let title: string = undefined; // Show default header title
    export let showCloseButton: boolean = true; // Show close button on header
    // export let closePosition: keyof typeof ModalClosePosition = 'Right';
    export let closeIcon: typeof SvelteComponent = MdClose;
    export let showActions: boolean = false; // Show actions
    export let actionsPosition: keyof typeof ModalActionsPosition = 'Right';
    export let visible: boolean = false;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('modal-box');

    $: classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    // Variables
    let modalRef: HTMLElement;

    // Functions
    const focusBox = () => {
        if (visible) modalRef.focus();
    };

    const boxBlur = () => {
        if (closeOnBlur && visible) toggleVisibility();
    };

    const toggleVisibility = () => {
        visible = !visible;
        focusBox();
    };

    onMount(() => focusBox());
    afterUpdate(() => focusBox());
</script>

<Portal>
    <div class={`modal${visible ? ' modal-open' : ''}`} data-visible={visible}>
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
        {#if showActions}
            <div class={`modal-actions ${ModalActionsPosition[actionsPosition]}`}>
                <slot name="actions" />
            </div>
        {/if}
    </div>
</Portal>

<style lang="scss" global>
    @import 'Modal.scss';
</style>
