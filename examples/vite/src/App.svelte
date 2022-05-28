<script>
    import {
        Table,
        TableHeaderCell,
        TableCell,
        Alert,
        Button,
        Kbd,
        Link,
    } from '@svelte-daisyui/components';

    import Showcase from './Showcase.svelte';

    const headers = [
        { text: 'Vardas', value: 'firstName', alignment: 'center' },
        { text: 'Pavardė', value: 'lastName', alignment: 'start' },
        { text: 'Amžius', value: 'age', alignment: 'end' },
    ];
    const items = [
        { firstName: 'Jonas', lastName: 'Jonaitis', age: 694 },
        { firstName: 'Antanas', lastName: 'Antanaitis', age: 55 },
        { firstName: 'Petras', lastName: 'Petraitis', age: 42 },
        { firstName: 'Kazys', lastName: 'Kazimieras', age: 69 },
    ];
</script>

<Showcase>
    <Button color="primary" size="lg" outline loading>Skaityti daugiau</Button>
    <Button color="accent" size="sm">Skaityti daugiau</Button>
    <Kbd size="lg" screen={{ '2xl': { size: 'xs' } }}>CTRL + C</Kbd>
    <Alert color="warning">
        <div class="!inline-block">
            <Link color="secondary">Lorem Ipsum</Link> is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took
            a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
        </div>
        <Button slot="actions">Read more</Button>
    </Alert>
    <Alert color="info">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
    </Alert>
    <Table class="overflow-x-scroll w-full" padding="compact" {headers} {items}>
        <TableHeaderCell slot="header" let:header>
            {header.text}
        </TableHeaderCell>
        <TableCell slot="item" let:item let:header>
            {item[header.value]}
        </TableCell>
    </Table>
</Showcase>
