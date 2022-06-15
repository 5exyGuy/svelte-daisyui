import type { ClassesParams } from '../interfaces';
import type { Primitive, StringKeyOf } from 'type-fest';
import type { ScreenSize } from '../enums';

// TODO: Implement matchMedia
export function classes<T>({
    prefix,
    propData = {},
    propValues = {},
    screen = {},
    restClass = '',
}: ClassesParams<T>): string {
    const classList = [prefix];

    for (const prop in propValues) {
        const propValue = propValues[prop];
        const classPropData = propData[prop] as string | Record<string, string>;

        if (!propValue || !classPropData) continue;

        if (typeof propValue === 'boolean' && propValue && classPropData && typeof classPropData === 'string')
            classList.push(`${prefix}-${classPropData}`);
        else if (
            typeof propValue === 'string' &&
            classPropData &&
            typeof classPropData === 'object' &&
            classPropData[propValue]
        )
            classList.push(`${prefix}-${classPropData[propValue]}`);
    }

    for (const screenSize in screen) {
        const screenProps = screen[screenSize as StringKeyOf<typeof ScreenSize>] as Partial<T>;
        for (const prop in screenProps) {
            const propValue = screenProps[prop];
            const classPropData = propData[prop] as string | Record<string, string>;

            if (!propValue || !classPropData) continue;

            if (typeof propValue === 'boolean' && propValue && classPropData && typeof classPropData === 'string')
                classList.push(`${screenSize}:${prefix}-${classPropData}`);
            else if (
                typeof propValue === 'string' &&
                classPropData &&
                typeof classPropData === 'object' &&
                classPropData[propValue]
            )
                classList.push(`${screenSize}:${prefix}-${classPropData[propValue]}`);
        }
    }

    if (restClass && restClass.length > 0) {
        const restClassList = restClass.split(' ');
        classList.push(...restClassList);
    }

    console.log(classList);

    return classList.join(' ');
}

interface Example {
    color: 'primary' | 'secondary';
}

classes<Example>({
    prefix: '',
    propData: { color: { primary: '', secondary: '' } },
});
