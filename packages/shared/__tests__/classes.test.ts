import { classes } from '../src/utils';
import { BrandColor } from '../src/enums/brand-color.enum';

test('btn btn-primary xl:btn-accent', () => {
    const prefix = 'btn';
    const restClass = '';
    // const classProps = {
    //     color: {
    //         value: BrandColor,
    //     },
    // };

    // const props = {
    //     color: 'primary',
    // };
    // const screen = {
    //     xl: { color: 'accent' },
    // };

    const actual = classes(
        prefix,
        { color: { value: BrandColor }, active: { value: 'active' } },
        restClass,
        { color: 'primary', active: true },
        { xl: { color: 'accent', active: false } },
    );
    const expected = 'btn btn-primary btn-active xl:btn-accent';

    expect(actual).toBe(expected);
});
