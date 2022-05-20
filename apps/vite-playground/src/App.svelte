<script>
    import { Alert, Button } from '@svelte-daisyui/components';
</script>

<div class="flex justify-center items-center h-screen">
    <div class="flex flex-col max-w-2xl gap-2">
        <Alert
            color="info"
            screen={{ sm: { color: 'error' }, xl: { color: 'success' } }}
        >
            <span>
                Lorem Ipsum teksto variantas atrodo tikroviškai, nesikartoja, ir
                jame nėra „neįmanomų“ žodžių. Lorem Ipsum teksto variantas
                atrodo tikroviškai, nesikartoja, ir jame nėra „neįmanomų“
                žodžių. Lorem Ipsum teksto variantas atrodo tikroviškai,
                nesikartoja, ir jame nėra „neįmanomų“ žodžių. Lorem Ipsum teksto
                variantas atrodo tikroviškai, nesikartoja, ir jame nėra
                „neįmanomų“ žodžių.
            </span>
            <Button slot="actions">Skaityti daugiau...</Button>
        </Alert>
    </div>
</div>
