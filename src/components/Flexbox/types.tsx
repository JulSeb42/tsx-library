// Packages
import { HTMLAttributes } from "react"

// Types
export interface props extends HTMLAttributes<HTMLDivElement> {
    align?: string
    justify?: string
    direction?: string
    wrap?: string
    gap?: string | number
}
