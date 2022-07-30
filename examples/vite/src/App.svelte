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
        Table,
        Navbar,
        NavbarStart,
        NavbarEnd,
        NavbarCenter,
        Rating,
        Menu,
        MenuItem,
        MenuTitle,
        Fragment,
        Modal,
        DrawerWrapper,
        Drawer,
    } from '@svelte-daisyui/components/src';
    import CollapseContent from '@svelte-daisyui/components/src/components/collapse/CollapseContent.svelte';

    const breadcrumbs = [
        { text: 'Breadcrumb #1', href: 'test' },
        { text: 'Breadcrumb #2', href: 'test' },
    ];

    let drawerOpened = false;
</script>

<Showcase>
    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Fragment</h1>
    <Fragment><Alert>Hello world</Alert></Fragment>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Alert</h1>
    <Alert>Hello world</Alert>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Artboard</h1>
    <Artboard alignment="vertical" size="320x568" demo>Hello world</Artboard>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Avatar</h1>
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

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Badge</h1>
    <Badge>Hello world</Badge>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Breadcrumbs</h1>
    <BreadcrumbGroup items={breadcrumbs}>
        <BreadcrumbItem slot="item" let:item href={item.href}>{item.text}</BreadcrumbItem>
    </BreadcrumbGroup>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Button</h1>
    <Button>Hello world</Button>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Card</h1>
    <Card fullImage class="bg-base-100 text-base-content w-[300px]">
        <CardFigure><img alt="" src="https://api.lorem.space/image/game?w=300&h=400" /></CardFigure>
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

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Carousel</h1>
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

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Checkbox</h1>
    <Checkbox checked size="xs" color="primary" disabled />

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6"><Code /></h1>
    <Code>
        <pre data-prefix="$"><code>npm i @svelte-daisyui</code></pre>
        <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
        <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
    </Code>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Collapse</h1>
    <Collapse icon="plus" class="border border-base-300 rounded-2xl bg-base-200 text-base-content">
        <CollapseTitle>Collapse Title</CollapseTitle>
        <CollapseContent>Collapse Content</CollapseContent>
    </Collapse>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Drawer</h1>
    <Button on:click={() => (drawerOpened = true)}>Show Drawer</Button>
    <Button on:click={() => (drawerOpened = false)}>Hide Drawer</Button>
    <!-- <DrawerWrapper name="mydrawer"> -->
    <!-- <div class="text-base-content">
            What is Lorem Ipsum?
            <p class="my-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            Why do we use it?
            <p class="my-2">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
        </div> -->
    <Drawer name="mydrawer" bind:opened={drawerOpened} position="right" closeOnOverlayClick>
        <div class="bg-primary text-primary-content w-full">
            <Button>Click me</Button>
            <Link>Click me #1</Link>
            <Link>Click me #2</Link>
            Hello world
        </div>
    </Drawer>
    <!-- </DrawerWrapper> -->

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Dropdown</h1>
    <Dropdown>
        <div class="text-base-content" tabindex={0}>Dropdown #1</div>
        <div class="text-base-content" tabindex={0}>Dropdown #2</div>
        <DropdownContent class="p-4 shadow bg-base-300 text-base-content rounded-2xl w-52">Hello world</DropdownContent>
    </Dropdown>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Hero</h1>
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

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Indicator</h1>
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

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Kbd</h1>
    <Kbd>CTRL + C</Kbd>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Link</h1>
    <Link hover color="primary">Hello world</Link>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Menu</h1>
    <Menu alignment="vertical" class="w-52">
        <MenuTitle>Category</MenuTitle>
        <MenuItem bordered>Item 1</MenuItem>
        <MenuItem hoverBordered>item 2</MenuItem>
        <MenuTitle>Category</MenuTitle>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
    </Menu>
    <Menu alignment="horizontal">
        <MenuTitle>Category</MenuTitle>
        <MenuItem bordered>Item 1</MenuItem>
        <MenuItem hoverBordered>item 2</MenuItem>
        <MenuTitle>Category</MenuTitle>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
    </Menu>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Modal</h1>
    <!-- <Modal title="Title">
        {#each Array(50) as index}
            <p>You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        {/each}
    </Modal> -->

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Navbar</h1>
    <Navbar color="primary" rounded>
        <NavbarStart>Start</NavbarStart>
        <NavbarCenter>Center</NavbarCenter>
        <NavbarEnd>End</NavbarEnd>
    </Navbar>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Progress</h1>
    <Progress color="primary" value="32" max="100" />

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Radio</h1>
    <Radio color="info" />

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Range</h1>
    <Range color="secondary" min="0" max="100" value="40" />

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Rating</h1>
    <Rating name="rating" />

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Select</h1>
    <Select>
        <option disabled selected>Pick your favorite Simpson</option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
    </Select>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Stack</h1>
    <Stack direction="downright">
        <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
        <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
        <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
    </Stack>

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Stats</h1>
    <StatsGroup
        items={[
            { title: 'Title #1', value: '1.000 EUR', description: '21% more', background: 'warning' },
            { title: 'Title #2', value: '1.000 EUR', description: '21% more', background: 'secondary' },
            { title: 'Title #2', value: '1.000 EUR', description: '21% more', background: 'primary' },
        ]}
        alignment="horizontal"
    />

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Steps</h1>
    <StepsGroup
        alignment="vertical"
        items={[
            { color: 'primary', title: 'Step 1' },
            { color: 'primary', title: 'Step 2' },
            { color: 'error', title: 'Step 3' },
            { color: 'secondary', title: 'Step 4' },
        ]}
    />

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Swap</h1>
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

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Table</h1>
    <Table
        zebra
        padding="normal"
        headers={[
            { text: 'Name', value: 'name' },
            { text: 'Job', value: 'job' },
            { text: 'Color', value: 'color' },
        ]}
        items={[
            { name: 'John Doe', job: 'Web Developer', color: '#00ff00' },
            { name: 'Jane Doe', job: 'Web Designer', color: '#ff0000' },
            { name: 'Bob Doe', job: 'Web Developer', color: '#0000ff' },
        ]}
    />

    <h1 class="font-extrabold text-4xl text-base-content mb-12 mt-6">Window</h1>
    <Window bordered>
        <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
    </Window>
</Showcase>
