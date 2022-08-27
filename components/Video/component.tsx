/*=============================================== Video ===============================================*/

import React from "react"

import { VideoProps } from "./types"

const Vid = React.lazy(() => import("./styles"))

const Video = ({
    src,
    width = "100%",
    height = "auto",
    options,
    ...props
}: VideoProps) => (
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
