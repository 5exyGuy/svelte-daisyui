<script>
    import Showcase from './Showcase.svelte';
    import Alert from '@svelte-daisyui/components/src/components/alert/Alert.svelte';
    // import Artboard from '@svelte-daisyui/components/src/components/artboard/Artboard.svelte';
    // import AvatarGroup from '@svelte-daisyui/components/src/components/avatar/AvatarGroup.svelte';
    // import Avatar from '@svelte-daisyui/components/src/components/avatar/Avatar.svelte';
    // import Badge from '@svelte-daisyui/components/src/components/badge/Badge.svelte';
    // import BreadcrumbGroup from '@svelte-daisyui/components/src/components/breadcrumbs/BreadcrumbGroup.svelte';
    // import BreadcrumbItem from '@svelte-daisyui/components/src/components/breadcrumbs/BreadcrumbItem.svelte';
    // import Button from '@svelte-daisyui/components/src/components/button/Button.svelte';
</script>

<Showcase>
    <Alert color="error" screen={{ md: { color: 'accent' } }}>Hello world</Alert>
    <!-- <Artboard alignment="vertical" size="320x568" demo>Hello world</Artboard>

    <AvatarGroup space="-1.5rem">
        <Avatar size="2.5rem">
            <img alt="" src="https://picsum.photos/seed/picsum1/200/" />
        </Avatar>
        <Avatar size="3rem" status="online">
            <img alt="" src="https://picsum.photos/seed/picsum2/200/" />
        </Avatar>
        <Avatar size="3.5rem" placeholder>
            <div class="bg-primary text-primary-content">K</div>
        </Avatar>
        <Avatar size="4rem" placeholder>
            <div class="bg-accent text-accent-content">KK</div>
        </Avatar>
    </AvatarGroup>
    <Badge color="success">Hello world</Badge>
    <BreadcrumbGroup
        items={[
            { text: 'test', href: 'test' },
            { text: 'test', href: 'test' },
        ]}
    >
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Documents</BreadcrumbItem>
        <BreadcrumbItem>Add Document</BreadcrumbItem>
    </BreadcrumbGroup>
    <Button>Hello world</Button> -->
</Showcase>
