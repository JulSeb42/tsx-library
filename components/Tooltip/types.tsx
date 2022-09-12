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

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
    tooltip: string
    children: string
    textStyle?: TextStylesTypes
    color?: AllColorsTypes
}
