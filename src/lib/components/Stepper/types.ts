/*=============================================== Stepper types ===============================================*/

import type { ElementType, HTMLAttributes, ReactNode } from "react"

import type { LinkTypesBlank, StepProps as StepItemProps } from "../../types"

const direction = { column: "column", row: "row" } as const

export type StepperDirectionType = keyof typeof direction

interface StepperPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    active?: number
    direction?: StepperDirectionType
    iconActive?: string | JSX.Element
    iconSize?: number
}

interface StepperPropsContent1 extends StepperPropsBase {
    steps: StepItemProps[]
    children?: never
}

interface StepperPropsContent2 extends StepperPropsBase {
    steps?: never
    children: ReactNode | ReactNode[]
}

export type StepperProps = StepperPropsContent1 | StepperPropsContent2

export type StepProps = HTMLAttributes<HTMLSpanElement> &
    LinkTypesBlank & {
        as?: ElementType
        children: string | ReactNode
        direction?: StepperDirectionType
        isActive?: boolean
        iconActive?: string | JSX.Element
        iconSize?: number
        number?: number
    }
