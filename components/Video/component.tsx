/*=============================================== Video ===============================================*/

import React from "react"

import { VideoProps } from "./types"

const Vid = React.lazy(() => import("./styles"))

const Video = ({
    src,
    width = "100%",
    height = "auto",
    fit,
    aspectRatio,
    emptyText = "Your browser doesn't support the video tag.",
    autoPlay,
    muted,
    controls,
    ...props
}: VideoProps) => (
    <Vid
        $width={width}
        $height={height}
        $fit={fit}
        $aspectRatio={aspectRatio}
        autoPlay={autoPlay}
        muted={autoPlay ? true : autoPlay}
        controls={!autoPlay ? true : controls}
        {...props}
    >
        <source src={src} type="video/mp4" />

        {emptyText}
    </Vid>
)

export default Video
