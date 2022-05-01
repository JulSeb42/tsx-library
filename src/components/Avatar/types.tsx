// Packages
import { HTMLAttributes } from "react"

// Types
export interface styleProps extends HTMLAttributes<HTMLSpanElement> {
    size?: number
    background?: string
    color?: string
}

export interface props extends styleProps {
    children?: string
    src?: string
    alt?: string
    icon?: string
}
