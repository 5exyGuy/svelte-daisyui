import { classes } from '../src/utils';
import { BrandColor } from '../src/enums';

test('btn', () => {
    const active = false;

    const actual = classes('btn', []);
    const expected = 'btn';

    expect(actual).toBe(expected);
});

test('color="primary" => btn btn-primary', () => {
    const color = 'primary';

    const actual = classes('btn', [
        {
            condition: !!color,
            key: color,
            value: BrandColor,
        },
    ]);
    const expected = 'btn btn-primary';

    expect(actual).toBe(expected);
});

test('color="secondary" => btn btn-secondary', () => {
    const color = 'secondary';

    const actual = classes('btn', [
        {
            condition: !!color,
            key: color,
            value: BrandColor,
        },
    ]);
    const expected = 'btn btn-secondary';

    expect(actual).toBe(expected);
});

test('active=false color="secondary"  => btn btn-secondary', () => {
    const active = false;
    const color = 'secondary';

    const actual = classes('btn', [
        {
            condition: active,
            value: 'active',
        },
        {
            condition: !!color,
            key: color,
            value: BrandColor,
        },
    ]);
    const expected = 'btn btn-secondary';

    expect(actual).toBe(expected);
});

test('active=true color="secondary" => btn btn-active btn-secondary ', () => {
    const active = true;
    const color = 'secondary';

    const actual = classes('btn', [
        {
            condition: active,
            value: 'active',
        },
        {
            condition: !!color,
            key: color,
            value: BrandColor,
        },
    ]);
    const expected = 'btn btn-active btn-secondary';

    expect(actual).toBe(expected);
});

test('active=true => btn btn-active', () => {
    const active = true;

    const actual = classes('btn', [
        {
            condition: active,
            value: 'active',
        },
    ]);
    const expected = 'btn btn-active';

    expect(actual).toBe(expected);
});

test('active=false => btn btn-active', () => {
    const active = false;

    const actual = classes('btn', [
        {
            condition: active,
            value: 'active',
        },
    ]);
    const expected = 'btn';

    expect(actual).toBe(expected);
});

test('active=true color="primary" restClass="m-4 p-4" => btn btn-active btn-primary m-4 p-4', () => {
    const active = true;
    const color = 'primary';
    const restClass = 'm-4 p-4';

    const actual = classes(
        'btn',
        [
            {
                condition: active,
                value: 'active',
            },
            {
                condition: !!color,
                key: color,
                value: BrandColor,
            },
        ],
        restClass,
    );
    const expected = 'btn btn-active btn-primary m-4 p-4';

    expect(actual).toBe(expected);
});
