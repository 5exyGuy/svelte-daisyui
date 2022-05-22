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

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| icon      | No       | <code>let</code> | No       | <code>Icon</code>   | <code>undefined</code> | --          |
| color     | No       | <code>let</code> | No       | <code>Color</code>  | <code>undefined</code> | --          |
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |
| actions   | No      | --    | --       |

### Events

None.

## `Artboard`

### Types

```ts
export type Size = "1" | "2" | "3" | "4" | "5" | "6" | 1 | 2 | 3 | 4 | 5 | 6;

export interface ScreenProps {
  size?: Size;
  demo?: boolean;
  horizontal?: boolean;
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

| Prop name  | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :--------- | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| size       | No       | <code>let</code> | No       | <code>Size</code>    | <code>'1'</code>       | --          |
| demo       | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| horizontal | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| class      | No       | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |
| screen     | No       | <code>let</code> | No       | <code>Screen</code>  | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Avatar`

### Types

```ts
export type Size = "tiny" | "small" | "medium" | "large";

export type Status = "online" | "offline";

export interface ScreenProps {
  size?: Size;
  status: Status;
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

| Prop name | Required | Kind             | Reactive | Type                                                              | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------------------------------------- | ---------------------- | ----------- |
| src       | No       | <code>let</code> | No       | <code>string</code>                                               | <code>undefined</code> | --          |
| alt       | No       | <code>let</code> | No       | <code>string</code>                                               | <code>undefined</code> | --          |
| size      | No       | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code> | <code>undefined</code> | --          |
| status    | No       | <code>let</code> | No       | <code>'online' &#124; 'offline'</code>                            | <code>undefined</code> | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                                               | <code>undefined</code> | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code>                                               | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `AvatarGroup`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| space     | No       | <code>let</code> | No       | <code>string</code> | <code>'1.5rem'</code>  | --          |
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

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

| Prop name | Required | Kind             | Reactive | Type                                           | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ---------------------------------------------- | ---------------------- | ----------- |
| color     | Yes      | <code>let</code> | No       | <code>BrandColor &#124; FunctionalColor</code> | <code>undefined</code> | --          |
| size      | No       | <code>let</code> | No       | <code>Size</code>                              | <code>'medium'</code>  | --          |
| outline   | No       | <code>let</code> | No       | <code>boolean</code>                           | <code>false</code>     | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                            | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `BreadcrumbGroup`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | Yes      | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `BreadcrumbItem`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| href      | Yes      | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Button`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                                                                  | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| color     | Yes      | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'ghost' &#124; 'link'</code> | <code>undefined</code> | --          |
| size      | Yes      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code>                                                                                     | <code>undefined</code> | --          |
| shape     | Yes      | <code>let</code> | No       | <code>'square' &#124; 'circle'</code>                                                                                                                 | <code>undefined</code> | --          |
| active    | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                  | <code>false</code>     | --          |
| block     | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                  | <code>false</code>     | --          |
| outline   | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                  | <code>false</code>     | --          |
| loading   | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                  | <code>false</code>     | --          |
| disabled  | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                  | <code>false</code>     | --          |
| noAnim    | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                  | <code>false</code>     | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                                                                                                                                   | <code>null</code>      | --          |

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

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | Yes      | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Card`

### Props

| Prop name | Required | Kind             | Reactive | Type                                   | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | -------------------------------------- | ---------------------- | ----------- |
| bordered  | No       | <code>let</code> | No       | <code>boolean</code>                   | <code>false</code>     | --          |
| fullImage | No       | <code>let</code> | No       | <code>boolean</code>                   | <code>false</code>     | --          |
| padding   | Yes      | <code>let</code> | No       | <code>'normal' &#124; 'compact'</code> | <code>undefined</code> | --          |
| side      | No       | <code>let</code> | No       | <code>boolean</code>                   | <code>false</code>     | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                    | <code>undefined</code> | --          |

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

| Prop name | Required | Kind             | Reactive | Type                                              | Default value             | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------------------- | ------------------------- | ----------- |
| snap      | No       | <code>let</code> | No       | <code>'start' &#124; 'center' &#124; 'end'</code> | <code>'start'</code>      | --          |
| alignment | No       | <code>let</code> | No       | <code>'horizontal' &#124; 'vertical'</code>       | <code>'horizontal'</code> | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                               | <code>undefined</code>    | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `CarouselItem`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | Yes      | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Checkbox`

