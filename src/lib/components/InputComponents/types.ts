/*=============================================== Input components types ===============================================*/

import type { HTMLAttributes } from "react"

import type { ValidationTypes } from "../../types"

const inputVariants = { rounded: "rounded", pill: "pill" } as const

export type InputVariantTypes = keyof typeof inputVariants

const inputBackgrounds = { light: "light", dark: "dark" } as const

export type InputBackgroundTypes = keyof typeof inputBackgrounds

export interface RightContainerProps extends HTMLAttributes<HTMLSpanElement> {
    disabled?: boolean
    variant?: InputVariantTypes
}

export interface IconComponentProps extends HTMLAttributes<HTMLSpanElement> {
    disabled?: boolean
    icon: string | JSX.Element
    validation?: ValidationTypes
    size?: number
    variant?: InputVariantTypes
    backgroundColor?: InputBackgroundTypes
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

interface ButtonRightPropsBase {
    onClick?: () => void
    disabled?: boolean
    className?: string
}

interface ButtonRightContent1 extends ButtonRightPropsBase {
    icon: string | JSX.Element
    text?: never
}

interface ButtonRightContent2 extends ButtonRightPropsBase {
    icon?: never
    text: string
}

export type ButtonRightProps = ButtonRightContent1 | ButtonRightContent2
