import type { StringKeyOf, ValueOf } from 'type-fest';
import { ScreenSize } from '../enums';
import type { Screen } from '../types';
import { writable, Writable, Readable, readable, Subscriber } from 'svelte/store';
import { ScreenSizeMinWidth } from '../enums/screen-size-min-width.enum';
import { onMount } from 'svelte';

export function generateDefaultClasses<T>(
    prefix: string,
    data: { [K in keyof T]: T[K] extends boolean ? string : T[K] extends string ? Record<T[K], string> : string },
    values: T,
): Array<string> {
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

export function generateResponsiveClasses<T>(
    prefix: string,
    data: { [K in keyof T]: T[K] extends boolean ? string : T[K] extends string ? Record<T[K], string> : string },
    values: Screen<T>,
    include: Record<keyof T, boolean>,
): Array<string> {
    const classList = [] as Array<string>;

    Object.keys(ScreenSize).forEach((screenSize: StringKeyOf<typeof ScreenSize>) => {
        const screenProps = values[ScreenSize[screenSize]];
        if (!screenProps) return;

        Object.entries(screenProps).forEach(([propName, propValue]) => {
            if (!include[propName]) return;
            const propData = data[propName] as string | Record<keyof T, string>;

            if (!propValue || !propData) return;

            if (typeof propValue === 'boolean' && propValue && propData && typeof propData === 'string')
                classList.push(`${ScreenSize[screenSize]}:${prefix}-${propData}`);
            else if (typeof propValue === 'string' && propData && typeof propData === 'object' && propData[propValue])
                classList.push(`${ScreenSize[screenSize]}:${prefix}-${propData[propValue]}`);
        });
    });

    return classList;
}

export function joinClasses(...classList: Array<Array<string>>): string {
    return classList.reduce((acc, curr) => acc.concat(curr), []).join(' ');
}

interface ResponsivePropertiesResult<T> {
    update: (defaultValues: T, values: Screen<T>) => void;
}

const SCREEN_SIZES = Object.values(ScreenSize).reverse() as Array<StringKeyOf<Record<ScreenSize, string>>>;

export function createResponsiveProperties<T>(
    defaultValues: T,
    values: Screen<T>,
    include: Array<keyof T>,
): Record<keyof T, Readable<ValueOf<T, keyof T>>> & ResponsivePropertiesResult<T> {
    const defaultValuesStore = writable<typeof defaultValues>(defaultValues);
    const valuesStore = writable<typeof values>(values);
    const responsivePropertyStores = [] as Array<[keyof T, Readable<ValueOf<T>>]>;
    const responsivePropertySetters = {} as Record<keyof T, Subscriber<ValueOf<T>>>;
    const screenSizeStore = writable<ScreenSize>();

    // Create responsive properties from default values
    include.forEach((propName) => {
        const propStore = readable<ValueOf<T>>(undefined, (set) => {
            responsivePropertySetters[propName] = set;
        });
        responsivePropertyStores.push([propName, propStore]);
    });

    onMount(() => {
        // Create media queries from screen sizes
        const mediaQueries = SCREEN_SIZES.map((screenSize: ScreenSize) => [
            ScreenSize[screenSize],
            window.matchMedia(`(min-width: ${ScreenSizeMinWidth[screenSize]})`),
        ]) as [ScreenSize, MediaQueryList][];
        // Flip media queries to map screen size to media query
        const sizeByMedia = Object.fromEntries(
            mediaQueries.map(([screenSize, mediaQuery]) => [mediaQuery.media, screenSize]),
        ) as Record<`(min-width: ${StringKeyOf<Record<ScreenSizeMinWidth, string>>})`, ScreenSize>;

        const mediaQuery = mediaQueries.find(([, mediaQuery]) => mediaQuery.matches);
        let screenSize = mediaQuery ? mediaQuery[0] : undefined;
        screenSizeStore.set(screenSize);

        // Create media query listeners
        function handleMediaChange({ matches, media }: MediaQueryListEvent) {
            if (!matches) {
                const mediaQueryIndex = mediaQueries.findIndex(([, mediaQuery]) => mediaQuery.media === media);
                if (mediaQueryIndex === -1 || mediaQueryIndex + 1 === mediaQueries.length) {
                    screenSizeStore.set(undefined);
                    return;
                }
                const previousMediaQuery = mediaQueries[mediaQueryIndex + 1];
                screenSizeStore.set(previousMediaQuery ? previousMediaQuery[0] : undefined);
                return;
            }

            screenSizeStore.set(
                sizeByMedia[media as `(min-width: ${StringKeyOf<Record<ScreenSizeMinWidth, string>>})`],
            );
        }

        const unsubScreenSize = screenSizeStore.subscribe((_screenSize) => {
            screenSize = _screenSize;
            updateResponsiveProperties(
                defaultValues,
                values,
                responsivePropertyStores,
                responsivePropertySetters,
                screenSize,
            );
        });

        const unsubDefaultValues = defaultValuesStore.subscribe((_defaultValues) => {
            defaultValues = _defaultValues;
            updateResponsiveProperties(
                defaultValues,
                values,
                responsivePropertyStores,
                responsivePropertySetters,
                screenSize,
            );
        });

        const unsubValues = valuesStore.subscribe((_values) => {
            values = _values;
            updateResponsiveProperties(
                defaultValues,
                values,
                responsivePropertyStores,
                responsivePropertySetters,
                screenSize,
            );
        });

        // Add media query listeners
        mediaQueries.forEach(([, mediaQuery]) => mediaQuery.addEventListener('change', handleMediaChange));

        // Remove media query listeners on unmount
        return () => {
            mediaQueries.forEach(([, mediaQuery]) => mediaQuery.removeEventListener('change', handleMediaChange));
            unsubScreenSize();
            unsubDefaultValues();
            unsubValues();
        };
    });

    return {
        update: (defaultValues: T, values: Screen<T>) => {
            defaultValuesStore.set(defaultValues);
            valuesStore.set(values);
        },
        ...Object.fromEntries(responsivePropertyStores),
    };
}

function updateResponsiveProperties<T>(
    defaultValues: T,
    values: Screen<T>,
    responsiveProperties: Array<Record<keyof T, Readable<ValueOf<T, keyof T>>>>,
    responsivePropertySetters: Record<keyof T, Subscriber<ValueOf<T>>>,
    screenSize: ScreenSize,
) {
    if (!screenSize) {
        responsiveProperties.forEach(([propName]) => responsivePropertySetters[propName](defaultValues[propName]));
        return;
    }

    Object.keys(responsiveProperties).forEach((propName) => {
        const propValue = values[propName][screenSize];
        if (propValue) {
            responsivePropertySetters[propName](propValue);
        }
    });
}
