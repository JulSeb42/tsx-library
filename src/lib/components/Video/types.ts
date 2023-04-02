/*=============================================== Video types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { ObjectFitTypes } from "../../types"

export interface VideoProps extends HTMLAttributes<HTMLVideoElement> {
    as?: ElementType
    src: string
    width?: string | number
    height?: string | number
    fit?: ObjectFitTypes
    aspectRatio?: string
    emptyText?: string
    autoPlay?: boolean
    muted?: boolean
    controls?: boolean
    type?:
        | "video/x-flv"
        | "video/mp4"
        | "application/x-mpegURL"
        | "video/MP2T"
        | "video/3gpp"
        | "video/quicktime"
        | "video/x-msvideo"
        | "video/x-ms-wmv"
}
