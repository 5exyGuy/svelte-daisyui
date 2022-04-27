<script>
    import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
    import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte';
    import MdWarning from 'svelte-icons/md/MdWarning.svelte';
    import MdErrorOutline from 'svelte-icons/md/MdErrorOutline.svelte';
    import { BrandColor, FunctionalColor } from '../../enums';
    import Icon from '../icon/Icon.svelte';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {string | undefined}
     */
    export let message;

    /**
     *  @type {{ component: typeof import('svelte').SvelteComponent; size: number; } | undefined}
     */
    export let icon;


    /**
     * @type {BrandColor | FunctionalColor | AdditionalColor | undefined}
     */
    export let color;

    let className = '';
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                          Classes
    // -----------------------------------------------------------

    // Classes
    const classes: string[] = [];

    classes.push('alert');
    if (type) {
        const colors = { ...BrandColor, ...FunctionalColor };
        classes.push(colors[type]);
    }

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass}>
    <div class="alert-content">
        {#if icon}
            <svelte:component this={Icon} component={icon.component} size={icon.size} />
        {:else if !icon && type}
            {#if type === 'Info'}
                <Icon size={1.5} component={MdInfoOutline} />
            {:else if type === 'Success'}
                <Icon size={1.5} component={FaRegCheckCircle} />
            {:else if type === 'Warning'}
                <Icon size={1.5} component={MdWarning} />
            {:else if type === 'Error'}
                <Icon size={1.5} component={MdErrorOutline} />
            {/if}
        {/if}
        {#if message}
            <span>
                {message}
            </span>
        {:else}
            <slot name="content" />
        {/if}
    </div>
    <div class="alert-actions">
        <slot name="actions" />
    </div>
</div>

<style lang="scss">
    @import 'Alert.scss';
</style>
