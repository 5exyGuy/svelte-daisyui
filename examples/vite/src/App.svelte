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
        CardBody,
        CardTitle,
        CardActions,
        CardFigure,
        CardContent,
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
    <Card fullImage class="bg-base-100 text-base-content w-[600px]">
        <CardFigure><img alt="" src="https://api.lorem.space/image/game?w=600&h=400" /></CardFigure>
        <CardBody>
            <CardTitle>Title</CardTitle>
            <CardContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
            </CardContent>
            <CardActions alignment="middle" justify="center"><Button color="primary">Hello world</Button></CardActions>
        </CardBody>
    </Card>
</Showcase>
