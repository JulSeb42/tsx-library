/*=============================================== Table types ===============================================*/

import React from "react"

import {
    TextAlignTypes,
    ColorsHoverTypes,
    AllColorsTypes,
} from "../../utils/common-types"

/*==================== List possibilities ====================*/

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

export type VAlignTypes = keyof typeof vAlign

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLTableElement> {
    children: React.ReactNode | React.ReactNode[]
    textAlign?: TextAlignTypes
    vAlign?: VAlignTypes
    headerBackground?: ColorsHoverTypes
    headerTextColor?: AllColorsTypes
    linkColor?: ColorsHoverTypes
    linkColorHeader?: ColorsHoverTypes
}

interface Possible1 extends BaseProps {
    variant?: "bordered" | "border-bottom"
    borderColor?: AllColorsTypes
    headerBorderColor?: AllColorsTypes
    backgroundEven?: never
    backgroundOdd?: never
    textColor?: AllColorsTypes
    textColorEven?: never
    textColorOdd?: never
}

interface Possible2 extends BaseProps {
    variant?: "stripped"
    borderColor?: never
    backgroundEven?: AllColorsTypes
    backgroundOdd?: AllColorsTypes
    textColor?: never
    textColorEven?: AllColorsTypes
    textColorOdd?: AllColorsTypes
    headerBorderColor?: never
}

export type TableProps = Possible1 | Possible2
