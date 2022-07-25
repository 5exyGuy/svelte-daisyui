<!-- <script lang="ts" context="module">
</script> -->
<script lang="ts">
    import { onMount } from 'svelte';
    import type { StringKeyOf } from 'type-fest';
    import Button from '../button/Button.svelte';
    import type { Screen } from '../../types';
    import { joinClasses } from '../../utilities';
    import Portal from '../portal/Portal.svelte';
    import type { ModalOverflow } from './modal-overflow.enum';
    import IoMdClose from 'svelte-icons/io/IoMdClose.svelte';
    import { Icon } from '../..';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLUListElement> {
        title?: string;
        centered?: boolean;
        overflow?: StringKeyOf<typeof ModalOverflow>;
        opened?: boolean;
        withCloseButton?: boolean;
        closeOnBlur?: boolean;
        closeOnEscape?: boolean;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'centered' | 'overflow'> {}
    interface $$ClassProps extends Pick<$$Props, 'centered' | 'overflow'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let title: $$Props['title'] = undefined;
    export let centered: $$Props['centered'] = false;
    export let overflow: $$Props['overflow'] = 'outside';
    export let opened: $$Props['opened'] = false;
    export let withCloseButton: $$Props['withCloseButton'] = true;
    export let closeOnBlur: $$Props['closeOnBlur'] = true;
    export let closeOnEscape: $$Props['closeOnEscape'] = true;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-modal-box';

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

    onMount(() => {
        // if (opened) {
        window.document.body.style.overflow = 'hidden';
        window.document.body.style.touchAction = 'none';
        // }
    });
    // afterUpdate(() => focusBox());
</script>

<Portal class="dui-modal">
    <div class="dui-modal-overlay" />
    <div class={classNames} {...$$restProps}>
        <div class="dui-modal-box-header">
            {#if title}
                <h3 class="dui-modal-box-header-title">{title}</h3>
            {/if}
            <Button shape="square" size="sm" on:click={() => (opened = !opened)}>
                <Icon size="1.5rem" component={IoMdClose} />
            </Button>
        </div>
        <slot />
    </div>
</Portal>

<style lang="scss" global>
    @import 'Modal.scss';
</style>
