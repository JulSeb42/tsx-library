/*=============================================== Stepper types ===============================================*/

import React from "react"

import { StepProps } from "../../utils/component-props"
import { ColorsHoverTypes } from "../../utils/common-types"

/*==================== List possibilities ====================*/

const direction = {
    column: "column",
    row: "row",
} as const

export type DirectionTypes = keyof typeof direction

/*==================== Component Types ====================*/

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
    steps: StepProps[]
    active: number
    direction?: DirectionTypes
    iconActive?: string
    accentColor?: ColorsHoverTypes
}
