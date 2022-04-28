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
- [`Code`](#code)
- [`Icon`](#icon)
- [`Kbd`](#kbd)
- [`Link`](#link)
- [`Mask`](#mask)
- [`Window`](#window)

---

## `Alert`

### Types

```ts
export type BrandColor = "primary" | "secondary" | "accent";

export type FunctionalColor = "info" | "success" | "warning" | "error";
```

### Props

| Prop name | Kind             | Reactive | Type                                                                                                | Default value          | Description |
| :-------- | :--------------- | :------- | :-------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| message   | <code>let</code> | No       | <code>string &#124; undefined</code>                                                                | <code>undefined</code> | --          |
| icon      | <code>let</code> | No       | <code>{ component: typeof import('svelte').SvelteComponent; size: number; } &#124; undefined</code> | <code>undefined</code> | --          |
| color     | <code>let</code> | No       | <code>BrandColor &#124; FunctionalColor &#124; undefined</code>                                     | <code>undefined</code> | --          |
| class     | <code>let</code> | No       | <code>string &#124; undefined</code>                                                                | <code>''</code>        | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| actions   | No      | --    | --       |
| content   | No      | --    | --       |

### Events

None.

## `Artboard`

### Props

| Prop name  | Kind             | Reactive | Type                                                                                                                          | Default value      | Description |
| :--------- | :--------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------- |
| size       | <code>let</code> | No       | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; 1 &#124; 2 &#124; 3 &#124; 4 &#124; 5 &#124; 6</code> | <code>'1'</code>   | --          |
| demo       | <code>let</code> | No       | <code>boolean</code>                                                                                                          | <code>false</code> | --          |
| horizontal | <code>let</code> | No       | <code>boolean</code>                                                                                                          | <code>false</code> | --          |
| class      | <code>let</code> | No       | <code>string &#124; undefined</code>                                                                                          | <code>''</code>    | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Avatar`

### Props

| Prop name | Kind             | Reactive | Type                                                                                                           | Default value          | Description |
| :-------- | :--------------- | :------- | :------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| src       | <code>let</code> | No       | <code>string &#124; undefined</code>                                                                           | <code>undefined</code> | --          |
| alt       | <code>let</code> | No       | <code>string</code>                                                                                            | <code>undefined</code> | --          |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large' &#124; number &#124; string &#124; undefined</code> | <code>'medium'</code>  | --          |
| status    | <code>let</code> | No       | <code>'online' &#124; 'offline' &#124; undefined</code>                                                        | <code>undefined</code> | --          |
| class     | <code>let</code> | No       | <code>string &#124; undefined</code>                                                                           | <code>''</code>        | --          |

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

### Props

| Prop name | Kind             | Reactive | Type                                                                                                                                      | Default value          | Description |
| :-------- | :--------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| color     | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; undefined</code> | <code>undefined</code> | --          |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large'</code>                                                                         | <code>'medium'</code>  | --          |
| outline   | <code>let</code> | No       | <code>boolean</code>                                                                                                                      | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string &#124; undefined</code>                                                                                                      | <code>''</code>        | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `BreadcrumbGroup`

### Props

| Prop name | Kind             | Reactive | Type                                 | Default value   | Description |
| :-------- | :--------------- | :------- | :----------------------------------- | --------------- | ----------- |
| class     | <code>let</code> | No       | <code>string &#124; undefined</code> | <code>''</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `BreadcrumbItem`

### Props

| Prop name | Kind             | Reactive | Type                                 | Default value          | Description |
| :-------- | :--------------- | :------- | :----------------------------------- | ---------------------- | ----------- |
| href      | <code>let</code> | No       | <code>string &#124; undefined</code> | <code>undefined</code> | --          |
| class     | <code>let</code> | No       | <code>string &#124; undefined</code> | <code>''</code>        | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Button`

### Props

| Prop name | Kind             | Reactive | Type                                                                                                                                                                   | Default value          | Description |
| :-------- | :--------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| color     | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'ghost' &#124; 'link' &#124; undefined</code> | <code>undefined</code> | --          |
| size      | <code>let</code> | No       | <code>'tiny' &#124; 'small' &#124; 'medium' &#124; 'large' &#124; undefined</code>                                                                                     | <code>undefined</code> | --          |
| shape     | <code>let</code> | No       | <code>'square' &#124; 'circle' &#124; undefined</code>                                                                                                                 | <code>undefined</code> | --          |
| active    | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                   | <code>false</code>     | --          |
| block     | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                   | <code>false</code>     | --          |
| outline   | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                   | <code>false</code>     | --          |
| loading   | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                   | <code>false</code>     | --          |
| disabled  | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                   | <code>false</code>     | --          |
| noAnim    | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                   | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string &#124; undefined</code>                                                                                                                                   | <code>null</code>      | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| click      | forwarded | --     |

## `Code`

### Props

| Prop name | Kind             | Reactive | Type                                 | Default value   | Description |
| :-------- | :--------------- | :------- | :----------------------------------- | --------------- | ----------- |
| class     | <code>let</code> | No       | <code>string &#124; undefined</code> | <code>''</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Icon`

### Props

| Prop name | Kind             | Reactive | Type                                                                  | Default value          | Description |
| :-------- | :--------------- | :------- | :-------------------------------------------------------------------- | ---------------------- | ----------- |
| component | <code>let</code> | No       | <code>typeof import('svelte').SvelteComponent &#124; undefined</code> | <code>undefined</code> | --          |
| size      | <code>let</code> | No       | <code>number &#124; undefined</code>                                  | <code>undefined</code> | --          |
| height    | <code>let</code> | No       | <code>number</code>                                                   | <code>1</code>         | --          |
| width     | <code>let</code> | No       | <code>number</code>                                                   | <code>1</code>         | --          |
| spin      | <code>let</code> | No       | <code>boolean</code>                                                  | <code>false</code>     | --          |
| class     | <code>let</code> | No       | <code>string &#124; undefined</code>                                  | <code>''</code>        | --          |

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
| class     | <code>let</code> | No       | <code>string &#124; undefined</code>                              | <code>''</code>        | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Link`

### Props

| Prop name | Kind             | Reactive | Type                                                                                                                                                       | Default value          | Description |
| :-------- | :--------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| color     | <code>let</code> | No       | <code>'primary' &#124; 'secondary' &#124; 'accent' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error' &#124; 'neutral' &#124; undefined</code> | <code>undefined</code> | --          |
| hover     | <code>let</code> | No       | <code>boolean</code>                                                                                                                                       | <code>false</code>     | --          |
| href      | <code>let</code> | No       | <code>string &#124; undefined</code>                                                                                                                       | <code>'#'</code>       | --          |
| class     | <code>let</code> | No       | <code>string &#124; undefined</code>                                                                                                                       | <code>''</code>        | --          |

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
| half      | <code>let</code> | No       | <code>'1' &#124; '2' &#124; 1 &#124; 2 &#124; undefined</code>                                                                                                                                                                                                                                                                                                       | <code>undefined</code> | --          |
| type      | <code>let</code> | No       | <code>'squircle' &#124; 'heart' &#124; 'hexagon' &#124; 'hexagon2' &#124; 'decagon' &#124; 'pentagon' &#124; 'diamond' &#124; 'square' &#124; 'circle' &#124; 'parallelogram' &#124; 'parallelogram2' &#124; 'parallelogram3' &#124; 'parallelogram4' &#124; 'star' &#124; 'star2' &#124; 'triangle' &#124; 'triangle2' &#124; 'triangle3' &#124; 'triangle4'</code> | <code>'circle'</code>  | --          |
| class     | <code>let</code> | No       | <code>string</code>                                                                                                                                                                                                                                                                                                                                                  | <code>''</code>        | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Window`

### Props

| Prop name | Kind             | Reactive | Type                                 | Default value   | Description |
| :-------- | :--------------- | :------- | :----------------------------------- | --------------- | ----------- |
| class     | <code>let</code> | No       | <code>string &#124; undefined</code> | <code>''</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.
