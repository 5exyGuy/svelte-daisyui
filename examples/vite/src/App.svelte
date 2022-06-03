<script>
    import { Kbd, Tooltip, TooltipContent } from '@svelte-daisyui/components';

    import Showcase from './Showcase.svelte';
</script>

<Showcase>
    <Tooltip open>
        <TooltipContent slot="content">Hello world</TooltipContent>
        <Kbd size="lg">CTRL + C</Kbd>
    </Tooltip>
</Showcase>
