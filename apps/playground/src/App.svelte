<script>
    import {
        Badge,
        IndicatorGroup,
        IndicatorItem,
    } from '@svelte-daisyui/components';
</script>

<div class="p-16">
    <IndicatorGroup>
        <IndicatorItem><Badge /></IndicatorItem>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
    </IndicatorGroup>
</div>
