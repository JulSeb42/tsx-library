// Packages
import { HTMLAttributes } from "react"

// Types
export interface props extends HTMLAttributes<HTMLElement> {
    gap?: string
    template?: string
    last?: boolean
    justify?: string
    align?: string
}
