import { createComponentUtilities } from './component.utility';

test('generateDefaultClasses', () => {
    const { generateDefaultClasses } = createComponentUtilities();

    interface TestProps {
        color: 'primary' | 'secondary';
        size: 'small' | 'medium' | 'large';
    }

    enum Color {
        primary = 'primary',
        secondary = 'secondary',
    }

    enum Size {
        small = 'sm',
        medium = 'md',
        large = 'lg',
    }

    const classes = generateDefaultClasses<TestProps>({
        prefix: 'test',
        data: { color: Color, size: Size },
        values: { color: 'primary', size: 'small' },
    });

    expect(classes).toStrictEqual(['test', 'test-primary', 'test-sm']);
});

test('generateResponsiveClasses', () => {
    const { generateResponsiveClasses } = createComponentUtilities();

    interface TestProps {
        color: 'primary' | 'secondary';
        size: 'small' | 'medium' | 'large';
    }

    enum Color {
        primary = 'primary',
        secondary = 'secondary',
    }

    enum Size {
        small = 'sm',
        medium = 'md',
        large = 'lg',
    }

    const classes = generateResponsiveClasses<TestProps>({
        prefix: 'test',
        data: { color: Color, size: Size },
        values: { sm: { color: 'primary' }, '2xl': { color: 'secondary', size: 'small' } },
    });

    expect(classes).toStrictEqual(['sm:test-primary', '2xl:test-secondary', '2xl:test-sm']);
});
