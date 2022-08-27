/*=============================================== Common types ===============================================*/

import React from "react"

/*==================== Colors ====================*/

/* Library colors */

const LibColors = {
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
} as const

export type LibColorsTypes = keyof typeof LibColors

/* Colors short */

const ColorsShort = {
    primary: "primary",
    secondary: "secondary",
    success: "success",
    danger: "danger",
    warning: "warning",
    gray: "gray",
    black: "black",
    white: "white",
} as const

export type ColorsShortTypes = keyof typeof ColorsShort

/* Colors hover */

const ColorsHover = {
    primary: "primary",
    secondary: "secondary",
    success: "success",
    danger: "danger",
    warning: "warning",
    white: "white",
} as const

export type ColorsHoverTypes = keyof typeof ColorsHover

/*==================== Text align ====================*/

const TextAlign = {
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

export type TextAlignTypes = keyof typeof TextAlign

/*==================== Spacers ====================*/

const Spacers = {
    xxl: "xxl",
    xl: "xl",
    l: "l",
    m: "m",
    s: "s",
    xs: "xs",
    xxs: "xxs",
} as const

export type SpacersTypes = keyof typeof Spacers

/*==================== Grid ====================*/

/* Justify items */

const GridJustifyItems = {
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
} as const

export type GridJustifyItemsTypes = keyof typeof GridJustifyItems

/* Align items */

const GridAlignItems = {
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
} as const

export type GridAlignItemsTypes = keyof typeof GridAlignItems

/* Justify content */

const GridJustifyContent = {
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
    "space-around": "space-around",
    "space-between": "space-between",
    "space-evenly": "space-evenly",
} as const

export type GridJustifyContentTypes = keyof typeof GridJustifyContent

/* Align content */

const GridAlignContent = {
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
    "space-around": "space-around",
    "space-between": "space-between",
    "space-evenly": "space-evenly",
} as const

export type GridAlignContentTypes = keyof typeof GridAlignContent

/*==================== Flexbox ====================*/

/* Direction */

const FlexDirection = {
    row: "row",
    "row-reverse": "row-reverse",
    column: "column",
    "column-reverse": "column-reverse",
} as const

export type FlexDirectionTypes = keyof typeof FlexDirection

/* Wrap */

const FlexWrap = {
    nowrap: "nowrap",
    wrap: "wrap",
    "wrap-reverse": "wrap-reverse",
} as const

export type FlexWrapTypes = keyof typeof FlexWrap

/* Justify content */

const FlexJustifyContent = {
    "flex-start": "flex-start",
    "flex-end": "flex-end",
    center: "center",
    "space-between": "space-between",
    "space-around": "space-around",
    "space-evenly": "space-evenly",
} as const

export type FlexJustifyContentTypes = keyof typeof FlexJustifyContent

/* Align items */

const FlexAlignItems = {
    stretch: "stretch",
    "flex-start": "flex-start",
    "flex-end": "flex-end",
    center: "center",
    baseline: "baseline",
} as const

export type FlexAlignItemsTypes = keyof typeof FlexAlignItems

/* Justify items */

const FlexJustifyItems = {
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

export type FlexJustifyItemsTypes = keyof typeof FlexJustifyItems

/* Align content */

const FlexAlignContent = {
    "flex-start": "flex-start",
    "flex-end": "flex-end",
    center: "center",
    "space-between": "space-between",
    "space-around": "space-around",
    "space-evenly": "space-evenly",
    stretch: "stretch",
    normal: "normal",
} as const

export type FlexAlignContentTypes = keyof typeof FlexAlignContent

/*==================== Object fit ====================*/

const ObjectFit = {
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

export type ObjectFitTypes = keyof typeof ObjectFit

/*==================== Inputs ====================*/

/* Validation */

const Validation = {
    passed: "passed",
    "not-passed": "not-passed",
} as const

export type ValidationTypes = keyof typeof Validation

/*==================== Countries ====================*/

export type CountryType = {
    name: string
    dial_code: string
    code: string
    flag: JSX.Element | any
}

/*==================== useForm ====================*/

export interface BaseUseFormType {
    handleInputs: (e: React.ChangeEvent<HTMLInputElement>) => void
    resetForm: any
    handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
}