### Props

| Prop name     | Required | Kind             | Reactive | Type                                                                                                                     | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------- |
| checked       | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| disabled      | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| indeterminate | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| color         | Yes      | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| class         | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

### Slots

None.

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| change     | forwarded | --     |

## `Code`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | Yes      | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Collapse`

### Props

| Prop name | Required | Kind             | Reactive | Type                               | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ---------------------------------- | ---------------------- | ----------- |
| icon      | Yes      | <code>let</code> | No       | <code>'arrow' &#124; 'plus'</code> | <code>undefined</code> | --          |
| open      | No       | <code>let</code> | No       | <code>boolean</code>               | <code>false</code>     | --          |
| close     | No       | <code>let</code> | No       | <code>boolean</code>               | <code>false</code>     | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |
| title     | No      | --    | --       |

### Events

None.

## `Countdown`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | Yes      | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Divider`

### Props

| Prop name | Required | Kind             | Reactive | Type                                        | Default value           | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------------- | ----------------------- | ----------- |
| alignment | No       | <code>let</code> | No       | <code>'vertical' &#124; 'horizontal'</code> | <code>'vertical'</code> | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                         | <code>undefined</code>  | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Drawer`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| visible   | No       | <code>let</code> | Yes      | <code>boolean</code> | <code>false</code>     | --          |
| mobile    | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| end       | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |

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

| Prop name | Required | Kind             | Reactive | Type                                                            | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | --------------------------------------------------------------- | ---------------------- | ----------- |
| position  | No       | <code>let</code> | No       | <code>'top' &#124; 'bottom' &#124; 'left' &#124; 'right'</code> | <code>'bottom'</code>  | --          |
| end       | No       | <code>let</code> | No       | <code>boolean</code>                                            | <code>false</code>     | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                             | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props                         | Fallback |
| :-------- | :------ | :---------------------------- | :------- |
| --        | Yes     | --                            | --       |
| focus     | No      | <code>{ tabindex: 0 } </code> | --       |

### Events

None.

## `Hero`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | Yes      | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |
| style     | Yes      | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |
| content   | No      | --    | --       |
| overlay   | No      | --    | --       |

### Events

None.

## `Icon`

### Types

```ts
export interface ScreenProps {
  spin?: boolean;
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

| Prop name | Required | Kind             | Reactive | Type                                                 | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ---------------------------------------------------- | ---------------------- | ----------- |
| component | Yes      | <code>let</code> | No       | <code>typeof import('svelte').SvelteComponent</code> | <code>undefined</code> | --          |
| size      | Yes      | <code>let</code> | No       | <code>number</code>                                  | <code>undefined</code> | --          |
| height    | No       | <code>let</code> | No       | <code>number</code>                                  | <code>1</code>         | --          |
| width     | No       | <code>let</code> | No       | <code>number</code>                                  | <code>1</code>         | --          |
| spin      | No       | <code>let</code> | No       | <code>boolean</code>                                 | <code>false</code>     | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                                  | <code>undefined</code> | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code>                                  | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `IndicatorGroup`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | Yes      | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `IndicatorItem`

### Props

| Prop name  | Required | Kind             | Reactive | Type                                               | Default value          | Description |
| :--------- | :------- | :--------------- | :------- | -------------------------------------------------- | ---------------------- | ----------- |
| horizontal | No       | <code>let</code> | No       | <code>'start' &#124; 'center' &#124; 'end'</code>  | <code>'end'</code>     | --          |
| vertical   | No       | <code>let</code> | No       | <code>'top' &#124; 'middle' &#124; 'bottom'</code> | <code>'top'</code>     | --          |
| class      | Yes      | <code>let</code> | No       | <code>string</code>                                | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Input`

