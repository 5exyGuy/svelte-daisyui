<script>
    import { Avatar, AvatarGroup } from '@svelte-daisyui/components';
    import Showcase from './Showcase.svelte';
</script>

<Showcase>
    <AvatarGroup avatar={{}} space="-5rem">
        <Avatar
            status="online"
            imgProps={{
                src: 'https://picsum.photos/seed/test01/200',
                alt: 'test',
            }}
        />
        <Avatar
            imgProps={{
                src: 'https://picsum.photos/seed/test02/200',
                alt: 'test',
            }}
        />
        <Avatar
            status="online"
            imgProps={{
                src: 'https://picsum.photos/seed/test03/200',
                alt: 'test',
            }}
        />
    </AvatarGroup>
</Showcase>
