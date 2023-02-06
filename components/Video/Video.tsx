/*=============================================== Video component ===============================================*/

import React, { forwardRef, Suspense } from "react"

import Fallback from "../Fallback"

import { VideoProps } from "./types"

const StyledVideo = React.lazy(() => import("./styles"))

const Video = forwardRef(
    (
        {
            as,
            src,
            width = "100%",
            height = "auto",
            fit,
            aspectRatio,
            emptyText = "Your browser doesn't support the video tag.",
            autoPlay,
            muted,
            controls,
            type = "video/mp4",
            ...rest
        }: VideoProps,
        ref?: React.ForwardedRef<HTMLVideoElement>
    ) => (
        <Suspense fallback={<Fallback $width={width} $height={height} />}>
            <StyledVideo
                ref={ref}
                as={as}
                $width={width}
                $height={height}
                $fit={fit}
                $aspectRatio={aspectRatio}
                autoPlay={autoPlay}
                muted={autoPlay ? true : autoPlay}
                controls={!autoPlay ? true : controls}
                {...rest}
            >
                <source src={src} type={type} />
                {emptyText}
            </StyledVideo>
        </Suspense>
    )
)

export default Video
