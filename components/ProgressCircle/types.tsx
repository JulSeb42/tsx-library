/*=============================================== ProgressCircle types ===============================================*/

import React from "react"

import { AllColorsTypes } from "../../utils/common-types"

export interface BaseProps extends React.HTMLAttributes<HTMLSpanElement> {
    value: number
    color?: AllColorsTypes
    strokeColor?: AllColorsTypes
    animated?: boolean
    size?: number
    strokeWidth?: number
    speed?: number
}

interface Possible1 extends BaseProps {
    showValue?: boolean
    textColor?: AllColorsTypes
    icon?: never
    iconColor?: never
}

interface Possible2 extends BaseProps {
    showValue?: never
    textColor?: never
    icon?: string
    iconColor?: AllColorsTypes
}

export type ProgressCircleProps = Possible1 | Possible2
