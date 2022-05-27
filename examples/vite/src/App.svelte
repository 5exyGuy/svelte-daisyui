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
        { text: 'First Name', value: 'firstName' },
        { text: 'Last Name', value: 'lastName' },
        { text: 'Age', value: 'age', alignment: 'end' },
    ];
    const items = [
        { firstName: 'John', lastName: 'Doe', age: 694 },
        {
            firstName: 'Leo',
            lastName: 'Tolstoy',
            age: new Date().getFullYear() - 1828,
        },
        { firstName: 'فلان', lastName: 'الفلاني', age: 42 },
        { firstName: 'Иван', lastName: 'Иванов', age: 69 },
    ];
</script>

<Showcase>
    <Kbd>CTRL + C</Kbd>
    <Alert color="warning">
        <div class="inline-block">
            <Link color="secondary" hover>Lorem Ipsum</Link> is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
    <Table
        class="overflow-x-scroll w-full"
        padding="compact"
        {headers}
        {items}
        footers={headers}
    >
        <TableHeaderCell slot="header" let:header>
            {header.text}
        </TableHeaderCell>
        <TableCell slot="item" let:item let:header>
            {item[header.value]}
        </TableCell>
    </Table>
</Showcase>
