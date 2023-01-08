// import { type Readable, writable, type Subscriber } from 'svelte/store';
// import { onMount } from 'svelte';

// const SCREEN_SIZES = Object.entries(ScreenSize).reverse() as Array<
// 	[StringKeyOf<typeof ScreenSize>, ScreenSize]
// >;
// const SCREEN_SIZE_INDICES = Object.fromEntries(SCREEN_SIZES.map(([screenSize], index) => [screenSize, index]));
// console.log(SCREEN_SIZE_INDICES);

// interface ResponsivePropertiesResult<T> {
// 	update: (defaultValues: T, values: Screen<T>) => void;
// }

// export function createResponsiveProperties<T>(
// 	defaultValues: T,
// 	values: Screen<T>,
// 	include: Record<keyof T, boolean>
// ): Record<keyof T, Readable<ValueOf<T>>> & ResponsivePropertiesResult<T> {
// 	const responsivePropertyStores = [] as Array<[keyof T, Readable<ValueOf<T>>]>;
// 	const responsivePropertySetters = {} as Record<keyof T, Subscriber<ValueOf<T>>>;

// 	let screenSize: ScreenSize;

// 	// Create responsive properties from default values
// 	Object.entries<boolean>(include).forEach(([propName, include]) => {
// 		if (!include) return;

// 		const propStore = writable<ValueOf<T>>();
// 		responsivePropertySetters[propName] = propStore.set;
// 		responsivePropertyStores.push([propName as keyof T, { subscribe: propStore.subscribe }]);
// 	});

// 	onMount(() => {
// 		// Create media queries from screen sizes
// 		const mediaQueries = SCREEN_SIZES.map(([key, screenSize]) => [
// 			screenSize,
// 			window.matchMedia(`(min-width: ${ScreenSizeMinWidth[key]})`)
// 		]) as Array<[ScreenSize, MediaQueryList]>;
// 		// Flip media queries to map screen size to media query
// 		const sizeByMedia = Object.fromEntries(
// 			mediaQueries.map(([screenSize, mediaQuery]) => [mediaQuery.media, screenSize])
// 		) as Record<`(min-width: ${StringKeyOf<Record<ScreenSizeMinWidth, string>>})`, ScreenSize>;

// 		const mediaQuery = mediaQueries.find(([, mediaQuery]) => mediaQuery.matches);
// 		screenSize = mediaQuery ? mediaQuery[0] : undefined;

// 		function updateScreenSize(_screenSize: ScreenSize) {
// 			screenSize = _screenSize;

// 			updateResponsiveProperties(
// 				defaultValues,
// 				values,
// 				responsivePropertyStores,
// 				responsivePropertySetters,
// 				screenSize
// 			);
// 		}

// 		updateScreenSize(screenSize);

// 		// Create media query listeners
// 		function handleMediaChange({ matches, media }: MediaQueryListEvent) {
// 			if (!matches) {
// 				// TODO: Optimize
// 				const mediaQueryIndex = mediaQueries.findIndex(
// 					([, mediaQuery]) => mediaQuery.media === media
// 				);
// 				if (mediaQueryIndex === -1 || mediaQueryIndex + 1 === mediaQueries.length)
// 					return updateScreenSize(undefined);

// 				const previousMediaQuery = mediaQueries[mediaQueryIndex + 1];
// 				return updateScreenSize(previousMediaQuery ? previousMediaQuery[0] : undefined);
// 			}

// 			updateScreenSize(
// 				sizeByMedia[media as `(min-width: ${StringKeyOf<Record<ScreenSizeMinWidth, string>>})`]
// 			);
// 		}

// 		// Add media query listeners
// 		mediaQueries.forEach(([, mediaQuery]) =>
// 			mediaQuery.addEventListener('change', handleMediaChange)
// 		);

// 		// Remove media query listeners on unmount
// 		return () => {
// 			mediaQueries.forEach(([, mediaQuery]) =>
// 				mediaQuery.removeEventListener('change', handleMediaChange)
// 			);
// 		};
// 	});

// 	return {
// 		update: (_defaultValues: T, _values: Screen<T>) => {
// 			defaultValues = _defaultValues;
// 			values = _values;

// 			updateResponsiveProperties(
// 				defaultValues,
// 				values,
// 				responsivePropertyStores,
// 				responsivePropertySetters,
// 				screenSize
// 			);
// 		},
// 		...(Object.fromEntries(responsivePropertyStores) as Record<keyof T, Readable<ValueOf<T>>>)
// 	};
// }

// function updateResponsiveProperties<T>(
// 	defaultValues: T,
// 	values: Screen<T>,
// 	responsivePropertyStores: Array<[keyof T, Readable<ValueOf<T>>]>,
// 	responsivePropertySetters: Record<keyof T, Subscriber<ValueOf<T>>>,
// 	screenSize: ScreenSize
// ) {
// 	if (!screenSize || !values) {
// 		responsivePropertyStores.forEach(([propName]) => {
// 			const defaultPropValue = defaultValues[propName];
// 			if (!defaultPropValue) return;
// 			responsivePropertySetters[propName](defaultPropValue);
// 		});
// 		return;
// 	}

// 	responsivePropertyStores.forEach(([propName]) => {
// 		const screenSizeProps = values ? values[screenSize] : undefined;
// 		if (!screenSizeProps) {
// 			// TODO: Optimize

// 			const screenSize = SCREEN_SIZES.find(([, screenSize]) => {
// 				const screenSizeProps = values ? values[screenSize] : undefined;
// 				return screenSizeProps ? !!screenSizeProps[propName] : false;
// 			});
// 			if (!screenSize) {
// 				const defaultPropValue = defaultValues[propName];
// 				if (!defaultPropValue) return;

// 				responsivePropertySetters[propName](defaultPropValue);
// 				return;
// 			}
// 			responsivePropertySetters[propName](values[screenSize[1]][propName]);
// 			return;
// 		}

// 		const propValue = screenSizeProps[propName];
// 		if (!propValue) return;
// 		responsivePropertySetters[propName](propValue);
// 	});
// }
