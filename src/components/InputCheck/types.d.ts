// Packages
import { HTMLAttributes } from "react"

// Types
export interface styleContainerProps extends HTMLAttributes<HTMLLabelElement> {
    disabled?: boolean
    justify?: "start" | "center" | "end" | "stretch"
}

export interface styleLabelProps extends HTMLAttributes<HTMLLabelElement> {
    disabled?: boolean
    selector?: boolean
}

export interface styleCheckProps extends HTMLAttributes<HTMLLabelElement> {
    disabled?: boolean
}

export interface props extends HTMLAttributes<HTMLInputElement> {
    disabled?: boolean
    selector?: boolean
    toggle?: boolean
    label: string
    justify?: "start" | "center" | "end" | "stretch"
    type?: "checkbox" | "radio"
    icon?: string
    name?: string
}
