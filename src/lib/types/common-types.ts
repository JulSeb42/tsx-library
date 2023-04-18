/*=============================================== Common types ===============================================*/

import type { RequireAtLeastOne } from "./"

/*==================== Colors ====================*/

/* Library colors */

const libColors = {
    black: "black",
    white: "white",
    "gray-50": "gray-50",
    "gray-100": "gray-100",
    "gray-200": "gray-200",
    "gray-300": "gray-300",
    "gray-400": "gray-400",
    "gray-500": "gray-500",
    "gray-600": "gray-600",
    "gray-700": "gray-700",
    "gray-800": "gray-800",
    "gray-900": "gray-900",
    "primary-50": "primary-50",
    "primary-100": "primary-100",
    "primary-200": "primary-200",
    "primary-300": "primary-300",
    "primary-400": "primary-400",
    "primary-500": "primary-500",
    "primary-600": "primary-600",
    "primary-700": "primary-700",
    "primary-800": "primary-800",
    "primary-900": "primary-900",
    "secondary-50": "secondary-50",
    "secondary-100": "secondary-100",
    "secondary-200": "secondary-200",
    "secondary-300": "secondary-300",
    "secondary-400": "secondary-400",
    "secondary-500": "secondary-500",
    "secondary-600": "secondary-600",
    "secondary-700": "secondary-700",
    "secondary-800": "secondary-800",
    "secondary-900": "secondary-900",
    "success-50": "success-50",
    "success-100": "success-100",
    "success-200": "success-200",
    "success-300": "success-300",
    "success-400": "success-400",
    "success-500": "success-500",
    "success-600": "success-600",
    "success-700": "success-700",
    "success-800": "success-800",
    "success-900": "success-900",
    "danger-50": "danger-50",
    "danger-100": "danger-100",
    "danger-200": "danger-200",
    "danger-300": "danger-300",
    "danger-400": "danger-400",
    "danger-500": "danger-500",
    "danger-600": "danger-600",
    "danger-700": "danger-700",
    "danger-800": "danger-800",
    "danger-900": "danger-900",
    "warning-50": "warning-50",
    "warning-100": "warning-100",
    "warning-200": "warning-200",
    "warning-300": "warning-300",
    "warning-400": "warning-400",
    "warning-500": "warning-500",
    "warning-600": "warning-600",
    "warning-700": "warning-700",
    "warning-800": "warning-800",
    "warning-900": "warning-900",
    currentColor: "currentColor",
    transparent: "transparent",
    background: "background",
    font: "font",
} as const

export type LibColorsTypes = keyof typeof libColors

/* Colors hover */

const colorsHover = {
    primary: "primary",
    secondary: "secondary",
    success: "success",
    danger: "danger",
    warning: "warning",
    white: "white",
    font: "font",
    background: "background",
} as const

export type ColorsHoverTypes = keyof typeof colorsHover

/* Colors input */

const colorsInput = { gray: "gray" } as const

export type ColorsInputTypes = keyof typeof colorsInput | ColorsHoverTypes

/* Colors short */

const colorsShort = { black: "black" } as const

export type ColorsShortTypes = keyof typeof colorsShort | ColorsInputTypes

/* Overlays */

const overlays = {
    "overlay-black-50": "overlay-black-50",
    "overlay-black-80": "overlay-black-80",
    "overlay-white-50": "overlay-white-50",
    "overlay-white-80": "overlay-white-80",
    "overlay-gradient-black": "overlay-gradient-black",
    "overlay-gradient-white": "overlay-gradient-white",
} as const

export type OverlayTypes = keyof typeof overlays

/* All colors */

export type AllColorsTypes = LibColorsTypes | ColorsShortTypes

/*==================== Font families ====================*/

const fontFamilies = { body: "body", code: "code", custom: "custom" } as const

export type FontFamiliesTypes = keyof typeof fontFamilies

/*==================== Font sizes ====================*/

const fontSizes = {
    "display-h1": "display-h1",
    "display-h2": "display-h2",
    "display-h3": "display-h3",
    "display-h4": "display-h4",
    "display-h5": "display-h5",
    "title-h1": "title-h1",
    "title-h2": "title-h2",
    "title-h3": "title-h3",
    "title-h4": "title-h4",
    "title-h5": "title-h5",
    "title-h6": "title-h6",
    body: "body",
    small: "small",
} as const

export type FontSizeTypes = keyof typeof fontSizes

export type CustomFontSizeTypes = string | number

/*==================== Font weights ====================*/

const weights = { regular: "regular", bold: "bold", black: "black" } as const

export type FontWeightTypes = keyof typeof weights | number

/*==================== Line heights ====================*/

const lineHeights = { regular: "regular", code: "code" } as const

export type LineHeightsTypes = keyof typeof lineHeights | number

/*==================== Shadows ====================*/

