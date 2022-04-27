/**
 * @template T
 * @typedef {null | undefined | T} Nullable
 */

/**
 * @typedef ClassPropData
 * @prop {Nullable<boolean>} condition
 * @prop {Nullable<string>} key
 * @prop {string | Record<string, string>} value
 */

/**
 * @typedef ClassProps
 * @prop {Record<string, ClassPropData>} name
 */

/**
 *
 * @param {string} prefix
 * @param {ClassProps} classProps
 * @param {*} restClass
 * @returns
 */
export function classes(prefix, classProps, restClass) {
    const classList = [prefix];

    for (const prop in classProps) {
        const { condition, key, value } = classProps[prop];
        if (!condition) continue;
        if (key && typeof value !== 'string' && value[key]) classList.push(`${prefix}-${value[key]}`);
        else classList.push(`${prefix}-${value}`);
    }

    if (restClass && typeof restClass === 'string' && restClass.length > 0) {
        const restClassList = restClass.split(' ');
        classList.push(...restClassList);
    }

    return classList.join(' ');
}
