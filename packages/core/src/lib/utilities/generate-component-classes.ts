import type { ComponentProps, ComponentSchema, ResponsiveProperty } from '@svelte-daisyui/shared';

export function generateComponentClasses<Props extends ComponentProps>(
	schema: ComponentSchema<Props>,
	values: Partial<Props>
) {
	const classList = [] as Array<string>;

	(Object.entries(values) as Array<[keyof Props, Props[keyof Props]]>).forEach(
		([propName, propValue]) => {
			if (!schema.propData[propName]?.responsive) {
			}
		}
	);
}
