<script lang="ts">
    import Showcase from './Showcase.svelte';
    import {
        Alert,
        Artboard,
        AvatarGroup,
        Avatar,
        Badge,
        BreadcrumbGroup,
        BreadcrumbItem,
        Button,
        Card,
    } from '@svelte-daisyui/components/src';

    const breadcrumbs = [
        { text: 'Breadcrumb #1', href: 'test' },
        { text: 'Breadcrumb #2', href: 'test' },
    ];
</script>

<Showcase>
    <Alert>Hello world</Alert>
    <Artboard alignment="vertical" size="320x568" demo>Hello world</Artboard>

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
    <Badge>Hello world</Badge>
    <BreadcrumbGroup items={breadcrumbs}>
        <BreadcrumbItem slot="item" let:item href={item.href}>{item.text}</BreadcrumbItem>
    </BreadcrumbGroup>
    <Button>Hello world</Button>
    <Card class="bg-base-100 text-base-content">
        <figure slot="upper" class="h-2 bg-info" />
        <h2 let:className class={className} slot="title">Title</h2>
        <svelte:fragment slot="body">Body</svelte:fragment>
        <div let:className class={className} slot="actions">Actions</div>
    </Card>
</Showcase>
