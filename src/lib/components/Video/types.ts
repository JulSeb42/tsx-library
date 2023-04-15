/*=============================================== Video types ===============================================*/

import type { HTMLAttributes, ElementType, VideoHTMLAttributes } from "react"

import type { ObjectFitTypes } from "../../types"

export interface VideoProps
    extends HTMLAttributes<HTMLVideoElement>,
        VideoHTMLAttributes<HTMLVideoElement> {
    as?: ElementType
    src: string
    width?: string | number
    height?: string | number
    fit?: ObjectFitTypes
    emptyText?: string
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
