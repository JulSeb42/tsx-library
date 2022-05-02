// Packages
import { HTMLAttributes } from "react"

// Types
export interface styleContainerProps extends HTMLAttributes<HTMLSpanElement> {
    color?: string
    textStyle?: string
}

export interface styleTipProps extends HTMLAttributes<HTMLSpanElement> {
    isVisible: boolean
}

export interface props extends styleContainerProps {
    text: string
}
