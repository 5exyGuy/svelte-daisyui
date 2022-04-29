<script>
    import { Drawer, Button } from '@svelte-daisyui/components';

    let visible = false;
</script>

<Drawer end bind:visible>
    <div slot="content" class="p-32">
        <Button on:click={() => (visible = !visible)}>Open drawer</Button>
    </div>
    <ul
        slot="side"
        class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"
    >
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
    </ul>
</Drawer>
