/*=============================================== ProgressBar types ===============================================*/

import React from "react"

import { AllColorsTypes, SpacersTypes } from "../../utils/common-types"

/*==================== List possibilities ====================*/

const direction = {
    horizontal: "horizontal",
    vertical: "vertical",
} as const

export type DirectionTypes = keyof typeof direction

/*==================== Component Types ====================*/

export interface ProgressBarProps
    extends React.HTMLAttributes<HTMLSpanElement> {
    value: number
    as?: React.ElementType
    color?: AllColorsTypes
    backgroundColor?: AllColorsTypes
    animated?: boolean
    width?: number | string | SpacersTypes
    height?: number | string | SpacersTypes
    direction?: DirectionTypes
}
