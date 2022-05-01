// Packages
import { HTMLAttributes } from "react"

// Types
export interface props extends HTMLAttributes<HTMLDivElement> {
    inline?: boolean
    col?: number
    gap?: string | number
    justify?: string
    align?: string
    row?: string
    area?: string
}

export default props
