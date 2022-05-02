// Packages
import { HTMLAttributes } from "react"

// Types
export interface propsFallback extends HTMLAttributes<HTMLDivElement> {
    width: number | string
    height: number | string
}

export interface propsContainer extends HTMLAttributes<HTMLDivElement> {
    width?: string | number
    height?: string | number
}

export interface propsImg extends HTMLAttributes<HTMLImageElement> {
    width?: string | number
    height?: string | number
    fit?: string
}

export interface propsComponent extends propsImg {
    width?: string | number
    height?: string | number
    className?: string
    src: string
    alt: string
    fit?: string
    caption?: string
}
