// Packages
import { HTMLAttributes } from "react"

// Types
export interface props extends HTMLAttributes<HTMLSpanElement> {
    value: number
    height?: number
    color?: string
}
