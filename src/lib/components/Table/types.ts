/*=============================================== Table types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    TextAlignTypes,
    ColorsHoverTypes,
    AllColorsTypes,
} from "../../types"
// import type { LinkStyleTypes, CodeStyleTypes } from "../Text/types"

const tableStyle = {
    bordered: "bordered",
    stripped: "stripped",
    "border-bottom": "border-bottom",
} as const

export type TableStyleTypes = keyof typeof tableStyle

const vAlign = {
    baseline: "baseline",
    top: "top",
    middle: "middle",
    bottom: "bottom",
    sub: "sub",
    "text-top": "text-top",
} as const

export type TableVerticalAlignTypes = keyof typeof vAlign

interface TablePropsBase extends HTMLAttributes<HTMLTableElement> {
    as?: ElementType
    textAlign?: TextAlignTypes
    vAlign?: TableVerticalAlignTypes
    headerBackground?: ColorsHoverTypes
    headerTextColor?: AllColorsTypes
    headers?: string[]

    // linkStylesHead?: LinkStyleTypes
    // linkStylesBody?: LinkStyleTypes
    // codeStylesHead?: CodeStyleTypes
    // codeStylesBody?: CodeStyleTypes
}

interface TableVariant1 extends TablePropsBase {
    variant?: "bordered" | "border-bottom"
    borderColor?: AllColorsTypes
    headerBorderColor?: AllColorsTypes
    textColor?: AllColorsTypes

    backgroundEven?: never
    backgroundOdd?: never
    textColorEven?: never
    textColorOdd?: never
}

interface TableVariant2 extends TablePropsBase {
    variant?: "stripped"
    borderColor?: never
    headerBorderColor?: never
    textColor?: never

    backgroundEven?: AllColorsTypes
    backgroundOdd?: AllColorsTypes
    textColorEven?: AllColorsTypes
    textColorOdd?: AllColorsTypes
}

export type TableProps = TableVariant1 | TableVariant2
