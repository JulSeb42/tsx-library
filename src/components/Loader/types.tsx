// Packages
import { HTMLAttributes } from "react"

// Types
export interface props extends HTMLAttributes<HTMLSpanElement> {
    size?: number
    border?: number
    backgroundColor?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "white"
        | string
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "white"
        | string
    marginLeft?: string | number
    marginRight?: string | number
    speed?: number
}
