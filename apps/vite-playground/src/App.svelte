<script>
    import { Alert, Button } from '@svelte-daisyui/components';
</script>

<div class="flex justify-center items-center h-screen">
    <div class="flex flex-col max-w-2xl gap-2">
        <Alert color="info">
            Lorem Ipsum teksto variantas atrodo tikroviškai, nesikartoja, ir
            jame nėra „neįmanomų“ žodžių.
            <svelte:fragment slot="actions"
                ><Button slot="actions" color="secondary">Vienas</Button>
                <Button slot="actions" color="secondary">Du</Button>
            </svelte:fragment>
        </Alert>
    </div>
</div>
