<script lang="ts">
    // Props
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('countdown');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);
</script>

<style lang="less">
    @import 'Countdown.less';
</style>
