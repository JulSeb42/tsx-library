// Packages
import { HTMLAttributes } from "react"

// Types
export interface styleProps extends HTMLAttributes<HTMLButtonElement> {
    active?: boolean
    more?: boolean
}

export interface props extends styleProps {
    prev?: boolean
    customIconPrev?: string
    customIconMore?: string
    number?: number
    next?: boolean
    customIconNext?: string
    disabled?: boolean
}
