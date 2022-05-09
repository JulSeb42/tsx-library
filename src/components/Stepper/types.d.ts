// Packages
import { HTMLAttributes } from "react"

// Types
export interface textStyleProps extends HTMLAttributes<HTMLParagraphElement> {
    to?: string
}

export interface props extends HTMLAttributes<HTMLDivElement> {
    steps: {
        text: string
        to?: string
    }[]
    active: number
}
