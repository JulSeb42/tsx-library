// Packages
import { HTMLAttributes } from "react"

// Types
export interface styleProps extends HTMLAttributes<HTMLParagraphElement> {
    icon?: string
}

export interface itemProps extends styleProps {
    to?: string
}
