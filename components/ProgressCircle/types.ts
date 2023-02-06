/*=============================================== ProgressCircle types ===============================================*/

import React from "react"

import { AllColorsTypes } from "../../types"

export interface ProgressCirclePropsBase
    extends React.HTMLAttributes<HTMLOrSVGElement> {
    as?: React.ElementType
    value: number
    color?: AllColorsTypes
    strokeColor?: AllColorsTypes
    size?: number
    strokeWidth?: number
}

interface ProgressCircleAnimation1 extends ProgressCirclePropsBase {
    animated?: true
    speed?: number
}

interface ProgressCircleAnimation2 extends ProgressCirclePropsBase {
    animated?: false
    speed?: never
}

type ProgressCircleAnimation =
    | ProgressCircleAnimation1
    | ProgressCircleAnimation2

type ProgressCircleValue1 = ProgressCircleAnimation & {
    showValue?: boolean
    textColor?: AllColorsTypes
    icon?: never
    iconColor?: never
}

type ProgressCircleValue2 = ProgressCircleAnimation & {
    showValue?: never
    textColor?: never
    icon?: string
    iconColor?: AllColorsTypes
}

export type ProgressCircleProps = ProgressCircleValue1 | ProgressCircleValue2
