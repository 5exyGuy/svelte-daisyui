<script>
    import { Card } from '@svelte-daisyui/components';
</script>

<Card bordered side>
    <figure slot="upper">
        <figure>
            <img
                src="https://api.lorem.space/image/movie?w=200&h=280"
                alt="Movie"
            />
        </figure>
    </figure>
    <svelte:fragment slot="title">Title</svelte:fragment>
    <svelte:fragment slot="body">Body</svelte:fragment>
    <svelte:fragment slot="actions">Actions</svelte:fragment>
</Card>
