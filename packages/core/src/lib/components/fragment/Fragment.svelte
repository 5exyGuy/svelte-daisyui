<script lang="ts">
    function fragment(node: HTMLTemplateElement) {
        node.parentElement.appendChild(node.content);
        node.setAttribute('style', 'display: none;');

        return {
            destroy() {
                node && node.parentElement && node.parentElement.removeChild(node.content);
            },
        };
    }
</script>

<template use:fragment>
    <slot {...$$restProps} />
</template>
