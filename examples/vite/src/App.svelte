<script>
    import Showcase from './Showcase.svelte';
    import Alert from '@svelte-daisyui/components/src/components/alert/Alert.svelte';
    // import Avatar from '@svelte-daisyui/components/src/components/avatar/Avatar.svelte';
</script>

<Showcase>
    <Alert color="error" screen={{ md: { color: 'accent' } }}>Hello world</Alert>
</Showcase>
