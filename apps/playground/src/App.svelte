<script>
    import { Rating } from '@svelte-daisyui/components';
</script>

<div class="p-16">
    <Rating size="large" half>
        <input type="radio" name="rating-1" class="mask mask-star" />
        <input type="radio" name="rating-1" class="mask mask-star" checked />
        <input type="radio" name="rating-1" class="mask mask-star" />
        <input type="radio" name="rating-1" class="mask mask-star" />
        <input type="radio" name="rating-1" class="mask mask-star" />
    </Rating>
</div>
