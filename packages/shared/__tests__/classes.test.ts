import { classes } from '../src/utils';
import { BrandColor, FunctionalColor } from '../src/enums';

test('test 1', () => {
    const actual = classes('alert', {
        color: {
            condition: true,
            key: 'primary',
            value: { ...BrandColor, ...FunctionalColor },
        },
    });
    const expected = 'alert alert-primary';

    expect(actual).toBe(expected);
});

test('test2', () => {
    const actual = classes('alert', {
        color: {
            condition: true,
            value: 'primary',
        },
    });
    const expected = 'alert alert-primary';

    expect(actual).toBe(expected);
});
