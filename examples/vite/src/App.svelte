<script>
    import {
        Alert,
        Button,
        Avatar,
        Badge,
        Table,
        TableHeader,
        TableBody,
        TableFooter,
        TableRow,
        TableHeaderCell,
        TableCell,
    } from '@svelte-daisyui/components';

    const data = {
        insertNumbering: true,
        header: ['Vardas', 'Pavardė', 'Spalva'],
        rows: [
            ['Jonas', 'Jonaitis', 'Mėlyna'],
            ['Antanas', 'Antanaitis', 'Raudona'],
        ],
    };
</script>

<!-- <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col max-w-2xl gap-2"> -->
<Avatar
    size="lg"
    src="https://picsum.photos/1000/1000"
    status="online"
    screen={{ '2xl': { status: 'offline', size: 'lg' } }}
/>
<Alert
    color="info"
    screen={{ sm: { color: 'error' }, xl: { color: 'success' } }}
>
    <span>
        Lorem Ipsum teksto variantas atrodo tikroviškai, nesikartoja, ir jame
        nėra „neįmanomų“ žodžių. Lorem Ipsum teksto variantas atrodo
        tikroviškai, nesikartoja, ir jame nėra „neįmanomų“ žodžių. Lorem Ipsum
        teksto variantas atrodo tikroviškai, nesikartoja, ir jame nėra
        „neįmanomų“ žodžių. Lorem Ipsum teksto variantas atrodo tikroviškai,
        nesikartoja, ir jame nėra „neįmanomų“ žodžių.
        <Badge
            color="error"
            outline
            screen={{ sm: { color: 'info' }, xl: { color: 'error' } }}
            >Hello world</Badge
        >
    </span>
    <Button slot="actions">Skaityti daugiau...</Button>
</Alert>

<Table>
    <TableHeader>
        <TableRow>
            <TableHeaderCell>Number</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Job</TableHeaderCell>
            <TableHeaderCell>Favorite Color</TableHeaderCell>
        </TableRow>
    </TableHeader>
    <TableBody>
        <!-- row 1 -->
        <TableRow hover>
            <TableHeaderCell>1</TableHeaderCell>
            <TableCell>Cy Ganderton</TableCell>
            <TableCell>Quality Control Specialist</TableCell>
            <TableCell>Blue</TableCell>
        </TableRow>
        <!-- row 2 -->
        <TableRow active>
            <TableHeaderCell>2</TableHeaderCell>
            <TableCell>Hart Hagerty</TableCell>
            <TableCell>Desktop Support Technician</TableCell>
            <TableCell>Purple</TableCell>
        </TableRow>
        <!-- row 3 -->
        <TableRow active>
            <TableHeaderCell>3</TableHeaderCell>
            <TableCell>Brice Swyre</TableCell>
            <TableCell>Tax Accountant</TableCell>
            <TableCell>Red</TableCell>
        </TableRow>
    </TableBody>
    <TableFooter>
        <TableRow>
            <TableHeaderCell>Number</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Job</TableHeaderCell>
            <TableHeaderCell>Favorite Color</TableHeaderCell>
        </TableRow>
    </TableFooter>
</Table>

<Table {data} />
