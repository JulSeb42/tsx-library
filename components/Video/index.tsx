/*=============================================== Video ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import { ObjectFitTypes } from "../common-types"

const Vid = React.lazy(() => import("./Vid"))

/*==================== Component ====================*/

const Video = ({ src, width = "100%", height = "auto", options, ...props }: Props) => (
    <Vid
        $width={width}
        $height={height}
        $fit={options?.fit}
        $aspectRatio={options?.aspectRatio}
        autoPlay={options?.autoPlay}
        muted={options?.autoPlay ? true : options?.autoPlay}
        controls={!options?.autoPlay ? true : options?.controls}
        {...props}
    >
        <source src={src} type="video/mp4" />

        {options?.emptyText || "Your browser doesn't support the video tag."}
    </Vid>
)

export default Video

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLVideoElement> {
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
