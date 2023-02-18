/*=============================================== Table types ===============================================*/

import React from "react"

import { TextAlignTypes, ColorsHoverTypes, AllColorsTypes } from "../../types"

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

interface TablePropsBase extends React.HTMLAttributes<HTMLTableElement> {
    as?: React.ElementType
    textAlign?: TextAlignTypes
    vAlign?: TableVerticalAlignTypes
    headerBackground?: ColorsHoverTypes
    headerTextColor?: AllColorsTypes
    linkColor?: ColorsHoverTypes
    linkColorHeader?: ColorsHoverTypes
    headers?: string[]
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
