import type { StringKeyOf } from 'type-fest';
import { ScreenSize } from '../enums';
import type { Screen } from '../types';
import { writable, Writable, get } from 'svelte/store';
import { ScreenSizeMinWidth } from '../enums/screen-size-min-width.enum';
import { onMount } from 'svelte';

export function createComponentUtilities() {
    return { generateDefaultClasses, generateResponsiveClasses, createResponsiveProperties };
}

//
//
//

interface DefaultClasses<T> {
    prefix: string;
    data: { [K in keyof T]: T[K] extends boolean ? string : T[K] extends string ? Record<T[K], string> : string };
    values: T;
}

function generateDefaultClasses<T>({ prefix, data, values }: DefaultClasses<T>): Array<string> {
    const classList = [prefix];

    Object.entries(values).forEach(([propName, propValue]) => {
        const propData = data[propName] as string | Record<keyof T, string>;

        if (!propValue || !propData) return;

        if (typeof propValue === 'boolean' && propValue && propData && typeof propData === 'string')
            classList.push(`${prefix}-${propData}`);
        else if (typeof propValue === 'string' && propData && typeof propData === 'object' && propData[propValue])
            classList.push(`${prefix}-${propData[propValue]}`);
    });

    return classList;
}

//
//
//

interface ResponsiveClasses<T> extends Omit<DefaultClasses<T>, 'values'> {
    values: Screen<T>;
}

function generateResponsiveClasses<T>({ prefix, data, values }: ResponsiveClasses<T>): Array<string> {
    const classList = [] as Array<string>;

    Object.keys(ScreenSize).forEach((screenSize: StringKeyOf<typeof ScreenSize>) => {
        const screenProps = values[screenSize as StringKeyOf<typeof ScreenSize>];

        Object.entries(screenProps).forEach(([propName, propValue]) => {
            const propData = data[propName] as string | Record<keyof T, string>;

            if (!propValue || !propData) return;

            if (typeof propValue === 'boolean' && propValue && propData && typeof propData === 'string')
                classList.push(`${screenSize}:${prefix}-${propData}`);
            else if (typeof propValue === 'string' && propData && typeof propData === 'object' && propData[propValue])
                classList.push(`${screenSize}:${prefix}-${propData[propValue]}`);
        });
    });

    return classList;
}

//
//
//

interface ResponsiveProperties<T> extends Pick<ResponsiveClasses<T>, 'values'> {
    defaultValues: T;
}

interface ResponsivePropertiesResult<T> {
    stores: {
        defaultValues: Writable<T>;
        values: Writable<Screen<T>>;
        medias: Writable<Map<StringKeyOf<typeof ScreenSize>, MediaQueryList>>;
    };
}

function createResponsiveProperties<T>({
    defaultValues,
    values,
}: ResponsiveProperties<T>): { [K in keyof T]: Writable<T[K]> } & ResponsivePropertiesResult<T> {
    const defaultValuesStore = writable<typeof defaultValues>(defaultValues);
    const valuesStore = writable<typeof values>(values);
    const responsivePropertiesStore = {} as { [K in keyof T]: Writable<T[K]> };
    const mediasStore = writable(new Map<StringKeyOf<typeof ScreenSize>, MediaQueryList>());

    Object.entries(defaultValues).forEach(
        ([propName, propValue]) => (responsivePropertiesStore[propName] = writable(propValue)),
    );

    Object.entries(values).forEach(([screenSize, screenProps]) =>
        Object.keys(screenProps).forEach((propName) => {
            if (responsivePropertiesStore[propName]) return;
            responsivePropertiesStore[propName] = writable();
        }),
    );

    onMount(() => {
        Object.keys(ScreenSize).forEach((screenSize: StringKeyOf<typeof ScreenSize>) => {
            const media = window.matchMedia(`(min-width: ${ScreenSizeMinWidth[screenSize]})`);
            mediasStore.update((medias) => medias.set(screenSize, media));
        });

        const medias = get(mediasStore);

        function handleMediaChange({ matches, media }: MediaQueryListEvent) {}

        medias.forEach((media) => media.addEventListener('change', handleMediaChange));

        return () => {
            medias.forEach((media) => media.removeEventListener('change', handleMediaChange));
        };
    });

    return {
        stores: { defaultValues: defaultValuesStore, values: valuesStore, medias: mediasStore },
        ...responsivePropertiesStore,
    };
}

function updateResponsiveProperties<T>(
    { defaultValues, values }: ResponsiveProperties<T>,
    result: { [K in keyof T]: Writable<T[K]> } & ResponsivePropertiesResult<T>,
) {
    result.stores.defaultValues.set(defaultValues);
    result.stores.values.set(values);
}
