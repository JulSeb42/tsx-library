// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLVideoElement> {
    width?: string | number
    height?: string | number
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
    aspectRatio?: string
    youtube?: string
    allow?: string
    frameBorder?: string
    allowFullScreen?: boolean
}

export interface props extends styleProps {
    src?: string
    controls?: boolean
    autoPlay?: boolean
}