### Props

| Prop name   | Required | Kind             | Reactive | Type                                                                                                                                    | Default value          | Description |
| :---------- | :------- | :--------------- | :------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| placeholder | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                                     | <code>undefined</code> | --          |
| size        | No       | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code>                                                                       | <code>'medium'</code>  | --          |
| color       | Yes      | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'ghost'</code> | <code>undefined</code> | --          |
| disabled    | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                    | <code>false</code>     | --          |
| bordered    | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                    | <code>false</code>     | --          |
| class       | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                                     | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `InputGroup`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                              | Default value             | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------------------------------------- | ------------------------- | ----------- |
| alignment | No       | <code>let</code> | No       | <code>'horizontal' &#124; 'vertical'</code>                       | <code>'horizontal'</code> | --          |
| size      | No       | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code> | <code>'medium'</code>     | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                               | <code>undefined</code>    | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Kbd`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                              | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------------------------------------- | ---------------------- | ----------- |
| size      | Yes      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code> | <code>undefined</code> | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                               | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Link`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                                                      | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| color     | Yes      | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'neutral'</code> | <code>undefined</code> | --          |
| hover     | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                      | <code>false</code>     | --          |
| href      | No       | <code>let</code> | No       | <code>string</code>                                                                                                                       | <code>'#'</code>       | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                                       | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Mask`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                                                                                                                                                                                                                                                                                 | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| half      | Yes      | <code>let</code> | No       | <code>'1' &#124; '2' &#124; 1 &#124; 2</code>                                                                                                                                                                                                                                                                                                                        | <code>undefined</code> | --          |
| type      | No       | <code>let</code> | No       | <code>'squircle' &#124; 'heart' &#124; 'hexagon' &#124; 'hexagon2' &#124; 'decagon' &#124; 'pentagon' &#124; 'diamond' &#124; 'square' &#124; 'circle' &#124; 'parallelogram' &#124; 'parallelogram2' &#124; 'parallelogram3' &#124; 'parallelogram4' &#124; 'star' &#124; 'star2' &#124; 'triangle' &#124; 'triangle2' &#124; 'triangle3' &#124; 'triangle4'</code> | <code>'circle'</code>  | --          |
| class     | Yes      | <code>let</code> | No       | --                                                                                                                                                                                                                                                                                                                                                                   | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Navbar`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| rounded   | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |

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

| Prop name | Required | Kind             | Reactive | Type                                                                                                                     | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------- |
| color     | Yes      | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| size      | No       | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code>                                                        | <code>'medium'</code>  | --          |
| value     | No       | <code>let</code> | No       | <code>number</code>                                                                                                      | <code>0</code>         | --          |
| max       | No       | <code>let</code> | No       | <code>number</code>                                                                                                      | <code>100</code>       | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `RadialProgress`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| value     | No       | <code>let</code> | No       | <code>number</code> | <code>0</code>         | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Radio`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                                     | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------- |
| size      | No       | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code>                                                        | <code>'medium'</code>  | --          |
| color     | Yes      | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| name      | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |
| checked   | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

### Slots

None.

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| change     | forwarded | --     |

## `Range`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                              | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------------------------------------- | ---------------------- | ----------- |
| min       | No       | <code>let</code> | No       | <code>number</code>                                               | <code>0</code>         | --          |
| max       | No       | <code>let</code> | No       | <code>number</code>                                               | <code>100</code>       | --          |
| value     | No       | <code>let</code> | No       | <code>number</code>                                               | <code>0</code>         | --          |
| step      | No       | <code>let</code> | No       | <code>number</code>                                               | <code>1</code>         | --          |
| size      | No       | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code> | <code>'medium'</code>  | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                               | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Rating`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                              | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------------------------------------- | ---------------------- | ----------- |
| size      | No       | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code> | <code>'medium'</code>  | --          |
| half      | No       | <code>let</code> | No       | <code>boolean</code>                                              | <code>false</code>     | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                               | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Select`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                                                    | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| color     | Yes      | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'ghost'</code> | <code>undefined</code> | --          |
| size      | No       | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code>                                                                       | <code>'medium'</code>  | --          |
| bordered  | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                    | <code>false</code>     | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                                     | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Stack`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                                               | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| direction | No       | <code>let</code> | No       | <code>'up' &#124; 'down' &#124; 'left' &#124; 'right' &#124; 'upleft' &#124; 'upright' &#124; 'downleft' &#124; 'downright'</code> | <code>'down'</code>    | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                                | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `StatGroup`

