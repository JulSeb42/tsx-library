/*=============================================== Table types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    TextAlignTypes,
    ColorsHoverTypes,
    AllColorsTypes,
} from "../../types"
import type { LinkStyleTypes, CodeStyleTypes } from "../Text/types"

enum tableStyle {
    bordered,
    stripped,
    "border-bottom",
}

export type TableStyleTypes = keyof typeof tableStyle

enum vAlign {
    baseline,
    top,
    middle,
    bottom,
    sub,
    "text-top",
}

export type TableVerticalAlignTypes = keyof typeof vAlign

interface TablePropsBase extends HTMLAttributes<HTMLTableElement> {
    as?: ElementType
    textAlign?: TextAlignTypes
    vAlign?: TableVerticalAlignTypes
    headerBackground?: ColorsHoverTypes
    headerTextColor?: AllColorsTypes
    headers?: string[]

    linkStylesHead?: LinkStyleTypes
    linkStylesBody?: LinkStyleTypes
    codeStylesHead?: CodeStyleTypes
    codeStylesBody?: CodeStyleTypes
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
