<script>
    import { Alert, Button, Avatar, Badge } from '@svelte-daisyui/components';
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
<!-- </div>
</div> -->