### Props

| Prop name  | Required | Kind             | Reactive | Type                                                                                                                     | Default value             | Description |
| :--------- | :------- | :--------------- | :------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------- | ----------- |
| alignment  | No       | <code>let</code> | No       | <code>'horizontal' &#124; 'vertical'</code>                                                                              | <code>'horizontal'</code> | --          |
| background | Yes      | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code>    | --          |
| class      | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code>    | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `StatItem`

### Props

| Prop name   | Required | Kind             | Reactive | Type                                                                                                                     | Default value          | Description |
| :---------- | :------- | :--------------- | :------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------- |
| title       | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |
| value       | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |
| description | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |
| background  | Yes      | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| class       | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

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

| Prop name | Required | Kind             | Reactive | Type                                        | Default value             | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------------- | ------------------------- | ----------- |
| alignment | No       | <code>let</code> | No       | <code>'horizontal' &#124; 'vertical'</code> | <code>'horizontal'</code> | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                         | <code>undefined</code>    | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `StepItem`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                                                      | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| color     | Yes      | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'neutral'</code> | <code>undefined</code> | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                                       | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Swap`

### Props

| Prop name | Required | Kind             | Reactive | Type                                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------- | ---------------------- | ----------- |
| state     | No       | <code>let</code> | Yes      | <code>boolean</code>                | <code>false</code>     | --          |
| animation | Yes      | <code>let</code> | No       | <code>'rotate' &#124; 'flip'</code> | <code>undefined</code> | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                 | <code>undefined</code> | --          |

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

| Prop name | Required | Kind             | Reactive | Type                                                              | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------------------------------------- | ---------------------- | ----------- |
| type      | Yes      | <code>let</code> | No       | <code>'bordered' &#124; 'lifted' &#124; 'boxed'</code>            | <code>undefined</code> | --          |
| size      | No       | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code> | <code>'medium'</code>  | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                               | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `TabItem`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| active    | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `TextArea`

### Props

| Prop name   | Required | Kind             | Reactive | Type                                                                                                                                    | Default value          | Description |
| :---------- | :------- | :--------------- | :------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| placeholder | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                                     | <code>undefined</code> | --          |
| color       | Yes      | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'ghost'</code> | <code>undefined</code> | --          |
| disabled    | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                    | <code>false</code>     | --          |
| bordered    | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                    | <code>false</code>     | --          |
| class       | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                                     | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Toggle`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                                     | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------- |
| color     | Yes      | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| size      | No       | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code>                                                        | <code>'medium'</code>  | --          |
| disabled  | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| checked   | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Tooltip`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                                     | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------- |
| open      | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| position  | No       | <code>let</code> | No       | <code>'top' &#124; 'bottom' &#124; 'left' &#124; 'right'</code>                                                          | <code>'top'</code>     | --          |
| color     | Yes      | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |
| content   | No      | --    | --       |

### Events

None.

## `Window`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | Yes      | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.
