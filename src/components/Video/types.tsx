// Packages
import { HTMLAttributes } from "react"

// Types
export interface styleProps extends HTMLAttributes<HTMLVideoElement> {
    width?: string | number
    height?: string | number
    fit?: string
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
