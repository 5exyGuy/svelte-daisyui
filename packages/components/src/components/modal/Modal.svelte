<!-- <script lang="ts" context="module">
</script> -->
<script lang="ts">
    import type { StringKeyOf } from 'type-fest';

    import type { Screen } from '../../types';
    import { joinClasses } from '../../utilities';
    import Portal from '../portal/Portal.svelte';
    import type { ModalOverflow } from './modal-overflow.enum';

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

<Portal class="">
    <div class={classNames} {...$$restProps}>
        <slot />
    </div>
</Portal>

<style lang="scss" global>
    @import 'Modal.scss';
</style>
