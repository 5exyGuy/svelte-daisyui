<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import type { BrandColor } from '../../enums';
    import { createResponsiveProperties } from '../../utilities/component.utility';

    interface TestProps {
        color: StringKeyOf<typeof BrandColor>;
    }

    const { color } = createResponsiveProperties<TestProps>({ color: 'primary' }, { md: { color: 'secondary' } });
</script>

<div {...$$restProps}>
    {$color}
</div>
