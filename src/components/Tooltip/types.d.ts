// Packages
import { HTMLAttributes } from "react"

// Types
export interface styleContainerProps extends HTMLAttributes<HTMLSpanElement> {
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "white"
        | "black"
        | "gray"
        | string
    textStyle?: "dotted" | "underline" | "bold"
}

export interface styleTipProps extends HTMLAttributes<HTMLSpanElement> {
    isVisible: boolean
}

export interface props extends styleContainerProps {
    text: string
}
