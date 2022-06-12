<script>
    import { Avatar, AvatarGroup } from '@svelte-daisyui/components';
    import Showcase from './Showcase.svelte';
</script>

<Showcase>
    <AvatarGroup space="-10rem">
        <Avatar
            status="online"
            imgProps={{ src: 'https://picsum.photos/200', alt: 'test' }}
        />
        <Avatar imgProps={{ src: 'https://picsum.photos/200', alt: 'test' }} />
        <Avatar
            status="online"
            imgProps={{ src: 'https://picsum.photos/200', alt: 'test' }}
        />
    </AvatarGroup>
</Showcase>
