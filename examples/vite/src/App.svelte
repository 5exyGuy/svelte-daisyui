<script>
    import Alert from '@svelte-daisyui/components/src/components/alert/Alert.svelte';
    import Artboard from '@svelte-daisyui/components/src/components/artboard/Artboard.svelte';
    import Showcase from './Showcase.svelte';
</script>

<Showcase>
    <Artboard
        size="320x1024"
        alignment="vertical"
        screen={{ sm: { size: '320x568', alignment: 'vertical' }, lg: { size: '414x896', alignment: 'horizontal' } }}
        >Hello world</Artboard
    >
</Showcase>