const shadows = {
    xxl: "xxl",
    xl: "xl",
    l: "l",
    m: "m",
    s: "s",
    xs: "xs",
    none: "none",
} as const

export type ShadowsTypes = keyof typeof shadows | null

export type BoxShadowProps = {
    default: ShadowsTypes
    hover: ShadowsTypes
    active: ShadowsTypes
}

/*==================== Radiuses ====================*/

const radiuses = {
    xxl: "xxl",
    xl: "xl",
    l: "l",
    m: "m",
    s: "s",
    xs: "xs",
    round: "round",
    circle: "circle",
    none: "none",
} as const

export type RadiusesTypes =
    | keyof typeof radiuses
    | number
    | {
          topLeft?: keyof typeof radiuses | number | null
          topRight?: keyof typeof radiuses | number | null
          bottomRight?: keyof typeof radiuses | number | null
          bottomLeft?: keyof typeof radiuses | number | null
      }
    | null

/*==================== Text align ====================*/

const textAlign = {
    left: "left",
    center: "center",
    right: "right",
    justify: "justify",
    inherit: "inherit",
    initial: "initial",
    revert: "revert",
    "revert-layer": "revert-layer",
    unset: "unset",
} as const

export type TextAlignTypes = keyof typeof textAlign

/*==================== Spacers ====================*/

const spacers = {
    xxl: "xxl",
    xl: "xl",
    l: "l",
    m: "m",
    s: "s",
    xs: "xs",
    xxs: "xxs",
    none: "none",
} as const

export type SpacersTypes = keyof typeof spacers | number | null

/*==================== Paddings ====================*/

export type PaddingTypes =
    | SpacersTypes
    | {
          left?: SpacersTypes
          top?: SpacersTypes
          right?: SpacersTypes
          bottom?: SpacersTypes
          leftRight?: SpacersTypes
          topBottom?: SpacersTypes
      }

/*==================== Transitions ====================*/

const transitions = { short: "short", long: "long", bezier: "bezier" } as const

export type TransitionTypes = keyof typeof transitions

/*==================== Text decoration ====================*/

const textDecorations = {
    underline: "underline",
    overline: "overline",
    "line-through": "line-through",
    initial: "initial",
    inherit: "inherit",
    none: "none",
} as const

export type TextDecorationTypes = keyof typeof textDecorations

/*==================== Custom position ====================*/

const positions = {
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
} as const

export type PositionsTypes = keyof typeof positions

export type ObjectPositionTypes = {
    position?: PositionsTypes
    left?: SpacersTypes
    top?: SpacersTypes
    right?: SpacersTypes
    bottom?: SpacersTypes
    zIndex?: number
}

/*==================== Grid ====================*/

/* Justify items */

const gridJustifyItems = {
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
} as const

export type GridJustifyItemsTypes = keyof typeof gridJustifyItems | null

/* Align items */

const gridAlignItems = {
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
} as const

export type GridAlignItemsTypes = keyof typeof gridAlignItems | null

/* Justify content */

const gridJustifyContent = {
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
    "space-around": "space-around",
    "space-between": "space-between",
    "space-evenly": "space-evenly",
} as const

export type GridJustifyContentTypes = keyof typeof gridJustifyContent | null

/* Align content */

const gridAlignContent = {
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
    "space-around": "space-around",
    "space-between": "space-between",
    "space-evenly": "space-evenly",
} as const

export type GridAlignContentTypes = keyof typeof gridAlignContent | null

/*==================== Flexbox ====================*/

/* Direction */

export const flexDirectionValues = {
    row: "row",
    "row-reverse": "row-reverse",
    column: "column",
    "column-reverse": "column-reverse",
} as const

export type FlexDirectionTypes = keyof typeof flexDirectionValues | null

/* Wrap */

export const flexWrapValues = {
    nowrap: "nowrap",
    wrap: "wrap",
    "wrap-reverse": "wrap-reverse",
} as const

export type FlexWrapTypes = keyof typeof flexWrapValues | null

/* Justify content */

const flexJustifyContentValues = {
    "flex-start": "flex-start",
    "flex-end": "flex-end",
    center: "center",
    "space-between": "space-between",
    "space-around": "space-around",
    "space-evenly": "space-evenly",
} as const

export type FlexJustifyContentTypes =
    | keyof typeof flexJustifyContentValues
    | null

/* Align items */

const flexAlignItems = {
    stretch: "stretch",
    "flex-start": "flex-start",
    "flex-end": "flex-end",
    center: "center",
    baseline: "baseline",
} as const

export type FlexAlignItemsTypes = keyof typeof flexAlignItems | null

/* Justify items */

const flexJustifyItems = {
    normal: "normal",
    stretch: "stretch",
    baseline: "baseline",
    center: "center",
    start: "start",
    end: "end",
    "flex-start": "flex-start",
    "flex-end": "flex-end",
    "self-start": "self-start",
    "self-end": "self-end",
    left: "left",
    right: "right",
    legacy: "legacy",
} as const

