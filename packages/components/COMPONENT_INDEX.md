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
- [`Table`](#table)
- [`TableBody`](#tablebody)
- [`TableCell`](#tablecell)
- [`TableFooter`](#tablefooter)
- [`TableHeader`](#tableheader)
- [`TableHeaderCell`](#tableheadercell)
- [`TableRow`](#tablerow)
- [`TextArea`](#textarea)
- [`Toggle`](#toggle)
- [`Tooltip`](#tooltip)
- [`TooltipContent`](#tooltipcontent)
- [`Window`](#window)

---

## `Alert`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value          | Description                                                                                                             |
| :-------- | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| color     | No       | <code>let</code> | No       | <code>Color</code>   | <code>undefined</code> | Background color of component. Functional colors such as info, success, warning and error add an icon on the left side. |
| showIcon  | No       | <code>let</code> | No       | <code>boolean</code> | <code>true</code>      | Show an icon defaulted to the functional colors, e.g. info, success, warning and error.                                 |
| class     | No       | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | A space-separated list of the classes of the element.                                                                   |
| screen    | No       | <code>let</code> | No       | <code>Screen</code>  | <code>undefined</code> | Responsive properties based on minimum screen widths.                                                                   |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Artboard`

### Types

```ts
export type Size = 1 | 2 | 3 | 4 | 5 | 6;

export type Alignment = "horizontal" | "vertical";
```

### Props

| Prop name | Required | Kind             | Reactive | Type                   | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ---------------------- | ---------------------- | ----------- |
| size      | No       | <code>let</code> | No       | <code>Size</code>      | <code>undefined</code> | --          |
| demo      | No       | <code>let</code> | No       | <code>boolean</code>   | <code>false</code>     | --          |
| alignment | No       | <code>let</code> | No       | <code>Alignment</code> | <code>undefined</code> | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>    | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Avatar`

### Types

```ts
export type Status = "online" | "offline";
```

### Props

| Prop name | Required | Kind             | Reactive | Type                                                     | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | -------------------------------------------------------- | ---------------------- | ----------- |
| status    | No       | <code>let</code> | No       | <code>Status</code>                                      | <code>undefined</code> | --          |
| imgProps  | No       | <code>let</code> | No       | <code>svelte.JSX.HTMLAttributes<HTMLImageElement></code> | <code>undefined</code> | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                                      | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `AvatarGroup`

### Props

| Prop name | Required | Kind             | Reactive | Type                                               | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | -------------------------------------------------- | ---------------------- | ----------- |
| space     | No       | <code>let</code> | No       | <code>string</code>                                | <code>'-1.5rem'</code> | --          |
| avatar    | No       | <code>let</code> | No       | <code>import('./Avatar.svelte').AvatarProps</code> | <code>{}</code>        | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                                | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Badge`

### Types

```ts
export type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost";

export type Size = "xs" | "sm" | "md" | "lg";

export interface Properties {
  color?: Color;
  size?: Size;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}
```

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| color     | No       | <code>let</code> | No       | <code>Color</code>   | <code>undefined</code> | --          |
| size      | No       | <code>let</code> | No       | <code>Size</code>    | <code>undefined</code> | --          |
| outline   | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code>  | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `BreadcrumbGroup`

### Types

```ts
export interface BreadcrumbItem {
  text?: string;
  href?: string;
}
```

### Props

| Prop name | Required | Kind             | Reactive | Type                               | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ---------------------------------- | ---------------------- | ----------- |
| items     | No       | <code>let</code> | No       | <code>Array<BreadcrumbItem></code> | <code>undefined</code> | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props                                  | Fallback                                                                                             |
| :-------- | :------ | :------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| --        | Yes     | --                                     | --                                                                                                   |
| item      | No      | <code>{ item: BreadcrumbItem } </code> | <code>&lt;BreadcrumbItem href={item.href}&gt;<br /> {item.text}<br /> &lt;/BreadcrumbItem&gt;</code> |

### Events

None.

## `BreadcrumbItem`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| href      | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| click      | forwarded | --     |

## `Button`

### Types

```ts
export type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost"
  | "link";

export type Size = "xs" | "sm" | "md" | "lg";

export type Shape = "square" | "circle";

export interface Properties {
  color?: Color;
  size?: Size;
  shape?: Shape;
  active?: boolean;
  block?: boolean;
  outline?: boolean;
  loading?: boolean;
  animation?: boolean;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}
```

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| color     | No       | <code>let</code> | No       | <code>Color</code>   | <code>undefined</code> | --          |
| size      | No       | <code>let</code> | No       | <code>Size</code>    | <code>undefined</code> | --          |
| shape     | No       | <code>let</code> | No       | <code>Shape</code>   | <code>undefined</code> | --          |
| active    | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| block     | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| outline   | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| loading   | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| disabled  | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| animation | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code>  | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| click      | forwarded | --     |
| focus      | forwarded | --     |
| mouseover  | forwarded | --     |
| mouseenter | forwarded | --     |
| mouseleave | forwarded | --     |

## `ButtonGroup`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Card`

### Types

```ts
export type Padding = "normal" | "compact";

export interface Properties {
  padding?: Padding;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}
```

### Props

| Prop name | Required | Kind             | Reactive | Type                               | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ---------------------------------- | ---------------------- | ----------- |
| padding   | No       | <code>let</code> | No       | <code>Properties['padding']</code> | <code>undefined</code> | --          |
| bordered  | No       | <code>let</code> | No       | <code>boolean</code>               | <code>false</code>     | --          |
| fullImage | No       | <code>let</code> | No       | <code>boolean</code>               | <code>false</code>     | --          |
| side      | No       | <code>let</code> | No       | <code>boolean</code>               | <code>false</code>     | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                | <code>undefined</code> | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code>                | <code>undefined</code> | --          |

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
| class     | No       | <code>let</code> | No       | <code>string</code>                               | <code>undefined</code>    | --          |

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
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Checkbox`

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

export type Size = "xs" | "sm" | "md" | "lg";

export interface Properties {
  color?: Color;
  size?: Size;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}
```

### Props

| Prop name     | Required | Kind             | Reactive | Type                             | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | -------------------------------- | ---------------------- | ----------- |
| color         | No       | <code>let</code> | No       | <code>Properties['color']</code> | <code>undefined</code> | --          |
| size          | No       | <code>let</code> | No       | <code>Properties['size']</code>  | <code>undefined</code> | --          |
| checked       | No       | <code>let</code> | No       | <code>boolean</code>             | <code>false</code>     | --          |
| disabled      | No       | <code>let</code> | No       | <code>boolean</code>             | <code>false</code>     | --          |
| indeterminate | No       | <code>let</code> | No       | <code>boolean</code>             | <code>false</code>     | --          |
| class         | No       | <code>let</code> | No       | <code>string</code>              | <code>undefined</code> | --          |
| screen        | No       | <code>let</code> | No       | <code>Screen</code>              | <code>undefined</code> | --          |

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
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

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

### Types

```ts
export type Alignment = "vertical" | "horizontal";

export interface Properties {
  alignment?: Alignment;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}
```

### Props

| Prop name | Required | Kind             | Reactive | Type                   | Default value           | Description |
| :-------- | :------- | :--------------- | :------- | ---------------------- | ----------------------- | ----------- |
| alignment | No       | <code>let</code> | No       | <code>Alignment</code> | <code>'vertical'</code> | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>    | <code>undefined</code>  | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code>    | <code>undefined</code>  | --          |

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
| class     | No       | <code>let</code> | No       | <code>string</code>                                             | <code>undefined</code> | --          |

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
export interface Properties {
  spin?: boolean;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
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
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

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
| class      | No       | <code>let</code> | No       | <code>string</code>                                | <code>undefined</code> | --          |

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
| placeholder | No       | <code>let</code> | No       | <code>string</code>                                                                                                                     | <code>undefined</code> | --          |
| size        | No       | <code>let</code> | No       | <code>'xs' &#124; 'sm' &#124; 'md' &#124; 'lg'</code>                                                                                   | <code>'md'</code>      | --          |
| color       | No       | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'ghost'</code> | <code>undefined</code> | --          |
| disabled    | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                    | <code>false</code>     | --          |
| bordered    | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                    | <code>false</code>     | --          |
| class       | No       | <code>let</code> | No       | <code>string</code>                                                                                                                     | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `InputGroup`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                  | Default value             | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------------------------- | ------------------------- | ----------- |
| alignment | No       | <code>let</code> | No       | <code>'horizontal' &#124; 'vertical'</code>           | <code>'horizontal'</code> | --          |
| size      | No       | <code>let</code> | No       | <code>'xs' &#124; 'sm' &#124; 'md' &#124; 'lg'</code> | <code>'md'</code>         | --          |
| class     | Yes      | <code>let</code> | No       | <code>string</code>                                   | <code>undefined</code>    | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Kbd`

### Types

```ts
export type Size = "xs" | "sm" | "md" | "lg";

export interface Properties {
  size?: Size;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}
```

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| size      | No       | <code>let</code> | No       | <code>Size</code>   | <code>undefined</code> | --          |
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props                                           | Fallback |
| :-------- | :------ | :---------------------------------------------- | :------- |
| --        | Yes     | <code>{ props: { [key: string]: any } } </code> | --       |

### Events

None.

## `Link`

### Types

```ts
export type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "neutral";

export interface Properties {
  color?: Color;
  hover?: boolean;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}
```

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| color     | No       | <code>let</code> | No       | <code>Color</code>   | <code>undefined</code> | --          |
| hover     | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| href      | No       | <code>let</code> | No       | <code>string</code>  | <code>'#'</code>       | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code>  | <code>undefined</code> | --          |

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
| half      | No       | <code>let</code> | No       | <code>'1' &#124; '2' &#124; 1 &#124; 2</code>                                                                                                                                                                                                                                                                                                                        | <code>undefined</code> | --          |
| type      | No       | <code>let</code> | No       | <code>'squircle' &#124; 'heart' &#124; 'hexagon' &#124; 'hexagon2' &#124; 'decagon' &#124; 'pentagon' &#124; 'diamond' &#124; 'square' &#124; 'circle' &#124; 'parallelogram' &#124; 'parallelogram2' &#124; 'parallelogram3' &#124; 'parallelogram4' &#124; 'star' &#124; 'star2' &#124; 'triangle' &#124; 'triangle2' &#124; 'triangle3' &#124; 'triangle4'</code> | <code>'circle'</code>  | --          |
| class     | No       | <code>let</code> | No       | --                                                                                                                                                                                                                                                                                                                                                                   | <code>undefined</code> | --          |

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

export type Size = "xs" | "sm" | "md" | "lg";

export interface Properties {
  color?: Color;
  size?: Size;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}
```

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| color     | No       | <code>let</code> | No       | <code>Color</code>  | <code>undefined</code> | --          |
| size      | No       | <code>let</code> | No       | <code>Size</code>   | <code>'md'</code>      | --          |
| value     | No       | <code>let</code> | No       | <code>number</code> | <code>0</code>         | --          |
| max       | No       | <code>let</code> | No       | <code>number</code> | <code>100</code>       | --          |
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code> | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `RadialProgress`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| value     | No       | <code>let</code> | No       | <code>number</code> | <code>0</code>         | --          |
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props                           | Fallback |
| :-------- | :------ | :------------------------------ | :------- |
| --        | Yes     | <code>{ value: number } </code> | --       |

### Events

None.

## `Radio`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                                     | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------- |
| size      | No       | <code>let</code> | No       | <code>'xs' &#124; 'sm' &#124; 'md' &#124; 'lg'</code>                                                                    | <code>'md'</code>      | --          |
| color     | No       | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| name      | No       | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |
| checked   | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                     | <code>false</code>     | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

### Slots

None.

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| change     | forwarded | --     |

## `Range`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                  | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------------------------- | ---------------------- | ----------- |
| min       | No       | <code>let</code> | No       | <code>number</code>                                   | <code>0</code>         | --          |
| max       | No       | <code>let</code> | No       | <code>number</code>                                   | <code>100</code>       | --          |
| value     | No       | <code>let</code> | No       | <code>number</code>                                   | <code>0</code>         | --          |
| step      | No       | <code>let</code> | No       | <code>number</code>                                   | <code>1</code>         | --          |
| size      | No       | <code>let</code> | No       | <code>'xs' &#124; 'sm' &#124; 'md' &#124; 'lg'</code> | <code>'md'</code>      | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                                   | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Rating`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                  | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------------------------- | ---------------------- | ----------- |
| size      | No       | <code>let</code> | No       | <code>'xs' &#124; 'sm' &#124; 'md' &#124; 'lg'</code> | <code>'md'</code>      | --          |
| half      | No       | <code>let</code> | No       | <code>boolean</code>                                  | <code>false</code>     | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                                   | <code>undefined</code> | --          |

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
| color     | No       | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'ghost'</code> | <code>undefined</code> | --          |
| size      | No       | <code>let</code> | No       | <code>'xs' &#124; 'sm' &#124; 'md' &#124; 'lg'</code>                                                                                   | <code>'md'</code>      | --          |
| bordered  | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                    | <code>false</code>     | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                                                                                                                     | <code>undefined</code> | --          |

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
| class     | No       | <code>let</code> | No       | <code>string</code>                                                                                                                | <code>undefined</code> | --          |

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
| class      | No       | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code>    | --          |

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
| title       | No       | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |
| value       | No       | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |
| description | No       | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |
| background  | No       | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error'</code> | <code>undefined</code> | --          |
| class       | No       | <code>let</code> | No       | <code>string</code>                                                                                                      | <code>undefined</code> | --          |

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
| class     | No       | <code>let</code> | No       | <code>string</code>                         | <code>undefined</code>    | --          |

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
| class     | No       | <code>let</code> | No       | <code>string</code>                                                                                                                       | <code>undefined</code> | --          |

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
| animation | No       | <code>let</code> | No       | <code>'rotate' &#124; 'flip'</code> | <code>undefined</code> | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                 | <code>undefined</code> | --          |

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

| Prop name | Required | Kind             | Reactive | Type                                                   | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------------------------ | ---------------------- | ----------- |
| type      | No       | <code>let</code> | No       | <code>'bordered' &#124; 'lifted' &#124; 'boxed'</code> | <code>undefined</code> | --          |
| size      | No       | <code>let</code> | No       | <code>'xs' &#124; 'sm' &#124; 'md' &#124; 'lg'</code>  | <code>'md'</code>      | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                                    | <code>undefined</code> | --          |

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
| class     | No       | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Table`

### Types

```ts
export type Padding = "normal" | "compact";

export interface Properties {
  padding?: Padding;
  zebra?: boolean;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}

export type HorizontalAlignment = "start" | "center" | "end";

export interface Header {
  text?: string;
  value?: string;
  alignment?: HorizontalAlignment;
}

export interface Footer {
  text?: string;
  value?: string;
  alignment?: HorizontalAlignment;
}

export type Item = Record<string, import("type-fest").Primitive>;
```

### Props

| Prop name | Required | Kind             | Reactive | Type                               | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ---------------------------------- | ---------------------- | ----------- |
| padding   | No       | <code>let</code> | No       | <code>Properties['padding']</code> | <code>undefined</code> | --          |
| zebra     | No       | <code>let</code> | No       | <code>Properties['zebra']</code>   | <code>false</code>     | --          |
| headers   | No       | <code>let</code> | No       | <code>Array<Header></code>         | <code>undefined</code> | --          |
| footers   | No       | <code>let</code> | No       | <code>Array<Footer></code>         | <code>undefined</code> | --          |
| items     | No       | <code>let</code> | No       | <code>Array<Item></code>           | <code>undefined</code> | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                | <code>undefined</code> | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code>                | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props                                    | Fallback                                                                                                        |
| :-------- | :------ | :--------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| --        | Yes     | --                                       | --                                                                                                              |
| footer    | No      | <code>{ footer: any } </code>            | <code>&lt;TableHeaderCell&gt;<br /> {footer.text}<br /> &lt;/TableHeaderCell&gt;</code>                         |
| header    | No      | <code>{ header: any } </code>            | <code>&lt;TableHeaderCell&gt;<br /> {header.text}<br /> &lt;/TableHeaderCell&gt;</code>                         |
| item      | No      | <code>{ item: any, header: any } </code> | <code>&lt;TableCell alignment={header.alignment}&gt;<br /> {item[header.value]}<br /> &lt;/TableCell&gt;</code> |

### Events

None.

## `TableBody`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `TableCell`

### Types

```ts
export type HorizontalAlignment = "start" | "center" | "end";

export interface Properties {
  alignment?: HorizontalAlignment;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}
```

### Props

| Prop name | Required | Kind             | Reactive | Type                                 | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------ | ---------------------- | ----------- |
| alignment | No       | <code>let</code> | No       | <code>Properties['alignment']</code> | <code>undefined</code> | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>                  | <code>undefined</code> | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code>                  | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `TableFooter`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `TableHeader`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `TableHeaderCell`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `TableRow`

### Types

```ts
export interface Properties {
  active?: boolean;
  hover?: boolean;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}
```

### Props

| Prop name | Required | Kind             | Reactive | Type                              | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | --------------------------------- | ---------------------- | ----------- |
| active    | No       | <code>let</code> | No       | <code>Properties['active']</code> | <code>false</code>     | --          |
| hover     | No       | <code>let</code> | No       | <code>Properties['hover']</code>  | <code>false</code>     | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>               | <code>undefined</code> | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code>               | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `TextArea`

### Types

```ts
export type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost";

export interface Properties {
  color?: Color;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}
```

### Props

| Prop name   | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :---------- | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| color       | No       | <code>let</code> | No       | <code>Color</code>   | <code>undefined</code> | --          |
| placeholder | No       | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |
| disabled    | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| bordered    | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| class       | No       | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |
| screen      | No       | <code>let</code> | No       | <code>Screen</code>  | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Toggle`

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

export type Size = "xs" | "sm" | "md" | "lg";

export interface Properties {
  color?: Color;
  size?: Size;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}
```

### Props

| Prop name     | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| color         | No       | <code>let</code> | No       | <code>Color</code>   | <code>undefined</code> | --          |
| size          | No       | <code>let</code> | No       | <code>Size</code>    | <code>undefined</code> | --          |
| disabled      | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| checked       | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| indeterminate | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| class         | No       | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |
| screen        | No       | <code>let</code> | No       | <code>Screen</code>  | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Tooltip`

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

export type Position = "top" | "bottom" | "left" | "right";

export interface Properties {
  color?: Color;
  position?: Position;
  open?: boolean;
}

export interface Screen {
  sm?: Properties;
  md?: Properties;
  lg?: Properties;
  xl?: Properties;
  "2xl"?: Properties;
}
```

### Props

| Prop name | Required | Kind             | Reactive | Type                  | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | --------------------- | ---------------------- | ----------- |
| color     | No       | <code>let</code> | No       | <code>Color</code>    | <code>undefined</code> | --          |
| open      | No       | <code>let</code> | No       | <code>boolean</code>  | <code>false</code>     | --          |
| position  | No       | <code>let</code> | No       | <code>Position</code> | <code>undefined</code> | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>   | <code>undefined</code> | --          |
| screen    | No       | <code>let</code> | No       | <code>Screen</code>   | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |
| content   | No      | --    | --       |

### Events

None.

## `TooltipContent`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| class     | No       | <code>let</code> | No       | <code>string</code> | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Window`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| bordered  | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| class     | No       | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.
