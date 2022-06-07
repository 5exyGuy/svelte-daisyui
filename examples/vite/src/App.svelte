<script>
    import {
        Avatar,
        AvatarGroup,
        Artboard,
        Alert,
        Badge,
        Button,
        ButtonGroup,
        Card,
        CarouselGroup,
        CarouselItem,
        Checkbox,
        Code,
        Collapse,
        Divider,
        Drawer,
        Dropdown,
        Icon,
        IndicatorGroup,
        IndicatorItem,
        Input,
        Navbar,
        Kbd,
        RadialProgress,
        Table,
        TextArea,
        Toggle,
        Tooltip,
        TooltipContent,
        BreadcrumbGroup,
        BreadcrumbItem,
        Link,
        Mask,
        Progress,
        Radio,
        StatGroup,
        StatItem,
        Range,
        Rating,
        Stack,
        StepGroup,
        StepItem,
        Swap,
        TabGroup,
        TabItem,
        Select,
    } from '@svelte-daisyui/components';
    import Showcase from './Showcase.svelte';
    import ChevronCircleUp from 'svelte-icons/fa/FaChevronCircleUp.svelte';

    const headers = [
        { text: 'Nr.', value: 'index', alignment: 'start' },
        { text: 'Pavadinimas', value: 'name', alignment: 'start' },
        { text: 'Vertė', value: 'value', alignment: 'end' },
        { text: 'Kiekis', value: 'quantity', alignment: 'end' },
    ];
    const items = [];
    for (let index = 0; index < 6; index++) {
        items.push({
            index,
            name: `Pavadinimas #${index}`,
            value: Math.floor(Math.random() * (10000 - 1) + 1),
            quantity: Math.floor(Math.random() * (100 - 1) + 1),
        });
    }
    let drawerVisible = false;
</script>

