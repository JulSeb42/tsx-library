// Packages
import { HTMLAttributes } from "react"

// Types
export default interface props extends HTMLAttributes<HTMLElement> {
    gap?: string
    template?: string
    last?: boolean
    justify?: string
    align?: string
}
