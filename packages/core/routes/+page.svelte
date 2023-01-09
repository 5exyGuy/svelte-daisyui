<script lang="ts">
    import Alert from '$lib/Alert.svelte';
</script>

<h1 class="test">Page</h1>
<Alert color="primary">Hello world</Alert>

<style global>
    .test {
        color: red;
    }

    :global(.test1) {
        color: blue;
    }
</style>
