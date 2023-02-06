/*=============================================== Stepper types ===============================================*/

import React from "react"

import { StepProps, ColorsHoverTypes } from "../../types"

enum direction {
    column,
    row,
}

export type StepperDirectionType = keyof typeof direction

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    steps: StepProps[]
    active?: number
    direction?: StepperDirectionType
    iconActive?: string
    accentColor?: ColorsHoverTypes
}
