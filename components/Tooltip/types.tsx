/*=============================================== Tooltip types ===============================================*/

import React from "react"

import { ColorsShortTypes, LibColorsTypes } from "../../utils/common-types"

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
    options?: {
        textStyle?: TextStylesTypes
        color?: ColorsShortTypes | LibColorsTypes | string
    }
}
