// Imports
import React from "react"

export interface inputStyledProps extends React.HTMLAttributes<HTMLInputElement> {
    icon?: string
    validation?: any
    value?: any
    colorMode?: "dark" | "light"
    onChange?: any
    preview?: "live" | "edit" | "preview"
    as?: string | any
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
    as?: string | any
}

export interface inputProps extends inputFunctionProps {
    label?: string
    helper?: string
    helperBottom?: string
    counter?: boolean
    validationText?: string
    id: string
    children?: any
    as?: string | any
}

export interface iconContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
    disabled?: boolean
    as?: string | any
}
