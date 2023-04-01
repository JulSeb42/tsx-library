/*=============================================== Tooltip types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import {
    // AllColorsTypes
    AllColorsTypes,
} from "../../types"

enum textStyles {
    dotted,
    underline,
    bold,
}

export type TextStylesTypes = keyof typeof textStyles

export interface TooltipProps extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    tooltip: string
    textStyle?: TextStylesTypes
    color?: AllColorsTypes
}
