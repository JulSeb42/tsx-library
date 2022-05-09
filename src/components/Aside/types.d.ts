// Packages
import { HTMLAttributes } from "react"

// Types
export interface props extends HTMLAttributes<HTMLElement> {
    gap?: string | number
    template?: "aside-left" | "aside-right" | "both-sides"
    last?: boolean
    justify?: "start" | "end" | "center" | "stretch"
    align?: "start" | "end" | "center" | "stretch"
}
