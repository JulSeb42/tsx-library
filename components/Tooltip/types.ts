/*=============================================== Tooltip types ===============================================*/

import React from "react"

import { AllColorsTypes } from "../../types"

enum textStyles {
    dotted,
    underline,
    bold,
}

export type TextStylesTypes = keyof typeof textStyles

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
    as?: React.ElementType
    tooltip: string
    textStyle?: TextStylesTypes
    color?: AllColorsTypes
}
