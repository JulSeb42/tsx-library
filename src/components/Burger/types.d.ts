// Packages
import { HTMLAttributes } from "react"

// Types
export interface styleProps extends HTMLAttributes<HTMLButtonElement> {
    width?: number
    height?: number
    border?: number
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "white"
        | string
    open: boolean
}

export interface props extends styleProps {
    ariaLabel?: string
    onClick: (event: React.MouseEvent<HTMLElement>) => void
    open: boolean
}
