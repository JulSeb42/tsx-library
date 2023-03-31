/*=============================================== Input components types ===============================================*/

import type { HTMLAttributes } from "react"

import type { ColorsHoverTypes, ValidationTypes } from "../../types"

enum inputVariants {
    rounded,
    pill,
}

export type InputVariantTypes = keyof typeof inputVariants

enum inputBackgrounds {
    light,
    dark,
}

export type InputBackgroundTypes = keyof typeof inputBackgrounds

export interface RightContainerProps extends HTMLAttributes<HTMLSpanElement> {
    disabled?: boolean
    variant?: InputVariantTypes
}

export interface IconComponentProps extends HTMLAttributes<HTMLSpanElement> {
    disabled?: boolean
    icon: string | JSX.Element
    accentColor?: ColorsHoverTypes
    validation?: "passed" | "not-passed"
    size?: number
    variant?: InputVariantTypes
}

export interface ValidationComponentProps {
    validation?:
        | ValidationTypes
        | {
              status: ValidationTypes
              iconPassed?: string
              iconNotPassed?: string
          }
}

export interface IconInputProps {
    icon?: string
    iconSize?: number
}
