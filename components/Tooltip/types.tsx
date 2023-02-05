/*=============================================== Tooltip types ===============================================*/

import React from "react"

import { AllColorsTypes } from "../../utils/common-types"

/*==================== List possibilities ====================*/

const textStyles = {
    dotted: "dotted",
    underline: "underline",
    bold: "bold",
} as const

export type TextStylesTypes = keyof typeof textStyles

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLSpanElement> {
    tooltip: string
}

interface Possible1 extends BaseProps {
    children?: any
    textStyle?: TextStylesTypes
    color?: AllColorsTypes
}

interface Possible2 extends BaseProps {
    children?: any
    textStyle?: never
    color?: never
}

export type TooltipProps = Possible1 | Possible2
