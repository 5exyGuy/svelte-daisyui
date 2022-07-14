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
        // CarouselGroup,
        // CarouselItem,
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
        Stack,
        Window,
        StatsGroup,
        StepsGroup,
        Swap,
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
            <CardActions alignment="middle" justify="center">
                <Button color="primary">Hello world</Button>
            </CardActions>
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
    <Stack direction="downright">
        <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
        <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
        <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
    </Stack>

    <StatsGroup
        items={[
            { title: 'Title #1', value: '1.000 EUR', description: '21% more', background: 'warning' },
            { title: 'Title #2', value: '1.000 EUR', description: '21% more', background: 'secondary' },
            { title: 'Title #2', value: '1.000 EUR', description: '21% more', background: 'primary' },
        ]}
        alignment="horizontal"
    />
    <StepsGroup
        alignment="vertical"
        items={[
            { color: 'primary', title: 'Step 1' },
            { color: 'primary', title: 'Step 2' },
            { color: 'error', title: 'Step 3' },
            { color: 'secondary', title: 'Step 4' },
        ]}
    />
    <Swap animation="rotate" class="text-base-content">
        <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            ><path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            /></svg
        >
        <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            ><path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            /></svg
        >
    </Swap>

    <Window bordered>
        <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
    </Window>
</Showcase>
