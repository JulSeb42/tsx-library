/*=============================================== Stepper types ===============================================*/

import React from "react"

import { StepProps } from "../../utils/component-props"

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

    options?: {
        direction?: DirectionTypes
        iconActive?: string
    }
}
