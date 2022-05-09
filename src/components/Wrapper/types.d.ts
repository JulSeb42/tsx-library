// Packages
import { HTMLAttributes } from "react"

// Types
export interface props extends HTMLAttributes<HTMLDivElement> {
    gap?: string | number
    template?: "1-col" | "aside-left" | "aside-right" | "both-sides" | "form"
}
