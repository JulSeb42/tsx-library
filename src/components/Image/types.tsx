// Imports
import React from "react"

export interface fallbackProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: number | string
    height?: number | string
}

export interface containerProps extends fallbackProps {}

export interface styleProps extends React.HTMLAttributes<HTMLImageElement> {
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
}

export interface props extends styleProps {
    src: string
    alt: string
    caption?: string
}
