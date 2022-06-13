# Component Index

## Components

- [`Alert`](#alert)

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

export interface ResponsiveProperties {
  color?: Color;
}

export interface Screen {
  sm?: ResponsiveProperties;
  md?: ResponsiveProperties;
  lg?: ResponsiveProperties;
  xl?: ResponsiveProperties;
  "2xl"?: ResponsiveProperties;
}
```

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value          | Description                                                                                                                       |
| :-------- | :------- | :--------------- | :------- | -------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| color     | No       | <code>let</code> | No       | <code>Color</code>   | <code>undefined</code> | Background color of component. Functional colors such as `info`, `success`, `warning` and `error` add a default icon on the left. |
| showIcon  | No       | <code>let</code> | No       | <code>boolean</code> | <code>true</code>      | Show an icon defaulted to the functional colors, e.g. `info`, `success`, `warning` and `error`.                                   |
| class     | No       | <code>let</code> | No       | <code>string</code>  | <code>undefined</code> | A space-separated list of the classes of the element.                                                                             |
| screen    | No       | <code>let</code> | No       | <code>Screen</code>  | <code>undefined</code> | Responsive properties based on minimum screen widths.                                                                             |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.
