<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { Alignment } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import type { IStepsItem } from './steps-item.interface';
    import StepsItem from './StepsItem.svelte';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        alignment?: StringKeyOf<typeof Alignment>;
        items?: Array<IStepsItem>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'alignment'> {}
    interface $$ClassProps extends Pick<$$Props, 'alignment'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
        item: {
            item: IStepsItem;
        };
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let alignment: $$Props['alignment'] = 'horizontal';
    export let items: $$Props['items'] = [];
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-steps-group';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { alignment: Alignment }, { alignment }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { alignment: Alignment }, screen, {
            alignment: true,
        }),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    {#if $$slots.default}
        <slot />
    {:else}
        {#each items as item}
            <slot name="item" {item}>
                <StepsItem content={item.content} color={item.color}>{item.title}</StepsItem>
            </slot>
        {/each}
    {/if}
</div>

<style lang="scss" global>
    @import 'StepsGroup.scss';
</style>
