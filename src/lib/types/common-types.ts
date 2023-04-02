/*=============================================== Common types ===============================================*/

/*==================== Colors ====================*/

/* Library colors */

enum libColors {
    black,
    white,
    "gray-50",
    "gray-100",
    "gray-200",
    "gray-300",
    "gray-400",
    "gray-500",
    "gray-600",
    "gray-700",
    "gray-800",
    "gray-900",
    "primary-50",
    "primary-100",
    "primary-200",
    "primary-300",
    "primary-400",
    "primary-500",
    "primary-600",
    "primary-700",
    "primary-800",
    "primary-900",
    "secondary-50",
    "secondary-100",
    "secondary-200",
    "secondary-300",
    "secondary-400",
    "secondary-500",
    "secondary-600",
    "secondary-700",
    "secondary-800",
    "secondary-900",
    "success-50",
    "success-100",
    "success-200",
    "success-300",
    "success-400",
    "success-500",
    "success-600",
    "success-700",
    "success-800",
    "success-900",
    "danger-50",
    "danger-100",
    "danger-200",
    "danger-300",
    "danger-400",
    "danger-500",
    "danger-600",
    "danger-700",
    "danger-800",
    "danger-900",
    "warning-50",
    "warning-100",
    "warning-200",
    "warning-300",
    "warning-400",
    "warning-500",
    "warning-600",
    "warning-700",
    "warning-800",
    "warning-900",
    currentColor,
    transparent,
    background,
    font,
}

export type LibColorsTypes = keyof typeof libColors

/* Colors hover */

enum colorsHover {
    primary,
    secondary,
    success,
    danger,
    warning,
    white,
    font,
    background,
}

export type ColorsHoverTypes = keyof typeof colorsHover

/* Colors input */

enum colorsInput {
    gray,
}

export type ColorsInputTypes = keyof typeof colorsInput | ColorsHoverTypes

/* Colors short */

enum colorsShort {
    black,
}

export type ColorsShortTypes = keyof typeof colorsShort | ColorsInputTypes

/* Overlays */

enum overlays {
    "overlay-black-50",
    "overlay-black-80",
    "overlay-white-50",
    "overlay-white-80",
    "overlay-gradient-black",
    "overlay-gradient-white",
}

export type OverlayTypes = keyof typeof overlays

/* All colors */

export type AllColorsTypes = LibColorsTypes | ColorsShortTypes

/*==================== Font sizes ====================*/

enum fontSizes {
    "display-h1",
    "display-h2",
    "display-h3",
    "display-h4",
    "display-h5",
    "title-h1",
    "title-h2",
    "title-h3",
    "title-h4",
    "title-h5",
    "title-h6",
    body,
    small,
}

export type FontSizeTypes = keyof typeof fontSizes | number

export type CustomFontSizeTypes = string | number

/*==================== Font weights ====================*/

enum weights {
    regular,
    bold,
    black,
}

export type FontWeightTypes = keyof typeof weights | number

/*==================== Shadows ====================*/

enum shadows {
    xxl,
    xl,
    l,
    m,
    s,
    xs,
    none,
}

export type ShadowsTypes = keyof typeof shadows

export type BoxShadowProps = {
    default: ShadowsTypes
    hover: ShadowsTypes
    active: ShadowsTypes
}

/*==================== Radiuses ====================*/

enum radiuses {
    xxl,
    xl,
    l,
    m,
    s,
    xs,
    round,
    circle,
    none,
}

export type RadiusesTypes =
    | keyof typeof radiuses
    | number
    | {
          topLeft?: keyof typeof radiuses | number
          topRight?: keyof typeof radiuses | number
          bottomRight?: keyof typeof radiuses | number
          bottomLeft?: keyof typeof radiuses | number
      }

/*==================== Text align ====================*/

enum textAlign {
    left,
    center,
    right,
    justify,
    inherit,
    initial,
    revert,
    "revert-layer",
    unset,
}

export type TextAlignTypes = keyof typeof textAlign

/*==================== Spacers ====================*/

enum spacers {
    xxl,
    xl,
    l,
    m,
    s,
    xs,
    xxs,
    none,
}

