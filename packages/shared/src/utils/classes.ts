import type { ClassPropData } from '../interfaces/class-prop-data.interface';
// import type { Screen } from '../interfaces/screen.interface';

export function classes(
    // <
    //     T,
    //     K extends string = 'sm' | 'md' | 'lg' | 'xl' | '2xl',
    // >
    prefix: string,
    classProps: Array<ClassPropData>,
    restClass: string,
    // screen: Screen<T, K>,
) {
    const classList = [prefix];

    for (const prop in classProps) {
        const { condition, key, value } = classProps[prop] as ClassPropData;
        if (!condition) continue;
        if (key && typeof value !== 'string' && value[key])
            classList.push(`${prefix}-${value[key]}`);
        else classList.push(`${prefix}-${value}`);
    }

    // for (const screenSize in screen) {
    //     const screenProps = screen[screenSize];
    //     for (const prop in screenProps) {
    //         const { condition, key, value } = screenProps[prop];
    //         if (!condition) continue;
    //         if (key && typeof value !== 'string' && value[key])
    //             classList.push(`${screenSize}:${prefix}-${value[key]}`);
    //         else
    //             classList.push(
    //                 `${screenSize}:${prefix}-${screenSize}-${value}`,
    //             );
    //     }
    // }

    if (restClass && typeof restClass === 'string' && restClass.length > 0) {
        const restClassList = restClass.split(' ');
        classList.push(...restClassList);
    }

    return classList.join(' ');
}
