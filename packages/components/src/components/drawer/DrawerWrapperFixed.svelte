<script lang="ts">
    import { generateDefaultClasses, joinClasses, lockSroll, unlockScroll } from '../../utilities';
    import Portal from '../portal/Portal.svelte';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        name: string;
        opened: boolean;
        closeOnBlur: boolean;
    }
    interface $$ClassProps extends Pick<$$Props, 'opened'> {
        fixed: true;
    }

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let name: $$Props['name'];
    export let opened: $$Props['opened'];
    export let closeOnBlur: $$Props['closeOnBlur'];
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-drawer-wrapper';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { fixed: 'fixed', opened: 'open' }, { fixed: true, opened }),
        [restClass],
    );

    // -----------------------------------------------------------
    //                       Functionality
    // -----------------------------------------------------------

    function processKeydown(event: KeyboardEvent) {
        if (event.key !== 'Escape') return;
        toggleVisiblity(false);
        event.preventDefault();
    }

    function toggleVisiblity(value: boolean) {
        if (opened) lockSroll();
        else unlockScroll();
        opened = value;
    }
</script>

<Portal>
    <div class={classNames} data-drawer-name={name} {...$$restProps}>
        <div class="dui-drawer-wrapper-overlay" on:click={() => closeOnBlur && toggleVisiblity(false)} />
        <slot />
    </div>
</Portal>

<svelte:window on:keydown={processKeydown} />

<style lang="scss" global>
    @import 'DrawerWrapper.scss';
</style>
