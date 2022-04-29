<script lang="ts">
    import { CardImagePosition } from './CardImagePosition';

    export let imagePosition: CardImagePosition | undefined =
        CardImagePosition.Top;
    export let imageSource: string | undefined = undefined;
    export let imageDescription: string;
    export let imageOverlay: boolean = false;
    export let bordered: boolean = false;
    export let center: boolean = false;
    export let compact: boolean = false;
    // export let shadowSize: ShadowSize = ShadowSize;
    let className: string = '';
    export { className as class };

    const classes: string[] = [];

    classes.push('card');
    if (bordered) classes.push('card-bordered');
    if (imageOverlay) classes.push('image-full');
    if (center) classes.push('text-center');
    if (compact) classes.push('card-compact');

    $: classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);
</script>

<div class={classes.join(' ')}>
    <div class="card-body">
        {#if imageSource && imagePosition === CardImagePosition.Top}
            <figure>
                <img src={imageSource} alt={imageDescription} />
            </figure>
        {/if}
        <div class="card-title" />
        <slot />
        <div class="card-actions" />
        {#if imageSource && imagePosition === CardImagePosition.Bottom}
            <figure>
                <img src={imageSource} alt={imageDescription} />
            </figure>
        {/if}
    </div>
</div>

<style lang="less">
    @import 'Card.less';
</style>
