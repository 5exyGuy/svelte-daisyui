<script>
    import { Window } from '@svelte-daisyui/components';
    import Showcase from './Showcase.svelte';
</script>

<Showcase>
    <Window bordered class="bg-base-300">
        <div class="px-4 py-4 bg-base-200 w-52">
            <pre data-prefix=">">Hello</pre>
            Hello!
        </div>
    </Window>
</Showcase>