<Drawer end bind:visible={drawerVisible}>
    <div
        slot="side"
        class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"
    >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
    </div>

    <Showcase>
        <Navbar rounded class="bg-base-200">
            <svelte:fragment slot="start"
                ><Button>Start</Button></svelte:fragment
            >
            <svelte:fragment slot="center">Center</svelte:fragment>
            <svelte:fragment slot="end">
                <Mask type="triangle2">
                    <Avatar class="w-10 h-10" src="https://picsum.photos/200" />
                </Mask>
            </svelte:fragment>
        </Navbar>
        <Icon component={ChevronCircleUp} size={5} />
        <Icon component={ChevronCircleUp} size={3} spin />

        <Button slot="focus" on:click={() => (drawerVisible = !drawerVisible)}
            >Open Drawer</Button
        >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.

        <Dropdown>
            <Button slot="focus">Open Dropdown</Button>
            <div class="shadow bg-base-200 rounded-2xl p-2 w-52">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
        </Dropdown>
        <!-- Avatar -->
        <IndicatorGroup>
            <IndicatorItem horizontal="start">
                <Badge color="primary" size="lg">#1</Badge>
            </IndicatorItem>
            <IndicatorItem horizontal="end">
                <Badge color="primary" size="lg">#2</Badge>
            </IndicatorItem>
            <Avatar class="h-20 w-20" src="https://picsum.photos/200" />
        </IndicatorGroup>
        <AvatarGroup class="-space-x-6">
            {#each Array(3) as _, i}
                <Avatar class="h-20 w-20" src="https://picsum.photos/200" />
            {/each}
        </AvatarGroup>
        <!-- Artboard -->
        <Artboard class="!bg-base-200" demo size={1}>320×568</Artboard>
        <!-- Alert -->
        <Alert screen={{ sm: { color: 'warning' } }} color="info" showIcon>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <div class="flex-none">
                <Tooltip
                    color="primary"
                    position="right"
                    screen={{ sm: { position: 'bottom', open: true } }}
                >
                    <TooltipContent slot="content" class=""
                        >Kopijuoti</TooltipContent
                    >
                    <Kbd size="lg">CTRL + C</Kbd>
                </Tooltip>
                <Button>Skaityti daugiau...</Button>
            </div>
        </Alert>
        <!-- Button -->
        <div>
            <Button loading color="secondary">Hello world</Button>
            <Button outline color="warning">Hello world</Button>
            <Button shape="circle" color="warning">H</Button>
        </div>
        <ButtonGroup>
            <Button loading color="secondary">Hello world</Button>
            <Button outline color="warning">Hello world</Button>
            <Button color="warning">H</Button>
        </ButtonGroup>
        <!-- Badge -->
        <Badge size="lg" color="info">Hello world</Badge>
        <!-- Breadcrumbs -->
        <BreadcrumbGroup>
            <BreadcrumbItem href="#">Breadcrumb #1</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb #2</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb #3</BreadcrumbItem>
        </BreadcrumbGroup>
        <!-- Card -->
        <Card bordered padding="compact">
            <svelte:fragment slot="title">Title</svelte:fragment>
            <svelte:fragment slot="body">Hello world</svelte:fragment>
            <svelte:fragment slot="actions">
                <Button size="xs" loading color="secondary">Hello world</Button>
                <Button size="xs" outline color="warning">Hello world</Button>
            </svelte:fragment>
        </Card>
        <!-- Carousel -->
        <CarouselGroup alignment="horizontal" snap="end">
            <CarouselItem>
                <img src="https://picsum.photos/seed/1/400/300" alt="" />
            </CarouselItem>
            <CarouselItem>
                <img src="https://picsum.photos/seed/2/400/300" alt="" />
            </CarouselItem>
            <CarouselItem>
                <img src="https://picsum.photos/seed/3/400/300" alt="" />
            </CarouselItem>
            <CarouselItem>
                <img src="https://picsum.photos/seed/4/400/300" alt="" />
            </CarouselItem>
        </CarouselGroup>
        <!-- Checkbox -->
        <Checkbox checked size="lg" />
        <Checkbox color="info" size="sm" />
        <!-- Code -->
        <Code>
            <pre data-prefix=">"><code>First</code></pre>
            <pre data-prefix=">"><code>Second</code></pre>
        </Code>
        <!-- Collapse -->
        <Collapse class="bg-base-200" icon="arrow">
            <svelte:fragment slot="title">Title</svelte:fragment>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Collapse>
        <!-- Divider -->
        <div class="flex flex-col w-full border-opacity-50">
            <div
                class="grid h-20 card bg-base-200 rounded-box place-items-center"
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <Divider>I am Divider</Divider>
            <div
                class="grid h-20 card bg-base-200 rounded-box place-items-center"
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
        </div>
        <div class="flex flex-col w-full lg:flex-row">
            <div
                class="grid flex-grow h-32 card bg-base-200 rounded-box place-items-center"
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <Divider alignment="horizontal" />
            <div
                class="grid flex-grow h-32 card bg-base-200 rounded-box place-items-center"
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
        </div>
        <!-- Toggle -->
        <div>
            <Toggle />
            <Toggle color="accent" />
            <Toggle color="accent" checked />
            <Toggle color="accent" checked disabled />
            <Toggle color="accent" disabled />
        </div>
        <TextArea bordered placeholder="Enter text here..." />
        <TextArea color="primary" bordered placeholder="Enter text here..." />
        <RadialProgress value={50} let:value>
            <!-- <div class="text-primary-content">{value}</div> -->
        </RadialProgress>
        <Table zebra {headers} {items} />
        <Input bordered placeholder="Enter your name" color="primary" />
        <div>
            <Link>Link #1</Link>
            <Link color="success">Link #1</Link>
            <Link color="secondary" hover>Link #1</Link>
        </div>
        <Progress color="error" min={0} max={50} value={10} />
        <Progress color="primary" min={0} max={110} value={50} />
        <div>
            <Range min={10} max={100} step={10} value={20} />
            <Radio color="accent" name="hello" />
            <Radio color="primary" name="hello" />
            <Rating>
                <input type="radio" name="rating-1" class="bg-green-400" />
                <input type="radio" name="rating-1" class="bg-green-400" />
                <input type="radio" name="rating-1" class="bg-green-400" />
            </Rating>
        </div>
        <div>
            <Stack>
                <img
                    src="https://api.lorem.space/image/face?w=112&h=112&hash=8B7BASC2"
                    alt="Image 1"
                />
                <img
                    src="https://api.lorem.space/image/face?w=112&h=112&hash=SADSADAS"
                    alt="Image 2"
                />
                <img
                    src="https://api.lorem.space/image/face?w=112&h=112&hash=A89D0DE6"
                    alt="Image 3"
                />
            </Stack>
            <Stack direction="right">
                <img
                    src="https://api.lorem.space/image/face?w=112&h=112&hash=SADSDEWW"
                    alt="Image 1"
                />
                <img
                    src="https://api.lorem.space/image/face?w=112&h=112&hash=SSSDASDW"
                    alt="Image 2"
                />
                <img
                    src="https://api.lorem.space/image/face?w=112&h=112&hash=A89D0DE6"
                    alt="Image 3"
                />
            </Stack>
        </div>
        <StatGroup background="info" alignment="horizontal">
            <StatItem
                title="Title #1"
                description="Description #!"
                value="10 EUR"
                background="accent"
            />
            <StatItem
                title="Title #1"
                description="Description #!"
                value="500 VIEWS"
            />
            <StatItem
                title="Title #1"
                description="Description #!"
                value="5 EUR"
            />
        </StatGroup>
        <StepGroup>
            <StepItem color="warning">Lorem Ipsum</StepItem>
            <StepItem color="warning" />
            <StepItem />
            <StepItem color="info" />
        </StepGroup>
        <div>
            <Swap>
                <div slot="on" class="bg-success p-4">I am online</div>
                <div slot="off" class="bg-warning p-4">I am offline</div>
            </Swap>
            <Swap animation="flip">
                <div slot="on" class="bg-success p-4">I am online</div>
                <div slot="off" class="bg-warning p-4">I am offline</div>
            </Swap>
        </div>
        <TabGroup type="bordered">
            <TabItem active>TabItem #1</TabItem>
            <TabItem>TabItem #2</TabItem>
            <TabItem>TabItem #3</TabItem>
        </TabGroup>
        <div>
            <Select color="error">
                <option disabled selected>Pick an option</option>
                <option>Option #1</option>
                <option>Option #2</option>
                <option>Option #3</option>
            </Select>
            <Select color="success" bordered>
                <option disabled selected>Pick an option</option>
                <option>Option #1</option>
                <option>Option #2</option>
                <option>Option #3</option>
            </Select>
        </div>
    </Showcase>
</Drawer>
