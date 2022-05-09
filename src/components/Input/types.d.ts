// Packages
import { HTMLAttributes } from "react"

// Types
export interface inputStyledProps extends HTMLAttributes<HTMLInputElement> {
    icon?: string
    validation?: any
    value?: any
    colorMode?: "dark" | "light"
    onChange?: any
    preview?: "live" | "edit" | "preview"
}

export interface inputFunctionProps extends inputStyledProps {
    icon?: string
    password?: boolean
    validation?: string
    disabled?: boolean
    maxLength?: number
    type?:
        | "textarea"
        | "select"
        | "markdown"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "month"
        | "number"
        | "password"
        | "search"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week"
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
