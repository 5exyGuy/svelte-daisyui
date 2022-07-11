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
        CarouselGroup,
        CarouselItem,
        Checkbox,
        Code,
        Collapse,
        CollapseTitle,
        Dropdown,
        DropdownContent,
        Hero,
        HeroContent,
        IndicatorGroup,
        IndicatorItem,
        Kbd,
        Link,
        Progress,
        Radio,
        Range,
        Select,
    } from '@svelte-daisyui/components/src';
    import CollapseContent from '@svelte-daisyui/components/src/components/collapse/CollapseContent.svelte';

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
        <CardBody justify="center">
            <CardTitle>Title</CardTitle>
            <CardContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
            </CardContent>
            <CardActions alignment="middle" justify="center"><Button color="primary">Hello world</Button></CardActions>
        </CardBody>
    </Card>
    <!-- <CarouselGroup class="w-full">
        <CarouselItem class="relative w-full">
            <img src="https://placeimg.com/800/300/arch" alt="Burger" class="w-full" />
        </CarouselItem>
        <CarouselItem class="relative w-full">
            <img src="https://placeimg.com/800/300/arch" alt="Burger" class="w-full" />
        </CarouselItem>
        <CarouselItem class="relative w-full">
            <img src="https://placeimg.com/800/300/arch" alt="Burger" class="w-full" />
        </CarouselItem>
        <CarouselItem class="relative w-full">
            <img src="https://placeimg.com/800/300/arch" alt="Burger" class="w-full" />
        </CarouselItem>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
        </div> 
    </CarouselGroup> -->
    <Checkbox checked size="xs" color="primary" disabled />
    <Code>
        <pre data-prefix="$"><code>npm i @svelte-daisyui</code></pre>
        <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
        <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
    </Code>
    <Collapse icon="plus" class="border border-base-300 rounded-2xl bg-base-200 text-base-content">
        <CollapseTitle>Collapse Title</CollapseTitle>
        <CollapseContent>Collapse Content</CollapseContent>
    </Collapse>
    <Dropdown>
        <div class="text-base-content" tabindex={0}>Dropdown #1</div>
        <div class="text-base-content" tabindex={0}>Dropdown #2</div>
        <DropdownContent class="p-4 shadow bg-base-300 text-base-content rounded-2xl w-52">Hello world</DropdownContent>
    </Dropdown>

    <Hero
        class="bg-base-200 text-base-content min-h-screen"
        style="background-image: url(https://placeimg.com/1000/800/nature);"
    >
        <HeroContent class="text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Hello there</h1>
                <p class="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                    In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <Button color="primary">Get Started</Button>
            </div>
        </HeroContent>
    </Hero>

    <IndicatorGroup>
        <IndicatorItem horizontal="start" vertical="top"><Badge color="info">BADGE</Badge></IndicatorItem>
        <IndicatorItem horizontal="start" vertical="middle"><Badge color="info">BADGE</Badge></IndicatorItem>
        <IndicatorItem horizontal="start" vertical="bottom"><Badge color="info">BADGE</Badge></IndicatorItem>
        <IndicatorItem horizontal="center" vertical="top"><Badge color="info">BADGE</Badge></IndicatorItem>
        <IndicatorItem horizontal="center" vertical="middle"><Badge color="info">BADGE</Badge></IndicatorItem>
        <IndicatorItem horizontal="center" vertical="bottom"><Badge color="info">BADGE</Badge></IndicatorItem>
        <IndicatorItem horizontal="end" vertical="top"><Badge color="info">BADGE</Badge></IndicatorItem>
        <IndicatorItem horizontal="end" vertical="middle"><Badge color="info">BADGE</Badge></IndicatorItem>
        <IndicatorItem horizontal="end" vertical="bottom"><Badge color="info">BADGE</Badge></IndicatorItem>
        <div class="grid w-60 h-32 bg-base-300 place-items-center">content</div>
    </IndicatorGroup>

    <Kbd>CTRL + C</Kbd>
    <Link hover color="primary">Hello world</Link>

    <Progress color="primary" value="32" max="100" />
    <Radio color="info" />
    <Range color="secondary" min="0" max="100" value="40" />
    <Select>
        <option disabled selected>Pick your favorite Simpson</option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
    </Select>
</Showcase>
