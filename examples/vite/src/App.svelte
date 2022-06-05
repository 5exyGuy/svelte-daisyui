<script>
    import {
        Kbd,
        RadialProgress,
        TextArea,
        Toggle,
        Tooltip,
        TooltipContent,
    } from '@svelte-daisyui/components';

    import Showcase from './Showcase.svelte';
</script>

<Showcase>
    <Tooltip
        color="primary"
        position="right"
        screen={{ lg: { position: 'bottom', open: true } }}
    >
        <TooltipContent slot="content" class="">Lorem Ipsum</TooltipContent>
        <Kbd size="lg">CTRL + C</Kbd>
    </Tooltip>
    <Toggle />
    <Toggle color="accent" />
    <Toggle color="accent" checked />
    <Toggle color="accent" checked disabled />
    <Toggle color="accent" disabled />
    <TextArea bordered placeholder="Enter text here..." />
    <TextArea color="primary" bordered placeholder="Enter text here..." />
    <RadialProgress value={50} let:value>
        <div class="text-primary-content">{value}</div>
    </RadialProgress>
</Showcase>
