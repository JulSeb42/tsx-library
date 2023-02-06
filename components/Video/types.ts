/*=============================================== Video types ===============================================*/

import React from "react"

import { ObjectFitTypes } from "../../types"

export interface VideoProps extends React.HTMLAttributes<HTMLVideoElement> {
    as?: React.ElementType
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
