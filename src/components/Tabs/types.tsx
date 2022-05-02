// Packages
import { HTMLAttributes } from "react"

// Types
export interface buttonsContainerProps extends HTMLAttributes<HTMLDivElement> {
    col: number
}

export interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
    active?: boolean
}

export interface contentProps extends HTMLAttributes<HTMLDivElement> {
    active?: boolean
}
