/*=============================================== Video types ===============================================*/

import React from "react"
import { ObjectFitTypes } from "../../utils/common-types"

export interface VideoProps extends React.HTMLAttributes<HTMLVideoElement> {
    src: string
    width?: string | number
    height?: string | number

    options?: {
        fit?: ObjectFitTypes
        aspectRatio?: string
        emptyText?: string
        autoPlay?: boolean
        muted?: boolean
        controls?: boolean
    }
}
