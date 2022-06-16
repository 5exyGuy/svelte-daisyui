import { writable } from 'svelte/store';

/**
 * @param {number} testProp
 */
export function testFunction(testProp) {
    const test = writable(testProp);

    setInterval(() => {
        test.update((value) => value + 1);
    }, 1000);

    return { test };
}
