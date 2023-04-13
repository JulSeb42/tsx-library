/*=============================================== Stepper types ===============================================*/

import type { HTMLAttributes, ElementType, ReactNode } from "react"

import type {
    StepProps as StepItemProps,
    ColorsHoverTypes,
    LinkTypesBlank,
} from "../../types"

enum direction {
    column,
    row,
}

export type StepperDirectionType = keyof typeof direction

interface StepperPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    active?: number
    direction?: StepperDirectionType
    iconActive?: string | JSX.Element
    accentColor?: ColorsHoverTypes
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
        accentColor?: ColorsHoverTypes
        isActive?: boolean
        iconActive?: string | JSX.Element
        number?: number
    }
