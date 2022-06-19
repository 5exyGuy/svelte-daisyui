import type { StringKeyOf } from 'type-fest';
import { ScreenSize } from '../enums';
import type { Screen } from '../types';
import { writable, Writable, get } from 'svelte/store';
import { ScreenSizeMinWidth } from '../enums/screen-size-min-width.enum';
import { onMount } from 'svelte';

//
//
//

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

//
//
//

export function generateResponsiveClasses<T>(
    prefix: string,
    data: { [K in keyof T]: T[K] extends boolean ? string : T[K] extends string ? Record<T[K], string> : string },
    values: Screen<T>,
): Array<string> {
    const classList = [] as Array<string>;

    Object.keys(ScreenSize).forEach((screenSize: StringKeyOf<typeof ScreenSize>) => {
        const screenProps = values[ScreenSize[screenSize]];
        if (!screenProps) return;

        Object.entries(screenProps).forEach(([propName, propValue]) => {
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

//
//
//

interface ResponsivePropertiesResult<T> {
    defaultValues: Writable<T>;
    values: Writable<Screen<T>>;
    screenSize: Writable<ScreenSize>;
    update: (defaultValues: T, values: Screen<T>) => void;
}

export function createResponsiveProperties<T>(
    defaultValues: T,
    values: Screen<T>,
): { [K in keyof T]: Writable<T[K]> } & ResponsivePropertiesResult<T> {
    const defaultValuesStore = writable<typeof defaultValues>(defaultValues);
    const valuesStore = writable<typeof values>(values);
    const responsivePropertiesStore = {} as { [K in keyof T]: Writable<T[K]> };
    const screenSizeStore = writable<ScreenSize>();

    // Create responsive properties from default values
    Object.keys(defaultValues).forEach((propName) => (responsivePropertiesStore[propName] = writable()));

    // Create missing responsive properties from values
    Object.values(values).forEach((screenProps) =>
        Object.keys(screenProps).forEach((propName) => {
            if (responsivePropertiesStore[propName]) return;
            responsivePropertiesStore[propName] = writable();
        }),
    );

    onMount(() => {
        // Create media queries from screen sizes
        const mediaQueries = Object.keys(ScreenSize)
            .map((screenSize: ScreenSize) => [
                ScreenSize[screenSize],
                window.matchMedia(`(min-width: ${ScreenSizeMinWidth[screenSize]})`),
            ])
            .reverse() as [ScreenSize, MediaQueryList][];
        // Flip media queries to map screen size to media query
        const sizeByMedia = Object.fromEntries(
            mediaQueries.map(([screenSize, mediaQuery]) => [mediaQuery.media, screenSize]),
        ) as Record<`(min-width: ${StringKeyOf<Record<ScreenSizeMinWidth, string>>})`, ScreenSize>;

        const mediaQuery = mediaQueries.find(([, mediaQuery]) => mediaQuery.matches);
        let screenSize = mediaQuery ? mediaQuery[0] : undefined;
        screenSizeStore.set(screenSize);

        // Create media query listeners
        function handleMediaChange({ matches, media }: MediaQueryListEvent) {
            const random = Math.floor(Math.random() * 100);
            console.time(`${media} [${random}]`);

            if (!matches) {
                const mediaQueryIndex = mediaQueries.findIndex(([, mediaQuery]) => mediaQuery.media === media);
                if (mediaQueryIndex === -1 || mediaQueryIndex + 1 === mediaQueries.length) {
                    screenSizeStore.set(undefined);
                    console.timeEnd(`${media} [${random}]`);
                    return;
                }
                const previousMediaQuery = mediaQueries[mediaQueryIndex + 1];
                screenSizeStore.set(previousMediaQuery ? previousMediaQuery[0] : undefined);
                console.timeEnd(`${media} [${random}]`);
                return;
            }

            screenSizeStore.set(
                sizeByMedia[media as `(min-width: ${StringKeyOf<Record<ScreenSizeMinWidth, string>>})`],
            );

            console.timeEnd(`${media} [${random}]`);
        }

        const unsubScreenSize = screenSizeStore.subscribe((_screenSize) => {
            screenSize = _screenSize;
            updateResponsiveProperties(defaultValues, values, responsivePropertiesStore, _screenSize);
        });

        const unsubDefaultValues = defaultValuesStore.subscribe((_defaultValues) => {
            defaultValues = _defaultValues;
            updateResponsiveProperties(_defaultValues, values, responsivePropertiesStore, screenSize);
        });

        const unsubValues = valuesStore.subscribe((_values) => {
            values = _values;
            updateResponsiveProperties(defaultValues, _values, responsivePropertiesStore, screenSize);
        });

        // Add media query listeners
        mediaQueries.forEach(([_screenSize, mediaQuery]) => mediaQuery.addEventListener('change', handleMediaChange));

        // Remove media query listeners on unmount
        return () => {
            mediaQueries.forEach(([_screenSize, mediaQuery]) =>
                mediaQuery.removeEventListener('change', handleMediaChange),
            );
            unsubScreenSize();
            unsubDefaultValues();
            unsubValues();
        };
    });

    return {
        defaultValues: defaultValuesStore,
        values: valuesStore,
        screenSize: screenSizeStore,
        update: (defaultValues: T, values: Screen<T>) => {
            defaultValuesStore.set(defaultValues);
            valuesStore.set(values);
        },
        ...responsivePropertiesStore,
    };
}

function updateResponsiveProperties<T>(
    defaultValues: T,
    values: Screen<T>,
    responsiveProperties: { [K in keyof T]: Writable<T[K]> },
    screenSize: ScreenSize,
) {
    const props = screenSize ? values[screenSize] : defaultValues;
    if (!props) return;

    Object.entries(props).forEach(([propName, propValue]) => {
        const propStore = responsiveProperties[propName];
        propStore.set(propValue);
    });
}
