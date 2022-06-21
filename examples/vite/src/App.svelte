<script>
    import Showcase from './Showcase.svelte';
    import Alert from '@svelte-daisyui/components/src/components/alert/Alert.svelte';
    import Artboard from '@svelte-daisyui/components/src/components/artboard/Artboard.svelte';
    import AvatarGroup from '@svelte-daisyui/components/src/components/avatar/AvatarGroup.svelte';
    import Avatar from '@svelte-daisyui/components/src/components/avatar/Avatar.svelte';
    import Badge from '@svelte-daisyui/components/src/components/badge/Badge.svelte';
</script>

<Showcase>
    <Alert color="error" screen={{ md: { color: 'accent' } }}>Hello world</Alert>
    <Artboard alignment="vertical" size="320x568" demo>Hello world</Artboard>

    <AvatarGroup space="-1.5rem">
        <Avatar size="2.5rem" screen={{ lg: { size: '4rem' } }}>
            <img alt="" src="https://picsum.photos/seed/picsum1/200/" />
        </Avatar>
        <Avatar size="3rem" screen={{ lg: { size: '3.5rem' } }} status="online">
            <img alt="" src="https://picsum.photos/seed/picsum2/200/" />
        </Avatar>
        <Avatar size="3.5rem" screen={{ lg: { size: '3rem' } }} placeholder>
            <div class="bg-primary text-primary-content">K</div>
        </Avatar>
        <Avatar size="4rem" screen={{ lg: { size: '2.5rem' } }} placeholder>
            <div class="bg-accent text-accent-content">KK</div>
        </Avatar>
    </AvatarGroup>
    <Badge color="error" size="md">Hello world</Badge>
</Showcase>
