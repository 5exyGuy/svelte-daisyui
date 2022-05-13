<script>
    import { Alert, Button } from '@svelte-daisyui/components';
</script>

<div class="flex justify-center items-center h-screen">
    <div class="flex flex-col max-w-2xl gap-2">
        <Alert color="primary">
            Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas
            spaustuvininkas atsitiktine tvarka išdėliojo raides atspaudų prese
            ir tokiu būdu sukūrė raidžių egzempliorių.
        </Alert>
        <Alert color="secondary">
            Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio
            dizaino pasaulyje jau nuo XVI a. pradžios.
        </Alert>
        <Alert color="accent">
            Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas
            spaustuvininkas atsitiktine tvarka išdėliojo raides atspaudų prese
            ir tokiu būdu sukūrė raidžių egzempliorių.
        </Alert>
        <Alert color="success">
            Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio
            dizaino pasaulyje jau nuo XVI a. pradžios.
        </Alert>
        <Alert color="warning">
            Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio
            dizaino pasaulyje jau nuo XVI a. pradžios.
        </Alert>
        <Alert color="error">
            Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio
            dizaino pasaulyje jau nuo XVI a. pradžios.
        </Alert>
        <Alert color="info" class="lg:alert-primary xl:alert-secondary">
            Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio
            dizaino pasaulyje jau nuo XVI a. pradžios.
            <Button slot="actions" color="primary">Skaityti</Button>
        </Alert>
    </div>
</div>
