<script>
    import {
        Divider,
        Kbd,
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
    <div class="flex flex-col w-full border-opacity-50">
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
            content
        </div>
        <Divider alignment="vertical" />
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
            content
        </div>
    </div>
    <div class="flex w-full">
        <div
            class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
        >
            content
        </div>
        <Divider alignment="horizontal" />
        <div
            class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
        >
            content
        </div>
    </div>
</Showcase>
