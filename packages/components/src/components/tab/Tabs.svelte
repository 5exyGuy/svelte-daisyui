<script lang="ts">
    import { Maybe } from '../../utils../../enums/maybe.typert { Size, SizeKey } from '../../e../../enums/size.enumimport { TabsType, TabsTypeKey } from './tabs-type.enum';

    // Props
    export let type: Maybe<TabsTypeKey> = null;
    export let size: Maybe<SizeKey> = null;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('tabs');
    if (type) classes.push(`tabs-${TabsType[type]}`);
    if (size) classes.push(`tabs-${Size[size]}`);

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass}>
    <slot />
</div>

<style global lang="less">
    @import 'Tabs.less';
</style>
