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

const SCREEN_SIZES = Object.entries(ScreenSize).reverse() as Array<[StringKeyOf<typeof ScreenSize>, ScreenSize]>;

export function createResponsiveProperties<T>(
    defaultValues: T,
    values: Screen<T>,
    include: Array<keyof T>,
): Record<keyof T, Readable<ValueOf<T>>> & ResponsivePropertiesResult<T> {
    const responsivePropertyStores = [] as Array<[keyof T, Readable<ValueOf<T>>]>;
    const responsivePropertySetters = {} as Record<keyof T, Subscriber<ValueOf<T>>>;

    let screenSize: ScreenSize;

    // Create responsive properties from default values
    include.forEach((propName) => {
        const propStore = readable<ValueOf<T>>(undefined, (set) => {
            responsivePropertySetters[propName] = set;
        });
        responsivePropertyStores.push([propName, propStore]);
    });

    onMount(() => {
        // Create media queries from screen sizes
        const mediaQueries = SCREEN_SIZES.map(([key, screenSize]) => [
            screenSize,
            window.matchMedia(`(min-width: ${ScreenSizeMinWidth[key]})`),
        ]) as [ScreenSize, MediaQueryList][];
        // Flip media queries to map screen size to media query
        const sizeByMedia = Object.fromEntries(
            mediaQueries.map(([screenSize, mediaQuery]) => [mediaQuery.media, screenSize]),
        ) as Record<`(min-width: ${StringKeyOf<Record<ScreenSizeMinWidth, string>>})`, ScreenSize>;

        const mediaQuery = mediaQueries.find(([, mediaQuery]) => mediaQuery.matches);
        screenSize = mediaQuery ? mediaQuery[0] : undefined;

        function updateScreenSize(_screenSize: ScreenSize) {
            screenSize = _screenSize;
            updateResponsiveProperties(
                defaultValues,
                values,
                responsivePropertyStores,
                responsivePropertySetters,
                screenSize,
            );
        }

        updateScreenSize(screenSize);

        // Create media query listeners
        function handleMediaChange({ matches, media }: MediaQueryListEvent) {
            if (!matches) {
                const mediaQueryIndex = mediaQueries.findIndex(([, mediaQuery]) => mediaQuery.media === media);
                if (mediaQueryIndex === -1 || mediaQueryIndex + 1 === mediaQueries.length) {
                    updateScreenSize(undefined);
                    return;
                }
                const previousMediaQuery = mediaQueries[mediaQueryIndex + 1];
                updateScreenSize(previousMediaQuery ? previousMediaQuery[0] : undefined);
                return;
            }

            updateScreenSize(sizeByMedia[media as `(min-width: ${StringKeyOf<Record<ScreenSizeMinWidth, string>>})`]);
        }

        // Add media query listeners
        mediaQueries.forEach(([, mediaQuery]) => mediaQuery.addEventListener('change', handleMediaChange));

        // Remove media query listeners on unmount
        return () => {
            mediaQueries.forEach(([, mediaQuery]) => mediaQuery.removeEventListener('change', handleMediaChange));
        };
    });

    return {
        update: (_defaultValues: T, _values: Screen<T>) => {
            defaultValues = _defaultValues;
            values = _values;

            updateResponsiveProperties(
                defaultValues,
                values,
                responsivePropertyStores,
                responsivePropertySetters,
                screenSize,
            );
        },
        ...(Object.fromEntries(responsivePropertyStores) as Record<keyof T, Readable<ValueOf<T>>>),
    };
}

function updateResponsiveProperties<T>(
    defaultValues: T,
    values: Screen<T>,
    responsivePropertyStores: Array<[keyof T, Readable<ValueOf<T>>]>,
    responsivePropertySetters: Record<keyof T, Subscriber<ValueOf<T>>>,
    screenSize: ScreenSize,
) {
    if (!screenSize) {
        responsivePropertyStores.forEach(([propName]) => {
            const defaultPropValue = defaultValues[propName];
            if (!defaultPropValue) return;
            responsivePropertySetters[propName](defaultPropValue);
        });
        return;
    }

    responsivePropertyStores.forEach(([propName]) => {
        const screenSizeProps = values ? values[screenSize] : undefined;
        if (!screenSizeProps) {
            const [, screenSize] = SCREEN_SIZES.find(([, screenSize]) => {
                const screenSizeProps = values ? values[screenSize] : undefined;
                return screenSizeProps ? !!screenSizeProps[propName] : false;
            });
            if (!screenSize) return;
            responsivePropertySetters[propName](values[screenSize][propName]);
        }

        const propValue = screenSizeProps ? screenSizeProps[propName] : undefined;
        if (!propValue) return;
        responsivePropertySetters[propName](propValue);
    });
}
