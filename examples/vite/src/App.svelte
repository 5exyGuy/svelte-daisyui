<script>
    import Showcase from './Showcase.svelte';
    import Avatar from '@svelte-daisyui/components/src/components/avatar/Avatar.svelte';
</script>

<Showcase>
    <Avatar size="4rem" status="online" screen={{ sm: { size: '5rem' }, md: { size: '6rem' } }}>
        <img src="https://avatars0.githubusercontent.com/u/1209898?s=460&v=4" alt="" />
    </Avatar>
    <Avatar size="4rem" status="online" screen={{ lg: { size: '5rem' }, '2xl': { size: '6rem' } }}>
        <img src="https://avatars0.githubusercontent.com/u/1209898?s=460&v=4" alt="" />
    </Avatar>
    <Avatar size="10rem" status="online" screen={{ sm: { size: '5rem' }, '2xl': { size: '8rem' } }}>
        <img src="https://avatars0.githubusercontent.com/u/1209898?s=460&v=4" alt="" />
    </Avatar>
</Showcase>
