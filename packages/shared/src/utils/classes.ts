import type { ClassPropData } from '../interfaces';
import type { Primitive, StringKeyOf } from 'type-fest';
import type { ScreenSize } from '../enums';

export function classes<Props extends string>(
    prefix: string,
    classProps: Partial<Record<Props, ClassPropData>> = {},
    restClass: string = '',
    props: Record<Props, Primitive>,
    screen: Partial<
        Record<
            StringKeyOf<typeof ScreenSize>,
            Partial<Record<Props, Primitive>>
        >
    > = {},
) {
    const classList = [prefix];

    for (const prop in props) {
        const propValue = props[prop] as Primitive;
        const classPropData = classProps[prop] as ClassPropData;

        if (!propValue || !classPropData.value) continue;

        if (
            typeof propValue === 'boolean' &&
            propValue &&
            classPropData.value &&
            typeof classPropData.value === 'string'
        )
            classList.push(`${prefix}-${classPropData.value}`);
        else if (
            typeof propValue === 'string' &&
            classPropData.value &&
            typeof classPropData.value === 'object' &&
            classPropData.value[propValue]
        )
            classList.push(`${prefix}-${classPropData.value[propValue]}`);
    }

    for (const screenSize in screen) {
        const screenProps = screen[
            screenSize as StringKeyOf<typeof ScreenSize>
        ] as Partial<Record<Props, string>>;
        for (const prop in screenProps) {
            const propValue = screenProps[prop] as Primitive;
            const classPropData = classProps[prop] as ClassPropData;

            if (!propValue || !classPropData.value) continue;

            if (
                typeof propValue === 'boolean' &&
                propValue &&
                classPropData.value &&
                typeof classPropData.value === 'string'
            )
                classList.push(
                    `${screenSize}:${prefix}-${classPropData.value}`,
                );
            else if (
                typeof propValue === 'string' &&
                classPropData.value &&
                typeof classPropData.value === 'object' &&
                classPropData.value[propValue]
            )
                classList.push(
                    `${screenSize}:${prefix}-${classPropData.value[propValue]}`,
                );
        }
    }

    if (restClass && typeof restClass === 'string' && restClass.length > 0) {
        const restClassList = restClass.split(' ');
        classList.push(...restClassList);
    }

    return classList.join(' ');
}
