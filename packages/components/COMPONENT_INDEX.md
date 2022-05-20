# Component Index

## Components

- [`Alert`](#alert)
- [`Artboard`](#artboard)
- [`Avatar`](#avatar)
- [`AvatarGroup`](#avatargroup)
- [`Badge`](#badge)
- [`BreadcrumbGroup`](#breadcrumbgroup)
- [`BreadcrumbItem`](#breadcrumbitem)
- [`Button`](#button)
- [`ButtonGroup`](#buttongroup)
- [`Card`](#card)
- [`CarouselGroup`](#carouselgroup)
- [`CarouselItem`](#carouselitem)
- [`Checkbox`](#checkbox)
- [`Code`](#code)
- [`Collapse`](#collapse)
- [`Countdown`](#countdown)
- [`Divider`](#divider)
- [`Drawer`](#drawer)
- [`Dropdown`](#dropdown)
- [`Hero`](#hero)
- [`Icon`](#icon)
- [`IndicatorGroup`](#indicatorgroup)
- [`IndicatorItem`](#indicatoritem)
- [`Input`](#input)
- [`InputGroup`](#inputgroup)
- [`Kbd`](#kbd)
- [`Link`](#link)
- [`Mask`](#mask)
- [`Navbar`](#navbar)
- [`Progress`](#progress)
- [`RadialProgress`](#radialprogress)
- [`Radio`](#radio)
- [`Range`](#range)
- [`Rating`](#rating)
- [`Select`](#select)
- [`Stack`](#stack)
- [`StatGroup`](#statgroup)
- [`StatItem`](#statitem)
- [`StepGroup`](#stepgroup)
- [`StepItem`](#stepitem)
- [`Swap`](#swap)
- [`TabGroup`](#tabgroup)
- [`TabItem`](#tabitem)
- [`TextArea`](#textarea)
- [`Toggle`](#toggle)
- [`Tooltip`](#tooltip)
- [`Window`](#window)

---

## `Alert`

### Types

```ts
export type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface Icon {
  component: typeof import("svelte").SvelteComponent;
  size: number;
}

export interface ScreenProps {
  color?: Color;
}

export interface Screen {
  sm?: ScreenProps;
  md?: ScreenProps;
  lg?: ScreenProps;
  xl?: ScreenProps;
  "2xl"?: ScreenProps;
}
```

### Props

| Prop name | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------------- | ----------- |
| icon      | <code>let</code> | No       | <code>Icon</code>   | <code>undefined</code> | --          |
| color     | <code>let</code> | No       | <code>Color</code>  | <code>undefined</code> | --          |
| class     | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |
| screen    | <code>let</code> | No       | <code>Screen</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |
| actions   | No      | --    | --       |

### Events

None.

## `Artboard`

### Props

| Prop name  | Kind             | Reactive | Type                                                                                                                          | Default value          | Description |
| :--------- | :--------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| size       | <code>let</code> | No       | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; 1 &#124; 2 &#124; 3 &#124; 4 &#124; 5 &#124; 6</code> | <code>'1'</code>       | --          |
| demo       | <code>let</code> | No       | <code>boolean</code>                                                                                                          | <code>false</code>     | --          |
| horizontal | <code>let</code> | No       | <code>boolean</code>                                                                                                          | <code>false</code>     | --          |
| class      | <code>let</code> | No       | <code>string</code>                                                                                                           | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Avatar`

### Props

| Prop name | Kind             | Reactive | Type                                                                                          | Default value          | Description |
| :-------- | :--------------- | :------- | :-------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| src       | <code>let</code> | No       | <code>string</code>                                                                           | <code>undefined</code> | --          |
| alt       | <code>let</code> | No       | <code>string</code>                                                                           | <code>undefined</code> | --          |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large' &#124; number &#124; string</code> | <code>'medium'</code>  | --          |
| status    | <code>let</code> | No       | <code>'online' &#124; 'offline'</code>                                                        | <code>undefined</code> | --          |
| class     | <code>let</code> | No       | <code>string</code>                                                                           | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `AvatarGroup`

### Props

| Prop name | Kind             | Reactive | Type                | Default value         | Description |
| :-------- | :--------------- | :------- | :------------------ | --------------------- | ----------- |
| space     | <code>let</code> | No       | <code>string</code> | <code>'1.5rem'</code> | --          |
| class     | <code>let</code> | No       | <code>string</code> | <code>''</code>       | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Badge`

### Types

```ts
export type BrandColor = "primary" | "secondary" | "accent" | "info";

export type FunctionalColor = "info" | "success" | "warning" | "error";

export type Size = "tiny" | "small" | "medium" | "large";
```

### Props

| Prop name | Kind             | Reactive | Type                                           | Default value          | Description |
| :-------- | :--------------- | :------- | :--------------------------------------------- | ---------------------- | ----------- |
| color     | <code>let</code> | No       | <code>BrandColor &#124; FunctionalColor</code> | <code>undefined</code> | --          |
| size      | <code>let</code> | No       | <code>Size</code>                              | <code>'medium'</code>  | --          |
| outline   | <code>let</code> | No       | <code>boolean</code>                           | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>                            | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `BreadcrumbGroup`

### Props

| Prop name | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------------- | ----------- |
| class     | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `BreadcrumbItem`

### Props

| Prop name | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------------- | ----------- |
| href      | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |
| class     | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Button`

### Props

| Prop name | Kind             | Reactive | Type                                                                                                                                                  | Default value          | Description |
| :-------- | :--------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| color     | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'ghost' &#124; 'link'</code> | <code>undefined</code> | --          |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code>                                                                                     | <code>undefined</code> | --          |
| shape     | <code>let</code> | No       | <code>'square' &#124; 'circle'</code>                                                                                                                 | <code>undefined</code> | --          |
| active    | <code>let</code> | No       | <code>boolean</code>                                                                                                                                  | <code>false</code>     | --          |
| block     | <code>let</code> | No       | <code>boolean</code>                                                                                                                                  | <code>false</code>     | --          |
| outline   | <code>let</code> | No       | <code>boolean</code>                                                                                                                                  | <code>false</code>     | --          |
| loading   | <code>let</code> | No       | <code>boolean</code>                                                                                                                                  | <code>false</code>     | --          |
| disabled  | <code>let</code> | No       | <code>boolean</code>                                                                                                                                  | <code>false</code>     | --          |
| noAnim    | <code>let</code> | No       | <code>boolean</code>                                                                                                                                  | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>                                                                                                                                   | <code>null</code>      | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| click      | forwarded | --     |

## `ButtonGroup`

### Props

| Prop name | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------------- | ----------- |
| class     | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Card`

### Props

| Prop name | Kind             | Reactive | Type                                   | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------------------------- | ---------------------- | ----------- |
| bordered  | <code>let</code> | No       | <code>boolean</code>                   | <code>false</code>     | --          |
| fullImage | <code>let</code> | No       | <code>boolean</code>                   | <code>false</code>     | --          |
| padding   | <code>let</code> | No       | <code>'normal' &#124; 'compact'</code> | <code>undefined</code> | --          |
| side      | <code>let</code> | No       | <code>boolean</code>                   | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>                    | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| actions   | No      | --    | --       |
| body      | No      | --    | --       |
| lower     | No      | --    | --       |
| title     | No      | --    | --       |
| upper     | No      | --    | --       |

### Events

None.

## `CarouselGroup`

### Props

| Prop name | Kind             | Reactive | Type                                              | Default value             | Description |
| :-------- | :--------------- | :------- | :------------------------------------------------ | ------------------------- | ----------- |
| snap      | <code>let</code> | No       | <code>'start' &#124; 'center' &#124; 'end'</code> | <code>'start'</code>      | --          |
| alignment | <code>let</code> | No       | <code>'horizontal' &#124; 'vertical'</code>       | <code>'horizontal'</code> | --          |
| class     | <code>let</code> | No       | <code>string</code>                               | <code>undefined</code>    | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `CarouselItem`

### Props

| Prop name | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------------- | ----------- |
| class     | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Checkbox`

### Props

| Prop name     | Kind             | Reactive | Type                                                                                                                     | Default value          | Description |
| :------------ | :--------------- | :------- | :----------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| checked       | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| disabled      | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| indeterminate | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| color         | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| class         | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

### Slots

None.

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| change     | forwarded | --     |

## `Code`

### Props

| Prop name | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------------- | ----------- |
| class     | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Collapse`

### Props

| Prop name | Kind             | Reactive | Type                               | Default value          | Description |
| :-------- | :--------------- | :------- | :--------------------------------- | ---------------------- | ----------- |
| icon      | <code>let</code> | No       | <code>'arrow' &#124; 'plus'</code> | <code>undefined</code> | --          |
| open      | <code>let</code> | No       | <code>boolean</code>               | <code>false</code>     | --          |
| close     | <code>let</code> | No       | <code>boolean</code>               | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>                | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |
| title     | No      | --    | --       |

### Events

None.

## `Countdown`

### Props

| Prop name | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------------- | ----------- |
| class     | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Divider`

### Props

| Prop name | Kind             | Reactive | Type                                        | Default value           | Description |
| :-------- | :--------------- | :------- | :------------------------------------------ | ----------------------- | ----------- |
| alignment | <code>let</code> | No       | <code>'vertical' &#124; 'horizontal'</code> | <code>'vertical'</code> | --          |
| class     | <code>let</code> | No       | <code>string</code>                         | <code>undefined</code>  | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Drawer`

### Props

| Prop name | Kind             | Reactive | Type                 | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------- | ---------------------- | ----------- |
| visible   | <code>let</code> | Yes      | <code>boolean</code> | <code>false</code>     | --          |
| mobile    | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| end       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |
| content   | No      | --    | --       |
| side      | No      | --    | --       |

### Events

None.

## `Dropdown`

### Props

| Prop name | Kind             | Reactive | Type                                                            | Default value          | Description |
| :-------- | :--------------- | :------- | :-------------------------------------------------------------- | ---------------------- | ----------- |
| position  | <code>let</code> | No       | <code>'top' &#124; 'bottom' &#124; 'left' &#124; 'right'</code> | <code>'bottom'</code>  | --          |
| end       | <code>let</code> | No       | <code>boolean</code>                                            | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>                                             | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props                         | Fallback |
| :-------- | :------ | :---------------------------- | :------- |
| --        | Yes     | --                            | --       |
| focus     | No      | <code>{ tabindex: 0 } </code> | --       |

### Events

None.

## `Hero`

### Props

| Prop name | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------------- | ----------- |
| class     | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |
| style     | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |
| content   | No      | --    | --       |
| overlay   | No      | --    | --       |

### Events

None.

## `Icon`

### Props

| Prop name | Kind             | Reactive | Type                                                 | Default value          | Description |
| :-------- | :--------------- | :------- | :--------------------------------------------------- | ---------------------- | ----------- |
| component | <code>let</code> | No       | <code>typeof import('svelte').SvelteComponent</code> | <code>undefined</code> | --          |
| size      | <code>let</code> | No       | <code>number</code>                                  | <code>undefined</code> | --          |
| height    | <code>let</code> | No       | <code>number</code>                                  | <code>1</code>         | --          |
| width     | <code>let</code> | No       | <code>number</code>                                  | <code>1</code>         | --          |
| spin      | <code>let</code> | No       | <code>boolean</code>                                 | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>                                  | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `IndicatorGroup`

### Props

| Prop name | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------------- | ----------- |
| class     | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `IndicatorItem`

### Props

| Prop name  | Kind             | Reactive | Type                                               | Default value          | Description |
| :--------- | :--------------- | :------- | :------------------------------------------------- | ---------------------- | ----------- |
| horizontal | <code>let</code> | No       | <code>'start' &#124; 'center' &#124; 'end'</code>  | <code>'end'</code>     | --          |
| vertical   | <code>let</code> | No       | <code>'top' &#124; 'middle' &#124; 'bottom'</code> | <code>'top'</code>     | --          |
| class      | <code>let</code> | No       | <code>string</code>                                | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Input`

### Props

| Prop name   | Kind             | Reactive | Type                                                                                                                                    | Default value          | Description |
| :---------- | :--------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| placeholder | <code>let</code> | No       | <code>string</code>                                                                                                                     | <code>undefined</code> | --          |
| size        | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code>                                                                       | <code>'medium'</code>  | --          |
| color       | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'ghost'</code> | <code>undefined</code> | --          |
| disabled    | <code>let</code> | No       | <code>boolean</code>                                                                                                                    | <code>false</code>     | --          |
| bordered    | <code>let</code> | No       | <code>boolean</code>                                                                                                                    | <code>false</code>     | --          |
| class       | <code>let</code> | No       | <code>string</code>                                                                                                                     | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `InputGroup`

### Props

| Prop name | Kind             | Reactive | Type                                                              | Default value             | Description |
| :-------- | :--------------- | :------- | :---------------------------------------------------------------- | ------------------------- | ----------- |
| alignment | <code>let</code> | No       | <code>'horizontal' &#124; 'vertical'</code>                       | <code>'horizontal'</code> | --          |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code> | <code>'medium'</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>                                               | <code>undefined</code>    | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Kbd`

### Props

| Prop name | Kind             | Reactive | Type                                                              | Default value          | Description |
| :-------- | :--------------- | :------- | :---------------------------------------------------------------- | ---------------------- | ----------- |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code> | <code>undefined</code> | --          |
| class     | <code>let</code> | No       | <code>string</code>                                               | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Link`

### Props

| Prop name | Kind             | Reactive | Type                                                                                                                                      | Default value          | Description |
| :-------- | :--------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| color     | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'neutral'</code> | <code>undefined</code> | --          |
| hover     | <code>let</code> | No       | <code>boolean</code>                                                                                                                      | <code>false</code>     | --          |
| href      | <code>let</code> | No       | <code>string</code>                                                                                                                       | <code>'#'</code>       | --          |
| class     | <code>let</code> | No       | <code>string</code>                                                                                                                       | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Mask`

### Props

| Prop name | Kind             | Reactive | Type                                                                                                                                                                                                                                                                                                                                                                 | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| half      | <code>let</code> | No       | <code>'1' &#124; '2' &#124; 1 &#124; 2</code>                                                                                                                                                                                                                                                                                                                        | <code>undefined</code> | --          |
| type      | <code>let</code> | No       | <code>'squircle' &#124; 'heart' &#124; 'hexagon' &#124; 'hexagon2' &#124; 'decagon' &#124; 'pentagon' &#124; 'diamond' &#124; 'square' &#124; 'circle' &#124; 'parallelogram' &#124; 'parallelogram2' &#124; 'parallelogram3' &#124; 'parallelogram4' &#124; 'star' &#124; 'star2' &#124; 'triangle' &#124; 'triangle2' &#124; 'triangle3' &#124; 'triangle4'</code> | <code>'circle'</code>  | --          |
| class     | <code>let</code> | No       | --                                                                                                                                                                                                                                                                                                                                                                   | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Navbar`

### Props

| Prop name | Kind             | Reactive | Type                 | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------- | ---------------------- | ----------- |
| rounded   | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |
| center    | No      | --    | --       |
| end       | No      | --    | --       |
| start     | No      | --    | --       |

### Events

None.

## `Progress`

### Props

| Prop name | Kind             | Reactive | Type                                                                                                                     | Default value          | Description |
| :-------- | :--------------- | :------- | :----------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| color     | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code>                                                        | <code>'medium'</code>  | --          |
| value     | <code>let</code> | No       | <code>number</code>                                                                                                      | <code>0</code>         | --          |
| max       | <code>let</code> | No       | <code>number</code>                                                                                                      | <code>100</code>       | --          |
| class     | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `RadialProgress`

### Props

| Prop name | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------------- | ----------- |
| value     | <code>let</code> | No       | <code>number</code> | <code>0</code>         | --          |
| class     | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Radio`

### Props

| Prop name | Kind             | Reactive | Type                                                                                                                     | Default value          | Description |
| :-------- | :--------------- | :------- | :----------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code>                                                        | <code>'medium'</code>  | --          |
| color     | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| name      | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |
| checked   | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

### Slots

None.

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| change     | forwarded | --     |

## `Range`

### Props

| Prop name | Kind             | Reactive | Type                                                              | Default value          | Description |
| :-------- | :--------------- | :------- | :---------------------------------------------------------------- | ---------------------- | ----------- |
| min       | <code>let</code> | No       | <code>number</code>                                               | <code>0</code>         | --          |
| max       | <code>let</code> | No       | <code>number</code>                                               | <code>100</code>       | --          |
| value     | <code>let</code> | No       | <code>number</code>                                               | <code>0</code>         | --          |
| step      | <code>let</code> | No       | <code>number</code>                                               | <code>1</code>         | --          |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code> | <code>'medium'</code>  | --          |
| class     | <code>let</code> | No       | <code>string</code>                                               | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Rating`

### Props

| Prop name | Kind             | Reactive | Type                                                              | Default value          | Description |
| :-------- | :--------------- | :------- | :---------------------------------------------------------------- | ---------------------- | ----------- |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code> | <code>'medium'</code>  | --          |
| half      | <code>let</code> | No       | <code>boolean</code>                                              | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>                                               | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Select`

### Props

| Prop name | Kind             | Reactive | Type                                                                                                                                    | Default value          | Description |
| :-------- | :--------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| color     | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'ghost'</code> | <code>undefined</code> | --          |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code>                                                                       | <code>'medium'</code>  | --          |
| bordered  | <code>let</code> | No       | <code>boolean</code>                                                                                                                    | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>                                                                                                                     | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Stack`

### Props

| Prop name | Kind             | Reactive | Type                                                                                                                               | Default value          | Description |
| :-------- | :--------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| direction | <code>let</code> | No       | <code>'up' &#124; 'down' &#124; 'left' &#124; 'right' &#124; 'upleft' &#124; 'upright' &#124; 'downleft' &#124; 'downright'</code> | <code>'down'</code>    | --          |
| class     | <code>let</code> | No       | <code>string</code>                                                                                                                | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `StatGroup`

### Props

| Prop name  | Kind             | Reactive | Type                                                                                                                     | Default value             | Description |
| :--------- | :--------------- | :------- | :----------------------------------------------------------------------------------------------------------------------- | ------------------------- | ----------- |
| alignment  | <code>let</code> | No       | <code>'horizontal' &#124; 'vertical'</code>                                                                              | <code>'horizontal'</code> | --          |
| background | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code>    | --          |
| class      | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code>    | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `StatItem`

### Props

| Prop name   | Kind             | Reactive | Type                                                                                                                     | Default value          | Description |
| :---------- | :--------------- | :------- | :----------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| title       | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |
| value       | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |
| description | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |
| background  | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| class       | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

### Slots

| Slot name   | Default | Props | Fallback |
| :---------- | :------ | :---- | :------- |
| actions     | No      | --    | --       |
| description | No      | --    | --       |
| figure      | No      | --    | --       |
| title       | No      | --    | --       |
| value       | No      | --    | --       |

### Events

None.

## `StepGroup`

### Props

| Prop name | Kind             | Reactive | Type                                        | Default value             | Description |
| :-------- | :--------------- | :------- | :------------------------------------------ | ------------------------- | ----------- |
| alignment | <code>let</code> | No       | <code>'horizontal' &#124; 'vertical'</code> | <code>'horizontal'</code> | --          |
| class     | <code>let</code> | No       | <code>string</code>                         | <code>undefined</code>    | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `StepItem`

### Props

| Prop name | Kind             | Reactive | Type                                                                                                                                      | Default value          | Description |
| :-------- | :--------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| color     | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'neutral'</code> | <code>undefined</code> | --          |
| class     | <code>let</code> | No       | <code>string</code>                                                                                                                       | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Swap`

### Props

| Prop name | Kind             | Reactive | Type                                | Default value          | Description |
| :-------- | :--------------- | :------- | :---------------------------------- | ---------------------- | ----------- |
| state     | <code>let</code> | Yes      | <code>boolean</code>                | <code>false</code>     | --          |
| animation | <code>let</code> | No       | <code>'rotate' &#124; 'flip'</code> | <code>undefined</code> | --          |
| class     | <code>let</code> | No       | <code>string</code>                 | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| off       | No      | --    | --       |
| on        | No      | --    | --       |

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| click      | forwarded | --     |

## `TabGroup`

### Props

| Prop name | Kind             | Reactive | Type                                                              | Default value          | Description |
| :-------- | :--------------- | :------- | :---------------------------------------------------------------- | ---------------------- | ----------- |
| type      | <code>let</code> | No       | <code>'bordered' &#124; 'lifted' &#124; 'boxed'</code>            | <code>undefined</code> | --          |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code> | <code>'medium'</code>  | --          |
| class     | <code>let</code> | No       | <code>string</code>                                               | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `TabItem`

### Props

| Prop name | Kind             | Reactive | Type                 | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------- | ---------------------- | ----------- |
| active    | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `TextArea`

### Props

| Prop name   | Kind             | Reactive | Type                                                                                                                                    | Default value          | Description |
| :---------- | :--------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| placeholder | <code>let</code> | No       | <code>string</code>                                                                                                                     | <code>undefined</code> | --          |
| color       | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'ghost'</code> | <code>undefined</code> | --          |
| disabled    | <code>let</code> | No       | <code>boolean</code>                                                                                                                    | <code>false</code>     | --          |
| bordered    | <code>let</code> | No       | <code>boolean</code>                                                                                                                    | <code>false</code>     | --          |
| class       | <code>let</code> | No       | <code>string</code>                                                                                                                     | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Toggle`

### Props

| Prop name | Kind             | Reactive | Type                                                                                                                     | Default value          | Description |
| :-------- | :--------------- | :------- | :----------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| color     | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code>                                                        | <code>'medium'</code>  | --          |
| disabled  | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| checked   | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Tooltip`

### Props

| Prop name | Kind             | Reactive | Type                                                                                                                     | Default value          | Description |
| :-------- | :--------------- | :------- | :----------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| open      | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| position  | <code>let</code> | No       | <code>'top' &#124; 'bottom' &#124; 'left' &#124; 'right'</code>                                                          | <code>'top'</code>     | --          |
| color     | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| class     | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |
| content   | No      | --    | --       |

### Events

None.

## `Window`

### Props

| Prop name | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------------- | ----------- |
| class     | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.
