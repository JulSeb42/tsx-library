/*=============================================== ProgressCircle types ===============================================*/

import type { HTMLAttributes } from "react"
import type { AllColorsTypes } from "../../types"

export interface ProgressCirclePropsBase extends HTMLAttributes<SVGElement> {
    value: number
    animated?: boolean
    color?: AllColorsTypes
}

type ProgressCircleValue1 = ProgressCirclePropsBase & {
    showValue?: true
    icon?: never
}

type ProgressCircleValue2 = ProgressCirclePropsBase & {
    showValue?: false
    icon?: string
}

export type ProgressCircleProps = ProgressCircleValue1 | ProgressCircleValue2
