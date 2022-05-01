// Packages
import { HTMLAttributes } from "react"

// Types
export interface styleProps extends HTMLAttributes<HTMLSpanElement> {
    size?: number
    textColor?: string
    color?: string
}

export interface props extends styleProps {
    icon?: string
}
