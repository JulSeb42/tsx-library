// Packages
import { HTMLAttributes } from "react"

// Types
export interface propsFallback extends HTMLAttributes<HTMLDivElement> {
    width: number | string
    height: number | string
}

export interface propsContainer extends HTMLAttributes<HTMLDivElement> {
    width?: number | string
    height?: number | string
}

export interface propsImg extends HTMLAttributes<HTMLImageElement> {
    width?: number | string
    height?: number | string
    fit?:
        | "fill"
        | "contain"
        | "cover"
        | "none"
        | "scale-down"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
        | string
        | undefined
}

export interface propsComponent extends propsImg {
    className?: string
    src: string
    alt: string
    caption?: string
}
