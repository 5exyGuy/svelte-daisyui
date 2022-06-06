<script>
    import {
        Alert,
        Button,
        Kbd,
        RadialProgress,
        Table,
        TableCell,
        TextArea,
        Toggle,
        Tooltip,
        TooltipContent,
    } from '@svelte-daisyui/components';
    import Showcase from './Showcase.svelte';

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
</script>

<Showcase>
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
    <Table zebra {headers} {items}>
        <!-- <TableCell
            slot="item"
            let:item
            let:header
            class="text-sm text-orange-600"
        >
            {item[header.value]}
        </TableCell> -->
    </Table>
</Showcase>
