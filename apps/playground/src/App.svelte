<script>
    import { StatGroup, StatItem } from '@svelte-daisyui/components';
</script>

<div class="p-16">
    <StatGroup background="accent">
        <StatItem
            background="error"
            title="Title #1"
            description="Description #1"
            value="31K"
        />
        <StatItem title="Title #1" description="Description #1" value="4,200" />
    </StatGroup>
</div>
