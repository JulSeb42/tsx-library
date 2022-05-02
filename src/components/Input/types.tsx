// Packages
import { HTMLAttributes } from "react"

// Types
export interface inputStyledProps extends HTMLAttributes<HTMLInputElement> {
    icon?: string
    validation?: any
    value?: any
    colorMode?: string
    onChange?: any
    preview?: any
}

export interface inputFunctionProps extends inputStyledProps {
    icon?: string
    password?: boolean
    validation?: string
    disabled?: boolean
    maxLength?: number
    type?: string
    customIconPassed?: string
    customIconNotPassed?: string
    iconPassword?: boolean
}

export interface iconContainerProps extends HTMLAttributes<HTMLSpanElement> {
    disabled?: boolean
}

export interface inputProps extends inputFunctionProps {
    label?: string
    helper?: string
    helperBottom?: string
    counter?: boolean
    validationText?: string
    id: string
    children?: any
}