export type FlexJustifyItemsTypes = keyof typeof flexJustifyItems | null

/* Align content */

const flexAlignContent = {
    "flex-start": "flex-start",
    "flex-end": "flex-end",
    center: "center",
    "space-between": "space-between",
    "space-around": "space-around",
    "space-evenly": "space-evenly",
    stretch: "stretch",
    normal: "normal",
} as const

export type FlexAlignContentTypes = keyof typeof flexAlignContent | null

/*==================== Object fit ====================*/

const objectFit = {
    contain: "contain",
    cover: "cover",
    fill: "fill",
    none: "none",
    "scale-down": "scale-down",
    inherit: "inherit",
    initial: "initial",
    revert: "revert",
    "revert-layer": "revert-layer",
    unset: "unset",
} as const

export type ObjectFitTypes = keyof typeof objectFit | null

/*==================== Inputs ====================*/

/* Validation */

const validation = { passed: "passed", "not-passed": "not-passed" } as const

export type ValidationTypes = keyof typeof validation | undefined

/*==================== Cursor ====================*/

const cursors = {
    alias: "alias",
    "all-scroll": "all-scroll",
    auto: "auto",
    cell: "cell",
    "col-resize": "col-resize",
    "context-menu": "context-menu",
    copy: "copy",
    crosshair: "crosshair",
    default: "default",
    "e-resize": "e-resize",
    "ew-resize": "ew-resize",
    grab: "grab",
    grabbing: "grabbing",
    help: "help",
    move: "move",
    "n-resize": "n-resize",
    "ne-resize": "ne-resize",
    "nesw-resize": "nesw-resize",
    "ns-resize": "ns-resize",
    "nw-resize": "nw-resize",
    "nwse-resize": "nwse-resize",
    "no-drop": "no-drop",
    none: "none",
    "not-allowed": "not-allowed",
    pointer: "pointer",
    progress: "progress",
    "row-resize": "row-resize",
    "s-resize": "s-resize",
    "se-resize": "se-resize",
    "sw-resize": "sw-resize",
    text: "text",
    "vertical-text": "vertical-text",
    "w-resize": "w-resize",
    wait: "wait",
    "zoom-in": "zoom-in",
    "zoom-out": "zoom-out",
    initial: "initial",
    inherit: "inherit",
} as const

export type CursorTypes = keyof typeof cursors

/*==================== Border styles ====================*/

const borderStyles = {
    dotted: "dotted",
    dashed: "dashed",
    solid: "solid",
    double: "double",
    groove: "groove",
    ridge: "ridge",
    inset: "inset",
    outset: "outset",
    none: "none",
    hidden: "hidden",
} as const

export type BorderStylesTypes = keyof typeof borderStyles

/*==================== Border ====================*/

export type BorderTypes = {
    style?: BorderStylesTypes
    width?: number
    color?: AllColorsTypes
}

/*==================== Links ====================*/

type LinkType1 = {
    href?: never
    to?: string
}

type LinkType2 = {
    href?: string
    to?: never
}

export type LinkTypes = LinkType1 | LinkType2

export type LinkTypesRequire = RequireAtLeastOne<LinkTypes, "href" | "to">

export type LinkTypesBlank = LinkTypes & { blank?: boolean }

export type LinkTypesBlankRequire = LinkTypesRequire & { blank?: boolean }

/*==================== ButtonLinks ====================*/

type ButtonLinkType1 = {
    onClick?: () => void
    href?: never
    to?: never
    blank?: never
}

type ButtonLinkType2 = {
    onClick?: never
    href?: string
    to?: never
    blank?: boolean
}

type ButtonLinkType3 = {
    onClick?: never
    href?: never
    to?: string
    blank?: boolean
}

export type ButtonLinkTypes =
    | ButtonLinkType1
    | ButtonLinkType2
    | ButtonLinkType3

export type ButtonLinkTypesRequire = RequireAtLeastOne<
    ButtonLinkTypes,
    "href" | "to" | "onClick"
>

/*==================== ButtonLinksDisabled ====================*/

type ButtonLinkDisabledType1 = {
    onClick?: () => void
    disabled?: boolean
    href?: never
    to?: never
    blank?: never
}

type ButtonLinkDisabledType2 = {
    onClick?: never
    disabled?: never
    href?: string
    to?: never
    blank?: boolean
}

type ButtonLinkDisabledType3 = {
    onClick?: never
    disabled?: never
    href?: never
    to?: string
    blank?: boolean
}

export type ButtonLinkDisabledTypes =
    | ButtonLinkDisabledType1
    | ButtonLinkDisabledType2
    | ButtonLinkDisabledType3

export type ButtonLinkTypesDisabledRequire = RequireAtLeastOne<
    ButtonLinkTypes,
    "href" | "to" | "onClick"
>
