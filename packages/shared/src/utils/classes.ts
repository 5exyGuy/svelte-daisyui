import type { ClassPropData } from '../interfaces/class-prop-data.interface';

export function classes(
    prefix: string,
    classProps: Array<ClassPropData>,
    restClass?: string,
) {
    const classList = [prefix];

    for (const prop in classProps) {
        const { condition, key, value } = classProps[prop] as ClassPropData;
        if (!condition) continue;
        if (key && typeof value !== 'string' && value[key])
            classList.push(`${prefix}-${value[key]}`);
        else classList.push(`${prefix}-${value}`);
    }

    if (restClass && typeof restClass === 'string' && restClass.length > 0) {
        const restClassList = restClass.split(' ');
        classList.push(...restClassList);
    }

    return classList.join(' ');
}
