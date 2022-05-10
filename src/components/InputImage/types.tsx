// Packages
import { HTMLAttributes } from "react"

// Types
export interface styleProps extends HTMLAttributes<HTMLLabelElement> {
    width?: string
    height?: string
}

export interface props extends HTMLAttributes<HTMLInputElement> {
    label?: string
    helper?: string
    validation?: string
    src: string
    alt: string
    iconEmpty?: string
    iconHover?: string
    width?: string
    height?: string
    id: string
}