export type SpacersTypes = keyof typeof spacers | number

/*==================== Paddings ====================*/

export type PaddingTypes =
    | SpacersTypes
    | {
          left?: SpacersTypes
          top?: SpacersTypes
          right?: SpacersTypes
          bottom?: SpacersTypes
          leftRight?: SpacersTypes | string
          topBottom?: SpacersTypes | string
      }

/*==================== Custom position ====================*/

enum positions {
    relative,
    absolute,
    fixed,
}

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

enum gridJustifyItems {
    start,
    end,
    center,
    stretch,
}

export type GridJustifyItemsTypes = keyof typeof gridJustifyItems

/* Align items */

enum gridAlignItems {
    start,
    end,
    center,
    stretch,
}

export type GridAlignItemsTypes = keyof typeof gridAlignItems

/* Justify content */

enum gridJustifyContent {
    start,
    end,
    center,
    stretch,
    "space-around",
    "space-between",
    "space-evenly",
}

export type GridJustifyContentTypes = keyof typeof gridJustifyContent

/* Align content */

enum gridAlignContent {
    start,
    end,
    center,
    stretch,
    "space-around",
    "space-between",
    "space-evenly",
}

export type GridAlignContentTypes = keyof typeof gridAlignContent

/*==================== Flexbox ====================*/

/* Direction */

enum flexDirection {
    row,
    "row-reverse",
    column,
    "column-reverse",
}

export type FlexDirectionTypes = keyof typeof flexDirection

/* Wrap */

enum flexWrap {
    nowrap,
    wrap,
    "wrap-reverse",
}

export type FlexWrapTypes = keyof typeof flexWrap

/* Justify content */

enum flexJustifyContent {
    "flex-start",
    "flex-end",
    center,
    "space-between",
    "space-around",
    "space-evenly",
}

export type FlexJustifyContentTypes = keyof typeof flexJustifyContent

/* Align items */

enum flexAlignItems {
    stretch,
    "flex-start",
    "flex-end",
    center,
    baseline,
}

export type FlexAlignItemsTypes = keyof typeof flexAlignItems

/* Justify items */

enum flexJustifyItems {
    normal,
    stretch,
    baseline,
    center,
    start,
    end,
    "flex-start",
    "flex-end",
    "self-start",
    "self-end",
    left,
    right,
    legacy,
}

export type FlexJustifyItemsTypes = keyof typeof flexJustifyItems

/* Align content */

enum flexAlignContent {
    "flex-start",
    "flex-end",
    center,
    "space-between",
    "space-around",
    "space-evenly",
    stretch,
    normal,
}

export type FlexAlignContentTypes = keyof typeof flexAlignContent

/*==================== Object fit ====================*/

enum objectFit {
    contain,
    cover,
    fill,
    none,
    "scale-down",
    inherit,
    initial,
    revert,
    "revert-layer",
    unset,
}

export type ObjectFitTypes = keyof typeof objectFit

/*==================== Inputs ====================*/

/* Validation */

enum validation {
    passed,
    "not-passed",
}

export type ValidationTypes = keyof typeof validation | undefined

/*==================== Cursor ====================*/

enum cursors {
    alias,
    "all-scroll",
    auto,
    cell,
    "col-resize",
    "context-menu",
    copy,
    crosshair,
    default,
    "e-resize",
    "ew-resize",
    grab,
    grabbing,
    help,
    move,
    "n-resize",
    "ne-resize",
    "nesw-resize",
    "ns-resize",
    "nw-resize",
    "nwse-resize",
    "no-drop",
    none,
    "not-allowed",
    pointer,
    progress,
    "row-resize",
    "s-resize",
    "se-resize",
    "sw-resize",
    text,
    "vertical-text",
    "w-resize",
    wait,
    "zoom-in",
    "zoom-out",
    initial,
    inherit,
}

export type CursorTypes = keyof typeof cursors

/*==================== Border styles ====================*/

enum borderStyles {
    dotted,
    dashed,
    solid,
    double,
    groove,
    ridge,
    inset,
    outset,
    none,
    hidden,
}

export type BorderStylesTypes = keyof typeof borderStyles
