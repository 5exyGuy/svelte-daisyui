<script>
    import { Collapse } from '@svelte-daisyui/components';
</script>

<div class="p-4">
    <Collapse open icon="plus" class="border border-base-300 bg-base-100">
        <div slot="title" class="text-xl font-medium">
            Focus me to see content
        </div>
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
    </Collapse>
</div>
