// Packages
import { HTMLAttributes } from "react"

// Types
export interface props extends HTMLAttributes<HTMLSpanElement> {
    size?: number
    border?: number
    backgroundColor?: string
    color?: string
    marginLeft?: string
    marginRight?: string
}
