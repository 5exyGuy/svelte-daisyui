<script>
    import { testFunction } from './test';

    export let testProp = 1;

    const { test } = testFunction(testProp);
</script>

{$test}
